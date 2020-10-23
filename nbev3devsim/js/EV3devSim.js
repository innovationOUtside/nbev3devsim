console.debug("Loading ev3devsim...");


//this is actually from studio.js
// to do while dragging we need to suppress move
function setSliderVal(el, val) {
  var magic_slider = document.getElementById(el + "-slider");
  val = parseInt(val);
  if ((val >= parseInt(magic_slider.min)) && (val <= parseInt(magic_slider.max))) {
      magic_slider.value = val;
      var magic_event = new Event('input');
      magic_slider.dispatchEvent(magic_event);
  }
}


/* exported EV3devSim */


// +
function EV3devSim(id) {

  console.log("Setting up EV3devSim");

  var self = this;

  const WIDTH = 2362;
  const HEIGHT = 1143;
  const OFFSET = 200;

  const BACK = -120;

  const WHEEL_WIDTH = 20;
  const SENSOR_WIDTH = 30;
  const SENSOR_DIAMETER = 20;
  const LIGHT_SENSOR_DEFAULT_ABS = 20;

  const ULTRASONIC_RANGE = 2550;

  self.uiSettings = {};
  self.uiSettings.audio = { enabled: true, error_ping: true };
  self.uiSettings.display = { sensorArray: false };
  self.audioCtx = null;

  var ULTRASONIC_RAYS = [-21, -14, -7, 0, 7, 14, 21];
  for (let i = 0; i < ULTRASONIC_RAYS.length; i++) {
    ULTRASONIC_RAYS[i] = ULTRASONIC_RAYS[i] / 180 * Math.PI;
  }
  const ULTRASONIC_INCIDENT_LOWER_LIMITS = 40 / 180 * Math.PI;
  const ULTRASONIC_INCIDENT_UPPER_LIMITS = 140 / 180 * Math.PI;

  const WALLS = [
    [[0, 0], [WIDTH, 0]],
    [[0, 0], [0, HEIGHT]],
    [[0, HEIGHT], [WIDTH, HEIGHT]],
    [[WIDTH, 0], [WIDTH, HEIGHT]]
  ];

  self.obstacles = [];

  self.default_robot_spec = {
    wheeldiameter: 56,
    wheelSpacing: 180,
    wheelNoise: 0,
    back: BACK,
    pen: {
      x: 0,
      //y: BACK,
      y: 0,
      color: 'red',
      width: 6
    },
    weight: 'medium',
    // This is a convenience value generic to sensor1 and sensor2
    sensorNoise: 0,
    sensor1: {
      enabled: true,
      x: -LIGHT_SENSOR_DEFAULT_ABS,
      y: 30,
      diameter: SENSOR_DIAMETER,
    },
    sensor2: {
      enabled: true,
      x: LIGHT_SENSOR_DEFAULT_ABS,
      y: 30,
      diameter: SENSOR_DIAMETER
    },
    ultrasonic: {
      enabled: true,
      x: 0,
      y: 20,
      angle: 0,
      noise: 0
    },
    gyro: {
      enabled: true
    }
  };
  // Simulator scheduling:
  //
  // A timer calls the animate function every (1000 / fps) seconds
  // The fps rate is therefore the frame period in ms(?)
  self.fps = 30;
  // The clock is a counter that increments for every call of the animate function
  self.clock = 0;
  // The timer is used by setInterval / clearInterval to manage
  // a recurring timer that is used to trigger animation frame updates
  self.timer = null;

  self.wallsPresent = true;
  self.obstaclesPresent = true;
  self.drawUltrasonic = false;
  self.collaborative = false;

  //Should this be part of robotStates?
  self.previousChartTraces = [];

  self.measurePts = [null, null];

  console.debug("Creating canvas");


  // TO DO - need to handle canvas better
  // Possible: https://konvajs.org/docs/sandbox/Canvas_Scrolling.html

  // Create the canvas and load into provided element
  this.loadCanvas = function (id) {

    function simpleLayerSetup(layerId, w = WIDTH, h = HEIGHT) {
      console.debug("Setting up", layerId);
      var el = document.createElement('canvas');
      el.setAttribute('id', layerId);
      el.width = w;
      el.height = h;
      el.style.position = 'absolute';
      el.style.transform = scaler;
      el.style.transformOrigin = '0 0';
      return el
    }
    /*
    self.background = document.createElement('canvas');
    self.obstaclesLayer = document.createElement('canvas');
    self.lightLayer = document.createElement('canvas');
    self.foreground = document.createElement('canvas');
    self.penLayer = document.createElement('canvas');
    self.measurementLayer = document.createElement('canvas');


    self.background.setAttribute('id', 'background');
    self.penLayer.setAttribute('id', 'penLayer');
    self.obstaclesLayer.setAttribute('id', 'obstaclesLayer');
    self.lightLayer.setAttribute('id', 'lightLayer');
    self.foreground.setAttribute('id', 'foreground');
    self.measurementLayer.setAttribute('id', 'measurementLayer');

    self.background.width = WIDTH;
    self.background.height = HEIGHT;
    self.obstaclesLayer.width = WIDTH;
    self.obstaclesLayer.height = HEIGHT;
    self.lightLayer.width = WIDTH;
    self.lightLayer.height = HEIGHT;
    self.foreground.width = WIDTH;
    self.foreground.height = HEIGHT;
    self.measurementLayer.width = WIDTH;
    self.measurementLayer.height = HEIGHT;

    // pen down
    self.penLayer.width = WIDTH;
    self.penLayer.height = HEIGHT;
    */
    self.scale = 0.3;

    // TO DO - can we perhaps associate this with a slider
    // and reflow all canvas elements if we change the zoom level?
    scaler = 'scale(' + self.scale + ')';

    self.background = simpleLayerSetup('background');
    self.penLayer = simpleLayerSetup('penLayer');
    self.obstaclesLayer = simpleLayerSetup('obstaclesLayer');
    self.lightLayer = simpleLayerSetup('lightLayer');
    self.foreground = simpleLayerSetup('foreground');
    self.measurementLayer = simpleLayerSetup('measurementLayer');

    console.debug("Layer setup complete");
    /*
    self.background.style.position = 'absolute';
    self.background.style.transform = scaler;
    self.background.style.transformOrigin = '0 0';

    self.penLayer.style.position = 'absolute';
    self.penLayer.style.transform = scaler;
    self.penLayer.style.transformOrigin = '0 0';

    self.obstaclesLayer.style.position = 'absolute';
    self.obstaclesLayer.style.transform = scaler;
    self.obstaclesLayer.style.transformOrigin = '0 0';

    self.lightLayer.style.position = 'absolute';
    self.lightLayer.style.transform = scaler;
    self.lightLayer.style.transformOrigin = '0 0';

    self.foreground.style.position = 'absolute';
    self.foreground.style.transform = scaler;
    self.foreground.style.transformOrigin = '0 0';

    self.measurementLayer.style.position = 'absolute';
    self.measurementLayer.style.transform = scaler;
    self.measurementLayer.style.transformOrigin = '0 0';
    */

    self.measurementLayer.style.cursor = 'crosshair';

    console.debug("Now trying to set up sensor arrays...");

    function sensorArraySetup(elId) {
      console.debug("Setting up", elId);
      var el = document.getElementById(elId);
      //No smoothing - see pixels cleanly
      //https://miguelmota.com/blog/pixelate-images-with-canvas/
      el.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
        'image-rendering: -moz-crisp-edges;' + // FireFox
        'image-rendering: -o-crisp-edges;' +  // Opera
        'image-rendering: -webkit-crisp-edges;' + // Chrome
        'image-rendering: crisp-edges;' + // Chrome
        'image-rendering: -webkit-optimize-contrast;' + // Safari
        'image-rendering: pixelated; ' + // Future browsers
        '-ms-interpolation-mode: nearest-neighbor;'; // IE
      el.height = SENSOR_DIAMETER;
      el.width = SENSOR_DIAMETER;
      return el
    }

    function initSensorArrayCtx(el) {
      var ctx = el.getContext('2d');
      ctx.webkitImageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      ctx.imageSmoothingEnabled = false;
      return ctx
    }

    self.sensorArrayLeft = sensorArraySetup('sensorArrayLeft');
    self.sensorArrayLeftCtx = initSensorArrayCtx(self.sensorArrayLeft);

    self.sensorArrayRight = sensorArraySetup('sensorArrayRight');
    self.sensorArrayRightCtx = initSensorArrayCtx(self.sensorArrayRight);


    /*self.sensorArrayLeft = document.getElementById('sensorArrayLeft');
     self.sensorArrayLeft.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
                          'image-rendering: -moz-crisp-edges;' + // FireFox
                          'image-rendering: -o-crisp-edges;' +  // Opera
                          'image-rendering: -webkit-crisp-edges;' + // Chrome
                          'image-rendering: crisp-edges;' + // Chrome
                          'image-rendering: -webkit-optimize-contrast;' + // Safari
                          'image-rendering: pixelated; ' + // Future browsers
                          '-ms-interpolation-mode: nearest-neighbor;'; // IE
     self.sensorArrayLeft.height = SENSOR_DIAMETER;
     self.sensorArrayLeft.width = SENSOR_DIAMETER;
     self.sensorArrayLeftCtx = self.sensorArrayLeft.getContext('2d');
     self.sensorArrayLeftCtx.webkitImageSmoothingEnabled = false;
     self.sensorArrayLeftCtx.mozImageSmoothingEnabled = false;
     self.sensorArrayLeftCtx.msImageSmoothingEnabled = false;
     self.sensorArrayLeftCtx.imageSmoothingEnabled = false; */

    /*self.sensorArrayRight = document.getElementById('sensorArrayRight');
    self.sensorArrayRight.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
    'image-rendering: -moz-crisp-edges;' + // FireFox
    'image-rendering: -o-crisp-edges;' +  // Opera
    'image-rendering: -webkit-crisp-edges;' + // Chrome
    'image-rendering: crisp-edges;' + // Chrome
    'image-rendering: -webkit-optimize-contrast;' + // Safari
    'image-rendering: pixelated; ' + // Future browsers
    '-ms-interpolation-mode: nearest-neighbor;'; // IE
    self.sensorArrayRight.height = SENSOR_DIAMETER;
    self.sensorArrayRight.width = SENSOR_DIAMETER;
    self.sensorArrayRightCtx = self.sensorArrayRight.getContext('2d');
    self.sensorArrayRightCtx.webkitImageSmoothingEnabled = false;
    self.sensorArrayRightCtx.mozImageSmoothingEnabled = false;
    self.sensorArrayRightCtx.msImageSmoothingEnabled = false;
    self.sensorArrayRightCtx.imageSmoothingEnabled = false;
*/
    //self.background.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
    //'image-rendering: -moz-crisp-edges;' + // FireFox
    //'image-rendering: -o-crisp-edges;' +  // Opera
    //'image-rendering: -webkit-crisp-edges;' + // Chrome
    //'image-rendering: crisp-edges;' + // Chrome
    //'image-rendering: -webkit-optimize-contrast;' + // Safari
    //'image-rendering: pixelated; ' + // Future browsers
    //'-ms-interpolation-mode: nearest-neighbor;';

    console.debug("Setting up background ctx");
    self.backgroundCtx = self.background.getContext('2d');
    self.backgroundCtx.webkitImageSmoothingEnabled = false;
    self.backgroundCtx.mozImageSmoothingEnabled = false;
    self.backgroundCtx.msImageSmoothingEnabled = false;
    self.backgroundCtx.imageSmoothingEnabled = false;

    function canvasSimpleCtx(el, h = HEIGHT) {
      var ctx = el.getContext('2d');
      ctx.translate(0, h);
      ctx.scale(1, -1);
      return ctx
    }

    self.obstaclesLayerCtx = canvasSimpleCtx(self.obstaclesLayer);
    self.lightLayerCtx = canvasSimpleCtx(self.lightLayer);
    self.foregroundCtx = canvasSimpleCtx(self.foreground);
    self.penLayerCtx = canvasSimpleCtx(self.penLayer);
    /*
    self.obstaclesLayerCtx = self.obstaclesLayer.getContext('2d');
    self.obstaclesLayerCtx.translate(0, HEIGHT);
    self.obstaclesLayerCtx.scale(1, -1);

    self.lightLayerCtx = self.lightLayer.getContext('2d');
    self.lightLayerCtx.translate(0, HEIGHT);
    self.lightLayerCtx.scale(1, -1);

    self.foregroundCtx = self.foreground.getContext('2d');
    self.foregroundCtx.translate(0, HEIGHT);
    self.foregroundCtx.scale(1, -1);

    self.penLayerCtx = self.penLayer.getContext('2d');
    self.penLayerCtx.translate(0, HEIGHT);
    self.penLayerCtx.scale(1, -1);
    */

    console.debug("Setting up measurement layer");
    self.measurementLayerCtx = self.measurementLayer.getContext('2d');

    self.parent = document.getElementById(id);
    self.parent.appendChild(self.background);
    self.parent.appendChild(self.obstaclesLayer);
    //self.parent.appendChild(self.lightLayer);
    self.parent.appendChild(self.foreground);
    self.parent.appendChild(self.penLayer);

    self.parent.appendChild(self.measurementLayer);
    self.parent.style.width = WIDTH / 2;
    self.parent.style.height = HEIGHT / 2;

    //self.measurementLayer.addEventListener('click', self.measurementClick);
    //self.measurementLayer.addEventListener('mousemove', self.measurementMove);

    // listen for mouse events
    self.measurementLayer.addEventListener('mousedown', self.myDown);
    self.measurementLayer.addEventListener('mouseup', self.myUp);
    self.measurementLayer.addEventListener('mousemove', self.myMove);

  };

  console.debug("Canvas created");

  this.resetSensorDiameter = function () {
    self.sensorArrayLeft.height = self.robotSpecs.sensor1.diameter;
    self.sensorArrayLeft.width = self.robotSpecs.sensor1.diameter;
    self.sensorArrayRight.height = self.robotSpecs.sensor2.diameter;
    self.sensorArrayRight.width = self.robotSpecs.sensor2.diameter;
  };


  this.measurementClick = function (e) {
    var x = (e.pageX - this.offsetLeft) * 2;
    var y = (e.pageY - this.offsetTop) * 2;

    if (self.measurePts[0] == null) {
      self.measurePts[0] = [x, y];
    } else if (self.measurePts[1] == null) {
      self.measurePts[1] = [x, y];
      //self.clearMeasurementLayer();
      //self.drawMeasurementLayer(self.measurePts[0], [x, y]);
    } else {
      self.measurePts = [null, null];
      //self.clearMeasurementLayer();
    }
  };

  this.measurementMove = function (e) {
    var x = (e.pageX - this.offsetLeft) * 2;
    var y = (e.pageY - this.offsetTop) * 2;

    if (self.measurePts[0] != null && self.measurePts[1] == null) {
      self.clearMeasurementLayer();
      self.drawMeasurementLayer(self.measurePts[0], [x, y]);
    }
  };

  this.clearMeasurementLayer = function () {
    self.measurementLayerCtx.clearRect(0, 0, WIDTH, HEIGHT);
  };

  this.drawMeasurementLayer = function (pt1, pt2) {
    var dx = pt2[0] - pt1[0];
    var dy = pt2[1] - pt1[1];
    var dist = (dx ** 2 + dy ** 2) ** 0.5;

    var angle = Math.atan(-dy / dx) / Math.PI * 180;
    if (dx < 0) {
      angle = 180 + angle;
    } else if (-dy < 0) {
      angle = 360 + angle;
    }

    self.measurementLayerCtx.save();
    self.measurementLayerCtx.strokeStyle = 'white';
    self.measurementLayerCtx.lineWidth = 4;
    self.measurementLayerCtx.beginPath();
    self.measurementLayerCtx.moveTo(...pt1);
    self.measurementLayerCtx.lineTo(...pt2);
    self.measurementLayerCtx.stroke();
    self.measurementLayerCtx.strokeStyle = 'black';
    self.measurementLayerCtx.lineWidth = 2;
    self.measurementLayerCtx.beginPath();
    self.measurementLayerCtx.moveTo(...pt1);
    self.measurementLayerCtx.lineTo(...pt2);
    self.measurementLayerCtx.stroke();
    var textHeight = 28;
    self.measurementLayerCtx.font = textHeight + 'px sans-serif';

    var textX, textY;
    var text = Math.round(dist) + 'mm ' + Math.round(angle) + '\xB0';
    var textWidth = self.measurementLayerCtx.measureText(text).width;

    if (pt2[0] > WIDTH / 2) {
      textX = pt2[0] - textWidth - 10;
    } else {
      textX = pt2[0] + 10;
    }
    if (pt2[1] > HEIGHT / 2) {
      textY = pt2[1] - 10;
    } else {
      textY = pt2[1] + textHeight + 10;
    }
    self.measurementLayerCtx.fillStyle = 'rgba(255,255,255,0.5)';
    self.measurementLayerCtx.fillRect(textX - 4, textY - textHeight, textWidth + 8, textHeight + 4);
    self.measurementLayerCtx.fillStyle = 'black';
    self.measurementLayerCtx.fillText(text, textX, textY);
    self.measurementLayerCtx.restore();
  };

  this.setWallsPresent = function (value) {
    if (value) {
      // TO DO - fix style
      //self.parent.style.border = 'solid 4px black';
      self.wallsPresent = true;
    } else {
      // TO DO - fix style
      // self.parent.style.border = 'solid 4px #fafafa';
      self.wallsPresent = false;
    }
  };

  // Set the background
  this.loadBackground = function (imgURL) {
    var img = new Image();   // Create new img element
    img.addEventListener('load', function () {
      self.backgroundCtx.drawImage(img, 0, 0);
      self.getColorSensorsValues();
      self.bigDraw();
    }, false);
    img.src = imgURL;
  };

  this.clearPenLayer = function () {
    self.penLayerCtx.clearRect(0, 0, WIDTH, HEIGHT);
  };

  // Clear the background
  this.clearBackground = function () {
    self.backgroundCtx.save();
    self.backgroundCtx.fillStyle = 'white';
    self.backgroundCtx.fillRect(0, 0, WIDTH, HEIGHT);
    self.backgroundCtx.restore();
  };

  // Get robot acceleration
  this.getAcceleration = function () {
    var weight;

    if (typeof self.robotSpecs.weight == 'undefined' || self.robotSpecs.weight === null || self.robotSpecs.weight === '') {
      weight = 6;
    } else if (self.robotSpecs.weight == 'weightless') {
      weight = 0;
    } else if (self.robotSpecs.weight == 'light') {
      weight = 3;
    } else if (self.robotSpecs.weight == 'medium') {
      weight = 6;
    } else if (self.robotSpecs.weight == 'heavy') {
      weight = 9;
    } else {
      weight = self.robotSpecs.weight;
    }

    return 5000 / weight / self.fps;
  };

  // Create robot on off-screen canvas
  this.loadRobot = function (robotSpecs) {
    // Load default robot specs if not provided
    if (typeof robotSpecs === 'undefined') {
      robotSpecs = self.default_robot_spec;
    }
    self.robotSpecs = robotSpecs;

    // Initialize robot states
    self.robotStates = {
      x: OFFSET, //WIDTH / 2,
      y: HEIGHT - OFFSET, //HEIGHT / 2,
      _x: OFFSET,
      _y: HEIGHT - OFFSET,
      angle: 0,
      _angle: 0,
      penDown: false,
      leftWheel: {
        polarity: 'normal',
        pos: 0,
        time_sp: 0,
        position_sp: 0,
        speed_sp: 0,
        speed: 0,
        command: '',
        state: ''
      },
      rightWheel: {
        polarity: 'normal',
        pos: 0,
        time_sp: 0,
        position_sp: 0,
        speed_sp: 0,
        speed: 0,
        command: '',
        state: ''
      },
      sensor1: [0, 0, 0],
      sensor2: [0, 0, 0],
      sensor1dataArray: '',
      sensor2dataArray: '',
      gyro: [0, 0], // angle, rate
      ultrasonic: 0
    };

    var RIGHT_LIMIT = robotSpecs.wheelSpacing / 2 + WHEEL_WIDTH / 2;
    var LEFT_LIMIT = -robotSpecs.wheelSpacing / 2 - WHEEL_WIDTH / 2;
    var TOP_LIMIT = robotSpecs.wheeldiameter / 2;
    var BOTTOM_LIMIT = -robotSpecs.wheeldiameter / 2;

    if (typeof robotSpecs.sensor1 !== 'undefined') {
      RIGHT_LIMIT = Math.max(RIGHT_LIMIT, robotSpecs.sensor1.x + SENSOR_WIDTH / 2);
      LEFT_LIMIT = Math.min(LEFT_LIMIT, robotSpecs.sensor1.x - SENSOR_WIDTH / 2);
      TOP_LIMIT = Math.max(TOP_LIMIT, robotSpecs.sensor1.y + SENSOR_WIDTH / 2);
      BOTTOM_LIMIT = Math.min(BOTTOM_LIMIT, robotSpecs.sensor1.y - SENSOR_WIDTH / 2);
    }
    if (typeof robotSpecs.sensor2 !== 'undefined') {
      RIGHT_LIMIT = Math.max(RIGHT_LIMIT, robotSpecs.sensor2.x + SENSOR_WIDTH / 2);
      LEFT_LIMIT = Math.min(LEFT_LIMIT, robotSpecs.sensor2.x - SENSOR_WIDTH / 2);
      TOP_LIMIT = Math.max(TOP_LIMIT, robotSpecs.sensor2.y + SENSOR_WIDTH / 2);
      BOTTOM_LIMIT = Math.min(BOTTOM_LIMIT, robotSpecs.sensor2.y - SENSOR_WIDTH / 2);
    }
    if (typeof robotSpecs.back !== 'undefined') {
      BOTTOM_LIMIT = Math.min(BOTTOM_LIMIT, robotSpecs.back);
    }

    var width = RIGHT_LIMIT - LEFT_LIMIT;
    var height = TOP_LIMIT - BOTTOM_LIMIT;

    self.robotSpecs.width = width;
    self.robotSpecs.height = height;

    self.robotCanvas = document.createElement('canvas');
    self.robotCanvas.id = 'simone';
    self.robotCanvas.width = width;
    self.robotCanvas.height = height;


    var ctx = self.robotCanvas.getContext('2d');

    // Robot Body
    ctx.fillStyle = 'orange';
    ctx.fillRect(0, 0, self.robotCanvas.width, self.robotCanvas.height); // bounding box

    // Find origin
    self.ROBOT_X_CENTER = -LEFT_LIMIT;
    self.ROBOT_Y_CENTER = -BOTTOM_LIMIT;

    // Draw wheels
    ctx.fillStyle = 'black';
    ctx.fillRect(
      self.ROBOT_X_CENTER - (robotSpecs.wheelSpacing / 2) - (WHEEL_WIDTH / 2),
      self.ROBOT_Y_CENTER - (robotSpecs.wheeldiameter / 2),
      WHEEL_WIDTH,
      robotSpecs.wheeldiameter
    );
    ctx.fillRect(
      self.ROBOT_X_CENTER + (robotSpecs.wheelSpacing / 2) - (WHEEL_WIDTH / 2),
      self.ROBOT_Y_CENTER - (robotSpecs.wheeldiameter / 2),
      WHEEL_WIDTH,
      robotSpecs.wheeldiameter
    );

    // Draw sensors
    ctx.fillStyle = 'gray';
    ctx.fillRect(
      self.ROBOT_X_CENTER + robotSpecs.sensor1.x - (SENSOR_WIDTH / 2),
      self.ROBOT_Y_CENTER + robotSpecs.sensor1.y - (SENSOR_WIDTH / 2),
      SENSOR_WIDTH,
      SENSOR_WIDTH
    );
    if (typeof robotSpecs.sensor2 != 'undefined') {
      ctx.fillRect(
        self.ROBOT_X_CENTER + robotSpecs.sensor2.x - (SENSOR_WIDTH / 2),
        self.ROBOT_Y_CENTER + robotSpecs.sensor2.y - (SENSOR_WIDTH / 2),
        SENSOR_WIDTH,
        SENSOR_WIDTH
      );
    }

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(
      self.ROBOT_X_CENTER + robotSpecs.sensor1.x,
      self.ROBOT_Y_CENTER + robotSpecs.sensor1.y,
      robotSpecs.sensor1.diameter / 2,
      0, 2 * Math.PI
    );
    ctx.fill();
    ctx.stroke();

    if (typeof robotSpecs.sensor2 != 'undefined') {
      ctx.beginPath();
      ctx.arc(
        self.ROBOT_X_CENTER + robotSpecs.sensor2.x,
        self.ROBOT_Y_CENTER + robotSpecs.sensor2.y,
        robotSpecs.sensor2.diameter / 2,
        0, 2 * Math.PI
      );
      ctx.fill();
      ctx.stroke();
    }
    self.resetSensorDiameter();
  };

  this.setRobotPos = function (x, y, angle) {
    self.robotStates.x = x;
    self.robotStates.y = y;
    self.robotStates.angle = angle;
  };

  this.resetWheel = function (side) {
    var wheel;

    if (side == 'left') {
      wheel = self.robotStates.leftWheel;
    } else if (side == 'right') {
      wheel = self.robotStates.rightWheel;
    }

    wheel.pos = 0;
    wheel.speed_sp = 0;
    wheel.position_sp = 0;
    wheel.time_sp = 0;
    wheel.speed = 0;
    wheel.state = '';
    wheel.polarity = 'normal';
  };

  this.reset = function () {
    self.resetWheel('left');
    self.resetWheel('right');
    self.getColorSensorsValues();
    self.calcUltrasonic();
    self.robotStates.gyro = [0, 0];
    delete self.robotStates.pen_prev_x;
    delete self.robotStates.pen_prev_y;
  };

  this.calcWheelDist = function (wheel) {
    var period = 1 / self.fps;
    var dist = 0;
    var degrees = wheel.speed * period;

    if (
      wheel.command == 'run-forever'
      || (wheel.command == 'run-timed' && self.clock < wheel.time_target)
    ) {
      dist = (degrees / 360) * (self.robotSpecs.wheeldiameter * Math.PI);
      wheel.pos += degrees;

    } else if (
      wheel.command == 'run-to-rel-pos'
      || wheel.command == 'run-to-abs-pos'
    ) {
      if (wheel.position_sp < 0) {
        degrees = -degrees;
      }
      wheel.pos += degrees;

      dist = (degrees / 360) * (self.robotSpecs.wheeldiameter * Math.PI);
      if (
        (wheel.position_sp >= 0 && wheel.pos > wheel.position_target)
        || (wheel.position_sp < 0 && wheel.pos < wheel.position_target)
      ) {
        wheel.state = '';
        return 0;
      }
      wheel.pos += degrees;
    } else {
      wheel.state = '';
      return 0;
    }

    if (wheel.polarity == 'inversed') {
      return -dist;
    } else {
      return dist;
    }
  };

  this.setWheelSpeed = function (wheel) {
    if (wheel.speed < wheel.speed_sp) {
      wheel.speed += self.getAcceleration();
      if (wheel.speed > wheel.speed_sp) {
        wheel.speed = wheel.speed_sp;
      }
    } else if (wheel.speed > wheel.speed_sp) {
      wheel.speed -= self.getAcceleration();
      if (wheel.speed < wheel.speed_sp) {
        wheel.speed = wheel.speed_sp;
      }
    }
    // The max speed seems to be set to 1050 in motor.py 
    // Can we access it programmatically?
    var _tmp = wheel.speed + self.simpleNoise(self.robotSpecs.wheelNoise);
    if (_tmp > 0) wheel.speed = Math.min(Math.round(_tmp), 1050);
    else if (_tmp > 0) wheel.speed = Math.max(Math.round(_tmp), -1050);
  };

  this.bigDraw = function () {
    self.drawAll();
    self.displayMotorValues();
    self.getColorSensorsValues();
    self.displaySensorValues();
  };

  this.collabResponse = function () {
    if ((self.collaborative)) {
      var element = self._element;
      var mypre = document.getElementById("output");
      if (typeof element !== 'undefined') {
        if (typeof element.response !== 'undefined') {
          // The response element contains state sent from the Python environment
          var response = element.response;
          if (response != '') {
            // For now, just show what we've got back from py
            mypre.innerHTML = mypre.innerHTML + "<br/><hr/>-- PY RESPONSE --<br/>"+response+ "<br/><hr/><br/>";
            mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;
            if (response.startsWith("JSON::")){
              //self.pyState = response;
              pyState = Sk.ffi.remapToJs(self.pyState);
              pyState["messages"].push(JSON.parse(response.substring(6)));
              self.pyState = Sk.ffi.remapToPy(pyState);
              //The sim.pyState can be then referenced in sim py code:
              //import ev3dev2_glue as glue
              //print('gs',glue.pyState())
            }
          }
          element.response = '';
        }
      }
    }
  }

  this.animate = function () {
    self.clock++;

    self.collabResponse();

    self.setWheelSpeed(self.robotStates.leftWheel);
    self.setWheelSpeed(self.robotStates.rightWheel);

    var left_dist = self.calcWheelDist(self.robotStates.leftWheel);
    var right_dist = self.calcWheelDist(self.robotStates.rightWheel);

    var delta_x = (left_dist + right_dist) / 2 * Math.cos(self.robotStates.angle);
    var delta_y = (left_dist + right_dist) / 2 * Math.sin(self.robotStates.angle);
    var delta_angle = (right_dist - left_dist) / self.robotSpecs.wheelSpacing;

    self.robotStates.gyro[0] -= delta_angle / Math.PI * 180;
    self.robotStates.gyro[1] = - delta_angle * self.fps / Math.PI * 180;

    self.robotStates.x += delta_x;
    self.robotStates.y += delta_y;
    self.robotStates.angle += delta_angle;
    if (self.robotStates.angle > Math.PI * 2) {
      self.robotStates.angle -= Math.PI * 2;
    }

    self.bigDraw();
  };

  this.drawAll = function () {
    self.clearForeground();
    self.drawRobot();
    if (self.robotStates.penDown) {
      self.drawPen()
    };
    self.calcUltrasonic();
  };

  this.clearForeground = function () {
    self.foregroundCtx.clearRect(0, 0, WIDTH, HEIGHT);
  };

  this.calcUltrasonic = function () {
    var dists = [];
    var offsetAngle = self.robotSpecs.ultrasonic.angle / 180 * Math.PI;
    var primaryAngle = self.robotStates.angle + offsetAngle;
    var cos = Math.cos(self.robotStates.angle - Math.PI / 2);
    var sin = Math.sin(self.robotStates.angle - Math.PI / 2);

    var x = cos * self.robotSpecs.ultrasonic.x - sin * self.robotSpecs.ultrasonic.y + self.robotStates.x;
    var y = sin * self.robotSpecs.ultrasonic.x + cos * self.robotSpecs.ultrasonic.y + self.robotStates.y;

    self.foregroundCtx.save();
    self.foregroundCtx.strokeStyle = 'rgba(150, 150, 150, 0.5)';
    self.foregroundCtx.beginPath();
    for (let a of ULTRASONIC_RAYS) {
      var lineEnd = [
        x + ULTRASONIC_RANGE * Math.cos(primaryAngle + a),
        y + ULTRASONIC_RANGE * Math.sin(primaryAngle + a)
      ];
      let ultrasonicRay = [[x, y], lineEnd];

      if (self.clock % 3 == 0) { // simulate slow update rate of ultrasonic sensors
        if (self.wallsPresent) {
          for (let wall of WALLS) {
            let intercept = self.calcIntercept(ultrasonicRay, wall);
            if (intercept != null) {
              let incidentAngle = self.incidentAngle(wall, primaryAngle);
              if (incidentAngle > ULTRASONIC_INCIDENT_LOWER_LIMITS && incidentAngle < ULTRASONIC_INCIDENT_UPPER_LIMITS) {
                dists.push(self.calcDist([x, y], intercept));
              }
            }
          }
        }

        if (self.obstaclesPresent) {
          for (let obstacle of self.obstacles) {
            for (let wall of self.obstacleToLines(obstacle)) {
              let intercept = self.calcIntercept(ultrasonicRay, wall);
              if (intercept != null) {
                let incidentAngle = self.incidentAngle(wall, primaryAngle);
                if (incidentAngle > ULTRASONIC_INCIDENT_LOWER_LIMITS && incidentAngle < ULTRASONIC_INCIDENT_UPPER_LIMITS) {
                  dists.push(self.calcDist([x, y], intercept));
                }
              }
            }
          }
        }
      }

      if (self.drawUltrasonic) {
        self.foregroundCtx.moveTo(x, y);
        self.foregroundCtx.lineTo(...lineEnd);
      }
    }

    // The ultrasonic sensor just returns a single value (distance)
    if (self.clock % 3 == 0) {
      let minDist = Math.min(...dists);
      if (minDist == Infinity) {
        self.robotStates.ultrasonic = ULTRASONIC_RANGE;
      } else {
        // Use a really lazy noise model
        minDist += self.simpleNoise(self.robotSpecs.ultrasonic.noise)
        minDist = Math.min(Math.max(Math.round(minDist), 0), ULTRASONIC_RANGE)
        self.robotStates.ultrasonic = minDist;
      }
    }
    self.foregroundCtx.stroke();
    self.foregroundCtx.restore();
  };

  this.incidentAngle = function (line, angle) {
    let lineAngle;
    if (line[0][0] == line[1][0]) {
      lineAngle = Math.PI / 2;
    } else {
      lineAngle = Math.atan((line[1][1] - line[0][1]) / (line[1][0] - line[0][0]));
    }
    let incidentAngle = lineAngle - angle;
    if (incidentAngle < 0) {
      incidentAngle = -incidentAngle;
    }
    if (incidentAngle > Math.PI) {
      incidentAngle = 2 * Math.PI - incidentAngle;
    }
    return incidentAngle;
  };

  this.calcDist = function (p1, p2) {
    let dx = p1[0] - p2[0];
    let dy = p1[1] - p2[1];
    return (dx ** 2 + dy ** 2) ** 0.5;
  };

  this.calcIntercept = function (l1, l2) {
    let denominator = (l1[0][0] - l1[1][0]) * (l2[0][1] - l2[1][1]) - (l1[0][1] - l1[1][1]) * (l2[0][0] - l2[1][0]);

    if (denominator == 0) {
      return null;
    }

    let x1y2y1x2 = l1[0][0] * l1[1][1] - l1[0][1] * l1[1][0];
    let x3y4y3x4 = l2[0][0] * l2[1][1] - l2[0][1] * l2[1][0];

    let x = (x1y2y1x2 * (l2[0][0] - l2[1][0]) - (l1[0][0] - l1[1][0]) * x3y4y3x4) / denominator;
    if (
      (x - 0.01 > l1[0][0] && x - 0.01 > l1[1][0])
      || (x + 0.01 < l1[0][0] && x + 0.01 < l1[1][0])
      || (x - 0.01 > l2[0][0] && x - 0.01 > l2[1][0])
      || (x + 0.01 < l2[0][0] && x + 0.01 < l2[1][0])
    ) {
      return null;
    }

    let y = (x1y2y1x2 * (l2[0][1] - l2[1][1]) - (l1[0][1] - l1[1][1]) * x3y4y3x4) / denominator;
    if (
      (y - 0.01 > l1[0][1] && y - 0.01 > l1[1][1])
      || (y + 0.01 < l1[0][1] && y + 0.01 < l1[1][1])
      || (y - 0.01 > l2[0][1] && y - 0.01 > l2[1][1])
      || (y + 0.01 < l2[0][1] && y + 0.01 < l2[1][1])
    ) {
      return null;
    }

    return [x, y];
  };

  this.loadObstacles = function (obstacles) {
    self.clearObstacles();
    self.obstacles = obstacles;
    self.clearObstaclesLayer();
    self.drawObstacles();
  };

  this.clearObstacles = function () {
    self.obstacles = [];
  };

  this.obstacleToLines = function (obstacle) {
    let p1 = [obstacle[0], obstacle[1]];
    let p2 = [obstacle[0] + obstacle[2], obstacle[1]];
    let p3 = [obstacle[0], obstacle[1] + obstacle[3]];
    let p4 = [obstacle[0] + obstacle[2], obstacle[1] + obstacle[3]];

    let lines = [
      [p1, p2],
      [p1, p3],
      [p2, p4],
      [p3, p4]
    ];

    return lines;
  };

  this.startAnimation = function () {
    if (self.timer == null) {
      //console.log('start animation');
      //Clear message queue
      self.pyState = Sk.ffi.remapToPy({messages: []});
      self.clock = 0;
      self.timer = setInterval(self.animate, 1000 / self.fps);
    }
  };

  this.stopAnimation = function () {
    //console.log('stop animation');
    clearInterval(self.timer);
    self.timer = null;
  };

  this.updateUIControls = function () {
    document.getElementById('rs-display-xPos-slider').value = self.robotStates.x;
    document.getElementById('rs-display-xPos-val').value = self.robotStates.x;
    document.getElementById('rs-display-yPos-slider').value = self.robotStates.y;
    document.getElementById('rs-display-yPos-val').value = self.robotStates.y;
  }

  this.drawRobot = function () {
    self.foregroundCtx.save();
    self.foregroundCtx.translate(self.robotStates.x, self.robotStates.y);
    self.foregroundCtx.rotate(self.robotStates.angle - Math.PI / 2);
    self.foregroundCtx.drawImage(
      self.robotCanvas,
      -self.ROBOT_X_CENTER,
      -self.ROBOT_Y_CENTER
    );
    self.foregroundCtx.restore();
    self.updateUIControls()
  };

  this.drawObstacles = function () {
    self.obstaclesLayerCtx.fillStyle = 'Magenta';
    self.obstaclesLayerCtx.strokeStyle = 'purple';
    self.obstaclesLayerCtx.lineWidth = 8;
    for (let obstacle of self.obstacles) {
      self.obstaclesLayerCtx.fillRect(...obstacle);
      self.obstaclesLayerCtx.strokeRect(...obstacle);
    }
  };

  this.clearObstaclesLayer = function () {
    self.obstaclesLayerCtx.clearRect(0, 0, WIDTH, HEIGHT);
  };

  this.setPenCoords = function () {
    // Reflect the orientation of the robot
    var cos = Math.cos(self.robotStates.angle - Math.PI / 2);
    var sin = Math.sin(self.robotStates.angle - Math.PI / 2);

    //Co-ords of the pen
    var x = cos * self.robotSpecs.pen.x - sin * self.robotSpecs.pen.y + self.robotStates.x;
    var y = sin * self.robotSpecs.pen.x + cos * self.robotSpecs.pen.y + self.robotStates.y;

    self.robotStates.pen_x = x;
    self.robotStates.pen_y = y;
  }

  this.drawPen = function () {

    if (self.isDragging) return;

    self.setPenCoords()
    x = self.robotStates.pen_x;
    y = self.robotStates.pen_y;

    // We need to draw a line from the previous location to the current location
    // So what was the previous pen position?
    // Create some new robotState in the form of:
    // self.robotStates.pen_prev_x and self.robotStates.pen_prev_y ?
    if (typeof self.robotStates.pen_prev_x == 'undefined') {
      console.log('no pen')
      self.robotStates.pen_prev_x = x;
      self.robotStates.pen_prev_y = y;
    }
    // need to set pen color according to spec
    self.penLayerCtx.strokeStyle = self.robotSpecs.pen.color;
    self.penLayerCtx.lineWidth = self.robotSpecs.pen.width;
    self.penLayerCtx.beginPath();
    self.penLayerCtx.moveTo(self.robotStates.pen_prev_x, self.robotStates.pen_prev_y);
    self.penLayerCtx.lineTo(x, y);
    self.penLayerCtx.stroke();

    self.robotStates.pen_prev_x = x;
    self.robotStates.pen_prev_y = y;
  }

  this.getColorSensorsValues = function () {
    var cos = Math.cos(self.robotStates.angle - Math.PI / 2);
    var sin = Math.sin(self.robotStates.angle - Math.PI / 2);

    var x1 = cos * self.robotSpecs.sensor1.x - sin * self.robotSpecs.sensor1.y + self.robotStates.x;
    var y1 = -(sin * self.robotSpecs.sensor1.x + cos * self.robotSpecs.sensor1.y) + (HEIGHT - self.robotStates.y);
    self.robotStates.sensor1 = self.getSensorValues(x1, y1, self.robotSpecs.sensor1.diameter, 'sensor1');

    if (typeof self.robotSpecs.sensor2 != 'undefined') {
      var x2 = cos * self.robotSpecs.sensor2.x - sin * self.robotSpecs.sensor2.y + self.robotStates.x;
      var y2 = -(sin * self.robotSpecs.sensor2.x + cos * self.robotSpecs.sensor2.y) + (HEIGHT - self.robotStates.y);
      self.robotStates.sensor2 = self.getSensorValues(x2, y2, self.robotSpecs.sensor2.diameter, 'sensor2');
    }
  };

  //Central limit estimate of normal distribution
  this.gaussianRand = function () {
    var rand = 0;
    for (var i = 0; i < 6; i += 1) {
      rand += Math.random();
    }
    return rand / 6;
  }

  //Create a simple noise component in range +/-1
  this.simpleNoise = function (noise = 1) {
    if (noise > 0) {
      // TO DO - better noise model? eg this.gaussianRand() ?
      noise = (Math.random() - 0.5) * 2.0 * noise;
    }
    return noise;
  }

  this.addLightSensorNoise = function (raw, noise = 0) {
    // Based on Jyro noise model
    raw += self.simpleNoise(noise)
    // Keep it in range:
    raw = Math.min(Math.max(Math.round(raw), 0), 255)

    return raw;
  }

  this.getSensorValues = function (x, y, diameter = SENSOR_DIAMETER, sensor = '') {
    // Image data is an array of values, in sequence RGBA for each pixel
    // Values are in range 0..255

    //The following assumes that both sensors have the same diameter
    var radius = diameter / 2;
    var sensorBox = self.backgroundCtx.getImageData(
      x - radius,
      y - radius,
      diameter,
      diameter
    );
    var sensorViewCtx;
    var sensorView;
    if (sensor == 'sensor1') {
      self.sensorArrayLeftCtx.drawImage(self.background,
        Math.min(Math.max(0, x - radius), WIDTH - diameter),
        Math.min(Math.max(0, y - radius), HEIGHT - diameter),
        diameter, diameter,
        0, 0,
        diameter, diameter);
      sensorViewCtx = self.sensorArrayLeftCtx;
      sensorView = sensorViewCtx.getImageData(0, 0, diameter, diameter);
      //self.robotStates.sensor1dataArray = sensorBox.data.toString();
    }
    else if (sensor = 'sensor2') {
      self.sensorArrayRightCtx.drawImage(self.background,
        Math.min(Math.max(0, x - radius), WIDTH - diameter),
        Math.min(Math.max(0, y - radius), HEIGHT - diameter),
        diameter, diameter,
        0, 0,
        diameter, diameter);
      sensorViewCtx = self.sensorArrayRightCtx;
      sensorView = sensorViewCtx.getImageData(0, 0, diameter, diameter);
      //self.robotStates.sensor2dataArray = sensorBox.data.toString();
    }

    var redTotal = 0;
    var greenTotal = 0;
    var blueTotal = 0;
    var count = 0;
    var radius = diameter / 2;
    var radiusSquare = radius ** 2;
    var redNoise = 0;
    var blueNoise = 0;
    var greenNoise = 0;
    var noiseLayer = [];

    // TO DO: optimise this for where there is no noise
    // TO DO how do we provide the sensor view with added noise?
    for (let col = 0; col < diameter; col++) {
      for (let row = 0; row < diameter; row++) {
        let offset = (row * (diameter * 4) + col * 4);
        if (((row - radius) ** 2 + (col - radius) ** 2) < radiusSquare) {

          redNoise = self.addLightSensorNoise(sensorBox.data[offset], self.robotSpecs.sensorNoise);
          redTotal += redNoise;
          greenNoise = self.addLightSensorNoise(sensorBox.data[offset + 1], self.robotSpecs.sensorNoise);
          greenTotal += greenNoise;
          blueNoise = self.addLightSensorNoise(sensorBox.data[offset + 2], self.robotSpecs.sensorNoise);
          blueTotal += blueNoise;
          sensorView.data[offset] = redNoise;
          sensorView.data[offset + 1] = greenNoise;
          sensorView.data[offset + 2] = blueNoise;
          count++;
        } else {
          sensorView.data[offset] = 245;
          sensorView.data[offset + 1] = 226;
          sensorView.data[offset + 2] = 225;
        }
      }
    }

    if (sensor == 'sensor1')
      self.robotStates.sensor1dataArray = sensorView.data.toString();
    else if (sensor == 'sensor2')
      self.robotStates.sensor2dataArray = sensorView.data.toString();

    if (self.uiSettings.display.sensorArray)
      sensorViewCtx.putImageData(sensorView, 0, 0);

    // TO DO - we could do a much simple noise estimate and just add noise here?
    return [redTotal / count, greenTotal / count, blueTotal / count];
  };

  //https://stackoverflow.com/a/14323127/454773
  this.rgb = function (r, g, b) {
    return 'rgb(' + [(r || 0), (g || 0), (b || 0)].join(',') + ')';
  }

  this.getRGBInt = function (val) {
    return [parseInt(val[0]), parseInt(val[1]), parseInt(val[2])]
  }

  this.getRGB = function (val) {
    return self.rgb(self.getRGBInt(val));
  }


  // Return triband reflected light
  this.getReflectedLight = function (val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
      sum += parseInt(val[i]);
    }
    return 100.0 * sum / 765
  }

  // Return pure (R) reflected light
  this.getReflectedLightR = function (val) {
    //Value of reflected light (i.e. reflected R component) as percentage
    return 100.0 * parseInt(val[0]) / 255
  }

  //Update motor display panel
  this.displayMotorValues = function () {
    document.getElementById('leftWheel_value').innerHTML = self.robotStates.leftWheel.speed.toFixed(2);
    document.getElementById('rightWheel_value').innerHTML = self.robotStates.rightWheel.speed.toFixed(2);
  }

  //Update the sensor display panel
  this.displaySensorValues = function () {
    var _sensor1 = self.robotStates.sensor1;
    var _sensor2 = self.robotStates.sensor2;
    document.getElementById('sensor1_value').innerHTML = (self.getReflectedLightR(_sensor1)).toFixed(2) + '|' + (self.getReflectedLight(_sensor1)).toFixed(2) + ' (' + _sensor1[0].toFixed() + ', ' + _sensor1[1].toFixed() + ', ' + _sensor1[2].toFixed() + ')';
    document.getElementById('sensor2_value').innerHTML = (self.getReflectedLightR(_sensor2)).toFixed(2) + '|' + (self.getReflectedLight(_sensor2)).toFixed(2) + ' (' + _sensor2[0].toFixed() + ', ' + _sensor2[1].toFixed() + ', ' + _sensor2[2].toFixed() + ')';

    document.getElementById('ultrasonic_value').innerHTML = self.robotStates.ultrasonic.toFixed(2);
    document.getElementById('gyro_value').innerHTML = self.robotStates.gyro[0].toFixed(2) + ", " + self.robotStates.gyro[1].toFixed(2);

    if (!self.dragok) {
      document.getElementById('sensor1_color').style.backgroundColor = self.getRGB(_sensor1);
      document.getElementById('sensor2_color').style.backgroundColor = self.getRGB(_sensor2);
    }
  }

  console.debug("Handle mouse events..."); 
  // handle mousedown events
  this.myDown = function (e) {
    //console.log('Mousedown')
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    var cursorCoords = self.cursorCanvasCoords(e)
    var mx = cursorCoords.mx
    var my = cursorCoords.my
    // TO DO find the size in the sim coord schem of the robot?
    //console.log('c'+mx+'c'+my+'x'+self.robotStates.x+'y'+self.robotStates.y)
    var rW = self.robotSpecs.width / 2
    var rH = self.robotSpecs.height / 2
    if (mx > (self.robotStates.x - rW) && mx < (self.robotStates.x + rW) && my > (self.robotStates.y - rH) && my < (self.robotStates.y + rH)) {
      //console.log('Drag enable...');
      self.dragok = true;
      self.isDragging = true;
      self.robotStates._dragok = true;
    }

    // save the current mouse position
    //self.drag_startX = mx;
    //self.drag_startY = my;
  }


  // handle mouseup events
  this.myUp = function (e) {
    // console.log('Mouse up')
    // tell the browser we're handling this mouse event
    e.preventDefault();
    e.stopPropagation();

    // clear the dragging flag
    self.dragok = false;
    self.isDragging = false;
    self.robotStates._dragok = false;

    self.setPenCoords()
    self.robotStates.pen_prev_x = self.robotStates.pen_x;
    self.robotStates.pen_prev_y = self.robotStates.pen_y;

    // Get and and display color sensor values
    self.getColorSensorsValues();
    self.displaySensorValues();

    // Read the sensors and do the full move thing now the drag is stopped
    document.getElementById("move").click();
  }

  //TH attempt at mapping mouse cursor co-ordinates onto the sim canvas co-ordinates
  this.cursorCanvasCoords = function (e) {
    var bb = $('#measurementLayer').offset()
    var cursorCoords = {
      mx: parseInt((e.pageX - bb.left) * (WIDTH / self.measurementLayer.width) / self.scale),
      my: HEIGHT - parseInt((e.pageY - bb.top) * (HEIGHT / self.measurementLayer.height) / self.scale),
      "pageX": e.pageX,
      "pageY": e.pageY
    }
    return cursorCoords
  }

  // handle mouse moves
  this.myMove = function (e) {

    var cursorCoords = self.cursorCanvasCoords(e)
    var mx = cursorCoords.mx
    var my = cursorCoords.my
    //console.log('c'+mx+'c'+my+'x'+self.robotStates.x+'y'+self.robotStates.y)

    var rW = self.robotSpecs.width / 2;
    var rH = self.robotSpecs.height / 2;
    //if (mx > (self.robotStates.x - rW) && mx < (self.robotStates.x + rW) && my > (self.robotStates.y - rH) && my < (self.robotStates.y + rH)) {
    //  console.log('Over the robot, ish...');
    //}
    // if we're dragging anything...
    if (self.dragok) {

      // tell the browser we're handling this mouse event
      e.preventDefault();
      e.stopPropagation();

      // get the current mouse position
      //var mx=parseInt(e.clientX-self.offsetLeft);
      //var my=parseInt(e.clientY-self.offsetTop);

      // calculate the distance the mouse has moved
      // since the last mousemove
      //var dx = mx - self.drag_startX;
      //var dy = my - self.drag_startY;

      // move the robot that isDragging 
      // by the distance the mouse has moved
      // since the last mousemove

      //self.robotStates.x += dx;
      //self.robotStates.y -= dy;
      self.robotStates.x = mx;
      self.robotStates.y = my;

      //document.getElementById('xPos').value = self.robotStates.x;
      //document.getElementById('yPos').value = self.robotStates.y;

      setSliderVal("rs-display-xPos", mx);
      setSliderVal("rs-display-yPos", my);

      // redraw the scene with the new rect positions
      self.drawAll();

      // reset the starting mouse position for the next mousemove
      //self.drag_startX = mx;
      //self.drag_startY = my;

      //Update sensor reading display
      //self.displaySensorValues();

    }
  }

  /// TH TEST END  

  console.debug("Final setup");
  
  self.pyState = Sk.ffi.remapToPy({messages: []});

  self.loadCanvas(id);
  self.setWallsPresent(true);
  self.clearBackground();
  self.loadRobot();
  self.reset();
  self.drawRobot();
  self.drawObstacles();

  console.debug("Ev3devsim.js loaded");
}
