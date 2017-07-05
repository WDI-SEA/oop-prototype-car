// Phase II here, don't require this file until you're done with Phase I

function Car (make, model, year, color, seats) {
  this.make = make
  this.model = model
  this.year = year
  // TODO: add color, seats here
}

Car.prototype.sell = function (newOwner) {
  return newOwner
}

Car.prototype.paint = function (newColor) {
  return newColor
}

// export the Car function for use in node //
// this is required for the test.js to load this //
