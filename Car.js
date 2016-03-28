function Car(make, model, year, color, seats, passengers) {
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

Car.prototype.sell = function(newOwner) {
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
};

Car.prototype.start = function() {
  this.running = true;
};

Car.prototype.off = function() {
  this.running = false;
};

Car.prototype.driveTo = function(destination) {
  if (this.running === true) {
    console.log('driving to ' + destination);
    return true;
  } else {
    return false;
  }
};

Car.prototype.park = function() {
  if (this.running === false) {
    console.log('parked!!');
    return true;
  } else {
    return false;
  }
};

Car.prototype.pickUp = function(friend) {
  if ((this.passengers.length + 1 < this.seats) && this.running === true) {
    this.passengers.push(friend);
    console.log('driving to pick up ' + friend);
    return true;
  } else {
    return false;
  }
}


Car.prototype.dropOff = function(name) {
  if ((this.passengers.indexOf(name) >= 0) && this.running === true) {
    this.passengers.splice(this.passengers.indexOf(name), 1);
    console.log('driving to drop off ' + name);
    return true;
  } else {
    return false;
  }
}

Car.prototype.passengerCount = function() {
  return this.passengers.length;
}


// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;