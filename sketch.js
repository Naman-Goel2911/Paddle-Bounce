var ball, ballImg;
var paddle, paddleImg;
var edges;

function preload() 
{
  ballImg = loadImage("ball.png");
  paddleImg = loadImage("paddle.png");
}

function setup() 
{
  createCanvas(400, 400);
  
  ball = createSprite(200, 200, 40, 40);
  paddle = createSprite(350, 200, 20, 100);
  
  ball.addImage("ball", ballImg);
  paddle.addImage("paddle", paddleImg);
 
  ball.velocityX = 9;
  ball.velocityY = 0;

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle, randomVelocity);
  
  paddle.collide(edges);
  
  
  if (keyDown(UP_ARROW))
  {
    paddle.y = paddle.y - 10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.y = paddle.y + 10;
  }
  
  if(ball.x >= 450)
    {
       ball.x = 0;
    }
  
  drawSprites();
  
}

function randomVelocity()
{
  
  ball.velocityY = Math.round(random(5,10))
  
}

