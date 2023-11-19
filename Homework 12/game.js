var chspeedx = 50;
var chspeedy = 50;

var ex = 130
var ey =140
var ex1 =100
var ey1 = 200

var mousex;
var mousey;
    function setup()
    {
        createCanvas(400,400);
	
    }
   function draw()
    {
	randomizer();
	pagesetup();
	borders();
	move();
	enemey();
	winner();
	mouseshape();
	} 

function randomizer()
{
exmovement= floor(random()*10)+1;
	eymovement= floor(random()*10)+1;
	ex1movement= floor(random()*10)+1;
	ey1movement= floor(random()*10)+1;
}
function pagesetup()
{
 background(0);
	fill(400,200,300);
        circle(chspeedx,chspeedy,20);
}

function move()
{

if(keyIsDown(68))
  {
      chspeedx+=5;
  }
  if(keyIsDown(65))
  {
      chspeedx-=5;
  } 

if(keyIsDown(83))
  {
      chspeedy+=5;
  }
  if(keyIsDown(87))
  {
      chspeedy-=5;
  } 
}


function enemey()
{
fill(100, 180, 129);
circle(ex1,ey1,50);

ex1 += ex1movement
ey1 += ey1movement
    if(ex1 > width)
    {
        ex1 = 0;
    }
    if(ex1 < 0)
    {
        ex1 = width;
    }
    if(ey1 > height)
    {
        ey1 = 0;
    }
    if(ey1 < 0)
    {
        ey1 = height;
    }


fill(10, 80, 120);
square(ex,ey,150);

ex += exmovement
ey += eymovement
    if(ex > width)
    {
        ex = 0;
    }
    if(ex < 0)
    {
        ex = width;
    }
    if(ey > height)
    {
        ey = 0;
    }
    if(ey < 0)
    {
        ey = height;
    }
}



function winner()
{
text("Exit",width-20,height-20)

if(chspeedx >width && chspeedy > width-20)
{
text("You dun Won",100,100)
}
}

function mouseshape()
{


fill(220,230,240)
circle(mousex,mousey,50);
}
function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }

function borders()
{
rect(0,0,10,400);
rect(0,0,400,10);
rect(0,390,400,10);
rect(390,0,400,400);
}