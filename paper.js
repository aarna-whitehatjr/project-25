class Paper
{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            density : 1.2,
            restitution : 0.3
        }
        this.body = Bodies.circle(x,y,r/2-10,options);
        World.add(world, this.body)
        this.image = loadImage("paper.png")
        this.r = r
    }
    display(){
        push();

        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.image, 0,0,this.r,this.r);


        pop();

        
    }

}