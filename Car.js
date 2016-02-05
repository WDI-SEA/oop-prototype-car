function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner) {
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
};

// Phase II

Car.prototype.start = function() {
	this.running = true;
};

Car.prototype.off = function() {
	this.running = false;
};

Car.prototype.driveTo = function(destination) {
	if (this.running) {
		console.log("driving to "+destination);
		return true;
	} else {
		return false;
	}
};

Car.prototype.park = function() {
	if (!this.running) {
		console.log("parked!!");
		return true;
	} else {
		return false;
	}
};

// Phase III

Car.prototype.pickUp = function(name) {
	if (this.running && this.seats - this.passengers.length > 1) {
		console.log("driving to pick up "+name);
		this.passengers.push(name);
		return true;
	} else {
		return false;
	}
};

Car.prototype.dropOff = function(name) {
	for (i=0;i<this.passengers.length;i++) {
		if(this.running && this.passengers[i] === name) {
			console.log("dropping off "+name);
			this.passengers.splice(this.passengers[i], 1);
			return true;
		} else {
			return false;
		}
	}
};

Car.prototype.passengerCount = function() {
	return this.passengers.length;
}




// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;