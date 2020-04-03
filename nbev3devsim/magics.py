from IPython.core.magic import (magics_class, line_cell_magic, Magics)

@magics_class
class NbEv3DevSimMagic(Magics):
  def __init__(self, shell, cache_display_data=False):
    super(NbEv3DevSimMagic, self).__init__(shell)

  @line_cell_magic
  def sim_magic(self, line, cell):
    "Send code to simulator."
    try:
      self.shell.user_ns[line].set_element("prog", cell)
    except:
      print(f'Is {line} defined?')

  @line_cell_magic
  def sim_magic_imports(self, line, cell):
    "Send code to simulator with imports and common definitions."
    preload='''
from ev3dev2.motor import MoveTank, MoveSteering, SpeedPercent, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor
'''
    try:
      cell = preload + cell
      self.shell.user_ns[line].set_element("prog", cell)
    except:
      print(f'Is {line} defined?')

  @line_cell_magic
  def sim_magic_preloaded(self, line, cell):
    "Send code to simulator with imports and common definitions."
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
      self.shell.user_ns[line].set_element("prog", cell)
    except:
      print(f'Is {line} defined?')