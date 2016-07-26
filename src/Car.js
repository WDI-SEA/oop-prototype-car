function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color; 
  this.seats = seats;

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.passengers = [] || passengers;
}

Car.prototype.sell = function(newOwner) {
	this.previousOwners.push (this.owner);
	this.owner = newOwner;
  	//return newOwner;
};

Car.prototype.paint = function(newColor) {
  	return newColor;
};



Car.prototype.start = function() {
	this.running = true;
};

Car.prototype.off = function() {
	this.running = false;
};

Car.prototype.driveTo = function(destination) {
	if this.running ===true {
		console.log("Driving to" + destination);
		return true;
	}
	else {
		return false;
	}
}

Car.park = function() {
	if this.running ===false {
		console.log("parked!!")
		return true;
	}
	else {
		return false;
	}
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
