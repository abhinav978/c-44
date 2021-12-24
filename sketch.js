var bg;
var pc,pcImg;

function preload(){

  bg=loadImage("assets/bg 3.jpeg")
  pcImg=loadImage("assets/pc.png")
}
function setup(){
createCanvas(1000,500)
 pc = createSprite (100,350,200,200)
 pc . addImage (pcImg)
}
function draw(){

  background(bg)
  drawSprites()
}