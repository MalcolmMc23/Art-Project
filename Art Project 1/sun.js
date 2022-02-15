class Sun {
	constructor(x, y, clr, clr2, clr3) {
		this.loc = createVector(x, y);
		this.size = 30 //sun size
		this.planets = [];
		this.clr = clr
		this.clr2 = clr2;
		this.clr3 = clr3;
		
		for (var i = 0; i < 2; i++) {
			this.planets[i] = new Planet(this, this.clr, this.clr2, this.clr3)
		}

	}

	run() {
		this.render();
	}

	render() {
		// fill(255, 255, 0);
		// ellipse(this.loc.x, this.loc.y, this.size) //makes sun
		for (var i = 0; i < this.planets.length; i++) {
			this.planets[i].run()
		}
	}
}