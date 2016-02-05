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

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
	

};

Car.prototype.paint = function(newColor){
	this.color = newColor;

};

Car.prototype.start = function() {
	this.running = true;
};

Car.prototype.off = function() {
	this.running = false;
}

Car.prototype.driveTo = function(destination) {
	if(this.running === true) {
		console.log("Driving to " + destination)
		return true;
	} else if (this.running === false) {
		return false;

	}
}

Car.prototype.park = function() {
	if(this.running === false) {
		console.log("Parked!!")
		return true;
	} else if (this.running === true) {
		return false;
	}
}

Car.prototype.pickUp = function(friend) {
	if(this.running === true && this.seats -1 > this.passengers.length) {
		this.passengers.push(friend)
		return true;
	} else {
		return false;
	}
	console.log("driving to pick up a" + friend)
}

Car.prototype.dropOff = function(friend) {
	var index = this.passengers.indexOf(friend) 
	if(index === -1) {
		return false;
	}
	if(this.running === true) {
		this.passengers.splice(index, 1);
		return true;
	}
	else {
		return false;
	}
	// console.log(dropOff);
}


Car.prototype.passengerCount =function() {
	return this.passengers.length;
}










// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;