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
  this.passengers = []; //first part of phase three, also added parameter above

  if (passengers) {
  	this.passengers = passengers;
  } // added for first part of phase three
}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};
//-----------Phase Two
//should change the running value of the car to true.
Car.prototype.start = function(newRunning) {
	this.running = true
};
// Car.off() should change the running value to false.
Car.prototype.off = function(newRunning) {
	this.running = false 
};
// Car.driveTo() should console.log "driving to <destination>", but only if the car is running. Should return true if it is successful and false if it is not. (this method needs to take a destination param.)
Car.prototype.driveTo = function(destination) {
	if (this.running == true) {
		console.log("diving to " + destination);
		return true; //always put return value at end because it is essentially saying I am finishing this function
	} else {
		return false;
	}
};
// Car.park() only if the car is not running you should console.log parked!!. Should return true if it is successful and false if it is not.
Car.prototype.park = function() {
	if (this.running == false) {
		console.log("parked!!");
		return true;
	} else {
		return false;
	}
};
//----------Phase Three
//Car.pickUp() should take a name and console.log that you are "driving to 'pick up <friend>'", but only if the car is running AND there are enough seats available. It should also update the passengers array to include the new passenger. It should also return true on success and false on failure. Newly picked up passengers should be pushed to the end of the array.
Car.prototype.pickUp = function(friend) {
	if (this.running == true && this.seats - 1 > this.passengers.length) {
		console.log("driving to pick up " + friend);
		this.passengers.push(friend);//or new Passenger
		return true;
	} else {
		return false;
	}
};
//Car.dropOff() it should take a name and remove them from the passengers array, but only if they are in the array. It should also only drop them off if the car is on. It should also output "driving to drop off <friend>" and return true on success and false on failure.
Car.prototype.dropOff = function(friend) {
	if (this.running == true ) { //when using .splice function it takes in two parameters, the index number and how many you want to slice off usually you just want to remove 1
		for ( i= 0; i < this.passengers.length; i++) { //for loop has 3 conditions, where it starts, how long is shouldl keep going, and how much should it iterate
			if (friend == this.passengers[i]) {
				this.passengers.splice(i,1);
				console.log("driving to drop off " + friend);
				return true;
			}
		} 
		return false;
	} else {
		return false;
	}
};
//Car.passengerCount() should return the number (integer) of passengers currently in the car.
Car.prototype.passengerCount = function() {
	return this.passengers.length

};



// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;