
//import "./skulpt.min.js"
//import {} from"./skulpt-stdlib.js"

import "https://code.jquery.com/jquery-3.6.0.min.js";

// Raises error of document not found
//import  Plotly from "./plotly.min.js"

//import "./prism.js"
import "./simwidget.css";
import html from "./studio.html";
import { bigJob, testJob} from "./studio.js";

function generateUUID() {
  // Generate a UUIDv4
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function render({ model, el }) {
  let sim_id = generateUUID();
  let el2 = document.createElement("div");
  el2.innerHTML = html;

  let elx = document.createElement("div");
  el.classList.add("nbev3devsim");
  elx.appendChild(el2);
  el.appendChild(elx);
  //alert("try thisone>>", JSON.stringify(el), "<<");
  testJob(el, model);

  let sim = bigJob(el);

  model.on("change:test", () => {
    model.save_changes();
  });
}

export default { render };
