class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      
        display(){
          var pos =this.body.position;
          ellipseMode(CENTER);
          push();
          fill("orange");
          ellipse(pos.x, pos.y, this.radius,this.radius);
          pop();
        }
        
      };
