class Player{
   constructor(x,y,width,height){
     let options={
         isStatic: true
     }
     this.body= Bodies.rectangle(x,y,width,height)
     this.image = loadImage()
     this.w = width;
     this.h = height;
     World.add(world,this.body);

     
   }
   show(){

   }
}