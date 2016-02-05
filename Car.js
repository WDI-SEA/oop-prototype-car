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

  this.passengers = [];
  if(passengers){
  	this.passengers = passengers;
  }
}
// Phase 1
Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};
// Phase 2
Car.prototype.start = function(carOn){
	this.running = true;
};

Car.prototype.off = function(carOff){
	this.running = false;
};

Car.prototype.driveTo = function(destination){
	if(this.running == true){
		console.log("Driving to "+destination);
		return true;
	}else{
		return false;
	}
};

Car.prototype.park = function(){
	if (this.running == false){
		console.log("Parked!!");
		return true;
	}else{
		return false;
	}
};
// Phase 3
Car.prototype.pickUp = function(name){
	if(this.running == true && this.seats - this.passengers.length > 1){
		console.log("You are driving to pick up " + name);
		this.passengers.push(name);
		return true;
	}else{
		return false;
	}
};

Car.prototype.dropOff = function(name){
	var person = this.passengers.indexOf(name)
	if (person != -1 && this.running == true){
		this.passengers.splice(person, 1);
		console.log("Driving to drop off " + name);
		return true;
	}else{
		return false;
	}
};

Car.prototype.passengerCount = function(){
	return this.passengers.length;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;