class ball{
    constructor(){
        var options = {
            density : 100

        }
        this.body = Bodies.circle(500,500,100,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,100,100)

    }
}