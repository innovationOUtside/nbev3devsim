# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:light
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.5'
#       jupytext_version: 1.3.1
#   kernelspec:
#     display_name: Python 3
#     language: python
#     name: python3
# ---

# # Ev3devsim_nb
#
# Exploring ??? in a notebook context.

# + persistent_id="8f39c9be-5a7d-4cb5-b243-006a1ebada4d" last_executed_text="import jp_proxy_widget\nfrom jp_proxy_widget import js_context\nfrom IPython.display import HTML, display\n\nfrom IPython import get_ipython\nfrom datetime import datetime" execution_event_id="f4765674-9275-464f-ba6a-040d4fae0851"
import jp_proxy_widget
from jp_proxy_widget import js_context
from IPython.display import HTML, display

from IPython import get_ipython
from datetime import datetime

import pandas as pd

# +
from pkg_resources import resource_exists, resource_filename

def get_file_path(fn):
    """Get file content from local store."""
    # This should work locally or in package
    try:
        resource_exists(__name__, fn)
        return resource_filename(__name__, fn)
    except:
        pass
    return fn



# -
import os
import os.path
import shutil

def setup(_dir = "backgrounds"):
    """Copy over background files"""

    _localdir = os.path.join(os.environ['HOME'], _dir)
    #Py 3.8?
    #shutil.copytree(get_file_path(_dir), _dir, dirs_exist_ok=True)
    if not os.path.isdir(_localdir):
        os.makedirs(_localdir)
    _path = get_file_path(_dir)
    for f in os.listdir(_path):
        shutil.copy(os.path.join(get_file_path(_dir), f), _localdir)

from distutils.dir_util import copy_tree
def setup2(_dir = "backgrounds"):
    """Copy over background files"""

    #_localdir = os.path.join(os.environ['HOME'], f'nb_{_dir}')
    try:
        #https://stackoverflow.com/a/58988310/454773
        _base = os.readlink('/proc/%s/cwd' % os.environ['JPY_PARENT_PID'])
    except:
        _base = os.environ['JUPYTER_SERVER_ROOT'] if 'JUPYTER_SERVER_ROOT' in os.environ else os.environ['HOME']
    _localdir = os.path.join(_base, f'nb_{_dir}')
    if not os.path.isdir(_localdir):
        os.makedirs(_localdir)
        _path = get_file_path(_dir)
        copy_tree(_path, _localdir)
setup2()

with open(get_file_path('templates/studio.html'), 'r') as f:
    html = f.read()

