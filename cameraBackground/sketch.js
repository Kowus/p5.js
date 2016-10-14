function setup() {
	createCanvas(450, 480);
}

function draw()
{
	if (mouseIsPressed)
	{
		background(255);
	}
	// background(255);
	var x = mouseX;
	var y = mouseY;
	var width = 20;
	var height = 20;
	var xE = x + (width/2);
	var yE = y + (height / 2) + 4;
	var lx = x + 3;
	var lw = lx + width - 6;
	strokeWeight(3);
	// rect(10, 10, 50, 50);
	fill(255);
	strokeJoin(BEVEL);
	rect(x, y, width, height);
	strokeWeight(1);
	line(lx, y + 6, lw, y + 6);
	strokeWeight(1);
	ellipse(xE, yE, 7, 7);
	strokeWeight(1);
	ellipse(xE, yE, 4, 4);
	strokeWeight(2);
	fill(255);
	point(xE, yE);
	fill(0);
	strokeWeight(2);
	point(x + width - 4, y + height - 16);

}
