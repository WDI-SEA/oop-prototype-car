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
  if (passengers === undefined) {
    this.passengers = [];
  } else {
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
  }
  return false;
};

Car.prototype.park = function() {
  if (this.running === false) {
    console.log('parked!!');
    return true;
  }
  return false;
};

Car.prototype.pickUp = function(name) {
  if (this.running === true &&
    this.passengers.length + 1 < this.seats) {
    console.log('Driving to pick up ' + name);
    this.passengers.push(name);
    return true;
  }
  return false;
};

Car.prototype.dropOff = function(name) {
  if (this.running === true && this.passengers.indexOf(name) >= 0) {
    console.log('Driving to drop off ' + name);
    var index = this.passengers.indexOf(name);
    this.passengers.splice(index, 1);
    return true;
  }
  return false;
};

Car.prototype.passengerCount = function() {
  return this.passengers.length;
};
// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