# + persistent_id="febea4e7-0b9e-493f-ac49-26a212d8da7a" last_executed_text="script_built = '''\n\nfunction setPos(x, y, angle) {\n        var x = parseFloat(x);\n        var y = parseFloat(y);\n        var angleRadian = parseFloat(angle) / 180 * Math.PI;\n\n        if (isNaN(x)) { x = 0; }\n        if (isNaN(y)) { y = 0; }\n        if (isNaN(angleRadian)) { angleRadian = 0; angle = 0; }\n\n        document.getElementById('xPos').value = x;\n        document.getElementById('yPos').value = y;\n        document.getElementById('angle').value  = angle;\n\n        sim.setRobotPos(x, y, angleRadian);\n        sim.drawAll();\n      }\n\nvar sim = new EV3devSim('field');\n\nsetPos(1181, 571, 0);\ndocument.getElementById('map').value = 'Empty Map';\ndocument.getElementById('walls').checked = true;\ndocument.getElementById('obstacles').checked = true;\n\n\n  document.getElementById('configureObstacles').addEventListener('click', function() {\n        document.getElementById('obstaclesConfigurator').classList.remove('closed');\n        var obstacles = JSON.stringify(sim.obstacles, null, 2);\n        document.getElementById('obstaclesConfiguratorEditor').value = obstacles;\n      });\n      document.getElementById('obstaclesConfiguratorApply').addEventListener('click', function() {\n        var json = document.getElementById('obstaclesConfiguratorEditor').value;\n        \n        var obstacles = JSON.parse(json);\n        sim.clearObstacles();\n        sim.clearObstaclesLayer();\n        sim.loadObstacles(obstacles);\n        document.getElementById('obstaclesConfigurator').classList.add('closed');\n      });\n      document.getElementById('obstaclesConfiguratorClose').addEventListener('click', function() {\n        document.getElementById('obstaclesConfigurator').classList.add('closed');\n      });\n      document.getElementById('obstaclesConfiguratordownload').addEventListener('click', function() {\n        var obstaclesSpecs = document.getElementById('obstaclesConfiguratorEditor').value\n        \n        var hiddenElement = document.createElement('a');\n        hiddenElement.href = 'data:application/json;base64,' + btoa(obstaclesSpecs);\n        hiddenElement.target = '_blank';\n        hiddenElement.download = 'obstacles_config.json';\n        hiddenElement.dispatchEvent(new MouseEvent('click'));\n      });\n      document.getElementById('obstaclesConfiguratorupload').addEventListener('click', function() {\n        var hiddenElement = document.createElement('input');\n        hiddenElement.type = 'file';\n        hiddenElement.accept = 'application/json,.json,.js';\n        hiddenElement.dispatchEvent(new MouseEvent('click'));\n        hiddenElement.addEventListener('change', function(e){\n          var reader = new FileReader();\n          reader.onload = function() {\n            document.getElementById('obstaclesConfiguratorEditor').value = this.result;\n          };\n          reader.readAsText(e.target.files[0]);\n        });\n      });\n      \n           document.getElementById('showRays').addEventListener('click', function() {\n        if (document.getElementById('showRays').checked) {\n          sim.drawUltrasonic = true;\n        } else {\n          sim.drawUltrasonic = false;\n        }\n        sim.drawAll();\n      });\n      document.getElementById('walls').addEventListener('click', function() {\n        if (document.getElementById('walls').checked) {\n          sim.setWallsPresent(true);\n        } else {\n          sim.setWallsPresent(false);\n        }\n      });\n      document.getElementById('obstacles').addEventListener('click', function() {\n        if (document.getElementById('obstacles').checked) {\n          sim.obstaclesPresent = true;\n          sim.clearObstaclesLayer();\n          sim.drawObstacles();\n        } else {\n          sim.obstaclesPresent = false;\n          sim.clearObstaclesLayer();\n        }\n      });\n      document.getElementById('move').addEventListener('click', function() {\n        setPos(\n          document.getElementById('xPos').value,\n          document.getElementById('yPos').value,\n          document.getElementById('angle').value\n        );\n      });\n      document.getElementById('stop').addEventListener('click', function() {\n        sim.stopAnimation();\n        Sk.hardInterrupt = true;\n      });\n      document.getElementById('largeFont').addEventListener('change', function(e) {\n        if (e.target.checked) {\n          document.getElementById('editor').classList.add('large');\n        } else {\n          document.getElementById('editor').classList.remove('large');\n        }\n      });\n      document.getElementById('longWindow').addEventListener('change', function(e) {\n        if (e.target.checked) {\n          document.getElementById('editor').classList.add('long');\n        } else {\n          document.getElementById('editor').classList.remove('long');\n        }\n        window.dispatchEvent(new Event('resize'));\n      });\n      document.getElementById('download').addEventListener('click', function() {\n        var hiddenElement = document.createElement('a');\n        hiddenElement.href = 'data:text/x-python;base64,' + btoa(element.prog);\n        hiddenElement.target = '_blank';\n        hiddenElement.download = 'robot.py';\n        hiddenElement.dispatchEvent(new MouseEvent('click'));\n      });\n      document.getElementById('upload').addEventListener('click', function() {\n        var hiddenElement = document.createElement('input');\n        hiddenElement.type = 'file';\n        hiddenElement.accept = 'text/x-python,.py';\n        hiddenElement.dispatchEvent(new MouseEvent('click'));\n        hiddenElement.addEventListener('change', function(e){\n          var reader = new FileReader();\n          reader.onload = function() {\n            element.prog = this.result;\n          };\n          reader.readAsText(e.target.files[0]);\n        });\n      });\n      var imagepath = 'images/'\n      //sim.loadBackground(imagepath+'WRO-2019-Regular-Junior.jpg');\n      document.getElementById('map').addEventListener('input', function() {\n        var map = document.getElementById('map').value;\n\n     if (map == 'WRO 2019 Regular Junior') {\n          sim.loadBackground(imagepath+'WRO-2019-Regular-Junior.jpg');\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(2215, 150, 90);\n\n        } else if (map == 'WRO 2018 Regular Junior') {\n          sim.loadBackground(imagepath+'WRO-2018-Regular-Junior.png');\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(1181, 150, 90);\n\n        } else if (map == 'FLL 2019 - City Shaper') {\n          sim.loadBackground(imagepath+'FLL2019.jpg');\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(500, 150, 90);\n\n        } else if (map == 'FLL 2018 - Into Orbit') {\n          sim.loadBackground(imagepath+'FLL2018.jpg');\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(150, 150, 90);\n\n        } else if (map == 'Line Following Test') {\n          sim.loadBackground(imagepath+'Line_Following_Test.png');\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(141, 125, 90);\n\n        } else if (map == 'Junction Handling Test') {\n          sim.loadBackground(imagepath+'Junction_Handling_Test.png');\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(698, 130, 90);\n\n        } else if (map == 'Obstacles Test') {\n          sim.loadBackground(imagepath+'Obstacles_Test.png');\n          setPos(121, 125, 90);\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          sim.loadObstacles([\n            [46, 388, 150, 150],\n            [479, 704, 150, 150],\n            [852, 388, 150, 150],\n            [1374, 388, 150, 150],\n            [1758, 900, 150, 150],\n            [2126, 388, 150, 150]\n          ]);\n\n        } else if (map == 'Upload Image (2362x1143px)...') {\n          console.log('upload');\n          var hiddenElement = document.createElement('input');\n          hiddenElement.type = 'file';\n          hiddenElement.accept = 'image/*';\n          console.log(hiddenElement);\n          hiddenElement.dispatchEvent(new MouseEvent('click'));\n          hiddenElement.addEventListener('change', function(e){\n            var reader = new FileReader();\n            reader.onload = function() {\n              sim.loadBackground(this.result);\n              sim.clearObstacles();\n              sim.clearObstaclesLayer();\n            };\n            reader.readAsDataURL(e.target.files[0]);\n          });\n          var select = document.getElementById('map');\n          select.selectedIndex = select.options.length - 1;\n\n        } else {\n          sim.clearBackground();\n          sim.clearObstacles();\n          sim.clearObstaclesLayer();\n          setPos(2362/2, 1143/2, 0);\n        }\n      });\n      \n      \n      \n      \n            document.getElementById('robotConfiguratorOpen').addEventListener('click', function() {\n        document.getElementById('robotConfiguratorEditor').value = JSON.stringify(sim.robotSpecs, null, 2);\n        document.getElementById('robotConfigurator').classList.remove('closed');\n      });\n      document.getElementById('robotConfiguratorCancel').addEventListener('click', function() {\n        document.getElementById('robotConfigurator').classList.add('closed');\n      });\n      document.getElementById('robotConfiguratorApply').addEventListener('click', function() {\n        var robotSpecs = JSON.parse(document.getElementById('robotConfiguratorEditor').value);\n        sim.loadRobot(robotSpecs);\n        sim.drawAll();\n        document.getElementById('robotConfigurator').classList.add('closed');\n      });\n      document.getElementById('robotConfiguratordownload').addEventListener('click', function() {\n        var robotSpecs = document.getElementById('robotConfiguratorEditor').value\n        var hiddenElement = document.createElement('a');\n        hiddenElement.href = 'data:application/json;base64,' + btoa(robotSpecs);\n        hiddenElement.target = '_blank';\n        hiddenElement.download = 'robot_config.json';\n        hiddenElement.dispatchEvent(new MouseEvent('click'));\n      });\n      document.getElementById('robotConfiguratorupload').addEventListener('click', function() {\n        var hiddenElement = document.createElement('input');\n        hiddenElement.type = 'file';\n        hiddenElement.accept = 'application/json,.json,.js';\n        hiddenElement.dispatchEvent(new MouseEvent('click'));\n        hiddenElement.addEventListener('change', function(e){\n          var reader = new FileReader();\n          reader.onload = function() {\n            document.getElementById('robotConfiguratorEditor').value = this.result;\n          };\n          reader.readAsText(e.target.files[0]);\n        });\n      });\n      \n          function openWindow(url) {\n        var win = document.getElementById('window');\n        var content = win.getElementsByClassName('content')[0];\n        win.classList.remove('closed');\n        content.innerHTML = '';\n\n        fetch(url)\n          .then(function(response) {\n            response.text()\n              .then(function(text) {\n                content.innerHTML = text;\n              });\n          })\n      }\n\n\n\n      function rand() {\n          return Math.random();\n        }\n      \n\n      // Output something to the display window\n      function outf(text) {\n        var mypre = document.getElementById(\"output\");\n        \n        // Can we somehow stream data back to py context?\n        report_callback(text)\n        \n        // Try updating the chart\n        // TO DO - more chart trace updates\n        _text = text.split(\" \") \n        if (_text[0] == \"Ultrasonic:\") {\n          Plotly.extendTraces('plotlyDiv', {\n                y: [[parseFloat(_text[1])]]\n          }, [0])\n        }\n        mypre.innerHTML = mypre.innerHTML + text;\n        mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;\n      }\n\n\n      function builtinRead(x) {\n        \n        if (Sk.builtinFiles === undefined || Sk.builtinFiles[\"files\"][x] === undefined) {\n            throw \"File not found: '\" + x + \"'\";\n        }\n        return Sk.builtinFiles[\"files\"][x];\n      }\n\n      var interruptHandler = function (susp) {\n        if (Sk.hardInterrupt === true) {\n          delete Sk.hardInterrupt;\n          throw new Sk.builtin.ExternalError('aborted execution');\n        } else {\n          return null;\n        }\n      };\n\n      function runit() {\n        if (typeof Sk.hardInterrupt != 'undefined') {\n          delete Sk.hardInterrupt;\n        }\n        if (Sk.running == true) {\n          return;\n        }\n        Sk.running = true;\n\n        sim.reset();\n        sim.startAnimation();\n        var prog = '' //editor.getValue();\n        if (typeof element !== 'undefined') {\n            if (typeof element.prog !== 'undefined') {\n                    prog = element.prog;\n            }\n        }\n\n\n        Sk.builtins.sim = sim\n        \n        var mypre = document.getElementById(\"output\");\n        mypre.innerHTML = '';\n        Sk.pre = \"output\";\n        Sk.configure({output:outf, read:builtinRead});\n\n        var myPromise = Sk.misceval.asyncToPromise(\n          function() {\n            return Sk.importMainWithBody(\"<stdin>\", false, prog, true);\n          },\n          {\n            '*': interruptHandler\n          }\n        );\n        myPromise.then(\n          function(mod) {\n            sim.stopAnimation();\n            Sk.running = false;\n          },\n          function(err) {\n            Sk.running = false;\n            sim.stopAnimation();\n            var mypre = document.getElementById(\"output\");\n            mypre.innerHTML = mypre.innerHTML + '<span class=\"error\">' + err.toString() + '</span>';\n            mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;\n          }\n        );\n      }\n\ndocument.getElementById('runCode').addEventListener('click', runit);\n\nPlotly.newPlot('plotlyDiv', [{\n  y: [],\n  mode: 'lines',\n  line: {color: '#80CAF6'}\n}]);\n\nvar plotly_cnt = 0;\n\n'''" execution_event_id="ab87e3f4-1e4c-4d8a-a21f-987b1fe4ab68"
with open(get_file_path('templates/studio.js'), 'r') as f:
    script_built = f.read()

