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
		fill(20, 20, 20);
		ellipse(this.loc.x, this.loc.y, this.size) //makes sun
		for (var i = 0; i < this.planets.length; i++) {
			this.planets[i].run() // runs planet 
		}
	}
}