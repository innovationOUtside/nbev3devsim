from IPython.core.magic import magics_class, line_cell_magic, Magics
from IPython.core import magic_arguments
from IPython.display import Javascript, clear_output, display, HTML

# Note that we can access state on the simulator as per:
# sim.js_init("alert(sim.uiSettings.audio.enabled)")

from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import HtmlFormatter

import time
import random

import io
import sys
import subprocess
import tempfile
from contextlib import redirect_stdout

#from nbev3devsim.load_nbev3devwidget import eds
from nbev3devsim import ev3devsim_nb as eds
from nn_tools.sensor_data import generate_image, generate_bw_image
from nn_tools.sensor_data import get_sensor_image_pair


@magics_class
class NbEv3DevSimMagic(Magics):
    def __init__(self, shell, cache_display_data=False):
        super(NbEv3DevSimMagic, self).__init__(shell)

    def linter(self, cell):
        """Lint contents of code to be downloaded."""
        with tempfile.NamedTemporaryFile(mode="r+", delete=False) as f:
            f.write(cell)
            # Make sure the file is written
            f.flush()
            f.close()

        report = subprocess.getoutput(f"pyflakes {f.name}")
        if report:
            report = report.splitlines()
            display(report)

    def download_ping(self, sim):
        # display(
        #    Javascript(
        _js = """
      //https://stackoverflow.com/a/29373891/454773
      //var AudioContext = window.AudioContext // Default
      //  || window.webkitAudioContext // Safari and old versions of Chrome
      //  || false;
      //var context = new AudioContext();
      if (sim.uiSettings.audio.enabled) {
      var context = sim.audioCtx;
      var o = null;
      var g = null;
      function download_tone(duration=1.5, frequency=400, type='sin'){
          var o = context.createOscillator(); var g = context.createGain()
          o.frequency.value = frequency; o.type = type
          o.connect(g); g.connect(context.destination)
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + duration)
        }
        download_tone(1.5, 600);}"""
        self.shell.user_ns[sim].js_init(_js)
        #    )
        # )
        clear_output()

    # The focus is grabbed back to the cell after the run cell in the notebook
    # after the cell is run?
    # def give_focus_to_run(self):
    #    """Give tab focus to the simulator run button."""
    #    display(Javascript('document.getElementById("runCode").focus();'))

    def showHide(self, sim, arg, item):
        """Toggle diplay of an element."""
        _js = f"""
        if ({int(arg)}) document.getElementById("{item}").style.display = 'none';
        else document.getElementById("{item}").style.display = 'block';
        """
        self.shell.user_ns[sim].js_init(_js)

    def check_element(self, sim, arg, item):
        """Show a specified element."""
        _state = "true" if arg else "false"
        _selected = f"{item.replace('-', '')}Selector"
        _selector = f"#int--{item}"
        _js = f"""
        var {_selected} = document.querySelector("{_selector}");
        {_selected}.setAttribute('aria-checked', {_state});
        const toggleCheckEvent = new CustomEvent("x-switch:update");
        document.getElementById("{item}").dispatchEvent(toggleCheckEvent);
      """
        self.shell.user_ns[sim].js_init(_js)

    def updateCode(self, sim):
        # fire an event
        _js = 'document.getElementById("rs_code_updater").click()'
        self.shell.user_ns[sim].js_init(_js)

    def sliderUpdate(self, sim, arg, item, mover=False):
        """Update sliderVal component."""
        _slider = f"{item.replace('-', '')}Slider"
        _selector = f"{item}-slider"
        if arg is not None:
            self.shell.user_ns[sim].js_init(
                f"""
            const {_slider} = document.getElementById("{_selector}");
            {_slider}.value = {int(arg)};
            //console.debug("Magic slider update", "{_selector}", {int(arg)});
            const event = new Event('input');
            {_slider}.dispatchEvent(event);
            """
                # const event = new CustomEvent('value-slider:change', {{ detail: {{ value: {int(arg)} }} }});
            )

    def handle_args(self, args):
        """Handle arguments passed in via magic."""
        if args.robotSetup is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        var bgSelector = document.getElementById("robotPreconfig");
        bgSelector.value = "{args.robotSetup}";
        const event = new Event('change');
        bgSelector.dispatchEvent(event);
      """
            )

        if args.help:
            help = """
--- nbev3devsim magic - available switches ---

