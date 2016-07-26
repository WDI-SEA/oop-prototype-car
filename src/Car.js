function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  // TODO: add color, seats here
  this.color = color;
  this.seats =seats;
  this.passengers = passengers || [];

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
}

Car.prototype.sell = function(newOwner) {
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
  return this.owner;
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
  return this.color;
};


Car.prototype.start = function(){
	this.running = true;
	return this.running;
};

Car.prototype.off = function(){
	this.running = false	;
	return this.running;
};

Car.prototype.driveTo = function(destination){
	this.destination = this.running;
	return this.destination;
	if (this.destination) {
		console.log("driving to",this.destination);
	}
};

Car.prototype.park = function() {
	return !this.running;
	if (!this.running){
		console.log("Parked!!");
	}
};

Car.prototype.pickUp = function(name) {
	if (this.running && this.passengers.length + 1 < this.seats) {
	this.passengers.push(name);
	console.log("You are driving to pick up", this.passengers);
	return true;
	} else { return false;}
};

Car.prototype.dropOff = function(name) {
	var passenger = this.passengers.indexOf(name);
	// if (this.running && passenger > -1) {
		this.passengers.slice(passenger, 1);
		console.log("Driving to drop off "+name);
		return true;
	// } else{return false;}
};

Car.prototype.passengerCount = function(name) {
	var count = this.passengers.length;
	console.log(count);
};


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
