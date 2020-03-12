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

# +
import jp_proxy_widget
from jp_proxy_widget import js_context
from IPython.display import HTML, display

from IPython import get_ipython
from datetime import datetime
# -

html = '''
    <div class="row">
      <div>
        <select id="map">
          <option>Empty Map</tion>
          <option>WRO 2019 Regular Junior</option>
          <option>WRO 2018 Regular Junior</option>
          <option>FLL 2019 - City Shaper</option>
          <option>FLL 2018 - Into Orbit</option>
          <option>Line Following Test</option>
          <option>Junction Handling Test</option>
          <option>Obstacles Test</option>
          <option>Upload Image (2362x1143px)...</option>
          <option hidden>Custom Image</option>
        </select>
        <button id="robotConfiguratorOpen">Configure Robot</button>
        <button id="configureObstacles">Obstacles...</button>
      </div>
      <div class="right">
        <div>X : <input type="number" id="xPos"></div>
        <div>Y : <input type="number" id="yPos"></div>
        <div>Angle : <input type="number" id="angle"></div>
        <div><button id="move">Move</button></div>
      </div>
    </div>
    <div class="row">
      <div id="editor">
        <div class="row buttons">
          <div class="leftFlex">
            <button id="runCode">Run</button>
            <button id="stop">Stop</button>
          </div>
          <div class="center">
            <input type="checkbox" id="largeFont">Large Font
            <input type="checkbox" id="longWindow">Long Window
          </div>
          <div class="rightFlex">
            <button id="upload">Load</button>
            <button id="download">Save</button>
          </div>
        </div>
        <div id="plotlyDiv"></div>
      </div>
      <pre id="output"></pre>
    </div>

    <div id="robotConfigurator" class="closed">
      <textarea id="robotConfiguratorEditor" spellcheck="false"></textarea>
      <i>* Dimensions are in mm and degrees.</i>
      <div class="buttons">
        <div class="leftFlex">
          <button id="robotConfiguratorApply">Apply</button>
          <button id="robotConfiguratorCancel">Cancel</button>
        </div>
        <div class="rightFlex">
          <button id="robotConfiguratorupload">Load</button>
          <button id="robotConfiguratordownload">Save</button>
        </div>
      </div>
    </div>

    <div id="obstaclesConfigurator" class="closed">
      <div class="content">
        <div><input type="checkbox" id="showRays">Show ultrasonic rays</div>
        <div><input type="checkbox" id="walls" checked>Walls around map</div>
        <div><input type="checkbox" id="obstacles" checked>Obstacles</div>
        <textarea id="obstaclesConfiguratorEditor" spellcheck="false"></textarea>
      </div>
      <div class="buttons">
        <div class="leftFlex">
          <button id="obstaclesConfiguratorApply">Apply</button>
          <button id="obstaclesConfiguratorClose">Close</button>
        </div>
        <div class="rightFlex">
          <button id="obstaclesConfiguratorupload">Upload File</button>
          <button id="obstaclesConfiguratordownload">Download to File</button>
        </div>
      </div>
    </div>

    <div id="window" class="closed">
      <div class="content"></div>
      <div class="windowRow">
        <button id="closeWindow">Close</button>
      </div>
    </div>
    
    <div id="field"></div>
'''


