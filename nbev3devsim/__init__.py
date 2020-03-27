"""nbev3devsim magics"""

from .magics import NbEv3DevSimMagic

def load_ipython_extension(ipython):
    ipython.register_magics(NbEv3DevSimMagic)
