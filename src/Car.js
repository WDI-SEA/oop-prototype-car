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
  this.passengers = passengers || [];
//   if (passengers == undefined) {
//     this.passengers = [];
//   } else {
//     this.passengers = passengers;
//   }
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

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;

Car.prototype.off = function() {
  this.running = false;
}

Car.prototype.start = function() {
  this.running = true;
}




Car.prototype.driveTo = function(destination) {
  if (this.running === true) {
    console.log("Driving to " + destination);
    return true;
  } else {
    return false;
  }
}

Car.prototype.park = function() {
  if (this.running === false) {
    console.log('parked!!');
    return true;
  } else {
    return false;
  }
}

Car.prototype.pickUp = function(friend) {

  if (this.running == true && (this.passengers.length + 1 < this.seats)) {
  console.log("Driving to pick up " + friend);
  this.passengers.push(friend);
  return true;
  } else {
    return false;
  }
}

Car.prototype.dropOff = function(name) {
  for (i = 0; i < this.passengers.length; i++) {
    if (this.running == true && this.passengers[i] == name) {
      this.passengers.splice(i, 1);
      console.log('Driving to drop off ' + name);
      return true;
    } else {
      return false;
    }
  }
}

Car.prototype.passengerCount = function() {
  return this.passengers.length;
}






