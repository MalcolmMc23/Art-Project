class Partical {
        constructor() {
            this.loc = createVector(random(width), random(height));
            this.vel = createVector(0, 0)
            this.acc = createVector(0, 0)
            this.diam = 10
            this.lim = 0.5;
            this.num = floor(random(1, 3));
            this.clr = color(0, 0, 255);
        }
    
        run() {
            this.render();
            this.checkEdges();
        }
    
        render() {
            if(this.num === 1){
                this.clr = color(255,0,0)
            } else {
                this.clr = color(0, 0, 255)
            }
    
            fill(this.clr);
            noStroke(.01)
            ellipse(this.loc.x, this.loc.y, this.diam);
        }
        update() {
            this.loc.add(this.vel);
            this.vel.add(this.acc);
            this.acc.mult(0)
            this.vel.limit(this.lim)
        }
    
        checkEdges() {
        if (this.loc.x < 0) this.loc.x = width;
        if (this.loc.x > width) this.loc.x = 0;
        if (this.loc.y < 0) this.loc.y = height;
        if (this.loc.y > height) this.loc.y = 0; 
        }

        follow(vectors) {
            var x = floor(this.loc.x / cellSize);
            var y = floor(this.loc.y / cellSize);
            var index = x + y * cols;
            var force = vectors[index];
            this.applyForce(force);

        }
        

        applyForce(force) {
            this.acc.add(force);

            if(keyTyped()) {
                this.vel = createVector(0, 0);
                this.acc = createVector(0, 0);
            }
        }

        
}