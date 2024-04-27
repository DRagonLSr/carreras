class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.positionx=0;
    this.positiony=0
  }
  getcount(){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",data =>{
      playerCount=data.val();
    })
  }
  updatecount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
  addplayer(){
    var playerindex;
    playerindex="players/player"+this.index;
    if(this.index==1){
      this.positionx=width/2-100;
    }
    else{
      this.positionx=width/2+100
    }
    database.ref(playerindex).set({
      name:this.name,
      positionx:this.positionx,
      positiony:this.positiony,
    })
  }
  static gpi(){
    var playerinforef=database.ref("players");
    playerinforef.on("value",data=>{
      allplayers=data.val();
    })
  }
  update(){
    var playerindex="players/player"+this.index
    database.ref(playerindex). update({
      positionx:this.positionx,
      positiony:this.positiony
    })
  }
}
