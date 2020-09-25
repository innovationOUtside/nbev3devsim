

/*---- Custom elements ---*/


//improved by Nick Freear
const VALUE_SLIDER_CHANGE_EVENT = 'value-slider:change';

class ValueSlider extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    const ID = this.id || 'slider-00';
    const sliderId = `${ID}-slider`;
    const valId = `${ID}-val`;

    const label = this.getAttribute('label') || this.innerHTML || 'MY LABEL';
    const valmin = this.getAttribute('min');
    const valmax = this.getAttribute('max');
    const valinit = this.getAttribute('initial');

    this.innerHTML = `
    <span>
      <label class="checkboxLabel" for="${sliderId}">${label} </label>
      <input type="range"
        id="${sliderId}" min="${valmin}" max="${valmax}" value="${valinit}" />
      <input type="number" aria-label="${label} - simple input"
        id="${valId}" min="${valmin}" max="${valmax}" value="${valinit}">
    </span>
    `;

    this.sliderElem = document.querySelector(`#${sliderId}`);
    this.valueElem = document.querySelector(`#${valId}`);

    //console.debug('ValueSlider:', this);

    this.setupSliderVal();
  }

  setupSliderVal() {
    this.sliderElem.addEventListener('input', ev => {
      const value = parseFloat(ev.target.value);
      //console.debug("slider updating", value)
      this.valueElem.value = value;

      const childEvent = ev;
      const event = new CustomEvent(VALUE_SLIDER_CHANGE_EVENT, { detail: { childEvent, value } });
      this.dispatchEvent(event);
    });

    this.valueElem.addEventListener('input', ev => { // Was: 'change' event.
      const value = parseFloat(ev.target.value);
      //console.debug('value updating...', value)
      this.sliderElem.value = value;

      const childEvent = ev;
      const event = new CustomEvent(VALUE_SLIDER_CHANGE_EVENT, { detail: { childEvent, value } });
      this.dispatchEvent(event);
    });
  }
}

if (!(customElements.get('value-slider'))) {
  customElements.define('value-slider', ValueSlider, { extends: null });
}

//this function is duplciated in ev3devsim.js
function setSliderVal(el, val) {
  const magic_slider = document.getElementById(el + "-slider");
  val = parseInt(val);
  if ((val >= parseInt(magic_slider.min)) && (val <= parseInt(magic_slider.max))) {
    {
      magic_slider.value = val;
      const magic_event = new Event('input');
      magic_slider.dispatchEvent(magic_event);
    }
  }
}

function getSliderVal(el) {
  const magic_slider = document.getElementById(el + "-slider");
  return magic_slider.value;
}


function initSliderVal(el, obj, ref, mover = false) {
  const sliderId = `#${el}`;
  const sliderSlider = document.querySelector(sliderId);
  sliderSlider.addEventListener(VALUE_SLIDER_CHANGE_EVENT, ev => {
    //console.debug(VALUE_SLIDER_CHANGE_EVENT, ':~', ev.detail.value, ev);
    obj[ref] = ev.detail.value;
    mover = mover || ev.detail.mover;
    if (mover) {
      document.getElementById('move').click();
    }
  });
}