# + persistent_id="eefb285c-b41b-4971-9fc0-84b21cdd1930" last_executed_text="from IPython.core.magic import register_cell_magic\n\n@register_cell_magic\ndef sim_magic(line, cell):\n    \"Send code to simulator.\"\n    eval(line).set_element(\"prog\", cell)" execution_event_id="8ca9373c-b7be-4ebf-84f1-611d4f5c1c6d" tags=["active-ipynb"]
# from IPython.core.magic import register_cell_magic
#
# @register_cell_magic
# def sim_magic(line, cell):
#     "Send code to simulator."
#     eval(line).set_element("prog", cell)

# + persistent_id="e2f3757d-50bb-4492-9f98-16426f3837c7" last_executed_text="prog='''\n# Demo of a simple proportional line follower using two sensors\n# It's deliberately flawed and will exit with errors in some circumstances;\n# try fixing it!\n\nfrom ev3dev2.motor import MoveSteering, OUTPUT_B, OUTPUT_C\nfrom ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4\nfrom ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor\n\nsteering_drive = MoveSteering(OUTPUT_B, OUTPUT_C)\n\ncolorLeft = ColorSensor(INPUT_2)\ncolorRight = ColorSensor(INPUT_3)\ngyro = GyroSensor(INPUT_4)\nultrasonic = UltrasonicSensor(INPUT_1)\n\nGAIN = 0.5\n\nwhile True:\n    print('Gyro: ' + str(gyro.angle_and_rate))\n    print('Ultrasonic: ' + str(ultrasonic.distance_centimeters))\n    print('Color: ' + str(colorRight.color))\n    error = colorLeft.reflected_light_intensity - colorRight.reflected_light_intensity\n    correction = error * GAIN\n    steering_drive.on(correction, 20)\n        \n'''" execution_event_id="9091bdb4-00cd-4fc8-a8c6-f96ff267bd1c"
prog='''
# Demo of a simple proportional line follower using two sensors
# It's deliberately flawed and will exit with errors in some circumstances;
# try fixing it!

from ev3dev2.motor import MoveSteering, OUTPUT_B, OUTPUT_C
from ev3dev2.sensor import INPUT_1, INPUT_2, INPUT_3, INPUT_4
from ev3dev2.sensor.lego import ColorSensor, GyroSensor, UltrasonicSensor

steering_drive = MoveSteering(OUTPUT_B, OUTPUT_C)

colorLeft = ColorSensor(INPUT_2)
colorRight = ColorSensor(INPUT_3)
gyro = GyroSensor(INPUT_4)
ultrasonic = UltrasonicSensor(INPUT_1)

GAIN = 0.5

while True:
    print('Gyro: ' + str(gyro.angle_and_rate))
    print('Ultrasonic: ' + str(ultrasonic.distance_centimeters))
    print('Color: ' + str(colorRight.color))
    error = colorLeft.reflected_light_intensity - colorRight.reflected_light_intensity
    correction = error * GAIN
    steering_drive.on(correction, 20)
        
'''

