class Drop  {
constructor(x,y, ){
    var options={
        restitution : 0.1,
        friction:  0.002
    }
    this.body = Bodies.circle(x,y,options);
    this.width = width;
    this.height= height;
   
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    fill(65,175,175)
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,)
}

update(){
    if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,400), y: random(-10,0)})

    }
}
}