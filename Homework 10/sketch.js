
var x1 = 150
var x2 = 150
var y1 = 130
var y2 = 2
var S = 10
var SC = 5
movement = 10
movement1 = 20


function setup() {
  createCanvas(400,400);
movement2 = floor(random(30-40));
movement3 = floor(random(1-20));


}


function draw() {
  background(220);

fill(10, 80, 120);
circle(x1, y2, 350);



fill(255, 204, 0);

ellipse(x1,130,50,60);
if(x1 >= 400 || x1 <= 0)
    {
       movement *= -1;
    }

     x1 += movement;



ellipse(x2,130,50,60);
if(x2 >= 400 || x2 <= 0)
    {
       movement1 *= -1;
    }

     x2 += movement1;


fill('hsl(160, 100%, 50%)');
rect(180,y2,100,60);
if(y2 >= 400 || y2 <= 0)
    {
       movement3 *= -1;
    }

     y2 += movement3;


line(100, 100, 180, 90);
line(100, 170, 180, 170);
line(100, 170, 100, 100);
line(180, 90, 180, 170);

line(225, 100, 300, 90);
line(225, 170, 300, 170);
line(225, 170, 225, 100);
line(300, 90, 300, 170);

fill(50, 55, 100)
triangle(190, y1, 200, 180, 250, 220);
if(y1 >= 400 || y1 <= 0)
    {
       movement2 *= -1;
    }

     y1 += movement2;




point(150, 130);
point(250, 130);

textSize(S);
text('Norman E Wootton IV',10, 375);
if(S >= 50 || S <= 1)
    {
       SC **= -1;
    }
S *=SC
     

}
 

