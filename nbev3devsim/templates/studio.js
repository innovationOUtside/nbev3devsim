
function setPos(x, y, angle, init=false, reset=false) {
  var x = parseFloat(x);
  var y = parseFloat(y);
  var angleRadian = parseFloat(angle) / 180 * Math.PI;

  if (isNaN(x)) { x = 0; }
  if (isNaN(y)) { y = 0; }
  if (isNaN(angleRadian)) { angleRadian = 0; angle = 0; }

  document.getElementById('xPos').value = x;
  document.getElementById('yPos').value = y;
  document.getElementById('angle').value = angle;

  if (init) {
    sim.robotStates._x = x;
    sim.robotStates._y = y;
    sim.robotStates._angle = angle;
  }

  sim.setRobotPos(x, y, angleRadian);
  if (reset) {
    delete sim.robotStates.pen_prev_x;
    delete sim.robotStates.pen_prev_y;
  }

  // Render scene
  //sim.drawAll();
  sim.getColorSensorsValues();
  sim.bigDraw();

  //Update sensor reading display
  //sim.displaySensorValues();
}

var sim = new EV3devSim('field');

// Set the default position from something?!
setPos(1181, 571, 0);

document.getElementById('codeFromClipboard').addEventListener('click', function () {
  navigator.clipboard.readText().then(text => element.prog = text);
  console.log('can we paste?')
  navigator.clipboard.readText().then(text => console.log(text));
});

var lightSensorNoiseSlider = document.getElementById("lightSensorNoiseSlider");
lightSensorNoiseSlider.oninput = function () {
  sim.robotSpecs.sensorNoise = parseFloat(this.value);
  sim.getColorSensorsValues();
  sim.displaySensorValues();
}

var wheelNoiseSlider = document.getElementById("wheelNoiseSlider");
wheelNoiseSlider.oninput = function () {
  sim.robotSpecs.wheelNoise = parseFloat(this.value);
}


document.getElementById('showCode').addEventListener('click', function () {
  console.log('showing code?')
  var _code = element.prog;
  // Strip out any prefix magic line
  _code = _code.split('\n').filter(function(line){ 
    return line.indexOf( "%" ) != 0; }).join('\n')
  //document.getElementById('codeDisplayCode').value = _code; //for HTML textarea tag
  document.getElementById('codeDisplayCode').textContent = _code;
  document.getElementById('codeDisplay').classList.remove('closed');
});

document.getElementById('codeDisplayClose').addEventListener('click', function () {
  document.getElementById('codeDisplay').classList.add('closed');
});

document.getElementById('map').selectedIndex = "0";;
document.getElementById('walls').checked = true;
document.getElementById('obstacles').checked = true;


document.getElementById('configureObstacles').addEventListener('click', function () {
  document.getElementById('obstaclesConfigurator').classList.remove('closed');
  var obstacles = JSON.stringify(sim.obstacles, null, 2);
  document.getElementById('obstaclesConfiguratorEditor').value = obstacles;
});

document.getElementById('obstaclesConfiguratorApply').addEventListener('click', function () {
  var json = document.getElementById('obstaclesConfiguratorEditor').value;

  var obstacles = JSON.parse(json);
  sim.clearObstacles();
  sim.clearObstaclesLayer();
  sim.loadObstacles(obstacles);
  document.getElementById('obstaclesConfigurator').classList.add('closed');
});

document.getElementById('obstaclesConfiguratorClose').addEventListener('click', function () {
  document.getElementById('obstaclesConfigurator').classList.add('closed');
});

document.getElementById('obstaclesConfiguratordownload').addEventListener('click', function () {
  var obstaclesSpecs = document.getElementById('obstaclesConfiguratorEditor').value

  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:application/json;base64,' + btoa(obstaclesSpecs);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'obstacles_config.json';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
});

document.getElementById('obstaclesConfiguratorupload').addEventListener('click', function () {
  var hiddenElement = document.createElement('input');
  hiddenElement.type = 'file';
  hiddenElement.accept = 'application/json,.json,.js';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
  hiddenElement.addEventListener('change', function (e) {
    var reader = new FileReader();
    reader.onload = function () {
      document.getElementById('obstaclesConfiguratorEditor').value = this.result;
    };
    reader.readAsText(e.target.files[0]);
  });
});

