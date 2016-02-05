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

Car.prototype.start = function(){
	this.running = true;
}

Car.prototype.off = function(){
	this.running = false;
}

Car.prototype.driveTo = function(destination){
	if(this.running){
		console.log("driving to " + destination);
		return true;
	}else{
		return false;
	}
}

Car.prototype.park = function(){
	if(!this.running){
		console.log("Parked!!");
		return true;
	}else{
		return false;
	}
}

Car.prototype.pickUp = function(passenger){
	if(this.running && (this.seats - this.passengers.length - 1) > 0){
		console.log("driving to pick up " + passenger);
		this.passengers.push(passenger);
		return true;
	}else{
		return false;
	}
}

Car.prototype.dropOff = function(passenger){
		for(var i = 0; i < this.passengers.length; i++){
			if(passenger == this.passengers[i] && this.running){
				this.passengers.splice(i, 1);
				console.log("driving to drop off " + passenger);
				return true;
			}else{
				return false;
			}
	}
}

Car.prototype.passengerCount = function(){
	if(this.passengers.length > 0){
		return parseInt(this.passengers.length);
	}
}






// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;