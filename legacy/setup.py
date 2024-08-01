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