script_built = '''

function setPos(x, y, angle) {
        var x = parseFloat(x);
        var y = parseFloat(y);
        var angleRadian = parseFloat(angle) / 180 * Math.PI;

        if (isNaN(x)) { x = 0; }
        if (isNaN(y)) { y = 0; }
        if (isNaN(angleRadian)) { angleRadian = 0; angle = 0; }

        document.getElementById('xPos').value = x;
        document.getElementById('yPos').value = y;
        document.getElementById('angle').value  = angle;

        sim.setRobotPos(x, y, angleRadian);
        sim.drawAll();
      }

var sim = new EV3devSim('field');

setPos(1181, 571, 0);
document.getElementById('map').value = 'Empty Map';
document.getElementById('walls').checked = true;
document.getElementById('obstacles').checked = true;


  document.getElementById('configureObstacles').addEventListener('click', function() {
        document.getElementById('obstaclesConfigurator').classList.remove('closed');
        var obstacles = JSON.stringify(sim.obstacles, null, 2);
        document.getElementById('obstaclesConfiguratorEditor').value = obstacles;
      });
      document.getElementById('obstaclesConfiguratorApply').addEventListener('click', function() {
        var json = document.getElementById('obstaclesConfiguratorEditor').value;
        
        var obstacles = JSON.parse(json);
        sim.clearObstacles();
        sim.clearObstaclesLayer();
        sim.loadObstacles(obstacles);
        document.getElementById('obstaclesConfigurator').classList.add('closed');
      });
      document.getElementById('obstaclesConfiguratorClose').addEventListener('click', function() {
        document.getElementById('obstaclesConfigurator').classList.add('closed');
      });
      document.getElementById('obstaclesConfiguratordownload').addEventListener('click', function() {
        var obstaclesSpecs = document.getElementById('obstaclesConfiguratorEditor').value
        
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:application/json;base64,' + btoa(obstaclesSpecs);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'obstacles_config.json';
        hiddenElement.dispatchEvent(new MouseEvent('click'));
      });
      document.getElementById('obstaclesConfiguratorupload').addEventListener('click', function() {
        var hiddenElement = document.createElement('input');
        hiddenElement.type = 'file';
        hiddenElement.accept = 'application/json,.json,.js';
        hiddenElement.dispatchEvent(new MouseEvent('click'));
        hiddenElement.addEventListener('change', function(e){
          var reader = new FileReader();
          reader.onload = function() {
            document.getElementById('obstaclesConfiguratorEditor').value = this.result;
          };
          reader.readAsText(e.target.files[0]);
        });
      });
      
           document.getElementById('showRays').addEventListener('click', function() {
        if (document.getElementById('showRays').checked) {
          sim.drawUltrasonic = true;
        } else {
          sim.drawUltrasonic = false;
        }
        sim.drawAll();
      });
      document.getElementById('walls').addEventListener('click', function() {
        if (document.getElementById('walls').checked) {
          sim.setWallsPresent(true);
        } else {
          sim.setWallsPresent(false);
        }
      });
      document.getElementById('obstacles').addEventListener('click', function() {
        if (document.getElementById('obstacles').checked) {
          sim.obstaclesPresent = true;
          sim.clearObstaclesLayer();
          sim.drawObstacles();
        } else {
          sim.obstaclesPresent = false;
          sim.clearObstaclesLayer();
        }
      });
      document.getElementById('move').addEventListener('click', function() {
        setPos(
          document.getElementById('xPos').value,
          document.getElementById('yPos').value,
          document.getElementById('angle').value
        );
      });
      document.getElementById('stop').addEventListener('click', function() {
        sim.stopAnimation();
        Sk.hardInterrupt = true;
      });
      document.getElementById('largeFont').addEventListener('change', function(e) {
        if (e.target.checked) {
          document.getElementById('editor').classList.add('large');
        } else {
          document.getElementById('editor').classList.remove('large');
        }
      });
      document.getElementById('longWindow').addEventListener('change', function(e) {
        if (e.target.checked) {
          document.getElementById('editor').classList.add('long');
        } else {
          document.getElementById('editor').classList.remove('long');
        }
        window.dispatchEvent(new Event('resize'));
      });
      document.getElementById('download').addEventListener('click', function() {
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/x-python;base64,' + btoa(element.prog);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'robot.py';
        hiddenElement.dispatchEvent(new MouseEvent('click'));
      });
      document.getElementById('upload').addEventListener('click', function() {
        var hiddenElement = document.createElement('input');
        hiddenElement.type = 'file';
        hiddenElement.accept = 'text/x-python,.py';
        hiddenElement.dispatchEvent(new MouseEvent('click'));
        hiddenElement.addEventListener('change', function(e){
          var reader = new FileReader();
          reader.onload = function() {
            element.prog = this.result;
          };
          reader.readAsText(e.target.files[0]);
        });
      });
      var imagepath = 'images/'
      //sim.loadBackground(imagepath+'WRO-2019-Regular-Junior.jpg');
      document.getElementById('map').addEventListener('input', function() {
        var map = document.getElementById('map').value;

     if (map == 'WRO 2019 Regular Junior') {
          sim.loadBackground(imagepath+'WRO-2019-Regular-Junior.jpg');
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(2215, 150, 90);

        } else if (map == 'WRO 2018 Regular Junior') {
          sim.loadBackground(imagepath+'WRO-2018-Regular-Junior.png');
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(1181, 150, 90);

        } else if (map == 'FLL 2019 - City Shaper') {
          sim.loadBackground(imagepath+'FLL2019.jpg');
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(500, 150, 90);

        } else if (map == 'FLL 2018 - Into Orbit') {
          sim.loadBackground(imagepath+'FLL2018.jpg');
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(150, 150, 90);

        } else if (map == 'Line Following Test') {
          sim.loadBackground(imagepath+'Line_Following_Test.png');
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(141, 125, 90);

        } else if (map == 'Junction Handling Test') {
          sim.loadBackground(imagepath+'Junction_Handling_Test.png');
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(698, 130, 90);

        } else if (map == 'Obstacles Test') {
          sim.loadBackground(imagepath+'Obstacles_Test.png');
          setPos(121, 125, 90);
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          sim.loadObstacles([
            [46, 388, 150, 150],
            [479, 704, 150, 150],
            [852, 388, 150, 150],
            [1374, 388, 150, 150],
            [1758, 900, 150, 150],
            [2126, 388, 150, 150]
          ]);

        } else if (map == 'Upload Image (2362x1143px)...') {
          console.log('upload');
          var hiddenElement = document.createElement('input');
          hiddenElement.type = 'file';
          hiddenElement.accept = 'image/*';
          console.log(hiddenElement);
          hiddenElement.dispatchEvent(new MouseEvent('click'));
          hiddenElement.addEventListener('change', function(e){
            var reader = new FileReader();
            reader.onload = function() {
              sim.loadBackground(this.result);
              sim.clearObstacles();
              sim.clearObstaclesLayer();
            };
            reader.readAsDataURL(e.target.files[0]);
          });
          var select = document.getElementById('map');
          select.selectedIndex = select.options.length - 1;

        } else {
          sim.clearBackground();
          sim.clearObstacles();
          sim.clearObstaclesLayer();
          setPos(2362/2, 1143/2, 0);
        }
      });
      
      
      
      
            document.getElementById('robotConfiguratorOpen').addEventListener('click', function() {
        document.getElementById('robotConfiguratorEditor').value = JSON.stringify(sim.robotSpecs, null, 2);
        document.getElementById('robotConfigurator').classList.remove('closed');
      });
      document.getElementById('robotConfiguratorCancel').addEventListener('click', function() {
        document.getElementById('robotConfigurator').classList.add('closed');
      });
      document.getElementById('robotConfiguratorApply').addEventListener('click', function() {
        var robotSpecs = JSON.parse(document.getElementById('robotConfiguratorEditor').value);
        sim.loadRobot(robotSpecs);
        sim.drawAll();
        document.getElementById('robotConfigurator').classList.add('closed');
      });
      document.getElementById('robotConfiguratordownload').addEventListener('click', function() {
        var robotSpecs = document.getElementById('robotConfiguratorEditor').value
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:application/json;base64,' + btoa(robotSpecs);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'robot_config.json';
        hiddenElement.dispatchEvent(new MouseEvent('click'));
      });
      document.getElementById('robotConfiguratorupload').addEventListener('click', function() {
        var hiddenElement = document.createElement('input');
        hiddenElement.type = 'file';
        hiddenElement.accept = 'application/json,.json,.js';
        hiddenElement.dispatchEvent(new MouseEvent('click'));
        hiddenElement.addEventListener('change', function(e){
          var reader = new FileReader();
          reader.onload = function() {
            document.getElementById('robotConfiguratorEditor').value = this.result;
          };
          reader.readAsText(e.target.files[0]);
        });
      });
      
          function openWindow(url) {
        var win = document.getElementById('window');
        var content = win.getElementsByClassName('content')[0];
        win.classList.remove('closed');
        content.innerHTML = '';

        fetch(url)
          .then(function(response) {
            response.text()
              .then(function(text) {
                content.innerHTML = text;
              });
          })
      }



      function rand() {
          return Math.random();
        }
      

      // Output something to the display window
      function outf(text) {
        var mypre = document.getElementById("output");
        
        // Can we somehow stream data back to py context?
        report_callback(text)
        
        // Try updating the chart
        // TO DO - more chart trace updates
        _text = text.split(" ") 
        if (_text[0] == "Ultrasonic:") {
          Plotly.extendTraces('plotlyDiv', {
                y: [[parseFloat(_text[1])]]
          }, [0])
        }
        mypre.innerHTML = mypre.innerHTML + text;
        mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
      }


      function builtinRead(x) {
        
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
      }

      var interruptHandler = function (susp) {
        if (Sk.hardInterrupt === true) {
          delete Sk.hardInterrupt;
          throw new Sk.builtin.ExternalError('aborted execution');
        } else {
          return null;
        }
      };

      function runit() {
        if (typeof Sk.hardInterrupt != 'undefined') {
          delete Sk.hardInterrupt;
        }
        if (Sk.running == true) {
          return;
        }
        Sk.running = true;

        sim.reset();
        sim.startAnimation();
        var prog = '' //editor.getValue();
        if (typeof element !== 'undefined') {
            if (typeof element.prog !== 'undefined') {
                    prog = element.prog;
            }
        }


        Sk.builtins.sim = sim
        
        var mypre = document.getElementById("output");
        mypre.innerHTML = '';
        Sk.pre = "output";
        Sk.configure({output:outf, read:builtinRead});

        var myPromise = Sk.misceval.asyncToPromise(
          function() {
            return Sk.importMainWithBody("<stdin>", false, prog, true);
          },
          {
            '*': interruptHandler
          }
        );
        myPromise.then(
          function(mod) {
            sim.stopAnimation();
            Sk.running = false;
          },
          function(err) {
            Sk.running = false;
            sim.stopAnimation();
            var mypre = document.getElementById("output");
            mypre.innerHTML = mypre.innerHTML + '<span class="error">' + err.toString() + '</span>';
            mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
          }
        );
      }

document.getElementById('runCode').addEventListener('click', runit);

Plotly.newPlot('plotlyDiv', [{
  y: [],
  mode: 'lines',
  line: {color: '#80CAF6'}
}]);

var plotly_cnt = 0;

'''

