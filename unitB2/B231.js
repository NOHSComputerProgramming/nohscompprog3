 // var choice = 1;
// function setup() {
//   createCanvas(400, 200);
// 	choice = getURLParams()["choice"];
// 	if (choice === undefined) {
// 		choice = 1;
// 	}
	
// }

var fillColor = 'white';
var rectSize = 200;

var choice = message;
function setup() {
  createCanvas(400, 400);
	//choice = getURLParams()["choice"];
	//choice = 1;
	//if (choice === undefined) {
	//	choice = 1;
		
	//}
	if(choice >= 1){
		rectMode(CENTER);
	}
	print("Choice = " + choice);
}

function draw() {
	if(choice >= 1){
		background(220);

		fill(fillColor);
		rect(0.5*width, 0.5*height,rectSize,rectSize);
	}
	if(choice >= 2){
		if(keyIsPressed){
			if(key === 'g'){
				fillColor = 'green';
			}
			if(choice >= 3){
				if(key === 'r'){
      fillColor = color(random(0,255),random(0,255),random(0,255));
    }
				if(choice == 5){
					if(choice == 5){
		if(keyCode === UP_ARROW){
			fillColor = 'blue';
			rectSize+=10;
		}
		if(keyCode === DOWN_ARROW){
			fillColor = 'red';
			rectSize-=10;
		}
	}
				}
			}
		}
	}
}	

function keyPressed(){
	if(choice >= 4){
		if(key === 'x'){
			fillColor = color(random(0,255),random(0,255),random(0,255));
		}
	}
	
}
