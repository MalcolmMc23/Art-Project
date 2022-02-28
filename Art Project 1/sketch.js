// Malcolm McDonald
// 2/8/22
// Lab Space Curves Phase 1

var sun;
var slider;

function setup() {
  var cnv = createCanvas(800, 494.4);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20)
  var pX = width/2;// planet loc x
  var pY = height/2;// planet loc y 


  slider = createSlider(0, 255, 100);
  slider.position(10, 10);



  sun = new Sun(width/2, height/2); //makes a sun


}

function draw(){
  // background(20)
  // background(20,20,20)
  sun.run();//runs sun
  var val = slider.value();

}

function keyPressed() {
   if(key === 'a') {
     return true
   } else if (key === 'b') {
     return false
   }
}

