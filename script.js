var canvas = document.getElementById('canvas');

var context = canvas.getContext('2d');
context.lineWidth = 5;
var down = false;

function loaded() { 
	document.getElementById("myHperlink").innerHTML = context.lineWidth;
}

function initLine() {
	canvas.removeEventListener("mousedown", mouseDown);
	canvas.removeEventListener("mouseup", mouseUp);
	canvas.removeEventListener("mousemove", mouseMove);
	
	canvas.addEventListener('mousemove', draw);

	canvas.addEventListener('mousedown', function()
	{
		down = true;
		context.beginPath();
		context.moveTo(xPos, yPos);
		canvas2.addEventListener('mousemove', draw);
	});	
	
	canvas.addEventListener('mouseup', function() { down = false; });
}

function draw(e)
{
	xPos = e.clientX - canvas.offsetLeft;
	yPos = e.clientY - canvas.offsetTop;

	if(down == true) {
		context.lineTo(xPos, yPos);
		context.stroke();	
	}	
}

function decStroke() { 
	context.lineWidth = context.lineWidth - 1;	
	loaded();
}

function incStroke() { 
	context.lineWidth = context.lineWidth + 1; 
	loaded();
}

function changeColor(color) { context.strokeStyle = color; }
function clearCanvas() { context.clearRect(0,0,canvas.width, canvas.height); }


rect = {},
drag = false;

function drawRect() {
  context.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
}

function mouseDown(e) {
  rect.startX = e.pageX - this.offsetLeft;
  rect.startY = e.pageY - this.offsetTop;
  drag = true;
}

function mouseUp() {
  drag = false;
}

function mouseMove(e) {
  if (drag) {
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY ;
    context.clearRect(0,0,canvas.width,canvas.height);
    drawRect();
  }
}

function init() {
  canvas.addEventListener('mousedown', mouseDown);
  canvas.addEventListener('mouseup', mouseUp);
  canvas.addEventListener('mousemove', mouseMove);
}