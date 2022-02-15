// Malcolm McDonald
// 2/8/22
// Lab Space Curves Phase 1

var sun;

function setup() {
  var cnv = createCanvas(800, 494.4);
  cnv.position((windowWidth-width)/2, 30);
  var pX = width/2;// planet loc x
  var pY = height/2;// planet loc y 
  var clr = random(255);
  var clr2 = random(255);
  var clr3 = random(255);



  sun = new Sun(width/2, height/2, clr, clr2, clr3); //makes a sun


}

function draw(){
  background(20,20,20, 2)
  sun.run();//runs sun
  
}
