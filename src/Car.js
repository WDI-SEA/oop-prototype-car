function Car(make, model, year, color, seats) {
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
  return this.owner;
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
  return this.color;
};

Car.prototype.start = function() {
	this.running = true;
  return this.running;
};

Car.prototype.off = function() {
	this.running = false;
  return this.running;
};

Car.prototype.driveTo = function(place) {
	 if (this.running) {
	 	console.log("driving to " + place)
	 	return true;
	 } else {
	 	return false;
	 }
};

Car.prototype.park = function() {
	if (!this.running) {
		console.log("Parked!!")
		return true; 
	} else {
		return false;
	}
};



// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
