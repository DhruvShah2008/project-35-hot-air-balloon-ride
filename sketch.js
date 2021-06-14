var balloon,balloonImage1,balloonImage2,position;
// create database and position variable here
var database;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");

 
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  var Position = database.ref("balloon/height")
  Position.on("value",readPosition,showError)
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 


  
}

// function to display UI
function draw() {
  background(bg);

  
    //write code to move air balloon in left direction
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
      balloon.addAnimation("hotAirBalloon",balloonImage2)
  }

  
    //write code to move air balloon in right direction
     if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
      balloon.addAnimation("hotAirBalloon",balloonImage2)

  }

    //write code to move air balloon in up direction
    if(keyDown(UP_ARROW)){
      writePosition(0,-1);
      balloon.addAnimation("hotAirBalloon",balloonImage2)

  }

  
    //write code to move air balloon in down direction
     if(keyDown(DOWN_ARROW)){
      writePosition(0,1);
      balloon.addAnimation("hotAirBalloon",balloonImage2)

  }
  

  drawSprites();
  stroke ("red")
  textSize(25)
  text("use arrow keys to move the hot air balloon",40,40)
}

  

  function writePosition(x,y){
    database.ref('balloon/height').set({
      'x': balloon.x+x,
      'y': balloon.y+y, 
    })
     
    }
    
    function readPosition(data){
      Position = data.val()
       balloon.x = Position.x;
       balloon.y = Position.y;
    }
    
    function showError(){
        console.log("error in write into database")
    
    }
  