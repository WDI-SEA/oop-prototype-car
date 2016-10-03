function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  // TODO: add color, seats here
  this.passengers = [];
  this.running = false;
  this.owner = 'Lenny';
  this.previousOwners = ['manufacturer'];

  if(!passengers) {
    this.passengers = []
  } else {
    this.passengers = passengers;
  };
}

Car.prototype = {

sell: function(newOwner) {
  return newOwner;
},

paint: function(newColor) {
  this.color = newColor;
  return newColor;
},

start: function(running) {
  return this.running = true;
},

off: function() {
  return this.running = false;
},

driveTo: function(destination) {
  if(this.running == true) {
    console.log("driving to " + destination)
    return true;
    } else {
      return false;
  }
},

park: function() {
  if(this.running == false) {
    console.log("parked!!")
    return true
  } else {
    return false;
  }
},

pickUp: function(name) {
  if(this.running == true && (this.passengers.length + 1) < this.seats){
    console.log("driving to pick up " + name);
    this.passengers.push(name);
    return true;
  } else {
    return false;
  }
},

dropOff: function(name) {
  if((this.running == true) && (this.passengers.indexOf(name)) !== -1) {
    this.passengers.splice(this.passengers.indexOf(name), 1);
    console.log("driving to drop off " + name);
    return true;
  } else {
    return false;
  }
},

passengerCount: function() {
    return this.passengers.length;
},

}
// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
