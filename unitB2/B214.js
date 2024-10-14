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
function setup(){
  
	
if(choice == 1){
	createCanvas(400, 200);
}
	if(choice == 2){
		createCanvas(400,200);
	}

		if(choice == 3){
		createCanvas(400,200);
			background('black');
			noStroke();
	}
	if(choice == 4){
		createCanvas(400,200);
			background('black');
			strokeWeight(10);
		    stroke(255,255,255,100);
	}
	if(choice == 5){
		createCanvas(400,200);
			background('black');
			strokeWeight(5);
		    
	}
}
function draw(){

  if(choice == 1){
background(180); 
  ellipse(mouseX, mouseY, 10, 10);
  }

if(choice == 2){
//background(180); 
	stroke('black');
	fill('white');
  ellipse(mouseX, mouseY, 10, 10);
	stroke('black');
	noFill();
	rect(0,0,width,height);
  }
	if(choice == 3){
//background(180); 
		fill(255,255,255,100);
  ellipse(mouseX, mouseY, 10, 10);
  }

	if(choice == 4){
//background(180); 
	line(mouseX, mouseY, pmouseX, pmouseY);
  }
	if(choice == 5){
	stroke('yellow');
	line(mouseX, mouseY, pmouseX, pmouseY);
  }
	
}
