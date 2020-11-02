"""nbev3devsim magics"""


from .magics import NbEv3DevSimMagic


__version__ = "0.0.9"

def load_ipython_extension(ipython):
    ipython.register_magics(NbEv3DevSimMagic)

def about():
    """Provide a simple description of the package."""
    msg ='''
# ===== nbev3devsim, version: {__version__} =====

The `nbev3devsim` package loads a simple 2D robot simulator based on ev3devsim into a Jupyter notebook widget.

You can test that key required packages are installed by running the command: nbev3devsim.test_install()
    '''
    print(msg)

def test_install(key_packages=None):
    """Test the install of key packages."""
    import importlib

    if key_packages is None:
        key_packages = ['nn_tools', 'pandas', 'sklearn']
    for p in key_packages:
        try:
            importlib.import_module(p)
            print(f"{p} loaded correctly")
        except:
             print(f"{p} appears to be missing")