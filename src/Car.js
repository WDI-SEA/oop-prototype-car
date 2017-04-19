function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
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
  this.previousOwners = ['manufacturer'];
  this.owner = 'Lenny';
  return newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = 'Blue';
  return newColor;
};

Car.prototype.start = function(running) {
  this.running = true;
  return running;
};

Car.prototype.off = function(stop) {
  this.running = false;
  return stop;
};

Car.prototype.driveTo = function(destination) {
  if (this.running === true) {
    console.log('driving to' + destination);
    return true;
  } return false;
};

Car.prototype.park = function() {
  if (this.running === false) {
    console.log('parked!!');
    return true;
  } return false;
};

Car.prototype.pickUp = function(name) {
  if (this.running === true && this.seats - 1 - this.passengers.length > 0) {
    this.passengers.push(name);
    console.log('driving to pick up' + name);
    return true;
  } return false;
};

Car.prototype.dropOff = function(name) {
  for (var i = 0; i < this.passengers.length; i++) {
    if (name === this.passengers[i] && this.running) {
      this.passengers.splice(i, 1);
      console.log('driving to drop off' + name);
      return true;
    }
  }
  return false;
};

Car.prototype.passengerCount = function() {
  return this.passengers.length;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
