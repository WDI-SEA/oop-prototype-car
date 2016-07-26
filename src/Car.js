function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
// TODO: add color, seats here
  this.color = color;
  this.seats = seats;
  this.passengers = passengers || [];	

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  
}



Car.prototype.start = function(newOwner){
	this.running = true;
};

Car.prototype.sell = function(newOwner) {
   this.previousOwners.push(this.owner);
   this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
   this.color = newColor;
};

// export the Car function for use in node //
// this is required for the test.js to load this //


Car.prototype.off = function() {
 this.running = false;
};

Car.prototype.driveTo = function(destination) {
    if (this.running === true) {
        console.log("driving to " + destination);
        return true;
    } else {
        return false;
    }
};

Car.prototype.park = function(){
	if(this.running == false){
		console.log('parked');	
		return true;
	}else{
		return false;
	}
	

};

Car.prototype.pickUp = function(name){
	if(this.running && this.passengers.length < this.seats-1){
	console.log('picking up ' + name);
	this.passengers.push(name); 
		return true;
	}else{
		return false;
	}


}

Car.prototype.dropOff = function(name){
	if(this.passengers.indexOf(name) > -1 && this.running === true){
		this.passengers.splice(this.passengers.indexOf(name), 1);
		console.log('driving to drop off ' + name );
		return true;
	}else {
		return false;
	}
}


Car.prototype.passengerCount = function(){
	return this.passengers.length;
}


module.exports = Car;















