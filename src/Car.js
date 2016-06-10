function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.passengers = passengers || [];
  // TODO: add color, seats here

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
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
  if (this.running) {
    console.log('driving to ' + destination);
    return true;
  }
  return false;
};

Car.prototype.park = function() {
  if (!this.running) {
    console.log('parked!!');
    return true;
  }
  return false;
};

Car.prototype.pickUp = function(name) {
  if (this.running && this.passengers.length + 1 < this.seats) {
    console.log('driving to pick up ' + name);
    this.passengers.push(name);
    return true;
  }
  return false;
};

Car.prototype.dropOff = function(name) {
  for (var i = 0; i < this.passengers.length; i++) {
    if (this.running && this.passengers[i] === name) {
      console.log('driving to drop off ' + name);
      this.passengers.splice(i, 1);
      return true;
    }
    return false;
  }
};

Car.prototype.passengerCount = function() {
  return this.passengers.length;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
