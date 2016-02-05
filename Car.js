function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  //TODO: add color, seats here
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function() {
	this.running = true;
}

Car.prototype.off = function() {
	this.running = false;
}

Car.prototype.driveTo = function(destination) {
	if (this.running) {
		console.log("Driving to " + destination);
		return true;
	} else {
		return false;
	}
	
}

Car.prototype.park = function() {
	if (!this.running) {
		console.log("parked!!");
		return true;
	} else {
		return false;
	}
}


Car.prototype.pickUp = function(name) {
	if ((this.running) && (this.seats - 1 > this.passengers.length)) {
	this.passengers.push(name);
	console.log("Driving to pick up " + name);
	return true;
	}	else {
	return false;
	}
}

Car.prototype.dropOff = function(name) {
	for (var i = 0; i < this.passengers.length; i++) {
		if (this.passengers[i] === name && this.running) {
			this.passengers.splice(i, 1);
			console.log("Driving to drop off " + name);
			return true;
		} else {
			return false;
		}
	}
}

Car.prototype.passengerCount = function() {
	return this.passengers.length;
}


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;