(function(_0x128be4,_0x512907){var _0x4ac6b3=_0x443d,_0x164907=_0x128be4();while(!![]){try{var _0x35f3e6=-parseInt(_0x4ac6b3(0x12f))/0x1+-parseInt(_0x4ac6b3(0x122))/0x2*(parseInt(_0x4ac6b3(0x12a))/0x3)+parseInt(_0x4ac6b3(0x123))/0x4+parseInt(_0x4ac6b3(0x126))/0x5*(parseInt(_0x4ac6b3(0x129))/0x6)+parseInt(_0x4ac6b3(0x131))/0x7+-parseInt(_0x4ac6b3(0x127))/0x8+parseInt(_0x4ac6b3(0x121))/0x9*(parseInt(_0x4ac6b3(0x130))/0xa);if(_0x35f3e6===_0x512907)break;else _0x164907['push'](_0x164907['shift']());}catch(_0x3cfe79){_0x164907['push'](_0x164907['shift']());}}}(_0x1306,0xbe859));var x1,y1,dx1,dy1,width1,height1,color1,x2,y2,dx2,dy2,width2,height2,color2,x3,y3,dx3,dy3,width3,height3,color3,x4,y4,dx4,dy4,width4,height4,color4,x5,y5,dx5,dy5,width5,height5,color5,rx,ry,rdx,rdy,rwidth,rheight,rcolor,myChoice=0x0,gridOn=![];function _0x1306(){var _0x249517=['910664YQhdJy','peachpuff','yellow','5kMLVCa','11706528oELzwB','choice','9050622OkHGle','278097QHTYRV','black','lime','rgba(255,0,0,\x200.25)','navy','1476128nOZEEH','6506470kinHem','7360262KJfVTy','red','sandybrown','27JHozgC','22cbtIYq'];_0x1306=function(){return _0x249517;};return _0x1306();}function preload(){}function setup(){var _0x162683=_0x443d;let _0x2fffd4=getURLParams();console['log'](_0x2fffd4[_0x162683(0x128)]);message==0x1&&(myChoice=0x1);message==0x2&&(myChoice=0x2);var _0x43b62e=createCanvas(windowWidth-0xa,windowHeight-0xa);_0x43b62e['position'](0x5,0x5),dx1=0xa,dy1=0xa,color1=_0x162683(0x132),width1=0.06*height,height1=0.06*height,x1=0x0,y1=0x0,dx2=0x4,dy2=0x4,color2=_0x162683(0x125),width2=0.15*height,height2=0.15*height,x2=width/0x2,y2=0x0,dx3=0xd,dy3=0xd,color3='maroon',width3=0.11*height,height3=0.11*height,x3=width/0x2,y3=height/0x2,dx4=0x7,dy4=0x7,color4='magenta',width4=0.04*height,height4=0.04*height,x4=0x0,y4=height/0x2,dx5=0x7,dy5=0x7,color5='pink',width5=0.04*height,height5=0.04*height,x5=width/0x2,y5=height/0x2,rdx=0x3,rdy=0x3,rcolor='black',rwidth=width/0x2,rheight=height/0x2,rx=width/0x4,ry=height/0x4;}function draw(){var _0x12fd47=_0x443d;background(_0x12fd47(0x12b)),ellipseMode(CORNER),stroke(_0x12fd47(0x124)),fill(_0x12fd47(0x124)),rect(0x0,0x0,width/0x2,height/0x2),stroke(color1),fill(color1),ellipse(x1,y1,width1,height1),x1+=dx1,y1+=dy1,(x1+dx1<0x0||x1+dx1+width1>width/0x2)&&(dx1=-dx1),(y1+dy1<0x0||y1+dy1+height1>height/0x2)&&(dy1=-dy1),stroke(_0x12fd47(0x12e)),fill(_0x12fd47(0x12e)),rect(width/0x2,0x0,width/0x2,height/0x2),stroke(color2),fill(color2),ellipse(x2,y2,width2,height2),x2+=dx2,y2+=dy2,(x2+dx2<width/0x2||x2+dx2+width2>width)&&(dx2=-dx2),(y2+dy2<0x0||y2+dy2+height2>height/0x2)&&(dy2=-dy2),stroke(_0x12fd47(0x12c)),fill(_0x12fd47(0x12c)),rect(width/0x2,height/0x2,width/0x2,height/0x2),stroke(color3),fill(color3),ellipse(x3,y3,width3,height3),x3+=dx3,y3+=dy3,(x3+dx3<width/0x2||x3+dx3+width3>width)&&(dx3=-dx3),(y3+dy3<height/0x2||y3+dy3+height3>height)&&(dy3=-dy3),stroke(_0x12fd47(0x133)),fill(_0x12fd47(0x133)),rect(0x0,height/0x2,width/0x2,height/0x2),stroke(color4),fill(color4),ellipse(x4,y4,width4,height4),x4+=dx4,y4+=dy4,(x4+dx4<0x0||x4+dx4+width4>width/0x2)&&(dx4=-dx4),(y4+dy4<height/0x2||y4+dy4+height4>height)&&(dy4=-dy4),(myChoice==0x1||myChoice==0x2)&&(stroke(_0x12fd47(0x12b)),strokeWeight(0x5),fill(_0x12fd47(0x12d)),rect(rx,ry,rwidth,rheight),strokeWeight(0x2)),myChoice==0x2&&(rx+=rdx,ry+=rdy,(rx+rdx<0x0||rx+rdx+rwidth>width)&&(rdx=-rdx),(ry+rdy<0x0||ry+rdy+rheight>height)&&(rdy=-rdy)),(myChoice==0x1||myChoice==0x2)&&(stroke(color5),fill(color5),ellipse(x5,y5,width5,height5),x5+=dx5,y5+=dy5,(x5+dx5<rx||x5+dx5+width5>rx+rwidth)&&(dx5=-dx5),(y5+dy5<ry||y5+dy5+height5>ry+rheight)&&(dy5=-dy5)),gridOn&&grid();}function grid(){noFill(),stroke('white');for(var _0x506c51=0x0;_0x506c51<0xa;_0x506c51++){line(0x0,0.1*height*_0x506c51,width,0.1*height*_0x506c51);}for(var _0x3426f7=0x0;_0x3426f7<0xa;_0x3426f7++){line(0.1*width*_0x3426f7,0x0,0.1*width*_0x3426f7,height);}}function _0x443d(_0x5d1c6a,_0x7aaa55){var _0x130679=_0x1306();return _0x443d=function(_0x443de9,_0x2341c0){_0x443de9=_0x443de9-0x121;var _0x3bbf67=_0x130679[_0x443de9];return _0x3bbf67;},_0x443d(_0x5d1c6a,_0x7aaa55);}function mousePressed(){gridOn=!gridOn;}function windowResized(){resizeCanvas(windowWidth-0x12,windowHeight-0x12);}function touchStarted(){if(mouseX>0.9*width&&mouseX<width&&mouseY>0x0&&mouseY<0.1*height){let _0x33d898=fullscreen();fullscreen(!_0x33d898);}}
