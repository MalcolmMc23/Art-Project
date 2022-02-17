class Stars {
    constructor() {
        this.loc = createVector(random(width), random(height));
        this.size = random(1, 3)
    }

    render() {
        fill(255)
        rect(this.loc.x, this.loc.y, this.size);
    }
}