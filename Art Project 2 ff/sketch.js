// Malcolm McDonald
// 2/17/22
//FlowField

var inc = 0.1;
var start = 0;
var cellSize = 50
var cols, rows;
var zoff = 0;
var fr;
var particals = [];
var flowField;
var stars = [];
var slider


function setup() {
  var cnv = createCanvas(700, 504);
  cnv.position((windowWidth-width)/2, 30);
  // background(20)

  slider = createSlider(0.001, 1.0, 0.5, 0); //yoff slider
  slider.position(30, 10);

  fr = createP('')
  cols = floor(width/cellSize);
  rows = floor(height/cellSize + 4);

  flowField = new Array(cols * rows)

  for(var i = 0; i < 50; i++) {
  particals[i] = new Partical();
  }

  for(var i = 0; i < 100; i++) {
    stars[i] = new Stars();
  }

}

function draw() {
  if(keyTyped()){

  } else {

  
  background(20, 20, 20, 50);
  }
  for(var i = 0; i < stars.length; i++) {
    stars[i].render();
  }

  var val = slider.value();

  var yoff = 0;
  for(var x = 0; x < rows; x++) {
    var xoff = 0;
    for(var y = 0; y < cols; y++) {
      index = x + y * cols
      var r = noise(xoff, yoff, zoff) * TWO_PI
      var v = p5.Vector.fromAngle(r);
      v.setMag(0.1)
      flowField[index] = v
      xoff += inc;
      stroke(0, 100);
      push();
      translate(x * cellSize, y * cellSize);
      rotate(v.heading())
      // line(0, 0, cellSize, 0)

      pop();
      // fill(r);
      // fill(255)
      // rect(x * cellSize, y * cellSize, cellSize);
    }
    // yoff += inc;
    yoff += val;//changes the yoff


    zoff += 0.01;
    // zoff += val;


  for(var i = 0; i < particals.length; i++) {
    particals[i].follow(flowField);
    particals[i].run();
    particals[i].update();
    }

    fr.html(floor(frameRate()));
  }
}

function keyTyped() {
  if (key === 'a') {
    return true
   } else if (key === 'b') {
     return false
  }
}


// function swapPixels() {
//   for(var i = 0; i < img.width; i++) {
//     for(var j = 0; j < img.height; j++) {

//     }
//   }
// }