# + persistent_id="08545241-02b4-4fc6-9015-233463d6be44"



# + tags=["active-ipynb"] persistent_id="82a10062-b362-4595-b88f-da4d16342526"
# #myprint = Print_Repr()

# + persistent_id="faecb100-d28c-442b-b204-0906c1dc105e" last_executed_text="class Ev3DevWidget(jp_proxy_widget.JSProxyWidget):\n    \"\"\"Class to define an Ev3DevSim IPywidget.\"\"\"\n    def __init__(self, *pargs, **kwargs):\n        super(Ev3DevWidget, self).__init__(*pargs, **kwargs)\n        e = self.element\n\n        # Call some standard jQuery method on the widget element:\n        e.empty()\n        # This is for the controls as well as the simulator\n        e.width(\"1000\") # 1181px 2362\n        e.height(\"1000\") # 551px 1143\n        # self.require_js(\"ace\", \"ace-src-min/ace.js\")\n        self.load_js_files([\"js/skulpt.min.js\", \"js/skulpt-stdlib.js\",\n                            \"js/EV3devSim.js\", \"js/plotly.min.js\"])\n        self.load_css(\"css/main.css\")\n        e.html(html)\n        #self.require_js(\"saveAs\", \"js/FileSaver.js\")\n\n        self.js_init(\"ready();\", ready=self.ready)\n        \n        self.results_log = []\n        self.count = 0\n    \n    def print_repr(self, obj):\n        # TO DO\n        # - log all sensor channels\n        # - add timestamp\n        if obj.startswith('Ultrasonic') or obj.startswith('Color'):\n            typ = obj.split(': ')[0]\n            val = float(obj.split(': ')[1])\n            self.results_log.append({'index': datetime.utcnow(), typ: val})\n            self.count += 1\n\n    def ready(self):\n        \"Initialise the simulator.\"\n        #self.js_init(script_built, report_callback=print_repr)\n        self.js_init(script_built, report_callback=self.print_repr)" execution_event_id="b3c3671c-7611-487f-b26f-c5be088143ad"
class Ev3DevWidget(jp_proxy_widget.JSProxyWidget):
    """Class to define an Ev3DevSim IPywidget."""
    def __init__(self, *pargs, **kwargs):
        super(Ev3DevWidget, self).__init__(*pargs, **kwargs)
        e = self.element

        # Call some standard jQuery method on the widget element:
        e.empty()
        # This is for the controls as well as the simulator
        e.width("1000") # 1181px 2362
        e.height("1000") # 551px 1143
        # self.require_js("ace", "ace-src-min/ace.js")
        self.load_js_files([get_file_path("js/skulpt.min.js"), get_file_path("js/skulpt-stdlib.js"),
                            get_file_path("js/EV3devSim.js"), get_file_path("js/plotly.min.js"),
                            get_file_path("js/prism.js")])
        self.load_css(get_file_path("css/main.css"))
        e.html(html)
        #self.require_js("saveAs", "js/FileSaver.js")

        self.js_init("ready();", ready=self.ready)
        
        self.results_log = []
        self.raw_image_data = [] # log of image data records

        self.pyresponder = lambda obj: f'pingpong {obj}'
        self.live_image_handler = lambda i: ''

        self.count = 0
    
    def process_raw_image_data(self, _r, mode='rgb', to_str=True):
        """Process the raw image data and return a dataframe."""
        tmp=_r.split(',')
        k=4
        # Remove every fourth item in the list
        del tmp[k-1::k]
        
        if mode=='reflected' or mode=='greyscale':
            # Get the first R component of the RGB signal
            tmp = tmp[0::3]
        elif mode=='bw':
            # Get the first R component of the RGB signal
            tmp = tmp[0::3]
            # and convert it to a boolean value
            tmp = [str(int(int(x)>3)) for x in tmp]
        else:
            if mode.upper()!='RGB':
                print('Unrecognised mode.')
        if to_str:
            return ','.join(tmp)
        return tmp
                                    
    def _process_robot_image_data(self, data, mode='rgb'):
        """Process the robot image data and return a dataframe."""
        df = pd.DataFrame(columns=['side', 'vals', 'clock'])
        for r in data:
            _r = r.split()
            if len(_r)==3:
                tmp = self.process_raw_image_data(_r[1], mode=mode)
                df = pd.concat([df, pd.DataFrame([{'side':_r[0],
                                        'vals': tmp,
                                        'clock':_r[2]}])])
               
        df.reset_index(drop=True,inplace=True)
        return df

    def image_data(self, datatype='dataframe', mode='rgb'):
        """
        Return image data.
        """
        if datatype=='raw':
            return self.raw_image_data
        elif datatype=='dataframe':
            _df = self._process_robot_image_data(self.raw_image_data, mode=mode)
            return _df
 

    def clear_datalog(self):
        """Clear the datalog in the simulator ipywidget object."""
        self.results_log = []
        self.raw_image_data = [] 
        self.count = 0
    
    def comms_image_data(self, obj):
        """Grab image data into a log."""
        self.raw_image_data.append(obj.replace('image_data','').strip())
        response = self.live_image_handler(len(self.raw_image_data))
        if response:
            self.set_element("response", response)
        #self.raw_image_data.append({'index': datetime.utcnow(), 'simtime': clock, typ: val})

    def print_repr(self, obj):
        """Callback function when anything is written to the simulator print window."""
        # TO DO
        # - log all sensor channels
        # - add timestamp
        # TO DO  - this would be cleaner if we say: log colour, log ultrasonic etc
        if obj.startswith(('^log','Ultrasonic:', 'Colour:', 'Light_left:', 
                           'Light_right:', 'Gyro:', 'Wheel_left:', 'Wheel_right:')):
            typ = obj.split(': ')[0]
            vals = obj.split(': ')[1].strip().split()
            val = float(vals[0])
            clock = float(vals[1]) if len(vals)>1 else None
            self.results_log.append({'index': datetime.utcnow(), 'simtime': clock, typ: val})
            self.count += 1

    def responder(self, obj):
        """ Callback function that tries to respond to widget."""
        response = f'pingpong {obj}'
        response = self.pyresponder(obj)
        self.set_element("response", response)

    def ready(self):
        "Initialise the simulator."
        # The report_callback function is called from the simulator code
        # whenever something is written to the output window.
        # At the moment, we use this as a basis for data logging.
        #self.js_init(script_built, report_callback=print_repr)
        self.js_init(script_built, report_callback=self.print_repr, report_callback_responder=self.responder, report_image_data=self.comms_image_data)


