from setuptools import setup

setup(
    name="nbev3devsim",
    packages=['nbev3devsim'],
    version='0.0.1',
    include_package_data=True,
    package_data = {
        'progs' : ['progs/*.py'],
        'js' : ['js/*.js'],
        'css': ['css/*.css'],
        'images': ['images/*']},
    install_requires=[
        'jp_proxy_widget',
        'nest_asyncio',
        'pandas',
        'seaborn'
    ],

)
