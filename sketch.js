var x;
var y;
var z;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  x=random(0,255);
  y=random(0,255);
	z=random(0,255);
  background(x,y,z);
	strokeWeight(4);
	stroke(255,255,255);
	noFill();
  rect(100,162.5,200,75);
	rect(175,150,50,12.5);
	rect(150,75,100,75);
	rect(125,87.5,25,50);
	rect(250,87.5,25,50);
	rect(125,325,50,25);
	rect(225,325,50,25);
	line(137.5,50,137.5,87.5);
	line(262.5,50,262.5,87.5);
	line(75,200,100,200);
	line(300,200,325,200);
	line(150,237.5,150,325);
	line(250,237.5,250,325);
	ellipse(137.5,37.5,25,25);
	ellipse(262.5,37.5,25,25);
	ellipse(175,100,25,25);
	ellipse(225,100,25,25);
	ellipse(62.5,200,25,25);
	ellipse(337.5,200,25,25);
	ellipse(137.5,362.5,25,25);
	ellipse(162.5,362.6,25,25);
	ellipse(237.5,362.5,25,25);
	ellipse(262.5,362.5,25,25);
	arc(200,100,70,70,PI/4,PI*3/4)

}

function mousePressed() {

}
