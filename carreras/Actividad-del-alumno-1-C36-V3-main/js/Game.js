class Game {
  constructor() {}

  start() {
     player = new Player();
     playerCount=player.getcount();
     form = new Form();
     form.display();
     carw=createSprite(width/2-50, height-100)
     carr=createSprite(width/2+50, height-100)
     carw.addImage("car1",car1)
     carw.scale = 0.07
     carr.addImage("car2 ",car2)
     carr.scale = 0.07
     cars=[carr,carw];
     console.log(cars)
  }
  getstate(){
    var gamestateRef=database.ref("gameState")
    gamestateRef.on("value",function(data){
      gameState=data.val();
    })
  }
  play(){
    Player.gpi();
    this.handleelements();
   if(allplayers!=undefined){
     image(track1,0,-height*5,width,height*6);
     var index=0;
     for(var plr in allplayers){
      index=index+1;
      var x= allplayers[plr].positionx;
      var y= height-allplayers[plr].positiony;
     // cars[index-1].position.x=x;
     //cars[index-1].position.y=y;
     }
     this.controls()
     drawSprites()
   }
  }
  handleelements(){
    form.hide();
    form.titleImg.position(40,50);
  }
  update(state){
     database.ref("/").update({
      gameState:state
    })
  }
  controls(){
    if(keyIsDown(87)){
     player.positiony+=10
     player.update();
    }
  }
}
