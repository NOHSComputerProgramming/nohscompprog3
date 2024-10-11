/* Place your JavaScript in this file */
var choice = message;
function setup() {
  createCanvas(400, 200);
	// choice = getURLParams()["choice"];
	// if (choice === undefined) {
	// 	choice = 2;
	// }
	
}

function draw() {
	background('lightgray');
	if(mouseX > 300){
		background('black');
	}
	//set the initial fill to red
	fill('red');
	if(mouseX > 0.5*width){
	  fill('blue');
	}
	//draw a rect at the center of the canvas
	rectMode(CENTER);

	//choice 2
	var size = 50;
	
	if(choice == 2 && mouseX < 100){
		size = 10;
	}

	//choice 1
  	//rect(0.5*width, 0.5*height,50,50);

	//choice 2
  	rect(0.5*width, 0.5*height,size,size);

}
