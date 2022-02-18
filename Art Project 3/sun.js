class Sun {
	constructor(x, y) {
		this.loc = createVector(x, y);
		this.size = 30 //sun size
		this.planets = [];
		
		for (var i = 0; i < 2; i++) {
			this.planets[i] = new Planet(this)
		}

	}

	run() {
		this.render();
	}

	render() {
		fill(255, 255, 0);
		ellipse(this.loc.x, this.loc.y, this.size) //makes sun
		// ellipse(mouseX, mouseY, this.size)
		for (var i = 0; i < this.planets.length; i++) {
			this.planets[i].run()
		}
	}
}