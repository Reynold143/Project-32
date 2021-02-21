class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        //the if condition only will work when the bodyA is not equal to null
        if (this.chain.bodyA != null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
    //this can be called anything but we use it to access the bodyA and remove the string
    fly(){
        this.chain.bodyA= null
    }
    
}