class Drop  {
constructor(x,y, r){
    var options={
        restitution : 0.1,
        friction:  0.002
    }
    this.body = Bodies.circle(x,y,options);
    this.width = width;
    this.height= height;
    this.r = r;
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    fill(65,175,175)
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.r)
}

update(){
    if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,400), y: random(-10,0)})

    }
}
}