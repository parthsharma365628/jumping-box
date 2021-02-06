var box
var gr1,gr2,gr3,gr4
var music;
var edges 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600); 
 
    box=createSprite(round(random(50,750)),round(random(50,200)),30,30)
    box.shapeColor="orange"
    box.velocityX=5
    var num=round(random(1,2))
    switch(num){
    case 1:
        box.velocityX=10
        break
    case 2:
        box.velocityX=-10
    }
    box.velocityY=10
    //create 4 different surfaces
    gr1=createSprite(100,580,180,25)
    gr1.shapeColor="red"
    
    gr2=createSprite(295,580,180,25)
    gr2.shapeColor="blue"

    gr3=createSprite(495,580,180,25)
    gr3.shapeColor="green"

    gr4=createSprite(695,580,180,25)
    gr4.shapeColor="purple"

    edges=createEdgeSprites()
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


  if(gr1.isTouching(box)){
  box.shapeColor="red"
  music.play()
  }
  if(gr2.isTouching(box)){
    box.shapeColor="blue"
    
    }
    if(gr3.isTouching(box)){
        box.shapeColor="green"
       
        }

        if(gr4.isTouching(box)){
            box.shapeColor="purple"
            box.velocityX=0
            box.velocityY=0
            music.stop()
             
            }  
  box.bounceOff(edges)
box.bounceOff(gr1)
box.bounceOff(gr2)
box.bounceOff(gr3)
box.bounceOff(gr4)
    //add condition to check if box touching surface and make it box
    drawSprites()
}
