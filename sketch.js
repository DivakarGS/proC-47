var Doreamon;
var Nobita;
var Ground;




function preload(){

NobitaImg1 = loadImage("Nobita3.png")
NobitaImg2 = loadImage("Nobita.jpg")
DoreamonImg1 = loadImage("Doreamon1.png")
GroundImg1 = loadImage("Ground.jpg")
GadgetImg1 = loadImage("Gadget1.png")
GadgetImg2 = loadImage("Gadget2.png")
GadgetImg3 = loadImage("Gadget3.png")
GadgetImg4 = loadImage("Gadget4.png")
GadgetImg5 = loadImage("Gadget5.png")
GadgetImg6 = loadImage("Gadget6.png")


}

function setup(){
createCanvas(1500,700);

Ground = createSprite(500,300,50,50);
Ground.addImage("Ground",GroundImg1);
Ground.scale = 4;
Ground.velocityX = -2;



Doreamon = createSprite(500,300,50,50);
Doreamon.addImage("Doreamon",DoreamonImg1);
Doreamon.scale = 0.2;
Doreamon.velocityX = 5; 

Nobita = createSprite(400,200,50,50);
Nobita.scale = 0.5;
Nobita.addImage("Nobita",NobitaImg1);




}

function draw(){
background(2);

//calling the function key controls
keyControls();

//Calling the function to Spawn gadgets
spawnGadgets();

//reset the ground
if(Ground.x<250){
  Ground.x = 500;
}



//reseting doreamon

if(Doreamon.x>1500){
  Doreamon.x = 0;
}

drawSprites();

}


function keyControls(){
  if(keyDown("w")){
  Nobita.y = Nobita.y - 5
  }

  if(keyDown("s")){
    Nobita.y = Nobita.y + 5
    }

    if(keyDown("a")){
      Nobita.x = Nobita.x - 5
      }

      if(keyDown("d")){
        Nobita.x = Nobita.x + 5
        }  

}

function spawnGadgets(){

  if(frameCount%50==0){

  Gadgets = createSprite(random(250,1200),random(50,650),50,50);
  Gadgets.velocityX = -5;
    RandomNumber =Math.round(random(1,6)) 
    switch(RandomNumber){

      case 1: Gadgets.addImage("Gadget1",GadgetImg1)
              Gadgets.scale = 0.3;
      

      case 2: Gadgets.addImage("Gadget2",GadgetImg2)
              Gadgets.scale = 0.3;
      

      case 3: Gadgets.addImage("Gadget3",GadgetImg3)
              Gadgets.scale = 0.3;
      

      case 4: Gadgets.addImage("Gadget4",GadgetImg4)
    

      case 5: Gadgets.addImage("Gadget5",GadgetImg5)

      

      case 6: Gadgets.addImage("Gadget6",GadgetImg6)
              Gadgets.scale = 0.3;

      break;

    }

    if(Nobita.isTouching(Gadgets)){
      Gadgets.destroy()
    }
    
    //if(Nobita.isTouching(GadgetImg2)){
   //   GadgetImg2.destroy()
   // }
    
    //if(Nobita.isTouching(GadgetImg3)){
   //   GadgetImg3.destroy()
   // }
    
    //if(Nobita.isTouching(GadgetImg4)){
    //  GadgetImg4.destroy()
   // }
    
    //if(Nobita.isTouching(GadgetImg5)){
    //  GadgetImg5.destroy()
   // }
    
    //if(Nobita.isTouching(GadgetImg6)){
    //  GadgetImg6.destroy()
    //}
  }
  

  
}






