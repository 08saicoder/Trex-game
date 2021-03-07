class paper
{
    constructor(x,y,height){
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }

   ground = Bodies.rectangle(200, 390, 20, 20, ground_options);
   World.add(world, ground);
 
   var ball_options = {
     restitution : true
   }
 
   ball = Bodies.circle(200, 100, 20, ball_options);
   World.add(world, ball);

   this.image = loadImage("sprites/paper.png");
    }
}