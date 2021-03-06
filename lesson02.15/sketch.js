function setup() {
	createCanvas(480, 120);
	background(204);
}

function draw() {
  	fill(153);						// Medium gray
  	ellipse(132, 82, 200, 200);		// Gray circle
  	noFill();						// Turn off fill
  	ellipse(228, -16, 200, 200);	// Outline circle
  	noStroke();						// Turn off stroke
  	ellipse(268, 118, 200, 200);	// Doesn't draw!
}


/*
		Be careful not to disable the fill and stroke at the same time, as
		we’ve done in this example, because nothing will draw
		to the screen.
*/