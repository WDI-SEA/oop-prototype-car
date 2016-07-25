function Car(make, model, year, color, seats, passengers) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.seats = seats;

	if (passengers === undefined) {
		this.passengers = [];
	} else {
		this.passengers = passengers;
	}

	this.running = false;
	this.owner = 'manufacturer';
	this.previousOwners = [];
}

Car.prototype.sell = function(newOwner) {
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
	return newOwner;
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
	return newColor;
};

Car.prototype.start = function() {
	this.running = true;
	return true;
};

Car.prototype.off = function() {
	this.running = false;
	return false;
};

Car.prototype.driveTo = function(destination) {
	if (this.running) {
		console.log('driving to ', destination);
		return true;
	} else {
		return false;
	}
};

Car.prototype.park = function() {
	if (!this.running) {
		console.log('parked!!');
		return true;
	} else {
		return false;
	}
};

Car.prototype.pickUp = function(name) {
	if (!this.running) {
		return false;
	} else if (this.passengers.length + 1 >= this.seats) {
		return false;
	} else {
		console.log('Driving to pick up', name);
		this.passengers.push(name);
		return true;
	}
};

Car.prototype.dropOff = function(name) {
	if (!this.running) {
		return false;
	}
		for (var i = 0; i < this.passengers.length; i++) {
			if (this.passengers[i] === name) {
				var nameIndex = this.passengers.indexOf(name);
				this.passengers.splice(nameIndex, 1);
				return true;
		}
	}
	return false;
};

Car.prototype.passengerCount = function() {
	return this.passengers.length;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
