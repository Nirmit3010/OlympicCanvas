var c= document.getElementById("canvas1");
var ctx=c.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();
c.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
color=document.getElementById("color").value;
mouse_x=e.clientX-c.offsetLeft;
mouse_y=e.clientY-c.offsetTop;
circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();  
}function clear1() {
    ctx.clearRect(0,0,c.width,c.height);ś
}