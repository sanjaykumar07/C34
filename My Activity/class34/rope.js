class rope{
    constructor(bodyA,pointB){
       var options = {
           stiffness : 1,
           length : 700,
           bodyA : bodyA,
           pointB : pointB

        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;

        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}