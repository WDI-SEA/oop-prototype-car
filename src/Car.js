function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  // TODO: add color, seats here
  this.color = color;
  this.seats = seats;

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  
  if(!passengers){
  		this.passengers = [];
	}
  else{
		this.passengers = passengers;
	}
}

Car.prototype.sell = function(newOwner) {
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
  return newOwner;
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
  return newColor;
};

Car.prototype.start = function(){
	this.running = true;
}

Car.prototype.off = function(){
	this.running = false;
}

Car.prototype.driveTo = function(){
	if(this.running){
		return true;
	}
	else{
		return false;
	}
}

Car.prototype.park = function(){
	if(this.running){
		return false;
	}
	else{
		return true;
	}
}

Car.prototype.pickUp = function(passenger){
	if(this.running && this.passengers.length + 1 < this.seats){
		this.passengers.push(passenger);
		return true;
	}
	else {
		return false;
	}

}

Car.prototype.dropOff = function(passenger){
		console.log(this.passengers);
		console.log(passenger);	

	if(this.running && this.passengers.indexOf(passenger) != -1){
		this.passengers.splice(this.passengers.indexOf(passenger), 1);
	    return true;
	}
	else {
		return false;
	}
}

Car.prototype.passengerCount = function(){
	return this.passengers.length;
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
