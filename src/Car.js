function Car(make, model, year, color, seats) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.passengers = [];
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

Car.prototype.start = function(){	
  this.running = true;
};

Car.prototype.off = function(){	
  this.running = false;
};

Car.prototype.driveTo = function(destination){	
  if (this.running){
  console.log("driving to " + destination);
  return true;
  } 
  else {
  return false;
  }
};

Car.prototype.park = function(){	
  if (this.running === false){
  console.log("parked!");
  return true;
  } 
  else {
  return false;
  }
};

Car.prototype.pickUp = function(name) {
  if(this.running === true && (this.passengers.length +1 < this.seats)) { 
  console.log("driving to pickup " + name);
  this.passengers.push(name);
	return true;
	} 
	else {
	return false;
	}
};






// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
