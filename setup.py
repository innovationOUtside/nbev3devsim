from setuptools import setup

setup(
    name="nbev3devsim",
    packages=['nbev3devsim'],
    version='0.0.1',
    include_package_data=True,
    package_data = {
        'nbev3devsim' : ['progs/*.py', 'js/*.js','css/*.css', 'backgrounds/*', 'templates/*']},
    install_requires=[
        'jp_proxy_widget',
        'nest_asyncio',
        'pandas',
        'seaborn'
    ],

)
