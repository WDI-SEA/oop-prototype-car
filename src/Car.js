function Car(make, model, year, color, seats, passengers) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.seats = seats;

	this.running = false;
	this.owner = 'manufacturer';
	this.previousOwners = [];
	this.passengers = [];
	if (passengers) {
		this.passengers = passengers;
	} else {
		this.passengers = [];
	}
}

Car.prototype = {
	sell: function(newOwner) {
		this.previousOwners.push(this.owner);
		this.owner = newOwner;
		return newOwner;
	},
	paint: function(newColor) {
		this.color = newColor;
  		return newColor;
	},
	start: function() {
		this.running = true;
	},
	off: function() {
		this.running = false;
	},
	driveTo: function(destination) {
		if (this.running) {
			console.log("driving to " + destination + ".")
			return true;
		} else {
			return false;
		}
	},
	park: function() {
		if (!this.running) {
			console.log("parked!!")
			return true;
		} else {
			return false;
		}
	},
	pickUp: function(name) {
		if (this.running && this.seats > (this.passengers.length + 1)) {
			console.log("driving to pick up " + name);
			this.passengers.push(name);
			return true;
		} else {
			return false;
		}
	},
	dropOff: function(name) {
		// TODO not sure if this works??
		if (this.passengers.indexOf(name) != -1 && this.running) {
			console.log("driving to drop off " + name);
			this.passengers.splice(this.passengers.indexOf(name), 1);
			return true;
		} else {
			return false;
		}
	},
	passengerCount: function() {
		return this.passengers.length;
	}
 }


module.exports = Car;


