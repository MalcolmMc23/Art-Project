class Moon {
    constructor(parent, sunParent) {
        this.parent = parent;
        this.sunParent = sunParent;
        this.loc = createVector();
        this.size = 10
        this.angle = random(TWO_PI);//  anlge of orbit
        this.orbit = 50; //dist from planet
        // this.sv = slider2.value();


    }

    run() {
        this.render();
        this.update();
        this.split();//renders roots

    }

    render() {
        // fill(200);
        // ellipse(this.loc.x, this.loc.y, this.size); //makes moon
    }

    update() {
        this.sv = slider2.value();
        this.angle += 0.05 // speed of rotation
        // this.loc.x = this.parent.loc.x + cos(this.angle) * this.orbit; //makes it rotate
        // this.loc.y = this.parent.loc.y + sin(this.angle) * this.orbit;
        this.loc.x = this.parent.loc.x + cos(this.angle) * this.sv; //makes it rotate
        this.loc.y = this.parent.loc.y + sin(this.angle) * this.sv;
    }
    split() {
        if(keyIsPressed === true) { // makes a root if the mouse is pressed
            roots.push(new Root(this.loc.x, this.loc.y, 5, 133));
        }
    }
}