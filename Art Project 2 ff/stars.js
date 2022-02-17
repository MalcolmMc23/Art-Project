class Stars {
    constructor() {
        this.loc = createVector(random(width), random(height));
    }

    render() {
        rect(this.loc.x, this.loc.y, 5);
    }
}