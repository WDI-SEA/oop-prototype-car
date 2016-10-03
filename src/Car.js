function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];

  this.passengers = [];
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

Car.prototype.start = function(startCar) {
	if (!this.running) {
		this.running = true;
	}
}

Car.prototype.off = function(stopCar) {
	if (this.running) {
		this.running = false;
	}
}

Car.prototype.driveTo = function(destination) {
	if (this.running) {
		console.log('driving to' + destination);
		return true;
	} else {
		return false;
	}
}

Car.prototype.park = function(parking) {
	if (!this.running) {
		console.log('parked!!');
		return true;
	} else {
		return false;
	}
}

Car.prototype.pickUp = function(name) {
	if (this.running) {
		console.log("driving to pick up" + name);
		this.passengers.push(name);
		return true;
	} else {
		return false;
	}
}

Car.prototype.dropOff = function(name) {
	if (indexOf(name) != -1 && this.running === true) {
		this.passengers.slice(indexOf(name), 1);
		console.log("driving to drop off" + name);
		return true;
	}  else {
		return false;
	}
}

Car.prototype.passengerCount = function(count) {
	return this.passengers.length;
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