# + persistent_id="1177dc49-9ea2-471b-86ce-17980b192d1f" last_executed_text="class SimInformation:\n    data = \"unknown: apparently the callback hasn't been called yet.\"\n    \ndef sim_callback(data):\n    \"\"\"Set SimInformation class data value.\"\"\"\n    SimInformation.data = data\n\ndef sim_get_data(sim_widget, sim_var=\"sim.robotStates\"):\n    \"\"\"Run async data request on simulator widget.\"\"\"\n    sim_widget.get_value_async(sim_callback, sim_var)\n\ndef sim_report(retval=False):\n    \"\"\"Get simulator data value.\"\"\"\n    print(\"Python thinks the sim data is: \" + repr(SimInformation.data))\n    if retval:\n        return SimInformation.data" execution_event_id="eb4ffdfb-af16-4c0c-8309-f159a7303734"
class SimInformation:
    data = "unknown: apparently the callback hasn't been called yet."
    
def sim_callback(data):
    """Set SimInformation class data value."""
    SimInformation.data = data

def sim_get_data(sim_widget, sim_var="sim.robotStates"):
    """Run async data request on simulator widget."""
    sim_widget.get_value_async(sim_callback, sim_var)

def sim_data(retval=True):
    """Return simulator data."""
    # Remember to call sim_get_data(roboSim) in a previous cell
    return SimInformation.data

