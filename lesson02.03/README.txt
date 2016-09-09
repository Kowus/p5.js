Basic Shapes
p5.js includes a group of functions to draw basic shapes (see
Figure 3-1). Simple shapes like lines can be combined to create
more complex forms like a leaf or a face.
To draw a single line, we need four parameters: two for the
starting location and two for the end.

To draw a line between coordinate (20, 50) and (420, 110), try:
function setup() {
	createCanvas(480, 120);
}
function draw() {
	background(204);
	line(20, 50, 420, 110);
}