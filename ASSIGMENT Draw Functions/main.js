// Drawing Assignment

function stroke(style) {
    ctx.strokeStyle = style;
}

function fill(style) {
    ctx.fillStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600; 

// function drawStickman(x, y, color) {
    //stroke(color)
    //circle(x + 20, y + 20, 20, "stroke"); // This is the head/circle
    //line(x + 20, y + 40, x + 20, y + 80); // This is the body/line
    //line(x, y + 70, x + 20, y + 50); // This is the left arm/line
    //line(x + 40, y + 70, x + 20, y + 50); // This is the right arm/line
    //line(x, y + 110, x + 20, y + 80); // This is the left Leg/Line
    //line(x + 40, y + 110, x + 20, y + 80);
//}

// drawStickman(100, 250, "blue");
// drawStickman(200, 250, "red");
// drawStickman(5, 250, "black");

// Function for Circle with a center (x, y) and radius of r.
function circle(x, y, r, mode, color){
    stroke(color);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke"){
        ctx.stroke();
    }
}
// Draw a Circle | Assignemnt 1!
circle(600, 300, 50, "stroke", "red"); // Circle 1
circle(600, 300, 45, "stroke", "blue"); // Circle 2
circle(600, 300, 40, "stroke", "black"); // Circle 3
circle(600, 300, 35, "stroke", "pink"); // Circle 4
circle(600, 300, 30, "stroke", "brown"); // Circle 5
circle(600, 300, 25, "stroke", "purple"); // Circle 6
circle(600, 300, 20, "stroke", "green"); // Circle 7
circle(600, 300, 14, "stroke", "violet"); // Circle 8
circle(600, 300, 8, "stroke", "black"); // Circle 9
ctx.fillStyle = "blue";
// Draw a Circle (2)
circle(400, 300, 50, "stroke", "red"); // Circle 1
circle(400, 300, 40, "stroke", "black"); // Circle 3
circle(400, 300, 30, "stroke", "brown"); // Circle 5
circle(400, 300, 20, "stroke", "green"); // Circle 7
circle(400, 300, 8, "stroke", "black"); // Circle 9
ctx.fillStyle = "blue";




// Draw a platform | Assignment 2!
function line(x1, y1, x2, y2, color) {
    stroke(color);
    ctx.beginPath();
    ctx.moveTo(x1, y1); // This is Endpoint 1
    ctx.lineTo(x2, y2); // This is Endpoint 2
    ctx.stroke();
}
line(300, 210, 160, 210, "green"); // Top Tine
line(300, 250, 160, 250, "black"); // Bottom Tine
line(160, 250, 160, 210, "brown"); // Left Line
line(300, 250, 300, 210, "brown"); // Right Line
line(300, 230, 160, 230, "black"); // Right Line
ctx.fillStyle = "green";

