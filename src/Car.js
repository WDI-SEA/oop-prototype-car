function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  // TODO: add color, seats here

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];


if(!passengers) {
	this.passengers = []
} else {
	this.passengers = passengers;
	};
}

Car.prototype.sell = function(newOwner) {
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function() {
	this.running = true;
}

Car.prototype.off = function () {
	this.running = false;
}

Car.prototype.driveTo = function (place) {
	if (this.running) {
		console.log('driving to ' + place);
		return true;
	}
	else {
		return false;
	}	
}

Car.prototype.park = function () {
	if (this.running) {
		return false;
	}
	else {
		return true;
		console.log('parked!!');
	}
}


Car.prototype.pickUp = function(name) {
	if(this.running == true && (this.passengers.length + 1) < this.seats){	
		console.log("driving to pick up " + name);
		this.passengers.push(name);
		return true;
	}
	else {
		return false;
	}
}

Car.prototype.dropOff = function(name) {
	if((this.running == true) && (this.passengers.indexOf(name)) !== -1) {
		this.passengers.splice(this.passengers.indexOf(name), 1);
		console.log("driving to drop off " + name);
		return true;
	} 
	else {
		return false;
	}
}

Car.prototype.passengerCount = function() {
	return this.passengers.length;
}







// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
