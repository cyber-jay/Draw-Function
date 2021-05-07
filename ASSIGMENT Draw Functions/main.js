// Draw Functions

// Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Circle Function
function circle(x, y, r, mode){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.stroke();
    }
}
// Functions
function stroke(style) {
    ctx.strokeStyle = style;
}

// Draw a Dart
function drawDart(x, y, color) {
    stroke(color);
    circle(x + 20, y + 20, 20, "stroke");
    circle(x + 20, y + 20, 15, "stroke");
    circle(x + 20, y + 20, 10, "stroke");
    circle(x + 20, y + 20, 5, "stroke");
}
drawDart(200, 220, "blue");
drawDart(400, 300, "red");
drawDart(500, 200, "purple");

// Draw a Star
drawStar("green");
function drawStar(color) {
    stroke(color)
    ctx.beginPath();
    ctx.moveTo(470, 300, "stroke"); 
    ctx.lineTo(400, 200, "stroke"); 
    ctx.moveTo(470, 300, "stroke"); 
    ctx.lineTo(290, 200, "stroke"); 
    ctx.moveTo(470, 300, "stroke"); 
    ctx.lineTo(490, 200, "stroke"); 
    ctx.moveTo(290, 200, "stroke"); 
    ctx.lineTo(490, 200, "stroke"); 
    ctx.stroke();
}
