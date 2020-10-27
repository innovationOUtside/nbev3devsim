from setuptools import setup

setup(
    name="nbev3devsim",
    author='Tony Hirst',
    author_email='tony.hirst@open.ac.uk',
    url='https://github.com/innovationOUtside/innovationOUtside/nbev3devsim',
    description='nbevdevsim - ev3devsim extension for Jupyter notebooks',
    long_description='',
    license='MIT License',
    packages=['nbev3devsim', 'nb_cell_tools', 'nn_tools'],
    version='0.0.5',
    include_package_data=True,
    package_data = {
        'nbev3devsim' : ['progs/*.py', 'js/*.js', 'css/*.css', 'backgrounds/*', 'templates/*']},
    install_requires=[
        'jp_proxy_widget',
        'nest_asyncio',
        'pandas',
        'seaborn',
        'tqdm',
        'nb-extension-empinken',
        'scikit-learn'
    ],
    data_files=[
        # like `jupyter nbextension install --sys-prefix`
        ("share/jupyter/nbextensions/nb_cell_tools", [
            "nb_cell_tools/static/index.js",
            "nb_cell_tools/static/jquery.dialogextend.js",
            "nb_cell_tools/static/nb_cell_tools.png",
            "nb_cell_tools/static/nb_cell_tools.yaml"
        ]),
        # like `jupyter nbextension enable --sys-prefix`
        ("etc/jupyter/nbconfig/notebook.d", [
            "jupyter-config/nbconfig/notebook.d/nb_cell_tools.json"
        ])
    ],


)

import subprocess
import sys

def install_external_requirements(fn="external_requirements.txt"):
   """Install additional requiremments eg including installs from github."""
   print(f"Installing external requirements from {fn}")
   #try:
   #   subprocess.check_call([sys.executable, "-m", "pip", "install", "--no-cache-dir", "-r", fn ])
   #except:
   #   print(f"Failed to install {fn}")
   requirements = get_requirements(fn, nogit=False)
   for r in requirements:
      print(subprocess.check_output([sys.executable, "-m", "pip", "install", "--upgrade", "--no-cache-dir", r ]))
 
install_external_requirements("external_requirements.txt")
