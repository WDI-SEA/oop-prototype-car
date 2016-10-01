function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner) {
	this.previousOwners.push(this.owner);
    this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;

//////////PHASE 2///////////////////////////////////////////

Car.prototype.start = function(){
	this.running = true;
}

Car.prototype.off = function(){
	this.running = false;
}
Car.prototype.driveTo = function(location){
	if(this.running) {
		console.log(" you are driving to " + location);
		return true;
	}
	return false;
};

Car.prototype.park = function(){
	if(!this.running) {
		console.log(" you are parked ");
		return true;
	}
	return false;
};

Car.prototype.pickUp = function(name){
	if(this.running && this.passengers.length + 1 < this.seats) {
		this.passengers.push(name);
		console.log("driving to pick up " + name);
		return true;
	}
	return false;
};

Car.prototype.dropOff = function(name){
	var passenger = this.passengers.indexOf(name);
	if(passenger > -1 && this.running) {
		this.passengers.splice(passenger, 1);
		return true;
	}
	return false;
};

Car.prototype.passengerCount = function(){
	return this.passengers.length;
}

















