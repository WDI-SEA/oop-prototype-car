function Car(make, model, year, color, seats, passengers) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.seats = seats;

    //initialize value to constructor
    this.previousOwners = [];
    this.owner = 'manufacturer';
    this.running = false;
    //Should be optional and default to an empty array if not specified. If passengers is empty the else portion is fulfilled
    if (passengers) {
    	this.passengers = passengers; // if condition 
    } else {
    	this.passengers = []; //else 
	}

}

Car.prototype.sell = function(newOwner) {
    this.previousOwners.push(this.owner);
    this.owner = newOwner;

    return newOwner;
}

Car.prototype.paint = function(newColor) {
        this.color = "Blue";
        this.color = newColor

        return newColor;
    }
    //Phase II

Car.prototype.start = function() {
    this.running = true;
}

Car.prototype.off = function() {
    this.running = false;
}

Car.prototype.driveTo = function() {
    if (this.running) {
        console.log("driving to <destination>");
        return true;
    }
    return false;
}

Car.prototype.park = function() {
    if (!this.running) {
        console.log("parked!!");
        return true;
    }
    return false;
}

//Phase III
Car.prototype.pickUp = function(name) {
	if(this.running && this.passengers.length + 1 < this.seats ){ //add 1 to length b/c car doesn't have a 0 position
	this.passengers.push(name);
	console.log("driving to pick up <name>");
	return true
}
return false
}

Car.prototype.dropOff = function(name) {
  var passenger = this.passengers.indexOf(name);
  if (passenger > -1 && this.running) {
    this.passengers.splice(passenger, 1);
    return true;
  }
  return false;
};

Car.prototype.passengerCount = function(totalPassengers) {
var totalPassengers = this.passengers.length;
return totalPassengers;
}


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
