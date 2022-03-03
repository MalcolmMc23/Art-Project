class Root {
    constructor(x, y, r, l) {
      this.loc = createVector(x, y);
      this.vel = createVector(random(-3, 3), random(-3, 3));
      this.r = r;
      this.lifespan = l;
      this.isDead = false;
      this.val = slider.value();
      // this.clr = c
    }

    run() {
        this.render();
        this.update()
    }

    render() {

      this.clr = img.get(this.loc.x*3, this.loc.y*3);

        fill(this.clr)
        noStroke()
        // fill(20, 20, 20, 10)
        ellipse(this.loc.x, this.loc.y, this.r);
    }

    update() {
      this.val = slider.value();
        this.r = this.r - this.val;
         if(this.r < 0) this.isDead = true;
    //this.r -= .08;
    this.acc = createVector(random(-0.3, 0.3), random(-0.3, 0.3));
    this.vel.add(this.acc);
    this.vel.limit(2.9);
    this.loc.add(this.vel);

    count++
    if (count === 100) {
      roots.push(new Root(this.loc.x, this.loc.y, this.r, this.clr, 30));
    }
    }


}