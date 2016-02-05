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

Car.prototype.start = function(){
	this.running = true;
};

Car.prototype.off = function(){
	this.running = false;
};

Car.prototype.driveTo = function(destination){
	if (this.running) {
		console.log("driving to "+destination);
		return true;
	}
	else {
		return false;
	}
};

Car.prototype.park = function(){
	if (!this.running) {
		console.log('Parked!!');
		return true;
	}
	else {
		return false;
	}
};

Car.prototype.pickUp = function(name){
	if (this.running === true && (this.seats - 1) > this.passengers.length){
		this.passengers.push(name);
		console.log("driving to pick up "+name);
		return true;
	}
	else {
		return false;
	}
};

Car.prototype.dropOff = function(name){
	if (this.running === true && (this.passengers.indexOf(name) > -1)){
		this.passengers.splice(name, 1);
		console.log('driving to drop off '+name);
		return true;
	}
	else {
		return false;
	}
};

Car.prototype.passengerCount = function(){
	return this.passengers.length;
};








// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;