document.getElementById('collaborative').addEventListener('click', function () {
  if (document.getElementById('collaborative').checked) {
    sim.collaborative = true;
  } else {
    sim.collaborative = false;
  }
});

document.getElementById('showRays').addEventListener('click', function () {
  if (document.getElementById('showRays').checked) {
    sim.drawUltrasonic = true;
  } else {
    sim.drawUltrasonic = false;
  }
  sim.drawAll();
});

document.getElementById('walls').addEventListener('click', function () {
  if (document.getElementById('walls').checked) {
    sim.setWallsPresent(true);
  } else {
    sim.setWallsPresent(false);
  }
});
document.getElementById('obstacles').addEventListener('click', function () {
  if (document.getElementById('obstacles').checked) {
    sim.obstaclesPresent = true;
    sim.clearObstaclesLayer();
    sim.drawObstacles();
  } else {
    sim.obstaclesPresent = false;
    sim.clearObstaclesLayer();
  }
});

document.getElementById('randomLocation').addEventListener('click', function () {
  var _x = Math.floor(Math.random() * sim.WIDTH);
  var _y = Math.floor(Math.random() * sim.HEIGHT); 
  var _angle = Math.floor(Math.random() * 360);

  // TO DO - make a "noPenMove" function to take coords/angle and move w/ no pen
  var tmp = sim.robotStates.penDown;
  sim.robotStates.penDown = false;
  setPos(_x, _y, _angle, reset=true);
  sim.robotStates.penDown = tmp;
})

document.getElementById('resetReset').addEventListener('click', function () {
  sim.robotStates._x = document.getElementById('xPos').value;
  sim.robotStates._y = document.getElementById('yPos').value;
  sim.robotStates._angle = document.getElementById('angle').value;
})

document.getElementById('move').addEventListener('click', function () {
  var tmp = sim.robotStates.penDown;
  sim.robotStates.penDown = false;

  var x = document.getElementById('xPos').value;
  var y = document.getElementById('yPos').value;
  var angle = document.getElementById('angle').value;

  setPos(x, y, angle, reset=true);
  sim.robotStates.penDown = tmp;

  sim.getColorSensorsValues();
  sim.displaySensorValues();
});

document.getElementById('reset').addEventListener('click', function () {
  // Don't draw the trace when we reset the robot position
  var tmp = sim.robotStates.penDown;
  sim.robotStates.penDown = false;
  
  setPos(
    sim.robotStates._x,
    sim.robotStates._y,
    sim.robotStates._angle,
    reset=true
  );
  sim.robotStates.penDown = tmp;
});

document.getElementById('penDown').addEventListener('change', function (e) {
  if (e.target.checked) {
    sim.robotStates.penDown = true;;
  } else {
    sim.robotStates.penDown = false;;
  }
});

// TO DO - need to set these based on form values when everything is loaded
//sim.showChart = false; //showChart
//sim.showSensorValues = true; //showSensorValues
//sim.showSensorArray = false; //showSensorArray
//sim.showWorld = true; //showWorld
//sim.showOutput = true; //showOutput

document.getElementById('showChart').addEventListener('change', function (e) {
  if (e.target.checked) {
    sim.showChart = true;
    if (!($( "#plotlyDiv" ).length )) Plotly.newPlot('plotlyDiv', chart_lines);
    document.getElementById("charter").style.display = 'block';
  } else {
    sim.showChart = false;
    document.getElementById("charter").style.display = 'none';
    //$("#charter").empty();
  }
});

document.getElementById('showSensorValues').addEventListener('change', function (e) {
  if (e.target.checked) {
    sim.showSensorValues = true;
    document.getElementById("sensorDisplays").style.display = 'block';
  } else {
    sim.showSensorValues = false;
    document.getElementById("sensorDisplays").style.display = 'none';
  }
});

