class Umbrella{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0.5
        }
        this.body = Matter.Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("images/Walking/walking_1.png")
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x-90, pos.y-20, 175, 175)
    }
}
