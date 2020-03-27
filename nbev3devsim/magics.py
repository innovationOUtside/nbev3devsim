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