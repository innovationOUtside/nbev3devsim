from setuptools import setup

setup(
    name="nbev3devsim",
    packages=['nbev3devsim'],
    version='0.0.1',
    include_package_data=True,
    package_data = {
        'progs' : ['progs/*.py']},
    install_requires=[
        'jp_proxy_widget',
        'nest_asyncio',
        'pandas',
        'seaborn'
    ],

)