document.getElementById('showSensorArray').addEventListener('change', function (e) {
  if (e.target.checked) {
    sim.showSensorArray = true;
    document.getElementById("sensorArray").style.display = 'block';
  } else {
    sim.showSensorArray = false;
    document.getElementById("sensorArray").style.display = 'none';
  }
});

document.getElementById('showWorld').addEventListener('change', function (e) {
  if (e.target.checked) {
    sim.showWorld = true;
    document.getElementById("field").style.display = 'block';
  } else {
    sim.showWorld = false;
    document.getElementById("field").style.display = 'none';

  }
});

document.getElementById('showOutput').addEventListener('change', function (e) {
  if (e.target.checked) {
    sim.showOutput = true;
    document.getElementById("output").style.display = 'block';
  } else {
    sim.showOutput = false;
    document.getElementById("output").style.display = 'none';
  }
});

document.getElementById('download').addEventListener('click', function () {
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/x-python;base64,' + btoa(element.prog);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'robot.py';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
});

document.getElementById('upload').addEventListener('click', function () {
  var hiddenElement = document.createElement('input');
  hiddenElement.type = 'file';
  hiddenElement.accept = 'text/x-python,.py';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
  hiddenElement.addEventListener('change', function (e) {
    var reader = new FileReader();
    reader.onload = function () {
      element.prog = this.result;
    };
    reader.readAsText(e.target.files[0]);
  });
});

document.getElementById('robotPreconfig').addEventListener('change', function () {
  var robotSpec = sim.default_robot_spec;
  var preconfig = document.getElementById('robotPreconfig').value;
  //TO DO - need to capture current robot location then reset to that
  if (preconfig == 'Default_Robot'){
    robotSpecs = sim.default_robot_spec;
  } else if ((preconfig == 'Small_Robot') || (preconfig == 'Small_Robot_Wide_Eyes') ) {
      robotSpecs = {
        "wheeldiameter": 28,
        "wheelSpacing": 90,
        "wheelNoise": 0,
        "back": -60,
        "pen": {
          "x": 0,
          "y": 0,
          "color": "red",
          "width": 6
        },
        "weight": "weightless",
        "sensorNoise": 0,
        "sensor1": {
          "enabled": true,
          "x": -10,
          "y": 15,
          "diameter": 10
        },
        "sensor2": {
          "enabled": true,
          "x": 10,
          "y": 15,
          "diameter": 10
        },
        "ultrasonic": {
          "enabled": true,
          "x": 0,
          "y": 10,
          "angle": 0,
          "noise": 0
        },
        "gyro": {
          "enabled": true
        }
      };
  } else robotSpecs = sim.default_robot_spec;

  if (preconfig == 'Small_Robot_Wide_Eyes') {
    robotSpecs.sensor1.x = -30;
    robotSpecs.sensor2.x = 30;
  }

  if (preconfig == 'Sensor_Diameter_Config') {
    robotSpecs.sensor1.diameter = 30;
    robotSpecs.sensor2.diameter = 10;
  }

  sim.loadRobot(robotSpecs);
  sim.drawAll();
});

document.getElementById('obstaclesPreset').addEventListener('change', function () {
  var preset = document.getElementById('obstaclesPreset').value;
  var obstacles = ''
  if (preset=='Central_post') {
    obstacles = '[[900, 500, 200, 200]]'
  } else if (preset=='Square_posts') {
    obstacles = '[[500, 200, 100, 100], [500, 700, 100, 100], [1500, 200, 100, 100], [1500, 700, 100, 100]]'
  } else if (preset =='Wall'){
    obstacles = '[[1500, 200, 200, 800]]'
  } else if (preset == 'Square'){

  } else if (preset == 'U') {

  } else if (preset == 'L') {

  } else if (preset=='maze') {
    // TO DO
  }
  document.getElementById('obstaclesConfiguratorEditor').value = obstacles;
});

//var imagepath = '/notebooks/backgrounds/'
var imagepath = '/'+window.location.pathname.split('/')[1]+'/backgrounds/'

