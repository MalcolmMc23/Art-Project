class Planet {
    constructor(parent) {
        this.parent = parent
        this.loc = createVector(0,0);
        this.acc = createVector(random(-2, 2), random(-2, 2));
        this.vel = createVector(random(-3,3), random(-3,3))

        this.size = 20
        this.angle = random(TWO_PI);//angle of rotation
        this.orbit = random(50, 400);//dist from sun
        this.moons = [];
        for(var i = 0; i < 1; i++) {
            this. moons[i] = new Moon(this, this.parent);  // makes new moons
         }
    }

    run() {
        this.render();
        this.update();
        this.loc.add(this.vel)
        this.loc.add(this.acc)
    }

    render() {
        // fill(0, 150, 0);
        // ellipse(this.loc.x, this.loc.y, this.size);// make planet
        for(var i = 0; i < this.moons.length; i++) {
            this.moons[i].run(); // runs moons
        }
      }

    update() {
        this.loc = createVector(sun.loc.x, sun.loc.y);// get the loc of the sun
        this.angle += 0.005 // speed of rotation
        this.loc.x = this.loc.x + cos(this.angle) * this.orbit; //makes it rotate
        this.loc.y = this.loc.y + sin(this.angle) * this.orbit;
    }
}