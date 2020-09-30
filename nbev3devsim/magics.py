from IPython.core.magic import magics_class, line_cell_magic, Magics
from IPython.core import magic_arguments
from IPython.display import Javascript, clear_output, display

import time

import io
import sys
import subprocess
import tempfile
from contextlib import redirect_stdout


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

    def download_ping(self):
        display(
            Javascript(
                """
      //https://stackoverflow.com/a/29373891/454773
      //var AudioContext = window.AudioContext // Default
      //  || window.webkitAudioContext // Safari and old versions of Chrome
      //  || false;
      var context = new AudioContext();
      var o = null;
      var g = null;
      function bright_sound(type="square", x=1.5) {
    o = context.createOscillator()
    g = context.createGain()
    o.connect(g)
    o.type = type
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + x)
};
bright_sound('square', 1.5);"""
            )
        )
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
            #const event = new CustomEvent('value-slider:change', {{ detail: {{ value: {int(arg)} }} }});
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

Boolean flags (no arguments):

--help / -h : display help
--autorun / -R : autorun simulator code
--stop / -S : stop simulator code execution
--move / -m : move robot back to start
--pendown / -p : set pen down
--clear / -C : clear trace
--ultrasound / -u : show ultrasound rays
--quiet / -q : no download audio confirmation