/* Toggle switch - Nick Freear --*/
class ToggleSwitch extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
    const intID = `int--${this.id || 'x-switch-01'}`;
    const label = this.getAttribute('label') || this.innerHTML || 'MY LABEL';
    const initial = this.getAttribute('initial') === 'on' ? 'true' : 'false';
    const element_type = this.getAttribute("type") || 'text';

    var indicator = this.getAttribute('indicator') || false;
    if (indicator)
      indicator = `<span id="${indicator}" class="toggle-button-${this.getAttribute('initial')}"></span>`
    else
      indicator = '';
    var select = this.getAttribute('select') || false;
    var selection = '';
    if (select) {
      var options = this.getAttribute('options') || false;
      if (options) {
        options = options.split(",");
        selection = `<select id="${select}">`
        for (var i = 0; i < options.length; i++)
          selection = `${selection}<option>${options[i]}</option>`
        selection = `${selection}</select>`
      } else select = false;
    }

    /*
  this.innerHTML = `
  <span class="rs-toggle-group">
    ${indicator}
    <label for="${intID}" class="x-switch">${label} </label>
    <button role="switch" aria-checked="${initial}" id="${intID}" class="x-switch x-switch-text">
      <span>${this.getAttribute('off') || 'Off'}</span>
      <span>${this.getAttribute('on') || 'On'}</span>
    </button>
    ${selection}
  </span>
`;
 
*/
    console.debug("Create toggle type", element_type, intID)
    switch (element_type) {
      case "text":
        this.innerHTML = `
          <span class="rs-toggle-group">
            ${indicator}
            <label for="${intID}" class="x-switch">${label} </label>
            <button role="switch" aria-checked="${initial}" id="${intID}" class="x-switch x-switch-text">
              <span>${this.getAttribute('off') || 'Off'}</span>
              <span>${this.getAttribute('on') || 'On'}</span>
            </button>
            ${selection}
          </span>
        `;
        this.classList.add("rs-toggle-text");
        break;
      case "button":
        this.innerHTML = `
          <span class="">
            ${indicator}
            <button role="switch" aria-checked="${initial}" id="${intID}" class="x-switch x-switch-button">
              ${label}
            </button>
            ${selection}
          </span>
        `;
        this.classList.add("rs-toggle-button");
        break;
      case "switch":
        this.innerHTML = `
          <span class="rs-toggle-group">
            ${indicator}
            <label for="${intID}" class="x-switch">${label} </label>
            <button role="switch" aria-checked="${initial}" id="${intID}" class="x-switch x-switch-switch">
              <span>${this.getAttribute('off') || 'off'}</span>
              <span>${this.getAttribute('on') || 'on'}</span>
            </button>
            ${selection}
          </span>
        `;
        this.classList.add("rs-toggle-switch");
        break;
    }

    const button = this.querySelector('button');

    if (select)
      document.getElementById(select).disabled = button.getAttribute('aria-checked') === 'false';

    button.addEventListener('click', childEvent => {
      const checked = button.getAttribute('aria-checked') === 'true'; // Old state.
      const on = !checked; // New state.

      button.setAttribute('aria-checked', checked ? 'false' : 'true');
      if (select) document.getElementById(select).disabled = checked;

      const eventName = `x-switch:${checked ? 'off' : 'on'}`
      const event = new CustomEvent(eventName, { detail: { childEvent, on } });

      this.dispatchEvent(event);

      // console.debug('Click:', eventName, childEvent, this);
    });

    //console.debug(this);
  }
}

if (!(customElements.get('toggle-switch'))) customElements.define('toggle-switch', ToggleSwitch, { extends: null });

/* --- */

function setPos(x, y, angle, init = false, reset = false) {
  var x = parseFloat(x);
  var y = parseFloat(y);
  var angleRadian = parseFloat(angle) / 180 * Math.PI;

  if (isNaN(x)) { x = 0; }
  if (isNaN(y)) { y = 0; }
  if (isNaN(angleRadian)) { angleRadian = 0; angle = 0; }

  setSliderVal("rs-display-xPos", x);
  setSliderVal("rs-display-yPos", y);
  setSliderVal("rs-display-angle", angle);
  //document.getElementById('rs-display-xPos').value = x;
  //document.getElementById('rs-display-yPos').value = y;
  //document.getElementById('rs-display-angle').value = angle;

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

var uiSettings = {};

uiSettings['audio'] = { 'error': true };

/* Audio */

var ctx = new AudioContext()
function rs_tone(duration = 1.5, frequency = 400, type = 'sin') {
  var o = ctx.createOscillator(); var g = ctx.createGain()
  o.frequency.value = frequency; o.type = type
  o.connect(g); g.connect(ctx.destination)
  o.start(0)
  g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + duration)
}

//------

