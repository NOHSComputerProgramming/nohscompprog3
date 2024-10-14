// var choice = 1;
// function setup() {
//   createCanvas(400, 200);
// 	choice = getURLParams()["choice"];
// 	if (choice === undefined) {
// 		choice = 1;
// 	}
	
// }
var drawColor = 'black'
var drawThickness = 8;

function setup() {
  createCanvas(400, 400);
  background('lightgray');

}

function draw() {

  
  if(mouseIsPressed ){
    stroke(drawColor);
    strokeWeight(drawThickness);
    //ellipse(mouseX, mouseY, 9, 9);
    line(pmouseX, pmouseY, mouseX, mouseY);
    
    
    //Check for box 1
    if(mouseX > 0 && mouseX < 60 && mouseY > 0 && mouseY < 60){
      drawColor = 'red';
    }
    
    //Check for box 2
    if(mouseX > 340 && mouseX < 400 && mouseY > 0 && mouseY < 60){
      drawColor = 'black';
    }
    
    //Check for box 3
    if(mouseX > 0 && mouseX < 60 && mouseY > 340 && mouseY < 400){
      var r = random(0,255);
      var g = random(0,255);
      var b = random(0,255);
      drawColor = color(r,g,b);
    }
    //Check for box 4
    if(mouseX > 340 && mouseX < 400 && mouseY > 340 && mouseY < 400){
      fill('lightgray');
      noStroke();
      rect(60,60,280,280); //inner square
    }
  }
 
  layout();
}

function layout(){
    //background
  fill('lightgray');
  noStroke();
  rect(0,0,400,60);
  rect(340,0,60,400);
  rect(0,0,60,400);
  rect(0,340,400,600);
  
  //corner rectangles
  stroke('black');
  strokeWeight(1);
  noFill();
  rect(0,0,60,60);     //left top
  rect(340,0,60,60);   //right top
  rect(0,340,60,60);   //bottom left
  rect(340,340,60,60); //bottom right
  rect(60,60,280,280); //inner square
  
  //text numbers
  fill('black');
  text("1",25,35);
  text("2",365,35);
  text("3",25,375);
  text("4",365,375);
  
  //Current draw color
  fill(drawColor);
  rect(60,0,280,60);
}	
