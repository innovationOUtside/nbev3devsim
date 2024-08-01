"""Neural network tools"""

__version__ = "0.0.1"

def about():
    """Provide a simple description of the package."""
    msg ='''
# ===== nn_tools, version: {__version__} =====

The `nn_tools` package provides a range of tools for supporting neural network based activities in a Jupyter notebook.

You can test that key required packages are installed by running the command: nn_tools.test_install()
    '''
    print(msg)

def test_install(key_packages=None):
    """Test the install of key packages."""
    import importlib

    if key_packages is None:
        key_packages = ['pandas', 'sklearn', 'tflite_runtime']
    for p in key_packages:
        try:
            importlib.import_module(p.strip())
            print(f"{p} loaded correctly")
        except:
             print(f"{p} appears to be missing")