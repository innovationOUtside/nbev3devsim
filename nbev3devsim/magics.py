from IPython.core.magic import (magics_class, line_cell_magic, Magics)
from IPython.core import magic_arguments
from IPython.display import Javascript, clear_output

import time

@magics_class
class NbEv3DevSimMagic(Magics):
  def __init__(self, shell, cache_display_data=False):
    super(NbEv3DevSimMagic, self).__init__(shell)

  @line_cell_magic
  @magic_arguments.magic_arguments()
  @magic_arguments.argument('--sim', '-s', default='roboSim',
     help='Simulator object.'
    )
  def sim_magic(self, line, cell):
    "Send code to simulator."
    args = magic_arguments.parse_argstring(self.sim_magic, line)
    try:
      self.shell.user_ns[args.sim].set_element("prog", cell)
    except:
      print(f'Is {args.sim} defined?')

  @line_cell_magic
  @magic_arguments.magic_arguments()
  @magic_arguments.argument('--sim', '-s', default='roboSim',
     help='Simulator object.'
    )
  def sim_magic_imports(self, line, cell):
    "Send code to simulator with imports and common definitions."
    preload='''
from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
'''
    try:
      cell = preload + cell
      self.shell.user_ns[args.sim].set_element("prog", cell)
    except:
      print(f'Is {args.sim} defined?')

  @line_cell_magic
  @magic_arguments.magic_arguments()
  @magic_arguments.argument('--sim', '-s', default='roboSim',
     help='Simulator object.'
    )
  def sim_magic_preloaded(self, line, cell):
    "Send code to simulator with imports and common definitions."
    args = magic_arguments.parse_argstring(self.sim_magic, line)
    preload='''
from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor

tank_turn = MoveSteering(OUTPUT_B, OUTPUT_C)
tank_drive = MoveTank(OUTPUT_B, OUTPUT_C)

ultrasonic = UltrasonicSensor(INPUT_1)
colorLeft = ColorSensor(INPUT_2)
colorRight = ColorSensor(INPUT_3)
gyro = GyroSensor(INPUT_4)
'''
    try:
      cell = preload + cell
      self.shell.user_ns[args.sim].set_element("prog", cell)

      # The following fragment is an example of how to 
      # get a confirmatory beep after downloading code to the simulator
      # However, if we copy and paste the cell that has been run
      # the javascript ping will also be replayed unless we clear it?
      display(Javascript('console.log("here")'))
      display(Javascript('''var context = new AudioContext();
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
bright_sound('square', 1.5);'''))
      clear_output()
    except:

      print(f'Is {args.sim} defined?')