[Simulator keyboard shortcuts are identified in square brackets]

Boolean flags (no arguments):

--help / -h : display help
--autorun / -R  [R] : autorun simulator code
--stop / -S [S] : stop simulator code execution
--move / -m : move robot back to start
--pendown / -p [p] : set pen down
--clear / -C [C] : clear trace
--ultrasound / -u [U]: show ultrasound rays
--quiet / -q : no download audio confirmation
--collab / -L : collaboration mode

--world / -W [W] : hide world (default: displayed)
--hide / -H [H] : hide simulator controls (default: displayed)
--output / -O [O] : show output panel (default: hidden)
--settings / -Z [Z] : show settings/ config controls (default: hidden)
--instrumentation / -i [i] : show sensor value controls (default: hidden)
--array / -A [A] : show sensor array panel (default: hidden)
--noisecontrols / -z [z] : show noise controls (default: hidden)
--positioning / -X [X] : show positioning controls  (default: hidden)
--chart / -c [c] : show chart panel (default: hidden)
--code / -D [D] : show code panel (default: hidden)

Parameters requiring an argument:

--xpos / -x : x co-ord 
--ypos / -y : y co-ord
--angle / -a : angle

--background / -b : background selection
--pencolor / -P : set pen color
--sensornoise / -N sensor noise (0..128)
--motornoise / -M : motor noise (0..500)
--sim / -s : simulator object (default: roboSim)
--robotSetup / -r : robot config selection
--obstacles / -o : obstacles config


            """
            print(help)

        if args.background is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        var bgSelector = document.getElementById("map");
        bgSelector.value = "{args.background}";
        var event = new Event('change');
        bgSelector.dispatchEvent(event);
      """
            )

        if args.obstacles is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
      var oSelector = document.getElementById("obstaclesPreset");
      oSelector.value = "{args.obstacles}";
      var event = new Event('change');
      oSelector.dispatchEvent(event);
      document.getElementById("obstaclesConfiguratorApply").click();
      """
            )

        self.sliderUpdate(args.sim, args.xpos, "rs-display-xPos", mover=True)
        self.sliderUpdate(args.sim, args.ypos, "rs-display-yPos", mover=True)
        self.sliderUpdate(args.sim, args.angle, "rs-display-angle", mover=True)
        self.sliderUpdate(args.sim, args.sensornoise, "rs-display-lightSensorNoise")
        self.sliderUpdate(args.sim, args.motornoise, "rs-display-wheelNoise")

        '''
        if args.xpos is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        document.getElementById('rs-display-xPos').value = {args.xpos};
        document.getElementById('resetReset').click();
        document.getElementById('reset').click();
        //document.getElementById('move').click();
        var event = new Event('click');
        document.getElementById('move').dispatchEvent(event);
      """
            )
        if args.ypos is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        document.getElementById('rs-display-yPos').value = {args.ypos};
        document.getElementById('resetReset').click();
        document.getElementById('reset').click();
        document.getElementById('move').click();
      """
            )
        if args.angle is not None:
            _js = f"""
        document.getElementById('rs-display-angle').value = {args.angle};
        document.getElementById('resetReset').click();
        document.getElementById('reset').click();
        document.getElementById('move').click();
      """
            self.shell.user_ns[args.sim].js_init(_js)

        if args.sensornoise is not None and int(args.sensornoise) <= 128:
            self.shell.user_ns[args.sim].js_init(
                f"""
        var magic_sensorNoise = document.getElementById("rs-display-lightSensorNoiseSlider");
        magic_sensorNoise.value = "{int(args.sensornoise)}";
        var magic_event = new Event('input');
        magic_sensorNoise.dispatchEvent(magic_event);
      """
            )

        if args.motornoise is not None and int(args.motornoise) <= 500:
            self.shell.user_ns[args.sim].js_init(
                f"""
        var magic_motorNoise = document.getElementById("rs-display-wheelNoiseSlider");
        magic_motorNoise.value = "{int(args.motornoise)}";
        var magic_event = new Event('input');
        magic_motorNoise.dispatchEvent(magic_event);
      """
            )
        '''

        if args.ultrasound:
            _js = f"""
        var raySelector = document.getElementById('showRays');
        raySelector.checked = false;
        // The click toggles the status which is why we previously set it false
        raySelector.click();
      """
            self.shell.user_ns[args.sim].js_init(_js)

        if args.pencolor is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        var magic_penSelector = document.getElementById("rs-display-penColor");
        magic_penSelector.value = "{args.pencolor}";
        var magic_event = new Event('change');
        magic_penSelector.dispatchEvent(magic_event);
      """
            )

        if args.clear:
            _js = "document.getElementById('clearTrace').click();"
            self.shell.user_ns[args.sim].js_init(_js)

        self.check_element(args.sim, args.chart, "roboSim-display-chart")
        self.check_element(args.sim, args.pendown, "roboSim-pen-updown")
        self.check_element(args.sim, args.output, "roboSim-display-output")
        self.check_element(args.sim, args.array, "roboSim-display-sensor-array")
        self.check_element(
            args.sim, args.instrumentation, "roboSim-display-instrumentation"
        )
        self.check_element(args.sim, args.world, "roboSim-display-world")
        self.check_element(
            args.sim, args.noisecontrols, "roboSim-display-noise-controls"
        )
        self.check_element(args.sim, args.settings, "roboSim-display-config-controls")
        self.check_element(args.sim, args.hide, "roboSim-display-sim-controls")
        self.check_element(args.sim, args.positioning, "roboSim-display-positioning")
        self.check_element(args.sim, args.code, "roboSim-display-code")
        self.check_element(args.sim, args.collab, "roboSim-state-collaborative")

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument(
        "--background", "-b", default=None, help="Background selection"
    )
    @magic_arguments.argument(
        "--robotSetup", "-r", default=None, help="Robot config selection"
    )
    @magic_arguments.argument(
        "--obstacles", "-o", default=None, help="Obstacles config"
    )
    @magic_arguments.argument("--xpos", "-x", default=None, help="x co-ord config")
    @magic_arguments.argument("--ypos", "-y", default=None, help="y co-ord config")
    @magic_arguments.argument("--angle", "-a", default=None, help="Angle config")
    @magic_arguments.argument(
        "--ultrasound", "-u", action="store_true", help="Show ultrasound rays"
    )
    @magic_arguments.argument(
        "--pendown", "-p", action="store_true", help="Set pen down"
    )
    @magic_arguments.argument("--pencolor", "-P", default=None, help="Set pen color")
    @magic_arguments.argument("--clear", "-C", action="store_true", help="Clear trace")
    @magic_arguments.argument(
        "--quiet", "-q", action="store_true", help="No audio confirmation"
    )
    @magic_arguments.argument("--chart", "-c", action="store_true", help="Show chart")
    @magic_arguments.argument("--output", "-O", action="store_true", help="Show output")
    @magic_arguments.argument(
        "--array", "-A", action="store_true", help="Show sensor array"
    )
    @magic_arguments.argument(
        "--noisecontrols", "-z", action="store_true", help="Show noise controls"
    )
    @magic_arguments.argument(
        "--settings", "-Z", action="store_true", help="Show config controls"
    )
    @magic_arguments.argument(
        "--positioning", "-X", action="store_true", help="Show positioning controls"
    )
    @magic_arguments.argument("--code", "-D", action="store_true", help="Show code")
    @magic_arguments.argument("--world", "-W", action="store_false", help="Hide world")
    @magic_arguments.argument(
        "--hide", "-H", action="store_false", help="Hide simulator controls"
    )
    @magic_arguments.argument(
        "--instrumentation", "-i", action="store_true", help="Show sensor values"
    )
    @magic_arguments.argument(
        "--autorun", "-R", action="store_true", help="Autorun simulator code"
    )
    @magic_arguments.argument(
        "--preview", "-v", action="store_true", help="Preview preloaded code"
    )
    @magic_arguments.argument(
        "--stop", "-S", action="store_false", help="Stop simulator code execution"
    )
    @magic_arguments.argument(
        "--move", "-m", action="store_true", help="Move robot back to start"
    )
    @magic_arguments.argument(
        "--sensornoise", "-N", default=None, help="Sensor noise, 0..128"
    )
    @magic_arguments.argument(
        "--motornoise", "-M", default=None, help="Motor noise, 0..500"
    )
    @magic_arguments.argument(
        "--refresh", "-F", action="store_true", help="Refresh (used in collab mode)."
    )
    @magic_arguments.argument( "--collab", "-L", action="store_true", help="Collaboration mode.")
    def sim_magic(self, line, cell=None):
        "Send code to simulator."
        args = magic_arguments.parse_argstring(self.sim_magic, line)

        if args.refresh:
            self.shell.user_ns[args.sim].set_element("prog", "print('Colab reset executed.')")
            self.check_element(args.sim, True, "roboSim-display-runstop")
            self.download_ping(args.sim)
            return

        try:
            if cell is not None:
                self.shell.user_ns[args.sim].set_element("prog", cell)
                self.updateCode(args.sim)
            self.handle_args(args)
        except:
            print(f"There seems to be a problem... Is {args.sim} defined?")
            return
        if not args.quiet and cell is not None:
            self.download_ping(args.sim)

        # if cell is not None:
        #    self.give_focus_to_run()

        if args.move:
            _js = "document.getElementById('move').click();"
            self.shell.user_ns[args.sim].js_init(_js)

        if args.autorun:
            self.check_element(args.sim, args.autorun, "roboSim-display-runstop")

        # if args.stop:
        #    self.check_element(args.sim, args.stop, "roboSim-display-runstop")

        if args.preview:
            # print(cell)
            display(HTML(highlight(cell, PythonLexer(), HtmlFormatter())))

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument(
        "--background", "-b", default=None, help="Background selection"
    )
    @magic_arguments.argument(
        "--robotSetup", "-r", default=None, help="Robot config selection"
    )
    @magic_arguments.argument(
        "--obstacles", "-o", default=None, help="Obstacles config"
    )
    @magic_arguments.argument("--xpos", "-x", default=None, help="x co-ord config")
    @magic_arguments.argument("--ypos", "-y", default=None, help="y co-ord config")
    @magic_arguments.argument("--angle", "-a", default=None, help="Angle config")
    @magic_arguments.argument(
        "--ultrasound", "-u", action="store_true", help="Show ultrasound rays"
    )
    @magic_arguments.argument(
        "--pendown", "-p", action="store_true", help="Set pen down"
    )
    @magic_arguments.argument("--pencolor", "-P", default=None, help="Set pen color")
    @magic_arguments.argument("--clear", "-C", action="store_true", help="Clear trace")
    @magic_arguments.argument(
        "--quiet", "-q", action="store_true", help="No audio confirmation"
    )
    @magic_arguments.argument("--chart", "-c", action="store_true", help="Show chart")
    @magic_arguments.argument("--output", "-O", action="store_true", help="Show output")
    @magic_arguments.argument(
        "--array", "-A", action="store_true", help="Show sensor array"
    )
    @magic_arguments.argument(
        "--noisecontrols", "-z", action="store_true", help="Show noise controls"
    )
    @magic_arguments.argument(
        "--settings", "-Z", action="store_true", help="Show config controls"
    )
    @magic_arguments.argument(
        "--positioning", "-X", action="store_true", help="Show positioning controls"
    )
    @magic_arguments.argument("--code", "-D", action="store_true", help="Show code")
    @magic_arguments.argument("--world", "-W", action="store_false", help="Hide world")
    @magic_arguments.argument(
        "--hide", "-H", action="store_false", help="Hide simulator controls"
    )
    @magic_arguments.argument(
        "--instrumentation", "-i", action="store_true", help="Show sensor values"
    )
    @magic_arguments.argument(
        "--autorun", "-R", action="store_true", help="Autorun simulator code"
    )
    @magic_arguments.argument(
        "--preview", "-v", action="store_true", help="Preview preloaded code"
    )
    @magic_arguments.argument(
        "--sensornoise", "-N", default=None, help="Sensor noise, 0..128"
    )
    @magic_arguments.argument(
        "--motornoise", "-M", default=None, help="Motor noise, 0..500"
    )
    @magic_arguments.argument(
        "--previewcode", action="store_true", help="Return preloaded code"
    )
    @magic_arguments.argument( "--collab", "-L", action="store_true", help="Collaboration mode.")
    def sim_magic_imports(self, line, cell=None):
        "Send code to simulator with imports and common definitions."
        args = magic_arguments.parse_argstring(self.sim_magic_imports, line)
        preload = """#---- sim_magic_imports BOILERPLATE ----

from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
from ev3dev2.sound import Sound

from ev3dev2_glue import get_clock

#----- YOUR CODE BELOW HERE -----

"""
        if args.previewcode:
            return preload
        elif not cell and not args.preview:
            return
        elif args.preview and cell is None:
            # print(preload)
            display(HTML(highlight(preload, PythonLexer(), HtmlFormatter())))
            return
        try:
            cell = preload + cell
            self.shell.user_ns[args.sim].set_element("prog", cell)
            self.updateCode(args.sim)
            self.handle_args(args)
        except:
            print(f"There seems to be a problem... Is {args.sim} defined?")
            return
        if not args.quiet:
            self.download_ping(args.sim)

        # self.give_focus_to_run()
        if args.autorun:
            self.check_element(args.sim, args.autorun, "roboSim-display-runstop")

        if args.preview:
            # print(cell)
            display(HTML(highlight(cell, PythonLexer(), HtmlFormatter())))

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument(
        "--background", "-b", default=None, help="Background selection"
    )
    @magic_arguments.argument(
        "--robotSetup", "-r", default=None, help="Robot config selection"
    )
    @magic_arguments.argument(
        "--obstacles", "-o", default=None, help="Obstacles config"
    )
    @magic_arguments.argument("--xpos", "-x", default=None, help="x co-ord config")
    @magic_arguments.argument("--ypos", "-y", default=None, help="y co-ord config")
    @magic_arguments.argument("--angle", "-a", default=None, help="Angle config")
    @magic_arguments.argument(
        "--ultrasound", "-u", action="store_true", help="Show ultrasound rays"
    )
    @magic_arguments.argument(
        "--pendown", "-p", action="store_true", help="Set pen down"
    )
    @magic_arguments.argument("--pencolor", "-P", default=None, help="Set pen color")
    @magic_arguments.argument("--clear", "-C", action="store_true", help="Clear trace")
    @magic_arguments.argument(
        "--quiet", "-q", action="store_true", help="No audio confirmation"
    )
    @magic_arguments.argument("--chart", "-c", action="store_true", help="Show chart")
    @magic_arguments.argument("--output", "-O", action="store_true", help="Show output")
    @magic_arguments.argument(
        "--array", "-A", action="store_true", help="Show sensor array"
    )
    @magic_arguments.argument(
        "--noisecontrols", "-z", action="store_true", help="Show noise controls"
    )
    @magic_arguments.argument(
        "--settings", "-Z", action="store_true", help="Show config controls"
    )
    @magic_arguments.argument(
        "--positioning", "-X", action="store_true", help="Show positioning controls"
    )
    @magic_arguments.argument("--code", "-D", action="store_true", help="Show code")
    @magic_arguments.argument("--world", "-W", action="store_false", help="Hide world")
    @magic_arguments.argument(
        "--hide", "-H", action="store_false", help="Hide simulator controls"
    )
    @magic_arguments.argument(
        "--instrumentation", "-i", action="store_true", help="Show sensor values"
    )
    @magic_arguments.argument(
        "--autorun", "-R", action="store_true", help="Autorun simulator code"
    )
    @magic_arguments.argument(
        "--preview", "-v", action="store_true", help="Preview preloaded code"
    )
    @magic_arguments.argument(
        "--sensornoise", "-N", default=None, help="Sensor noise, 0..128"
    )
    @magic_arguments.argument(
        "--motornoise", "-M", default=None, help="Motor noise, 0..500"
    )
    @magic_arguments.argument(
        "--previewcode", action="store_true", help="Return preloaded code"
    )
    @magic_arguments.argument( "--collab", "-L", action="store_true", help="Collaboration mode.")
    def sim_magic_preloaded(self, line, cell=None):
        "Send code to simulator with imports and common definitions."
        args = magic_arguments.parse_argstring(self.sim_magic_preloaded, line)
        preload = '''#---- sim_magic_preloaded BOILERPLATE ----

from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
from ev3dev2.sound import Sound

from ev3dev2_glue import get_clock

speaker = Sound()
def say(txt, wait=False, show=True):
    """Say and optionally show a phrase."""
    if show:
        print(txt)
    # `wait` controls blocking behaviour
    speaker.speak(txt, play_type=int(not wait))

tank_turn = MoveSteering(OUTPUT_B, OUTPUT_C)
tank_drive = MoveTank(OUTPUT_B, OUTPUT_C)

ultrasonic = UltrasonicSensor(INPUT_1)
colorLeft = ColorSensor(INPUT_2)
colorRight = ColorSensor(INPUT_3)
gyro = GyroSensor(INPUT_4)

# ----- YOUR CODE BELOW HERE -----

'''
        if args.previewcode:
            return preload
        elif not cell and not args.preview:
            return
        elif args.preview and cell is None:
            # print(preload)
            display(HTML(highlight(preload, PythonLexer(), HtmlFormatter())))
            return

        try:
            cell = preload + cell
            # self.linter(cell)
            self.handle_args(args)

            # TO DO - support robot config; need to dispatch event and redraw;
            # Also need to respect bg image default co-ords;

            self.shell.user_ns[args.sim].set_element("prog", cell)
            self.updateCode(args.sim)

            # The following fragment is an example of how to
            # get a confirmatory beep after downloading code to the simulator
            # However, if we copy and paste the cell that has been run
            # the javascript ping will also be replayed unless we clear it?
            display(Javascript('console.log("here")'))
            if not args.quiet:
                self.download_ping(args.sim)

            # self.give_focus_to_run()
            if args.autorun:
                self.check_element(args.sim, args.autorun, "roboSim-display-runstop")

            if args.preview:
                # print(cell)
                display(HTML(highlight(cell, PythonLexer(), HtmlFormatter())))

        except:

            print(f"There seems to be a problem... Is {args.sim} defined?")
            return

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument(
        "--clear", "-c", action="store_true", help="Clear data log."
    )
    def sim_data(self, line, cell=None):
        """Return data from simulator datalog as a pandas dataframe."""
        args = magic_arguments.parse_argstring(self.sim_data, line)
        if args.help:

            help = """
            Return simulator datalog as a dataframe.

            --clear / -c : clear data log
            """
            print(help)
            return

        if args.clear:
            self.shell.user_ns[args.sim].clear_datalog()
            return

        # Grab the logged data into a pandas dataframe
        data = self.shell.user_ns[args.sim].results_log

        # Create and return a tabular dataframe from the data
        return eds.get_dataframe_from_datalog(data)

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument(
        "--clear", "-c", action="store_true", help="Clear data log."
    )
    def sim_robot_state(self, line, cell=None):
        """Return robot state data."""
        args = magic_arguments.parse_argstring(self.sim_robot_state, line)
        if args.help:

            help = """
            Return robot state data from the simulator.

            """
            print(help)
            return

        robotState = eds.RobotState(self.shell.user_ns[args.sim])
        robotState.update()
        return robotState

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument(
        "--digitclass", "-d", action="store_true", help="Return digit class."
    )
    @magic_arguments.argument("--index", "-i", default=-1, help="Index")
    @magic_arguments.argument("--threshold", "-t", default=127, help="Threshold (default 127)")
    @magic_arguments.argument("--crop", "-c", default=None, help="Crop coords: x1,y1,x2,y2")
    @magic_arguments.argument("--nocrop", "-n", action="store_true", help="Simulator object.")
    @magic_arguments.argument("--random", "-r", action="store_true", help="Return random image.")
    def sim_bw_image_data(self, line, cell=None):
        """"Get image data."""
        args = magic_arguments.parse_argstring(self.sim_bw_image_data, line)
        if args.help:

            help = """
            Return robot image data from the simulator.

            """
            print(help)
            return
        _crop = None
        if args.crop:
            _c = args.crop.split(",")
            if len(_c) == 4:
                _crop = tuple([int(i) for i in _c])
        elif not args.nocrop:
            _crop = (3, 3, 17, 17)
        image_data_df = self.shell.user_ns[args.sim].image_data()

        index = int(args.index) if not args.random else random.randint(0, len(image_data_df))
        # Generate a black and white image
        return generate_bw_image(
            image_data_df, index, threshold = int(args.threshold), crop=_crop
        )

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument("--help", "-h", action="store_true", help="Display help.")
    @magic_arguments.argument("--pairindex", "-p", default=-1, help="Pair index.")
    def sim_image_pair(self, line, cell=None):
        """Return an image pair."""
        args = magic_arguments.parse_argstring(self.sim_image_pair, line)
        if args.help:

            help = """
            Return a pair of images from the simulator.

            """
            print(help)
            return

        image_data_df = self.shell.user_ns[args.sim].image_data()
        return get_sensor_image_pair(image_data_df, int(args.pairindex))
        