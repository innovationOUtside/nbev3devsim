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
     

      var chart_sensor_traces = [
          {id: "chart_ultrasound", tag: "Ultrasonic:" , color: "#FF0000"},
          {id: "chart_left_light", tag: "Light_left:" , color: "#CA80F6"},
          {id: "chart_right_light", tag: "Light_right:" , color: "#CAF680"},
          {id: "chart_colour", tag: "Colour:" , color: "#00FF00"},
          {id: "chart_gyro", tag: "Gyro:" , color: "#0000FF"}
      ]

    var chart_lines = [];
    for (var j = 0; j < chart_sensor_traces.length; j++){
      _tmp = {
        y: [],
        mode: 'lines',
        line: {color: chart_sensor_traces[j].color}
      }
      chart_lines.push(_tmp);
    }

    //Plotly.newPlot('plotlyDiv', chart_lines);

    // What's the following for?
    var plotly_cnt = 0;


      // Output something to the display window
      function outf(text) {
        var mypre = document.getElementById("output");
        
        // Can we somehow stream data back to py context?
        report_callback(text)
        
        // Try updating the chart
        // TO DO - more chart trace updates
        _text = text.split(" ")
        var _chart_vals = []
        var _chart_traces = []
        // What we need to do is pass all sensor vals in a single message
        // If there is a message, decode it in one go and push the values to the trace
        // Create some sort of logger function in robot control programme at start
        // andd then call that as required.
        for (var j = 0; j < chart_sensor_traces.length; j++){
            if ((document.getElementById(chart_sensor_traces[j].id).checked) && (_text[0] == chart_sensor_traces[j].tag)) {
              _chart_vals.push([parseFloat(_text[1])]);
            } else {
                _chart_vals.push([parseFloat(0)])
            }
            _chart_traces.push(j)
        }

        Plotly.extendTraces('plotlyDiv', {
              y: _chart_vals
        }, _chart_traces)
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
        // This function runs when the simulator Run button is clicked 
        if (typeof Sk.hardInterrupt != 'undefined') {
          delete Sk.hardInterrupt;
        }
        if (Sk.running == true) {
          return;
        }
        Sk.running = true;
        Plotly.newPlot('plotlyDiv', chart_lines);

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
