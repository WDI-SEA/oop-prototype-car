function Car(make, model, year, color, seats, running, owner, previousOwners) {
	//constructor parameters?
  this.make = make;
  this.model = model;
  this.year = year;
  this.seats = seats;
  this.color = color;

  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
}


Car.prototype.sell = function(newOwner) {
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
	return newOwner;
	console.log(newOwner + " is the new owner");
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
	return newColor;
	console.log(newColor + " is the new color");
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;


Car.prototype.start = function(){
	this.running = true;
} 

Car.prototype.off = function(){
	this.running = false;
} 



if (Car.prototype.start){
Car.prototype.driveTo = function(destination){
		console.log("driving to " + destination);
		return false;
	}
}






// Car.prototype.driveTo = function(destination){
// 		if (this.running = false){
// 			return false;
// 		}
// 		if (this.running = true){
// 		console.log("driving to " + destination);
// 		return false;
// 		}
// 	}



// if (this.running = false){
// 	return false;
// }


// Car.prototype.driveTo = function(destination){
// 	if (Car.prototype.start){
// 		console.log("driving to " + destination);
// 		return true;
// 	}
// 	else if (Car.prototype.off){
// 		return false;
// 	}
// }






// if (this.running = true){
// Car.prototype.driveTo = function(destination){
// 		console.log("driving to " + destination);
// 		return true;
// 	}
// }