// Initialise additional components
initSliderVal('rs-display-wheelNoise', sim.robotSpecs, "wheelNoise")
initSliderVal('rs-display-lightSensorNoise', sim.robotSpecs, "sensorNoise")
initSliderVal('rs-display-xPos', sim.robotStates, "_x", mover = true)
initSliderVal('rs-display-yPos', sim.robotStates, "_y", mover = true)
initSliderVal('rs-display-angle', sim.robotStates, "_angle", mover = true)

// Set the default position from something?!
setPos(1181, 571, 0);

document.getElementById('codeFromClipboard').addEventListener('click', function () {
  navigator.clipboard.readText().then(text => element.prog = text);
  console.log('can we paste?')
  navigator.clipboard.readText().then(text => console.log(text));
});

/* to delete
var lightSensorNoiseSlider = document.getElementById("rs-display-lightSensorNoiseSlider");
lightSensorNoiseSlider.oninput = function () {
  var val = parseFloat(this.value);
  sim.robotSpecs.sensorNoise = val;
  document.getElementById('rs-display-sensorNoiseVal').value = val;
  sim.getColorSensorsValues();
  sim.displaySensorValues();
}

var wheelNoiseSlider = document.getElementById("rs-display-wheelNoiseSlider");
wheelNoiseSlider.oninput = function () {
  var val = parseFloat(this.value);
  sim.robotSpecs.wheelNoise = val;
  document.getElementById('rs-display-wheelNoiseVal').value = val;
}
var wheelNoiseVal = document.getElementById("rs-display-wheelNoiseVal");
wheelNoiseVal.onchange = function (){
  var val = parseFloat(this.value);
  document.getElementById('rs-display-wheelNoiseSlider').value = val;
};

document.getElementById('showCode').addEventListener('click', function () {
  console.log('showing code?')
  var _code = element.prog;
  // Strip out any prefix magic line
  _code = _code.split('\n').filter(function (line) {
    return line.indexOf("%") != 0;
  }).join('\n')
  //document.getElementById('codeDisplayCode').value = _code; //for HTML textarea tag
  document.getElementById('codeDisplayCode').textContent = _code;
  document.getElementById('codeDisplay').classList.remove('closed');
});

document.getElementById('codeDisplayClose').addEventListener('click', function () {
  document.getElementById('codeDisplay').classList.add('closed');
});
*/

document.getElementById('map').selectedIndex = "0";;
document.getElementById('walls').checked = true;
document.getElementById('obstacles').checked = true;

/*
document.getElementById('configureObstacles').addEventListener('click', function () {
  document.getElementById('obstaclesConfigurator').classList.remove('closed');
  var obstacles = JSON.stringify(sim.obstacles, null, 2);
  document.getElementById('obstaclesConfiguratorEditor').value = obstacles;
});
*/
document.getElementById('obstaclesConfiguratorApply').addEventListener('click', function () {
  var json = document.getElementById('obstaclesConfiguratorEditor').value;

  var obstacles = JSON.parse(json);
  sim.clearObstacles();
  sim.clearObstaclesLayer();
  sim.loadObstacles(obstacles);
  document.getElementById('obstaclesConfigurator').classList.add('closed');
});

/*
document.getElementById('obstaclesConfiguratorClose').addEventListener('click', function () {
  document.getElementById('obstaclesConfigurator').classList.add('closed');
});
*/
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
  setPos(_x, _y, _angle, reset = true);
  sim.robotStates.penDown = tmp;
})


document.getElementById('resetReset').addEventListener('click', function () {
  /*
  sim.robotStates._x = document.getElementById('rs-display-xPos').value;
  sim.robotStates._y = document.getElementById('rs-display-yPos').value;
  sim.robotStates._angle = document.getElementById('rs-display-angle').value;
  */
  sim.robotStates._x = getSliderVal('rs-display-xPos');
  sim.robotStates._y = getSliderVal('rs-display-yPos');
  sim.robotStates._angle = getSliderVal('rs-display-angle');
})

