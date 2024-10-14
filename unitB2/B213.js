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
  
	// choice = getURLParams()["choice"];
	// if (choice === undefined) {
	// 	choice = 1;
	// }
if(choice == 1){
	createCanvas(400, 120);
}
	if(choice == 2){
		createCanvas(400,200);
	}
}
function draw(){

  if(choice == 1){


	  background(220);
  rectMode(CENTER);
  //Code an if else statement that
  //set the fill1 to 'red' when the mouse is inside the square
  //otherwise,
  //set the fill1 to 'white'.
  if(mouseX > width/2-20 && mouseX < width/2+20 && mouseY > height/2 - 20 && mouseY < height/2+20){
	  fill1 = 'red';
  }
  else{
	  fill1 = 'white';
  }
  

    
  fill(fill1);
  rect(width/2, height/2, 40,40);
  }
	if(choice==2){
		background(220);
  rectMode(CENTER);

    if ((mouseX  > 100 - 20) && (mouseX < 100 + 20) && (mouseY > 100 - 20) && (mouseY < 100 + 20)){
      ellipse(100, 100, 40,40);
      rect(300, 100, 40,40);
    }
  else if ((mouseX  > 300 - 20) && (mouseX < 300 + 20) && (mouseY > 100 - 20) && (mouseY < 100 + 20)){
      ellipse(300, 100, 40,40);
      rect(100, 100, 40,40);
    }
    else{       
      rect(100, 100, 40,40);
      rect(300, 100, 40,40);
    }
  
	}
	
}
