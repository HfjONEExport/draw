// download button
const downloadBtn = document.getElementById('download');
downloadBtn.addEventListener('click', function(e) {
  const canvasUrl = canvas.toDataURL("image/png");
  const createEl = document.createElement('a');
  createEl.href = canvasUrl;
  createEl.download = "mydrawing";
  createEl.click();
  createEl.remove();
});


// slider output
var slider = document.getElementById('slider');
var output = document.getElementById('pensize');
output.innerHTML = slider.value;

slider.oninput = function(){
  output.innerHTML = this.value;
}

// draw on the canvas
            const canvas = document.getElementById('theCanvas');
            const context = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();
            canvas.width = 600;
            canvas.height = 600;
            context.fillStyle = "#FFFFFF"; // Set the fill color (e.g., red)
            context.fillRect(0, 0, 1000, 1000); // Draw a filled rectangle

// set colors
function red(){
  context.strokeStyle ="#FF0000"
}
function redorange(){
  context.strokeStyle ="#ff4000"
}
function orange(){
  context.strokeStyle ="#ff8000"
}
function yelloworange(){
  context.strokeStyle ="#ffc000"
}
function yellow(){
  context.strokeStyle ="#ffff00"
}
function yellowgreen(){
  context.strokeStyle ="#80ff00"
}
function green(){
  context.strokeStyle ="#00ff00"
}
function bluegreen(){
  context.strokeStyle ="#00ff80"
}
function cyan(){
  context.strokeStyle ="#00ffff"
}
function cyanblue(){
  context.strokeStyle ="#0080ff"
}
function blue(){
  context.strokeStyle ="#0000ff"
}
function purple(){
  context.strokeStyle ="#8000ff"
}
function magenta(){
  context.strokeStyle ="#ff00ff"
}
function white(){
  context.strokeStyle ="#FFFFFF"
}
function gray1(){
  context.strokeStyle ="#c0c0c0"
}
function gray2(){
  context.strokeStyle ="#808080"
}
function gray3(){
  context.strokeStyle ="#404040"
}
function black(){
  context.strokeStyle ="#000000"
}
document.getElementById('colorpicker').onchange = function() {
  context.strokeStyle = this.value
}

// main drawing code
const MAIN_MOUSE_BUTTON = 0;

function prepareContext(canvasElement) {
  let dpr = window.devicePixelRatio || 1;
  let rect = canvasElement.getBoundingClientRect();
  let context = canvasElement.getContext("2d");
  
  return context;
}

function setLineProperties(context) {
  context.lineWidth = document.getElementById('slider').value;
  context.lineJoin = "round";
  context.lineCap = "round";
  return context;
}

let theCanvas = document.getElementById("theCanvas");
let theContext = prepareContext(theCanvas);
let shouldDraw = false;

theCanvas.addEventListener("mousedown", start);
theCanvas.addEventListener("mouseup", end);
theCanvas.addEventListener("mousemove", move, false);

function start(event) {
  if (event.button === MAIN_MOUSE_BUTTON) {
    shouldDraw = true;
    setLineProperties(theContext);
    
    theContext.beginPath();
    let elementRect = event.target.getBoundingClientRect();
    theContext.moveTo(event.clientX - elementRect.left, event.clientY - elementRect.top);
  }
}

function end(event) {
  if (event.button === MAIN_MOUSE_BUTTON) {
    shouldDraw = false;
  }
}

function move(event) {
  if (shouldDraw) {
    let elementRect = event.target.getBoundingClientRect();
    
    theContext.lineTo(event.clientX - elementRect.left, event.clientY - elementRect.top);
    theContext.stroke()
  }
}