//sim.loadBackground(imagepath+'WRO-2019-Regular-Junior.jpg');
document.getElementById('map').addEventListener('change', function () {
  var map = document.getElementById('map').value;

  if (map == 'WRO_2019_Regular_Junior') {
    sim.loadBackground(imagepath + 'WRO-2019-Regular-Junior.jpg');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(2215, 150, 90, true);

  } else if (map == 'Loop') {
    sim.loadBackground(imagepath + '_loop.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(1000, 500, 90, true);
    
  } else if (map == 'Two_shapes') {
    sim.loadBackground(imagepath + '_two_shapes.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(1000, 500, 90, true);
    
  } else if (map == 'Grey_bands') {
    sim.loadBackground(imagepath + '_greys.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(400, 500, 0, true);
  } else if (map == 'Linear_grey') {
    sim.loadBackground(imagepath + '_linear_grey.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(1000, 50, 90, true);
  } else if (map == 'Radial_grey') {
    //Load background
    sim.loadBackground(imagepath + '_radial_grey.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    
    //Update robot config
    sim.robotSpecs.sensor1.x = -60;
    sim.robotSpecs.sensor2.x = 60;
    sim.loadRobot(sim.robotSpecs);
    sim.drawAll();

    //Set initial location
    setPos(100, 400, 0, true);
  } else if (map == 'Radial_red') {
    //Load background
    sim.loadBackground(imagepath + '_radial_red.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    //Set initial location
    setPos(100, 400, 0, true);
  } else if (map == 'Coloured_bands') {
    sim.loadBackground(imagepath + '_coloured_bands.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(500, 500, 0, true);
  } else if (map == 'Rainbow_bands') {
      sim.loadBackground(imagepath + '_rainbow_bands.png');
      sim.clearObstacles();
      sim.clearObstaclesLayer();
      setPos(150, 500, 0, true);
  } else if (map == 'Grey_and_black') {
    sim.loadBackground(imagepath + '_grey_and_black.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(500, 250, 90, true);
  } else if (map == 'Lollipop') {
    sim.loadBackground(imagepath + '_line_follower_track.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(750, 375, -180, true);

  } else if (map == 'Noisy_Lollipop') {
    sim.loadBackground(imagepath + '_noisy_line_follower_track.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(750, 375, -180, true);
  } else if (map == 'Testcard') {
    sim.loadBackground(imagepath + 'FuBK_testcard_vectorized.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(500, 250, 90, true);
  } else if (map == 'Square') {
    sim.loadBackground(imagepath + '_square.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(775, 500, -90, true);

  } else if (map == 'WRO_2018_Regular_Junior') {
    sim.loadBackground(imagepath + 'WRO-2018-Regular-Junior.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(1181, 150, 90, true);

  } else if (map == 'FLL_2019_City_Shaper') {
    sim.loadBackground(imagepath + 'FLL2019.jpg');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(500, 150, 90, true);

  } else if (map == 'FLL_2018_Into_Orbit') {
    sim.loadBackground(imagepath + 'FLL2018.jpg');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(150, 150, 90, true);

  } else if (map == 'Line_Following_Test') {
    sim.loadBackground(imagepath + 'Line_Following_Test.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(141, 125, 90, true);

  } else if (map == 'Junction_Handling_Test') {
    sim.loadBackground(imagepath + 'Junction_Handling_Test.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(698, 130, 90, true);
  } else if (map == 'Sensor_Diameter_Test') {
    sim.loadBackground(imagepath + '_sensor_diameter_test.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(550, 450, 90, true);
  }  else if (map == 'Thruxton_Circuit') {
      sim.loadBackground(imagepath + 'thruxton_track.png');
      sim.clearObstacles();
      sim.clearObstaclesLayer();
      setPos(457, 242, 120, true);
    }  else if (map == 'MNIST_Digits') {
      sim.loadBackground(imagepath + '_number_sheet.png');
      sim.clearObstacles();
      sim.clearObstaclesLayer();
      setPos(426, 56, 90, true);
  } else if (map == 'Obstacles_Test') {
    sim.loadBackground(imagepath + 'Obstacles_Test.png');
    setPos(121, 125, 90, true);
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
  }
  else if (map == 'Topo_map') {
    sim.loadBackground(imagepath + 'Topo_map.png');
    sim.clearObstacles();
    sim.clearObstaclesLayer();
    setPos(698, 130, 90, true);
  } else if (map == 'Upload Image (2362x1143px)...') {
    console.log('upload');
    var hiddenElement = document.createElement('input');
    hiddenElement.type = 'file';
    hiddenElement.accept = 'image/*';
    console.log(hiddenElement);
    hiddenElement.dispatchEvent(new MouseEvent('click'));
    hiddenElement.addEventListener('change', function (e) {
      var reader = new FileReader();
      reader.onload = function () {
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
    setPos(2362/2, 1143/2, 0, true);
  }
});

document.getElementById('robotConfiguratorOpen').addEventListener('click', function () {
  document.getElementById('robotConfiguratorEditor').value = JSON.stringify(sim.robotSpecs, null, 2);
  document.getElementById('robotConfigurator').classList.remove('closed');
});
document.getElementById('robotConfiguratorCancel').addEventListener('click', function () {
  document.getElementById('robotConfigurator').classList.add('closed');
});

document.getElementById('robotConfiguratorApply').addEventListener('click', function () {
  var robotSpecs = JSON.parse(document.getElementById('robotConfiguratorEditor').value);
  sim.loadRobot(robotSpecs);
  // TO DO - need a standalone configuration update function we can call
  //sim.sensorArrayLeft.height = sim.robotSpecs.sensor1.diameter;
  //sim.sensorArrayLeft.width = sim.robotSpecs.sensor1.diameter;
  //sim.sensorArrayRight.height = sim.robotSpecs.sensor2.diameter;
  //sim.sensorArrayRight.width = sim.robotSpecs.sensor2.diameter;
  sim.resetSensorDiameter();
  sim.bigDraw();
  document.getElementById('robotConfigurator').classList.add('closed');
});

document.getElementById('robotConfiguratordownload').addEventListener('click', function () {
  var robotSpecs = document.getElementById('robotConfiguratorEditor').value
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:application/json;base64,' + btoa(robotSpecs);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'robot_config.json';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
});

document.getElementById('penColor').addEventListener('change', function () {
  sim.robotSpecs.pen.color = document.getElementById('penColor').value
});

document.getElementById('robotConfiguratorupload').addEventListener('click', function () {
  var hiddenElement = document.createElement('input');
  hiddenElement.type = 'file';
  hiddenElement.accept = 'application/json,.json,.js';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
  hiddenElement.addEventListener('change', function (e) {
    var reader = new FileReader();
    reader.onload = function () {
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
    .then(function (response) {
      response.text()
        .then(function (text) {
          content.innerHTML = text;
        });
    })
}

function rand() {
  return Math.random();
}

var chart_sensor_traces = [
  { id: "chart_ultrasound", tag: "Ultrasonic:", color: "#FF0000" },
  { id: "chart_left_light", tag: "Light_left:", color: "#CA80F6" },
  { id: "chart_right_light", tag: "Light_right:", color: "#CAF680" },
  { id: "chart_colour", tag: "Colour:", color: "#00FF00" },
  { id: "chart_gyro", tag: "Gyro:", color: "#0000FF" },
  { id: "chart_left_wheel", tag: "Wheel_left:", color: "#99FF00" },
  { id: "chart_right_wheel", tag: "Wheel_right:", color: "#0099FF" }
]



var chart_lines = [];

function set_chartlines(){
  chart_lines = []
  for (var j = 0; j < chart_sensor_traces.length; j++) {
    _tmp = {
      y: [],
      mode: 'lines',
      line: { color: chart_sensor_traces[j].color }
    }
    chart_lines.push(_tmp);
  }
}
set_chartlines()

//Plotly.newPlot('plotlyDiv', chart_lines);

// What's the following for?
var plotly_cnt = 0;


// Output something to the display window
function outf(text) {
  var mypre = document.getElementById("output");

  // Can we somehow stream data back to py context?
  report_callback(text);
  // Can we also send something back to py context and then get something back from py in return?
  // Note there are quite a lot of delays in round trip
  if ((sim.collaborative) && (text.trim()!='')) report_callback_responder(text);
  if (text.startsWith('image_data')) {
    // TO DO  - channel left or right
    // pass the image array
    var clock = sim.clock
    _sd1 = sim.robotStates.sensor1dataArray;
    _sd2 = sim.robotStates.sensor2dataArray;
    report_image_data('left '+_sd1+' '+clock);
    //report_image_data('right '+_sd2+' '+clock);
    mypre.innerHTML = mypre.innerHTML + "Image data logged...";
    mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
    return;
  }

  if (sim.showChart) {
    // Try updating the chart
    // TO DO - more chart trace updates
    _text = text.split(" ")
    var _chart_vals = []
    var _chart_traces = []
    // What we need to do is pass all sensor vals in a single message
    // If there is a message, decode it in one go and push the values to the trace
    // Create some sort of logger function in robot control programme at start
    // andd then call that as required.
    for (var j = 0; j < chart_sensor_traces.length; j++) {
      if ((document.getElementById(chart_sensor_traces[j].id).checked) && (_text[0] == chart_sensor_traces[j].tag)) {
        _chart_vals.push([parseFloat(_text[1])]);
      } else {
        //_chart_vals.push([parseFloat(0)])
        var _val = sim.previousChartTraces[j] || [0];
        _chart_vals.push([parseFloat(_val[0])]);
      }
      _chart_traces.push(j)
    }
    sim.previousChartTraces = _chart_vals;
    Plotly.extendTraces('plotlyDiv', {
      y: _chart_vals
    }, _chart_traces)
  }

  mypre.innerHTML = mypre.innerHTML + text;
  mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
  if (sim.collaborative) {
    if (typeof element !== 'undefined') {
      if (typeof element.response !== 'undefined') {
        // The response element contains state sent from the Python environment
        var response = element.response;
        if (response != '') { 
          // For now, just show what we've got back from py
          mypre.innerHTML = mypre.innerHTML + response;
          mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
          sim.pyState = response;
          //The sim.pyState can be then referenced in sim py code:
          //import ev3dev2_glue as glue
          //print('gs',glue.pyState())
        }
        element.response = '';
      }
    }
  }

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
  
  if (sim.showChart) Plotly.newPlot('plotlyDiv', chart_lines);

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
  Sk.configure({ output: outf, read: builtinRead });

  var myPromise = Sk.misceval.asyncToPromise(
    function () {
      return Sk.importMainWithBody("<stdin>", false, prog, true);
    },
    {
      '*': interruptHandler
    }
  );
  myPromise.then(
    function (mod) {
      sim.stopAnimation();
      Sk.running = false;
    },
    // The following handles errors that arise when executing
    // a robot control program in the simulator.
    // Is there a way we can get error messages displayed in the output area
    // of the code cell whose downloaded code we are running?
    // Related issue: https://github.com/innovationOUtside/nbev3devsim/issues/49
    function (err) {
      Sk.running = false;
      sim.stopAnimation();
      var mypre = document.getElementById("output");
      mypre.innerHTML = mypre.innerHTML + '<span class="error">' + err.toString() + '</span>';
      mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
    }
  );
}

document.getElementById('runCode').addEventListener('click', runit);

function stopit() {
  sim.stopAnimation();
  Sk.hardInterrupt = true;
}

document.getElementById('stop').addEventListener('click', stopit );

document.getElementById('clearTrace').addEventListener('click', function() {sim.clearPenLayer()} )

function clearChart(){
  sim.previousChartTraces = [];
  set_chartlines()
  Plotly.newPlot('plotlyDiv', chart_lines);
}

document.getElementById('clearChart').addEventListener('click', function() {
  clearChart();
} )



//Initialisation
var event = new Event('change');
document.getElementById('showChart').dispatchEvent(event);
event = new Event('change');
document.getElementById('showWorld').dispatchEvent(event);
event = new Event('change');
document.getElementById('showOutput').dispatchEvent(event);
event = new Event('change');
document.getElementById('showSensorValues').dispatchEvent(event);
event = new Event('change');
document.getElementById('showSensorArray').dispatchEvent(event);