# +
from IPython.core.magic import register_cell_magic

@register_cell_magic
def sim_magic(line, cell):
    "Send code to simulator."
    eval(line).set_element("prog", cell)


# +
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



# + tags=["active-ipynb"]
# myprint = Print_Repr()
# -

class Ev3DevWidget(jp_proxy_widget.JSProxyWidget):
    """Class to define an Ev3DevSim IPywidget."""
    def __init__(self, *pargs, **kwargs):
        super(Ev3DevWidget, self).__init__(*pargs, **kwargs)
        e = self.element

        # Call some standard jQuery method on the widget element:
        e.empty()
        e.width("1000px")
        e.height("1000px")
        # self.require_js("ace", "ace-src-min/ace.js")
        self.load_js_files(["js/skulpt.min.js", "js/skulpt-stdlib.js",
                            "js/EV3devSim.js", "js/plotly.min.js"])
        self.load_css("css/main.css")
        e.html(html)
        #self.require_js("saveAs", "js/FileSaver.js")

        self.js_init("ready();", ready=self.ready)
        
        self.results_log = []
        self.count = 0
    
    def print_repr(self, obj):
        # TO DO
        # - log all sensor channels
        # - add timestamp
        if obj.startswith('Ultrasonic') or obj.startswith('Color'):
            typ = obj.split(': ')[0]
            val = float(obj.split(': ')[1])
            self.results_log.append({'index': datetime.utcnow(), typ: val})
            self.count += 1

    def ready(self):
        "Initialise the simulator."
        #self.js_init(script_built, report_callback=print_repr)
        self.js_init(script_built, report_callback=self.print_repr)


