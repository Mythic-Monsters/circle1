var mouseevent="empty";
var lastx, lasty;
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d")
var color= "black";
var widthline= 100;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
    mouseevent= "mousedown detected";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseevent= "mouseup";
}

canvas.addEventListener("mouseleave", my_leave);
function my_leave(e)
{
    mouseevent= "mouseleave"
}

canvas.addEventListener("mousemove", my_mouse);
function my_mouse(e)
{
currentx = e.clientX-canvas.offsetLeft;
currenty = e.clientY-canvas.offsetTop;

if (mouseevent == "mousedown detected")
{
ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = widthline
console.log("last position of x and y")
console.log("x =" + lastx + "y =" + lasty)
ctx.moveTo(lastx, lasty);

console.log("current position of x and y")
console.log("x =" + currentx + "y =" + currenty)
ctx.lineTo(currentx, currenty);

ctx.stroke()
}
lastx = currentx;
lasty = currenty;
}