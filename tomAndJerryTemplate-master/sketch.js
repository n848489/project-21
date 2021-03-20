
var cat;
var lol2;
var jerry;
var jerry2;
var back;
var back2;

function preload() {
    //load the images here
    cat=loadImage("images/cat2.png")
    jerry=loadImage("images/mouse2.png")
    back=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


    back2=createSprite(1000,800,0,0)
    back2.addImage(back);
    back2.scale=3

     lol2 = createSprite(200, 200, 50, 50)
    lol2.addImage(cat)
     jerry2 = createSprite(50, 50, 200, 200)
    jerry2.addImage(jerry)
    lol2.scale=0.1;
    jerry2.scale=0.1;
    
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    lol2.velocityX = -2;

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