--world / -W : hide world (default: displayed)
--hide / -H : hide simulator controls (default: displayed)
--output / -O : show output panel (default: hidden)
--settings / -Z : show settings/ config controls (default: hidden)
--instrumentation / -i : show sensor value controls (default: hidden)
--array / -A : show sensor array panel (default: hidden)
--noisecontrols / -z : show noise controls (default: hidden)
--positioning / -X : show positioning controls  (default: hidden)
--chart / -c : show chart panel (default: hidden)

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
        self.sliderUpdate(
            args.sim, args.sensornoise, "rs-display-lightSensorNoise"
        )
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

        self.check_element(args.sim, args.pendown, "roboSim-pen-updown")

        self.check_element(args.sim, args.output, "roboSim-display-output")
        self.check_element(args.sim, args.chart, "roboSim-display-chart")
        self.check_element(args.sim, args.array, "roboSim-display-sensor-array")
        self.check_element(args.sim, args.instrumentation, "roboSim-display-instrumentation")
        self.check_element(args.sim, args.world, "roboSim-display-world")
        self.check_element(args.sim, args.noisecontrols, "roboSim-display-noise-controls")
        self.check_element(args.sim, args.settings, "roboSim-display-config-controls")
        self.check_element(args.sim, args.hide, "roboSim-display-sim-controls")
        self.check_element(args.sim, args.positioning, "roboSim-display-positioning")
        self.check_element(args.sim, args.code, "roboSim-display-code")


    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument( "--help", "-h", action="store_true", help="Display help.")
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
    @magic_arguments.argument("--noisecontrols", "-z", action="store_true", help="Show noise controls")
    @magic_arguments.argument("--settings", "-Z", action="store_true", help="Show config controls")
    @magic_arguments.argument("--positioning", "-X", action="store_true", help="Show positioning controls")
    @magic_arguments.argument("--code", "-D", action="store_true", help="Show code")
    @magic_arguments.argument("--world", "-W", action="store_false", help="Hide world")
    @magic_arguments.argument("--hide", "-H", action="store_false", help="Hide simulator controls")
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
        "--stop", "-S", action="store_true", help="Stop simulator code execution"
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
    def sim_magic(self, line, cell=None):
        "Send code to simulator."
        args = magic_arguments.parse_argstring(self.sim_magic, line)

        try:
            if cell is not None:
                self.shell.user_ns[args.sim].set_element("prog", cell)
                self.updateCode(args.sim)
            self.handle_args(args)
        except:
            print(f"There seems to be a problem... Is {args.sim} defined?")
            return
        if not args.quiet and cell is not None:
            self.download_ping()

        # if cell is not None:
        #    self.give_focus_to_run()

        if args.move:
            _js = "document.getElementById('move').click();"
            self.shell.user_ns[args.sim].js_init(_js)

        if args.autorun:
            self.check_element(args.sim, args.autorun, "roboSim-display-runstop")

        if args.stop:
            _js = "document.getElementById('stop').click();"
            self.shell.user_ns[args.sim].js_init(_js)


    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument( "--help", "-h", action="store_true", help="Display help.")
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
    @magic_arguments.argument("--noisecontrols", "-z", action="store_true", help="Show noise controls")
    @magic_arguments.argument("--settings", "-Z", action="store_true", help="Show config controls")
    @magic_arguments.argument("--positioning", "-X", action="store_true", help="Show positioning controls")
    @magic_arguments.argument("--code", "-D", action="store_true", help="Show code")
    @magic_arguments.argument("--world", "-W", action="store_false", help="Hide world")
    @magic_arguments.argument("--hide", "-H", action="store_false", help="Hide simulator controls")
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
    def sim_magic_imports(self, line, cell=None):
        "Send code to simulator with imports and common definitions."
        args = magic_arguments.parse_argstring(self.sim_magic_imports, line)
        preload = """#---- BOILERPLATE CODE LOADED BY sim_magic_imports ----

from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
from ev3dev2.sound import Sound

#----- YOUR CODE BELOW HERE -----

"""
        if not cell:
            return
        elif args.preview and cell is None:
            print(preload)
            return
        try:
            cell = preload + cell
            if args.preview:
                print(cell)
            self.shell.user_ns[args.sim].set_element("prog", cell)
            self.updateCode(args.sim)
            self.handle_args(args)
        except:
            print(f"There seems to be a problem... Is {args.sim} defined?")
            return
        if not args.quiet:
            self.download_ping()

        # self.give_focus_to_run()
        if args.autorun:
            self.check_element(args.sim, args.autorun, "roboSim-display-runstop")

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
    @magic_arguments.argument( "--help", "-h", action="store_true", help="Display help.")
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
    @magic_arguments.argument("--noisecontrols", "-z", action="store_true", help="Show noise controls")
    @magic_arguments.argument("--settings", "-Z", action="store_true", help="Show config controls")
    @magic_arguments.argument("--positioning", "-X", action="store_true", help="Show positioning controls")
    @magic_arguments.argument("--code", "-D", action="store_true", help="Show code")
    @magic_arguments.argument("--world", "-W", action="store_false", help="Hide world")
    @magic_arguments.argument("--hide", "-H", action="store_false", help="Hide simulator controls")
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
    def sim_magic_preloaded(self, line, cell=None):
        "Send code to simulator with imports and common definitions."
        args = magic_arguments.parse_argstring(self.sim_magic_preloaded, line)
        preload = '''#---- BOILERPLATE CODE LOADED BY sim_magic_preloaded ----

from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
from ev3dev2.sound import Sound

speaker = Sound()
def say(txt):
    """Say a phrase without blocking code execution."""
    speaker.speak(txt, play_type=1)

tank_turn = MoveSteering(OUTPUT_B, OUTPUT_C)
tank_drive = MoveTank(OUTPUT_B, OUTPUT_C)

ultrasonic = UltrasonicSensor(INPUT_1)
colorLeft = ColorSensor(INPUT_2)
colorRight = ColorSensor(INPUT_3)
gyro = GyroSensor(INPUT_4)

# ----- YOUR CODE BELOW HERE -----

'''
        if not cell:
            return
        elif args.preview and cell is None:
            print(preload)
            return

        try:
            cell = preload + cell
            # self.linter(cell)
            if args.preview:
                print(cell)
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
                self.download_ping()

            # self.give_focus_to_run()
            if args.autorun:
                self.check_element(args.sim, args.autorun, "roboSim-display-runstop")

        except:

            print(f"There seems to be a problem... Is {args.sim} defined?")
            return