document.getElementById('move').addEventListener('click', function () {
  var tmp = sim.robotStates.penDown;
  sim.robotStates.penDown = false;

  /*
  var x = document.getElementById('rs-display-xPos').value;
  var y = document.getElementById('rs-display-yPos').value;
  var angle = document.getElementById('rs-display-angle').value;
  */
  var x = getSliderVal('rs-display-xPos');
  var y = getSliderVal('rs-display-yPos');
  var angle = getSliderVal('rs-display-angle');

  setPos(x, y, angle, reset = true);
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
    reset = true
  );
  sim.robotStates.penDown = tmp;
});



/* ----------- START: define display toggles -----------*/

console.debug("setup toggle buttons");

// Adding to this then also requires a setupToggleHandler step
var rs_display_lookup = {
  "roboSim-display-world": "#worldview",
  "roboSim-display-chart": "#charter",
  "roboSim-display-output": "#output",
  "roboSim-display-sensor-values": "#robosim-fieldset-instrumentation",
  "roboSim-display-sensor-array": "#sensorArray",
  "roboSim-display-noise-controls": "#noise_controls",
  "roboSim-display-config-controls": "#config_controls",
  "roboSim-pen-updown": null,
  "roboSim-display-code": "#codeDisplay",
  "roboSim-display-robot-configurator": "#robotConfigurator",
  "roboSim-display-obstacles-configurator": "#obstaclesConfigurator",
  "roboSim-display-positioning": "#position_controls",
  "roboSim-display-sim-controls": "#simulator_controls"
  //"roboSim-display-display-controls": "#roboSim-display-show-controls"
};

function _setupToggleUpdate(toggleElement, obj = null, attr = null) {
  // Event handler to update a toggle element
  toggleElement.addEventListener('x-switch:update', function (e) {
    var target = rs_display_lookup[e.target.id];
    var button = "#int--" + e.target.id;
    if (target) {
      var flag = document.querySelector(button).getAttribute('aria-checked') === 'true';
      if (flag) {
        document.querySelector(target).style.display = 'block';
        if ((obj) && (attr)) obj[attr] = true;
      }
      else {
        document.querySelector(target).style.display = 'none';
        if ((obj) && (attr)) obj[attr] = false;
      }
    }
  });
}

function _setUpToggleOff(toggleElement, obj = null, attr = null) {
  toggleElement.addEventListener('x-switch:off', function (e) {
    var target = rs_display_lookup[e.target.id];
    if ((obj) && (attr)) obj[attr] = false;
    if (target) document.querySelector(target).style.display = 'none';
  });
}

// TO DO - the toggle handlers can perhaps be reconciled?
function setupToggleHandler(el, obj = null, attr = null) {
  var toggleElement = document.getElementById(el);
  var target;
  if (rs_display_lookup.hasOwnProperty(el))
    target = rs_display_lookup[el];
  else target = null;
  toggleElement.addEventListener('x-switch:on', function (e) {
    if ((obj) && (attr)) obj[attr] = true;
    if (target) document.querySelector(target).style.display = 'block';
  });
  _setupToggleUpdate(toggleElement, obj, attr);
  _setUpToggleOff(toggleElement, obj, attr);
}

/* to delete
function setupChartToggleHandler(el, obj = null, attr = null) {
  var toggleElement = document.getElementById(el);
  var target;
  if (rs_display_lookup.hasOwnProperty(el))
    target = rs_display_lookup[el];
  else target = null;
  toggleElement.addEventListener('x-switch:on', function (e) {
    if ((obj) && (attr)) obj[attr] = true;
    if (!($("#plotlyDiv").length)) Plotly.newPlot('plotlyDiv', chart_lines);
    if (target) document.querySelector(target).style.display = 'block';
  });
  _setupToggleUpdate(toggleElement, obj, attr);
  _setUpToggleOff(toggleElement, obj, attr);
}
*/
/* -- --*/

console.debug("setup viewer buttons");
function setupObstaclesConfigView() {
  const obstacles = JSON.stringify(sim.obstacles, null, 2);
  document.getElementById('obstaclesConfiguratorEditor').value = obstacles;
}

