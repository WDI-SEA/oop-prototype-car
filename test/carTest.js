// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')


// //// TEST PHASE 1 /////////////////////////////////////////
// load the Car object for
var CarPhase1 = require('../src/carFn')

// test constructor
console.log('Testing Constructor')
assert.strictEqual(CarPhase1.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(CarPhase1.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(CarPhase1.year, 1999, 'Constructor did not set year.')
assert.strictEqual(CarPhase1.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(CarPhase1.seats, 4, 'Constructor did not set seats.')
success()

// test sell
console.log('Testing selling a car')
myCar.sell('Lenny')
