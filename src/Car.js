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
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
  return newOwner;
};

Car.prototype.paint = function(newColor) {
  this.color = newColor;
  return newColor;
};

Car.prototype.off = function() {
  this.running = false;
};

Car.prototype.start = function() {
  this.running = true;
};

Car.prototype.driveTo = function(newDestination) {
  if (this.running === true) {
    console.log('Driving to ' + newDestination);
    return true;
  }
  return false;
};

Car.prototype.park = function() {
  if (this.running === false) {
    console.log('Parked');
    return true;
  }
  return false;
};

Car.prototype.pickUp = function(name) {
  if (this.running === true && (this.seats > (this.passengers.length + 1))) {
    this.passengers.push(name);
    console.log('Driving to pick up ' + name);
    return true;
  }
  return false;
};

Car.prototype.dropOff = function(name) {
  for (var i = 0; i < this.passengers.length; i++) {
    if (this.running === true && this.passengers[i] === name) {
      this.passengers.splice(i, 1);
      console.log('Dropping off ' + name);
      return true;
    }
    return false;
  }
  return name;
};

Car.prototype.passengerCount = function() {
  return this.passengers.length;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;