# +
import asyncio
import nest_asyncio
nest_asyncio.apply()

class SimInformation:
    data = "unknown: apparently the callback hasn't been called yet."
    
def sim_callback(data):
    """Set SimInformation class data value."""
    SimInformation.data = data

async def sim_get_data(sim_widget, sim_var="sim.robotStates"):
    """Run async data request on simulator widget."""
    sim_widget.get_value_async(sim_callback, sim_var)

def _sim_report():
    """Get simulator data value."""
    print("Python thinks the sim data is: " + repr(SimInformation.data))
    
def sim_report(sim):
    """Return simulator value."""
    asyncio.run(sim_get_data(sim))
    return _sim_report()

# + tags=["active-ipynb"]
# testEmbed = Ev3DevWidget()

# + tags=["active-ipynb"]
# sim_report()

# + tags=["active-ipynb"]
# asyncio.run(sim_get_data(testEmbed))
# sim_report()
#
# # sim_report(testEmbed)

# + tags=["active-ipynb"]
# %%sim_magic testEmbed
# print("lsdhfkjfsadhfkjh")

# + tags=["active-ipynb"]
#
# #prog='print("hello world")'
# #testEmbed.set_element("prog", "print('hello')")
# testEmbed.set_element("prog", prog)
# display(testEmbed)

# + tags=["active-ipynb"]
# display(testEmbed)

# + tags=["active-ipynb"]
# import holoviews as hv
# import numpy as np
#
# from holoviews.streams import Pipe, Buffer
#
# hv.extension('bokeh')
#
# dfbuffer = Buffer(np.zeros((0, 2)), length=20)

# + tags=["active-ipynb"]
# dfbuffer

# + tags=["active-ipynb"]
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

# + tags=["active-ipynb"]
# hv.DynamicMap(hv.Curve, streams=[dfbuffer]).opts(padding=0.1, width=600, color = 'green',)

# + tags=["active-ipynb"]
# # Evaluate the Window location in the Javascript context and call back to Python
# testEmbed.get_value_async(sim_callback, "sim.robotStates")

# + tags=["active-ipynb"]
# print("Python thinks the sim data is: " + repr(SimInformation.data))

# + tags=["active-ipynb"]
# testEmbed.get_value_async(sim_callback, "sim")
#

# + tags=["active-ipynb"]
# print("Python thinks the prog is: " + repr(SimInformation.data))
# -


