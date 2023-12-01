var chspeedx = 50;
var chspeedy = 50;

var ex = [];
var ey = [];
var edi = [];

var mousex;
var mousey;
    function setup()
    {
        createCanvas(400,400);
	var x = 50;
        var y = 50;
        var diameter = 25;
        for(var i = 0; i < 5; i++)
        {
            ex[i] = x;
            ey[i] = y;
            edi[i] = diameter;
            x += 50;
            y += 50;
            diameter += 25;
        }
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
for(var i = 0; i < ex.length; i++)
        {
            circle(ex[i],ey[i],edi[i]);
ex[i] += ex1movement
ey[i] += ey1movement
    if(ex[i] > width)
    {
        ex[i] = 0;
    }
    if(ex[i] < 0)
    {
        ex[i] = width;
    }
    if(ey[i] > height)
    {
        ey[i] = 0;
    }
    if(ey[i] < 0)
    {
        ey[i] = height;
    }

        }


fill(10, 80, 120);
square(ex[2],ey[2],edi[2]);



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