function setupCodeView() {
  var _code = element.prog;
  // Strip out any prefix magic line
  _code = _code.split('\n').filter(function (line) {
    return line.indexOf("%") != 0;
  }).join('\n')
  //document.getElementById('codeDisplayCode').value = _code; //for HTML textarea tag
  document.getElementById('codeDisplayCode').textContent = _code;
}

function setupRobotConfigView() {
  console.debug("Trying robot config")
  const code = JSON.stringify(sim.robotSpecs, null, 2);
  document.getElementById('robotConfiguratorEditor').value = code;
}

function setupChartView() {
  if (!($("#plotlyDiv").length)) Plotly.newPlot('plotlyDiv', chart_lines);
}

function setupFunctionToggleHandler(el, fn, obj = null, attr = null) {
  var toggleElement = document.getElementById(el);
  var target;
  if (rs_display_lookup.hasOwnProperty(el))
    target = rs_display_lookup[el];
  else target = null;
  toggleElement.addEventListener('x-switch:on', function (e) {
    if ((obj) && (attr)) obj[attr] = true;
    console.debug("try generic fn")
    fn();
    console.debug("done generic fn")
    if (target) document.querySelector(target).style.display = 'block';
  });
  _setupToggleUpdate(toggleElement, obj, attr);
  _setUpToggleOff(toggleElement, obj, attr);
}
/* to delete
function setupObstaclesToggleHandler(el, obj = null, attr = null) {
  var toggleElement = document.getElementById(el);
  var target;
  if (rs_display_lookup.hasOwnProperty(el))
    target = rs_display_lookup[el];
  else target = null;
  toggleElement.addEventListener('x-switch:on', function (e) {
    if ((obj) && (attr)) obj[attr] = true;
    setupObstaclesConfigView();
    if (target) document.querySelector(target).style.display = 'block';
  });
  _setupToggleUpdate(toggleElement, obj, attr);
  _setUpToggleOff(toggleElement, obj, attr);
}
*/

// TO DO iterate through these; add and and el to rs_display_lookup
// TO DO one line to register things with rs_display_lookup
// If we take the above approach, everything will be configured just from setup array
setupToggleHandler("roboSim-display-output");
setupToggleHandler("roboSim-display-sensor-values");
setupToggleHandler("roboSim-display-sensor-array");
setupFunctionToggleHandler('roboSim-display-chart', setupChartView);
setupToggleHandler("roboSim-display-world");
setupToggleHandler("roboSim-display-positioning");
setupFunctionToggleHandler("roboSim-display-code", setupCodeView);
setupFunctionToggleHandler("roboSim-display-robot-configurator", setupRobotConfigView);
setupFunctionToggleHandler("roboSim-display-obstacles-configurator", setupObstaclesConfigView);
setupToggleHandler("roboSim-display-noise-controls");
setupToggleHandler("roboSim-display-config-controls");
setupToggleHandler("roboSim-pen-updown", sim.robotStates, "penDown");
setupToggleHandler("roboSim-state-collaborative", sim, "collaborative");
setupToggleHandler("roboSim-display-sim-controls");
//setupToggleHandler('roboSim-display-display-controls');


console.debug("Done: toggle buttons");
/*----------- END: define display toggles -----------*/



document.getElementById("download").addEventListener("click", function () {
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/x-python;base64," + btoa(element.prog);
  hiddenElement.target = "_blank";
  hiddenElement.download = "robot.py";
  hiddenElement.dispatchEvent(new MouseEvent("click"));
});

document.getElementById("upload").addEventListener("click", function () {
  var hiddenElement = document.createElement('input');
  hiddenElement.type = "file";
  hiddenElement.accept = "text/x-python,.py";
  hiddenElement.dispatchEvent(new MouseEvent("click"));
  hiddenElement.addEventListener("change", function (e) {
    var reader = new FileReader();
    reader.onload = function () {
      element.prog = this.result;
    };
    reader.readAsText(e.target.files[0]);
  });
});

