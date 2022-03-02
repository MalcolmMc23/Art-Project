class Moon {
    constructor(parent, sunParent) {
        this.parent = parent;
        this.sunParent = sunParent;
        this.loc = createVector();
        this.size = 10
        this.angle = random(TWO_PI);//  anlge of orbit
        this.orbit = 150; //dist from planet
        this.num = floor(random(1, 3));//$$$$$$ random color
        this.clr = color(0,255,200, 30);
        this.val = slider.value();


    }

    run() {
        this.render();
        this.update();
    }

    render() {
        // fill(200);
        // ellipse(this.loc.x, this.loc.y, this.size); //makes moon

        if(keyPressed() === true){
            if(this.num === 1){ //$$$$$$$$ random color
                this.clr = color(0,255,200, 30)
            } else {
                this.clr = color(200,255,0, 30)
            } //$$$$$

        // stroke(200,255,0, 30) //exta colors
        // stroke(0,255,200, 30)
        stroke(this.clr)
        noFill()
        bezier(this.parent.loc.x, this.parent.loc.y, this.loc.x, this.loc.y, this.loc.x, this.loc.y, this.sunParent.loc.x, this.sunParent.loc.y)
    }
    }

    update() {
        this.val = slider.value();
        this.angle += 0.005 // speed of rotation

        //#### with out slider
        // this.loc.x = this.parent.loc.x + cos(this.angle) * this.orbit; //makes it rotate
        // this.loc.y = this.parent.loc.y + sin(this.angle) * this.orbit;

        //##### with slider 
        this.loc.x = this.parent.loc.x + cos(this.angle) * this.val; //makes it rotate
        this.loc.y = this.parent.loc.y + sin(this.angle) * this.val;

    }
}