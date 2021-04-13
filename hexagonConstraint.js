class hexagonConstraint{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.08,
            length:10
        }
        this.hexaCons = Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.hexaCons);
    }
    display(){
   
        if(this.hexaCons.bodyA){
            var posA = this.hexaCons.bodyA.position;
            var posB = this.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
  fly(){
      this.hexaCons.bodyA = null;
  }
  attach(body){
      this.hexaCons.bodyA = body;
  }
}
