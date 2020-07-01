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
                """var context = new AudioContext();
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

    def handle_args(self, args):
        """Handle arguments passed in via magic."""
        if args.robotSetup is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        var bgSelector = document.getElementById("robotPreconfig");
        bgSelector.value = "{args.robotSetup}";
        var event = new Event('change');
        bgSelector.dispatchEvent(event);
      """
            )

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

        if args.xpos is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        document.getElementById('xPos').value = {args.xpos};
        document.getElementById('resetReset').click();
        document.getElementById('reset').click();
        document.getElementById('move').click();
      """
            )
        if args.ypos is not None:
            self.shell.user_ns[args.sim].js_init(
                f"""
        document.getElementById('yPos').value = {args.ypos};
        document.getElementById('resetReset').click();
        document.getElementById('reset').click();
        document.getElementById('move').click();
      """
            )
        if args.angle is not None:
            _js = f"""
        document.getElementById('angle').value = {args.angle};
        document.getElementById('resetReset').click();
        document.getElementById('reset').click();
        document.getElementById('move').click();
      """
            self.shell.user_ns[args.sim].js_init(_js)

        if args.ultrasound:
            _js = f"""
        var raySelector = document.getElementById('showRays');
        raySelector.checked = false;
        // The click toggles the status which is why we previously set it false
        raySelector.click();
      """
            self.shell.user_ns[args.sim].js_init(_js)

        # TO DO: pull this out into a reusable function, eg to apply to chart too?
        if args.pendown:
            _penDown = "true"
        else:
            # Use pen up as a forced default...
            _penDown = "false"

        _js = f"""
        var penSelector = document.getElementById('penDown');
        penSelector.checked = {_penDown};
        var event = new Event('change');
        penSelector.dispatchEvent(event);
      """
        self.shell.user_ns[args.sim].js_init(_js)

        if args.chart:
            _chart = "true"
        else:
            _chart = "false"

        _js = f"""
        var chartSelector = document.getElementById('showChart');
        chartSelector.checked = {_chart};
        var event = new Event('change');
        chartSelector.dispatchEvent(event);
      """
        self.shell.user_ns[args.sim].js_init(_js)

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
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
    @magic_arguments.argument(
        "--quiet", "-q", action="store_true", help="No audio confirmation"
    )
    @magic_arguments.argument("--chart", "-c", action="store_true", help="Show chart")
    def sim_magic(self, line, cell=None):
        "Send code to simulator."
        args = magic_arguments.parse_argstring(self.sim_magic, line)

        try:
            if cell is not None:
                self.shell.user_ns[args.sim].set_element("prog", cell)
            self.handle_args(args)
        except:
            print(f"Is {args.sim} defined?")
            return
        if not args.quiet:
            self.download_ping()

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
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
    @magic_arguments.argument(
        "--quiet", "-q", action="store_true", help="No audio confirmation"
    )
    @magic_arguments.argument("--chart", "-c", action="store_true", help="Show chart")
    def sim_magic_imports(self, line, cell):
        "Send code to simulator with imports and common definitions."
        args = magic_arguments.parse_argstring(self.sim_magic_imports, line)
        preload = """
from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
"""
        try:
            cell = preload + cell
            self.shell.user_ns[args.sim].set_element("prog", cell)
            self.handle_args(args)
        except:
            print(f"Is {args.sim} defined?")
            return
        if not args.quiet:
            self.download_ping()

    @line_cell_magic
    @magic_arguments.magic_arguments()
    @magic_arguments.argument(
        "--sim", "-s", default="roboSim", help="Simulator object."
    )
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
    @magic_arguments.argument(
        "--quiet", "-q", action="store_true", help="No audio confirmation"
    )
    @magic_arguments.argument("--chart", "-c", action="store_true", help="Show chart")
    def sim_magic_preloaded(self, line, cell):
        "Send code to simulator with imports and common definitions."
        args = magic_arguments.parse_argstring(self.sim_magic_preloaded, line)
        preload = """
from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor

tank_turn = MoveSteering(OUTPUT_B, OUTPUT_C)
tank_drive = MoveTank(OUTPUT_B, OUTPUT_C)

ultrasonic = UltrasonicSensor(INPUT_1)
colorLeft = ColorSensor(INPUT_2)
colorRight = ColorSensor(INPUT_3)
gyro = GyroSensor(INPUT_4)
"""
        try:
            cell = preload + cell
            # self.linter(cell)

            self.handle_args(args)

            # TO DO - support robot config; need to dispatch event and redraw;
            # Also need to respect bg image default co-ords;

            self.shell.user_ns[args.sim].set_element("prog", cell)

            # The following fragment is an example of how to
            # get a confirmatory beep after downloading code to the simulator
            # However, if we copy and paste the cell that has been run
            # the javascript ping will also be replayed unless we clear it?
            display(Javascript('console.log("here")'))
            if not args.quiet:
                self.download_ping()

        except:

            print(f"Is {args.sim} defined?")
            return

