class Planet {
    constructor(parent) {
        this.parent = parent
        this.loc = createVector(0,0);
        this.size = 20
        this.angle = random(TWO_PI);//angle of rotation
        this.orbit = random(50, 400);//dist from sun
        this.moons = [];


        for(var i = 0; i < 3; i++) {
            this. moons[i] = new Moon(this, this.parent); 
         }
        
      
    }

    run() {
        this.render();
        this.update();
        this.split();//renders roots
    }

    render() {
        // fill(0, 150, 0);
        // ellipse(this.loc.x, this.loc.y, this.size);// make planet
        for(var i = 0; i < this.moons.length; i++) {
            this.moons[i].run();
        }
       }

    update() {
        this.loc = createVector(sun.loc.x, sun.loc.y);// get the loc of the sun
        this.angle += 0.01 // speed of rotation
        this.loc.x = this.loc.x + cos(this.angle) * this.orbit; //makes it rotate
        this.loc.y = this.loc.y + sin(this.angle) * this.orbit;
    }

    split() { // runs the roots if a key is pressed
        var clr = color(255,0,0)
        if(keyIsPressed === true) {
            roots.push(new Root(this.loc.x, this.loc.y, 5, 133, clr));
        }
    }

}