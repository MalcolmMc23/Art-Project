// Malcolm McDonald
// 1/25/22
//FlowField

var inc = 0.1;
var start = 0;
var cellSize = 50
var cols, rows;
var zoff = 0;
var fr;
var particals = [];
var flowField;


function setup() {
  var cnv = createCanvas(700, 700);
  cnv.position((windowWidth-width)/2, 30);
  // background(20)

  fr = createP('')
  cols = floor(width/cellSize);
  rows = floor(height/cellSize);

  flowField = new Array(cols * rows)

  for(var i = 0; i < 200; i++) {
  particals[i] = new Partical();
  }



}

function draw() {
  background(20, 20, 20, 50);

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
      // rect(x * cellSize, y * cellSize, cellSize);
    }
    yoff += inc;

    zoff += 0.001;

  for(var i = 0; i < particals.length; i++) {
    particals[i].follow(flowField);
    particals[i].run();
    particals[i].update();
    }

    fr.html(floor(frameRate()));
  }
}


// function swapPixels() {
//   for(var i = 0; i < img.width; i++) {
//     for(var j = 0; j < img.height; j++) {

//     }
//   }
// }