def sim_report(retval=True):
    """Get simulator data value."""
    if  not retval:
        print("Python thinks the sim data is: " + repr(SimInformation.data))
    return SimInformation.data

def get_dataframe_from_datalog(datalog):
    """Generate a dataframe from datalog."""
    df = pd.DataFrame(datalog)

    #Remove the simtime column if it's all empty
    df.dropna(axis=1, how='all', inplace=True)

    if not df.empty:
        if 'simtime' in df.columns:
            df = pd.DataFrame(datalog)
            df.drop(['index'], axis=1, inplace=True)
            df = df.melt(id_vars='simtime').dropna()
            df.rename(columns={"simtime": "time"}, inplace=True)  
        else:
            df = df.melt(id_vars='index').dropna()
            df['index'] = pd.to_timedelta(df['index']-df['index'].min())
            df['time'] = df['index'].dt.total_seconds()
    return df

def get_dataframe_from_widget(widget):
    """Generate a dataframe from retrieved simulator datalog."""
    return get_dataframe_from_datalog(widget.results_log)


class RobotState():
    def __init__(self, sim=None):
        self.sim = sim
        self.state = "unknown: apparently the callback hasn't been called yet."
        self.update()
  
    def robot_state_callback(self, state):
        if state:
            state['left_light_raw'] = state['sensor1']
            state['right_light_raw'] = state['sensor2']
            state['left_light'] = state['sensor1'][0]
            state['right_light'] = state['sensor2'][0]
            state['left_light_pc'] = 100 * state['sensor1'][0] / 255
            state['right_light_pc'] = 100 * state['sensor2'][0] / 255
            state['left_light_full'] = 100 * sum(state['sensor1']) / 765
            state['right_light_full'] = 100 * sum(state['sensor2']) / 765

        self.state = state

    def update(self):
        if self.sim:
            self.sim.get_value_async(self.robot_state_callback, "sim.robotStates")

