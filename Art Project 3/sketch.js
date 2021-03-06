// Malcolm McDonald
// 2/17/22
// Art Project 3

var sun;
var roots = [];
var count = 0; // counter for the roots 
var slider1;
var slider2;
var img;


function preload() {
  img = loadImage("AP3 image.jfif")
}

function setup() {
  var cnv = createCanvas(1707 ,1067);
  cnv.position((windowWidth-width)/2, 30);
  var pX = width/2;// planet loc x
  var pY = height/2;// planet loc y 
  sun = new Sun(width/2, height/2); //makes a sun
  background(255)
  slider = createSlider(0.005, 0.1, 0.05, 0);
  slider.position(10, 10);

  slider2 = createSlider(10, 250, 50, 0);
  slider2.position(150, 10);

  // image(img, 0, 0, 828 ,512);


}

function draw(){
  // background(255, 255, 255, 1)
  // background(20, 20, 20, 20)
  sun.run();//runs sun

//################### roots
  runRoots();
  checkRoots();
//################## 
}


function checkRoots() { // splices root when isDead = true
  for(var i = 0; i < roots.length; i++) {
    if(roots[i].isDead) {
      roots.splice(i, 1);
    }
  }
}




function runRoots() { // runs the roots
  for(var i = 0; i < roots.length; i++) {
    roots[i].run()
  }
}

