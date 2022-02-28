class Moon {
    constructor(parent, sunParent, clr) {
        this.parent = parent;
        this.sunParent = sunParent;
        this.loc = createVector();
        this.size = 10
        this.angle = random(TWO_PI);//  anlge of orbit
        this.orbit = 150; //dist from planet
        this.clr = clr


    }

    run() {
        this.render();
        this.update();
    }

    render() {
        // fill(200);
        // ellipse(this.loc.x, this.loc.y, this.size); //makes moon
        if(keyPressed() === true){
        stroke(0,255,200, 30)
        noFill()
        bezier(this.parent.loc.x, this.parent.loc.y, this.loc.x, this.loc.y, this.loc.x, this.loc.y, this.sunParent.loc.x, this.sunParent.loc.y)
    }
        //stroke(this.clr,this.clr,this.clr)
        //line(this.parent.loc.x, this.parent.loc.y, this.sunParent.loc.x, this.parent.loc.y);
    }

    update() {
        this.angle += 0.005 // speed of rotation
        this.loc.x = this.parent.loc.x + cos(this.angle) * this.orbit; //makes it rotate
        this.loc.y = this.parent.loc.y + sin(this.angle) * this.orbit;
    }
}