# + tags=["active-ipynb"]
# r = RobotState(roboSim)
# r.update()
# # In a separate cell after update
# r.state


# + tags=["active-ipynb"]
# import asyncio
# import nest_asyncio
# nest_asyncio.apply()


# + tags=["active-ipynb"] persistent_id="25fd5213-1d28-4253-934f-0eeec72d8fff" last_executed_text="testEmbed = Ev3DevWidget()" execution_event_id="b1903c85-d8ad-4058-8836-20220a70ddc0"
# testEmbed = Ev3DevWidget()

# + tags=["active-ipynb"] persistent_id="306b2cda-1a65-4913-afb2-b0c2e796f62e"
# sim_report()

# + tags=["active-ipynb"] persistent_id="60305c87-4f11-4e00-82e3-32ac6dae1c12"
# asyncio.run(sim_get_data(testEmbed))
# sim_report()
#
# # sim_report(testEmbed)

# + tags=["active-ipynb"] persistent_id="2e8932d6-2d9b-453c-b5a5-55c869d8e60f"
# %%sim_magic testEmbed
# print("lsdhfkjfsadhfkjh")

# + tags=["active-ipynb"] persistent_id="6fafbed0-383c-4bff-ba1b-b455b3537870" last_executed_text="\n#prog='print(\"hello world\")'\n#testEmbed.set_element(\"prog\", \"print('hello')\")\ntestEmbed.set_element(\"prog\", prog)\ndisplay(testEmbed)" execution_event_id="4bd970ce-3c98-499d-9d4e-95f45dbd171f"
#
# #prog='print("hello world")'
# #testEmbed.set_element("prog", "print('hello')")
# testEmbed.set_element("prog", prog)
# display(testEmbed)

