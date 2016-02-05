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
	while (this.running == true) {
		console.log('Driving to ' + destination);
		return true;
	}
	return false;
}


Car.prototype.park = function() {
	while (this.running == false) {
		console.log('parked!!')
		return true;
	}
	return false;
}

Car.prototype.pickUp = function(friend) {
	//this.passengers.push(friend);
	// console.log(friend);
	if ((this.running === true) && (this.passengers.length < this.seats - 1)) {
		console.log('Driving to pick up ' + friend);
		this.passengers.push(friend);
		return true;
	} 
	else {
	 return false;
	}
}

Car.prototype.dropOff = function(name) {
	for (var i = 0; i < this.passengers.length; i++) {
		if (this.passengers[i] == name && this.running) {
			this.passengers.splice(i, 1)
			console.log('driving to drop off ' + name);
			return true;
		}
		else {
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