import importlib.metadata
import pathlib

import anywidget
import traitlets

try:
    __version__ = importlib.metadata.version("nbev3devsim")
except importlib.metadata.PackageNotFoundError:
    __version__ = "unknown"


class Widget(anywidget.AnyWidget):
    _esm = pathlib.Path(__file__).parent / "static" / "widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "widget.css"
    value = traitlets.Int(12).tag(sync=False)

class SimTestWidget(anywidget.AnyWidget):
    _deps = [
        pathlib.Path(__file__).parent / "static" / "skulpt.min.js",
        pathlib.Path(__file__).parent / "static" / "prism.js",
        #"https://cdn.plot.ly/plotly-2.34.0.min.js"
        #pathlib.Path(__file__).parent / "static" / "plotly.min.js",
    ]
    _esm = pathlib.Path(__file__).parent / "static" / "test_widget.js"
    _css = pathlib.Path(__file__).parent / "static" / "test_widget.css"
    robotSpecs = traitlets.Dict({}).tag(sync=True)
    # test = traitlets.Unicode("").tag(sync=True)
    test = traitlets.Dict({}).tag(sync=True)