# + tags=["active-ipynb"] persistent_id="6d5e0a73-66a6-46cb-907c-dd14ff74acef" last_executed_text="display(testEmbed)" execution_event_id="5efa8842-35ce-42fd-9f25-41716a41ecc1"
# display(testEmbed)

# + tags=["active-ipynb"] persistent_id="a9a212dd-0529-4e3d-b7ee-44cfa9314060"
# import holoviews as hv
# import numpy as np
#
# from holoviews.streams import Pipe, Buffer
#
# hv.extension('bokeh')
#
# dfbuffer = Buffer(np.zeros((0, 2)), length=20)

# + tags=["active-ipynb"] persistent_id="ea841feb-ab9e-4e5f-b50b-71f064fbce39"
# dfbuffer

# + tags=["active-ipynb"] persistent_id="1e68f3c9-c84d-4d4f-87bb-a5a5bf0e44d5"
# #from holoviews.streams import Pipe, Buffer
#
# #hv.extension('bokeh')
#
# #dfbuffer = Buffer(np.zeros((0, 2)), length=20)
#
# z = []
# zz = []
# count=0
# def print_repr(obj):
#     """Display object"""
#     #global dfbuffer
#     global count
#     if obj.startswith('Ultrasonic'):
#         typ = obj.split(': ')[0]
#         val = float(obj.split(': ')[1])
#         z.append((typ, val))
#         #dfbuffer.send(np.array([[count, val]]))
#         count += 1
#             #zz.append(dfbuffer)
#             #zz.append(np.array([[count, val]]))
#             #zz.append((typ, val))
#             #dfbuffer.send(np.array([[count, val]]))
#             #count += 1

# + tags=["active-ipynb"] persistent_id="592123fb-82f7-4542-a4e2-6058a053e368"
# hv.DynamicMap(hv.Curve, streams=[dfbuffer]).opts(padding=0.1, width=600, color = 'green',)

# + tags=["active-ipynb"] persistent_id="b65585b0-1179-4a50-9dfe-e2e99a00845f"
# # Evaluate the Window location in the Javascript context and call back to Python
# testEmbed.get_value_async(sim_callback, "sim.robotStates")

# + tags=["active-ipynb"] persistent_id="bf8ab8f8-b4ae-499f-9783-25ce2eb427e2"
# print("Python thinks the sim data is: " + repr(SimInformation.data))

# + tags=["active-ipynb"] persistent_id="04e939b7-f037-40a6-b82c-c8b35610cb4a"
# testEmbed.get_value_async(sim_callback, "sim")
#

# + tags=["active-ipynb"] persistent_id="c75d2eb2-484c-479b-974f-0d55fa374c01"
# print("Python thinks the prog is: " + repr(SimInformation.data))
# + persistent_id="b3aa451f-9119-4f09-80cb-101cddef4f29"


