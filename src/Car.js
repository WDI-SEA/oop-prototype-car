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
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
  	//return newOwner;
};

Car.prototype.paint = function(newColor) {
  	if(typeof(newColor) === 'string') {
  		this.color = newColor;
  	}
  	//return newColor;
};



Car.prototype.start = function() {
	this.running = true;
};

Car.prototype.off = function() {
	this.running = false;
};

Car.prototype.driveTo = function(destination) {
	if (this.running) {
		console.log("Driving to" + destination);
		return true;
	}
	else {
		return false;
	}
}

Car.prototype.park = function() {
	if ((this.running) == false) {
		console.log("parked!!")
		return true;
	}
	else {
		return false;
	}
}


Car.prototype.pickup = function(name) {
	if (this.running && this.passengers.length +1 < this.seats) {
	this.passengers.push(name);
	console.log("driving to pick up " + name);
	}
}


Car.prototype.dropOff = function(name) {
	var passenger = this.passengers.indexOf(name);
	if ((this.running == true) && (passenger > -1))
		this.passengers.splice(passenger, 1);
		return true;
	}
	return false;
}


Car.prototype.passengerCount = function() {
	return this.passengers.length;
}


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
