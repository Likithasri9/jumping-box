var canvas;
var block1,block2,block3,block4;
var ball, edges;
var musicSound;

function preload(){
    // load sound here
    musicSound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(830,550);

    block1 = createSprite(0,520,360,30);
    block1.shapeColor = "violet";

    block2 = createSprite(295,520,200,30);
    block2.shapeColor = "rgb(153,204,0)";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(510,520,200,30);
    block3.shapeColor = "rgb(255,153,204)";

    block4 = createSprite(725,520,200,30);
    block4.shapeColor = "rgb(255,255,0)";
    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    //write code to add velocityX and velocityY
    
    ball.velocityY = 9;
    ball.velocityX = 9;
}

function draw() {
    background(0,0,0);
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    fill(rgb(255,255,153));
    textSize(60);
    text("Jumping Box",230,250);

    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){

        ball.shapeColor = "violet";
        musicSound.play();
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){

        ball.shapeColor = "rgb(153,204,0)";
    }

    //write code to bounce off ball from the block3
    
    if(block3.isTouching(ball) && ball.bounceOff(block3)){

        ball.shapeColor = "rgb(255,153,204)";
    }

    //write code to bounce off ball from the block4

    if(block4.isTouching(ball) && ball.bounceOff(block4)){

        ball.shapeColor = "rgb(255,255,0)";

        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.x = 380;
        ball.y = 150;
        //write code to stop music
        musicSound.stop();
    }
    drawSprites();
}
