from setuptools import setup

setup(
    name="nbev3devsim",
    author='Tony Hirst',
    author_email='tony.hirst@open.ac.uk',
    packages=['nbev3devsim', 'nb_cell_tools', 'nn_tools'],
    version='0.0.4',
    include_package_data=True,
    package_data = {
        'nbev3devsim' : ['progs/*.py', 'js/*.js', 'css/*.css', 'backgrounds/*', 'templates/*']},
    install_requires=[
        'jp_proxy_widget',
        'nest_asyncio',
        'pandas',
        'seaborn',
        'tqdm',
        'nb-extension-empinken'
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
