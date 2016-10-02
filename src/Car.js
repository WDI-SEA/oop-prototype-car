function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  // TODO: add color, seats here

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = ['manufacturer'];
  
  if(!passengers) {
  	this.passengers = [];
  } else {
  	this.passengers = passengers;
  }
}

Car.prototype.sell = function(newOwner) {
	if(this.owner != 'manufacturer'){
  		this.previousOwners.push(this.owner);
	}
    this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function(){
	this.running = true;
}

Car.prototype.off = function(){
	this.running = false;
}

Car.prototype.driveTo = function(place){
	if(this.running == true) {
		console.log("Driving to " + place);
		this.location = place;
		return true;
	} else {
		console.log("You need to start the car before you drive.");
		return false;
	}
}

Car.prototype.park = function(){
	if (this.running == true) {
		console.log("You need to turn off the car before parking!");
		return false;
	} else {
		console.log("You are now parked.");
		return true;
	}
}

Car.prototype.pickUp = function(newPassenger) {
	if (this.running == true && this.passengers.length < this.seats-1) {
		console.log("driving to pick up " + newPassenger);
		this.passengers.push(newPassenger);
		return true;
	} else {
		console.log("The car needs to be running and you need adequate space to pick someone up.")
		return false;
	}
}

Car.prototype.dropOff = function(name){
	var indexOfPersonDropped = this.passengers.indexOf(name);
	if(this.running == true) {
		if(indexOfPersonDropped != -1) {
			console.log("Driving to drop off " + name);
			this.passengers.splice(indexOfPersonDropped, 1);
			return true;
		} else {
			console.log(name + " is not in the car.");
			return false;
		}
	} else {
		console.log("The car needs to be running to drop someone off.");
		return false;
	}
}

Car.prototype.passengerCount = function(){
	return this.passengers.length;
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
