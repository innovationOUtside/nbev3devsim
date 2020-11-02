from setuptools import setup
import os


def get_long_description():
    with open(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "README.md"),
        encoding="utf8",
    ) as fp:
        return fp.read()


setup(
    name="nbev3devsim",
    author="Tony Hirst",
    author_email="tony.hirst@open.ac.uk",
    url="https://github.com/innovationOUtside/innovationOUtside/nbev3devsim",
    description="nbevdevsim - ev3devsim extension for Jupyter notebooks",
    long_description=get_long_description(),
    long_description_content_type="text/markdown",
    license="MIT License",
    packages=["nbev3devsim", "nb_cell_tools", "nn_tools"],
    # version handled via setup.cfg and nbev3devsim/__init__.py
    include_package_data=True,
    package_data={
        "nbev3devsim": [
            "progs/*.py",
            "js/*.js",
            "css/*.css",
            "backgrounds/*",
            "templates/*",
        ]
    },
    install_requires=[
        "jp_proxy_widget",
        "nest_asyncio",
        "pandas",
        "seaborn",
        "tqdm",
        "nb-extension-empinken",
        "scikit-learn",
    ],
    data_files=[
        # like `jupyter nbextension install --sys-prefix`
        (
            "share/jupyter/nbextensions/nb_cell_tools",
            [
                "nb_cell_tools/static/index.js",
                "nb_cell_tools/static/jquery.dialogextend.js",
                "nb_cell_tools/static/nb_cell_tools.png",
                "nb_cell_tools/static/nb_cell_tools.yaml",
            ],
        ),
        # like `jupyter nbextension enable --sys-prefix`
        (
            "etc/jupyter/nbconfig/notebook.d",
            ["jupyter-config/nbconfig/notebook.d/nb_cell_tools.json"],
        ),
    ],
)

import subprocess
import sys

from os import path


def get_requirements(fn="requirements.txt", nogit=True):
    """Get requirements."""
    if path.exists(fn):
        with open(fn, "r") as f:
            requirements = f.read().splitlines()
    else:
        requirements = []
    requirements = [
        r.split()[0].strip() for r in requirements if r and not r.startswith("#")
    ]
    if nogit:
        requirements = [r for r in requirements if not r.startswith("git+")]
    return requirements


def install_external_requirements(fn="external_requirements.txt"):
    """Install additional requiremments eg including installs from github."""
    print(f"Installing external requirements from {fn}")
    # try:
    #   subprocess.check_call([sys.executable, "-m", "pip", "install", "--no-cache-dir", "-r", fn ])
    # except:
    #   print(f"Failed to install {fn}")
    requirements = get_requirements(fn, nogit=False)
    for r in requirements:
        try:
            print(
                subprocess.check_output(
                    [
                        sys.executable,
                        "-m",
                        "pip",
                        "install",
                        "--upgrade",
                        "--no-cache-dir",
                        r,
                    ]
                )
            )
        except:
            pass


install_external_requirements("external-requirements.txt")
