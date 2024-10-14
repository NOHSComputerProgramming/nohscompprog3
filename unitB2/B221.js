// var choice = 1;
// function setup() {
//   createCanvas(400, 200);
// 	choice = getURLParams()["choice"];
// 	if (choice === undefined) {
// 		choice = 1;
// 	}
	
// }
var choice = message;
var fill1 = 'white';

var x,y,diameter;
function setup(){
  
	// choice = getURLParams()["choice"];
	// if (choice === undefined) {
	// 	choice = 1;
	// }
if(choice == 1){
	  createCanvas(400, 120);

  noStroke();
}
	if(choice == 2){
	  createCanvas(400, 120);
		noStroke();
		background('lightgray');
		x = 200;
		y = 60;
		diameter = 40;


}
	
}
function draw(){

  if(choice == 1){
    //draw a light gray rectangle covering the left half of the canvas
    fill('lightgray');
    rect(0, 0, width/2, height);

    //draw a black rectangle over the right half of the canvas
    fill('black');
    rect(width/2, 0, width/2, height);
  
    //Add if else statement to set the fill of the ellipse here:
	  if(mouseX < width/2){
		  fill('black');
	  }
	  else{
		  fill('lightgray');
	  }

    
    //draw an ellipse at the position of the mouse
  	ellipse(mouseX, mouseY, 30, 30);
  }

	if(choice == 2){
		fill('white');

		var d = dist(mouseX, mouseY, x,y);

		if(d < diameter/2){
			fill('black');
		}
		circle(width/2, height/2, diameter);
	}


	
}
