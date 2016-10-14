function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);

}

function draw() {
    background(204);                        // set background to grey

    // Neck
    stroke(102);                            // set stroke to grey
    line(266, 257, 266, 162);               // left
    line(276, 257, 276, 162);               // middle
    line(286, 257, 286, 162);               // right

    // Antennae
    line(276, 155, 246, 112);               // small
    line(276, 155, 306, 56);                // tall
    line(276, 155, 342, 170);               // medium

    // Body
    noStroke();                             // disable stroke
    fill(102);                              // set fill to grey
    ellipse(264, 377, 33, 33);              // wheel/anti-gravity orb
    fill(0);                                // set fill to black
    rect(219, 257, 90, 120);                // draw rectangle for body
    fill(102);
    rect(219, 274, 90, 6);
    
    // Head
    fill(0);                                // set fill to black
    ellipse(276, 155, 45, 45);              // head
    fill(255);                              // set fill to white
    ellipse(288, 150, 14, 14);              // large eye
    fill(0);                                // set fill to black
    ellipse(288, 150, 3, 3);                // pupil
    fill(153);
    ellipse(263, 148, 5, 5);              // small eye 1
    ellipse(296, 130, 4, 4);              // small eye 2
    ellipse(305, 162, 3, 3);              // small eye 3
    
}