document.getElementById("robotPreconfig").addEventListener("change", function () {
  var robotSpec = sim.default_robot_spec;
  var preconfig = document.getElementById('robotPreconfig').value;
  //TO DO - need to capture current robot location then reset to that
  if (preconfig == "Default_Robot") {
    robotSpecs = sim.default_robot_spec;
  } else if ((preconfig == "Small_Robot") || (preconfig == "Small_Robot_Wide_Eyes")) {
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
  if (preset == 'Central_post') {
    obstacles = '[[900, 500, 200, 200]]'
  } else if (preset == 'Square_posts') {
    obstacles = '[[500, 200, 100, 100], [500, 700, 100, 100], [1500, 200, 100, 100], [1500, 700, 100, 100]]'
  } else if (preset == 'Wall') {
    obstacles = '[[1500, 200, 200, 800]]'
  } else if (preset == 'Square') {

  } else if (preset == 'U') {

  } else if (preset == 'L') {

  } else if (preset == 'maze') {
    // TO DO
  }
  document.getElementById('obstaclesConfiguratorEditor').value = obstacles;
});

//var imagepath = '/notebooks/backgrounds/'
var imagepath = '/' + window.location.pathname.split('/')[1] + '/backgrounds/'

function init_background(background, pos, clearObstacles = true, clearObstaclesLayer = true) {
  sim.loadBackground(imagepath + background);
  if (clearObstacles) sim.clearObstacles();
  if (clearObstaclesLayer) sim.clearObstaclesLayer();
  setPos(pos[0], pos[1], pos[2], pos[3]);
}

console.debug("Initialise background loader.")
//sim.loadBackground(imagepath+'WRO-2019-Regular-Junior.jpg');
document.getElementById('map').addEventListener('change', function () {
  var map = document.getElementById('map').value;

  if (map == 'WRO_2019_Regular_Junior') {
    init_background('WRO-2019-Regular-Junior.jpg', [2215, 150, 90, true]);
  } else if (map == 'Loop') {
    init_background('_loop.png', [1000, 500, 90, true]);
  } else if (map == 'Two_shapes') {
    init_background('_two_shapes.png', [1000, 500, 90, true]);
  } else if (map == 'Grey_bands') {
    init_background('_greys.png', [400, 500, 0, true]);
  } else if (map == 'Linear_grey') {
    init_background('_linear_grey.png', [1000, 50, 90, true]);
  } else if (map == 'Radial_grey') {
    init_background('_radial_grey.png', [100, 400, 0, true]);
    //Update robot config
    sim.robotSpecs.sensor1.x = -60;
    sim.robotSpecs.sensor2.x = 60;
    sim.loadRobot(sim.robotSpecs);
    sim.drawAll();
    //Set initial location
    setPos(100, 400, 0, true);
  } else if (map == 'Radial_red') {
    init_background('_radial_red.png', [100, 400, 0, true]);
  } else if (map == 'Coloured_bands') {
    init_background('_coloured_bands.png', [500, 500, 0, true]);
  } else if (map == 'Rainbow_bands') {
    init_background('_rainbow_bands.png', [150, 500, 0, true]);
  } else if (map == 'Grey_and_black') {
    init_background('_grey_and_black.png', [500, 250, 90, true]);
  } else if (map == 'Lollipop') {
    init_background('_line_follower_track.png', [750, 375, -180, true]);
  } else if (map == 'Noisy_Lollipop') {
    init_background('_noisy_line_follower_track.png', [750, 375, -180, true]);
  } else if (map == 'Testcard') {
    init_background('FuBK_testcard_vectorized.png', [500, 250, 90, true]);
  } else if (map == 'Square') {
    init_background('_square.png', [775, 500, -90, true]);
  } else if (map == 'WRO_2018_Regular_Junior') {
    init_background('WRO-2018-Regular-Junior.png', [1181, 150, 90, true]);
  } else if (map == 'FLL_2019_City_Shaper') {
    init_background('FLL2019.jpg', [500, 150, 90, true]);
  } else if (map == 'FLL_2018_Into_Orbit') {
    init_background('FLL2018.jpg', [150, 150, 90, true]);
  } else if (map == 'Line_Following_Test') {
    init_background('Line_Following_Test.png', [141, 125, 90, true]);
  } else if (map == 'Junction_Handling_Test') {
    init_background('Junction_Handling_Test.png', [698, 130, 90, true]);
  } else if (map == 'Sensor_Diameter_Test') {
    init_background('_sensor_diameter_test.png', [550, 450, 90, true]);
  } else if (map == 'Simple_Shapes') {
    init_background('_simple_shapes.png', [800, 400, 0, true]);
  } else if (map == 'Thruxton_Circuit') {
    init_background('thruxton_track.png', [457, 242, 120, true]);
  } else if (map == 'MNIST_Digits') {
    init_background('_number_sheet.png', [400, 50, 90, true]);
  } else if (map == 'Obstacles_Test') {
    init_background('Obstacles_Test.png', [121, 125, 90, true]);
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
    init_background('Topo_map.png', [698, 130, 90, true]);
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
    setPos(2362 / 2, 1143 / 2, 0, true);
  }
});

/* to delete
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
*/

document.getElementById('robotConfiguratordownload').addEventListener('click', function () {
  var robotSpecs = document.getElementById('robotConfiguratorEditor').value
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:application/json;base64,' + btoa(robotSpecs);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'robot_config.json';
  hiddenElement.dispatchEvent(new MouseEvent('click'));
});

document.getElementById('rs-display-penColor').addEventListener('change', function (e) {
  sim.robotSpecs.pen.color = document.getElementById(e.target.id).value
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

// TO DO - what is this for?
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

function set_chartlines() {
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
  if ((sim.collaborative) && (text.trim() != '')) report_callback_responder(text);
  if (text.startsWith('image_data')) {
    // TO DO  - channel left or right
    // pass the image array
    var clock = sim.clock
    _text = text.split(' ')
    if ((_text[1] == 'left') || (_text[1] == 'both')) {
      _sd1 = sim.robotStates.sensor1dataArray;
      report_image_data('left ' + _sd1 + ' ' + clock);
    }
    if ((_text[1] == 'right') || (_text[1] == 'both')) {
      _sd2 = sim.robotStates.sensor2dataArray;
      report_image_data('right ' + _sd2 + ' ' + clock);
    }
    mypre.innerHTML = mypre.innerHTML + _text[1] + " image data logged...";
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

function stopit(hard = true) {
  document.getElementById("sim_runStatus").classList.remove("toggle-button-on")
  document.getElementById("sim_runStatus").classList.add("toggle-button-off")
  sim.stopAnimation();
  Sk.running = false;

  var _turnoffId = "roboSim-display-runstop";
  var turnoff = document.querySelector("#int--" + _turnoffId);
  turnoff.setAttribute("aria-checked", "false");
  // TO DO - do we need this?
  if (hard) Sk.hardInterrupt = true;
}

function runit() {
  document.getElementById('sim_runStatus').classList.remove('toggle-button-off')
  document.getElementById('sim_runStatus').classList.add('toggle-button-on')
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
      //sim.stopAnimation();
      //document.getElementById('sim_runStatus').classList.remove('sim-running')
      //document.getElementById('sim_runStatus').classList.add('sim-stopped')
      //Sk.running = false;
      // set the on switch to off...
      stopit(hard = false)

    },
    // The following handles errors that arise when executing
    // a robot control program in the simulator.
    // Is there a way we can get error messages displayed in the output area
    // of the code cell whose downloaded code we are running?
    // Related issue: https://github.com/innovationOUtside/nbev3devsim/issues/49
    function (err) {
      //Sk.running = false;
      //document.getElementById('sim_runStatus').classList.remove('sim-running')
      //document.getElementById('sim_runStatus').classList.add('sim-stopped')
      //sim.stopAnimation();
      stopit(hard = false)
      var mypre = document.getElementById("output");
      mypre.innerHTML = mypre.innerHTML + '<span class="error">' + err.toString() + '</span>';
      mypre.scrollTop = mypre.scrollHeight - mypre.clientHeight;

      if (uiSettings['audio']['error']) rs_tone(0.4, 50, type = 'sawtooth');
    }
  );
}



function setupRunToggleHandler(el) {
  var toggleElement = document.querySelector(el);
  toggleElement.addEventListener('x-switch:on', function (e) {
    runit();
  });
  toggleElement.addEventListener('x-switch:off', function (e) {
    stopit();
  });
  toggleElement.addEventListener('x-switch:update', function (e) {
    var button = "#int--" + e.target.id;
    var flag = document.querySelector(button).getAttribute('aria-checked') === 'true';
    if (flag) runit();
    //else stopit();
  });

}
//document.getElementById('runCode').addEventListener('click', runit);
//document.getElementById('stop').addEventListener('click', stopit );
setupRunToggleHandler('#roboSim-display-runstop')

document.getElementById('clearTrace').addEventListener('click', function () { sim.clearPenLayer() })

function clearChart() {
  sim.previousChartTraces = [];
  set_chartlines()
  Plotly.newPlot('plotlyDiv', chart_lines);
}

document.getElementById('clearChart').addEventListener('click', function () {
  clearChart();
})


/* Initialise simulator user interface
Check the simulator UI settings and render areas accordingly.
*/
// Can we use the same event over and over?

/* to delete
var toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-world").dispatchEvent(toggleCheckEvent);
toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-chart").dispatchEvent(toggleCheckEvent);
toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-output").dispatchEvent(toggleCheckEvent);
toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-sensor-values").dispatchEvent(toggleCheckEvent);
toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-sensor-array").dispatchEvent(toggleCheckEvent);
toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-noise-controls").dispatchEvent(toggleCheckEvent);
toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-display-world-controls").dispatchEvent(toggleCheckEvent);

toggleCheckEvent = new CustomEvent("x-switch:update");
document.getElementById("roboSim-pen-updown").dispatchEvent(toggleCheckEvent);
*/

function initialise_display_element(el) {
  var toggleCheckEvent = new CustomEvent("x-switch:update");
  document.getElementById(el).dispatchEvent(toggleCheckEvent);
}

for (const el in rs_display_lookup)
  initialise_display_element(el);


// For some reason, we need this to let py retrieve vals from js sim
// What it seems to do in bring a sim var into scope?
var _prog = element.prog;
element.prog = 'import ev3dev2_glue as glue';
runit();
element.prog = _prog;


// Events on whole simulator

const rs_root = document.getElementById("roboSim_root");

// Make labels click hide/reveal the fieldset contents
var legends = rs_root.getElementsByTagName("legend");

for (var i = 0; i < legends.length; i++)
  legends[i].addEventListener('click', function (e) {
    var nextsibling = e.target.nextElementSibling;
    if (nextsibling.classList.contains('rs-closed')) {
      nextsibling.classList.remove('rs-closed');
      nextsibling.classList.add('rs-open');
    } else {
      nextsibling.classList.remove('rs-open');
      nextsibling.classList.add('rs-closed');
    }
  });


// Keyboard shortcuts

function rs_click_togglebutton(elID, state="true") {
  const clicker = document.querySelector("#int--" + elID);
  clicker.setAttribute('aria-checked', state);
  const toggleClickEvent = new CustomEvent("x-switch:update");
  document.getElementById(elID).dispatchEvent(toggleClickEvent);
}

uiSettings['enableKeyboardShortcuts'] = false;

rs_root.addEventListener('mouseenter', function (e) {
  Jupyter.keyboard_manager.disable();
  uiSettings['enableKeyboardShortcuts'] = true;
});

document.addEventListener('keydown', function (e) {
  const key = e.key;
  if (uiSettings['enableKeyboardShortcuts']) {
    if (key === 'R') {
      rs_click_togglebutton('roboSim-display-runstop');
    }
  }
})

rs_root.addEventListener('mouseleave', function (e) {
  Jupyter.keyboard_manager.enable();
  uiSettings['enableKeyboardShortcuts'] = true;
});


// All done...

console.debug("studio.js loaded");
