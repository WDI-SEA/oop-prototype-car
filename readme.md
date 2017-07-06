# Prototype Body Shop

The idea of this lab is to get you comfortable with Object Oriented Programming (OOP) and introduce you to Test Driven Development (TDD) in JavaScript. By the end you should be comfortable working with objects and writing prototypes.

All of the tests have been written for you, so all you'll need to do is run them. No need to create any Car objects, because the tests will do that for you.

If any of the tests errors are unclear, take a look at what the test is running within `test/carTest.js`

## Getting Started

* Fork and clone this repository
* Run `yarn install` to install dependencies
* `yarn start` - run `main.js`
* `yarn test` - run test suite
* `yarn run lint:js` - lint JS

## Requirements

We need a prototype for a car. Can you help us with your sweet JavaScript skills?

<img align="center" src="http://s2.quickmeme.com/img/e9/e9b82533f50538f4d36656f24bf2afb39642223033cd19d52ef1eea5b03ab1bf.jpg" alt="Listen to the green old man" />

But don't worry we'll go step by step.

### Phase I

Under the given file `carFn.js`, fulfil the requirements below

* Create an object of `Car` that has the following properties:
  * `make`
  * `model`
  * `year`
  * `color`
  * `seats`
  * `previousOwners`
    * should be initialized to an empty array, `[]`.
  * `owner`
    * should be initialized to `manufacturer`.
  * `running`
    * should be initialized to `false`.
* Object `Car` must also has these following functions as properties
  * `sell(newOwner)`
    * We should able to sell a car to someone, which should update the `owner` and `previousOwners` array.
    * This takes 1 string parameter for the new owner's name.
    * The old owner should be pushed to the end of the `previousOwners` array.
    * The new `owner` should be set to the parameter passed in.
  * `paint(newColor)`
    * We should be able to paint the car a new color
    * This takes 1 string parameter for the new color's name
    * This should update the color of the car to the new color.

### Phase II

Create a test to check whether you've passed the previous requirements.
Implement and test the following methods:

_feel free to test beyond the suggestions below_

Normal cases:
* `var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)`
  * Should expect all properties are set as per initial state
    * e.g. `c1.make` === 'Honda', etc
  * Should expect `c1.owner` === 'manufacturer'
  * Should expect `c1.running` === false

* `c1.sell('prima')`
  * Should expect `c1.owner` to 'prima'
  * Should expect `c1.previousOwners` to ['manufacturer']

* `c1.paint('blue')`
  * Should expect `c1.color` to 'blue'

Abnormal cases:


* `Car.start()`
  * Should change the running value of the car to `true`.
* `Car.off()`
  * Should change the running value to `false`.
* `Car.driveTo(destination)`
  * Should `console.log` `"driving to <destination>"`, but only if the car is running.
  * Should return true if it is successful and false if it is not.
* `Car.park()`
  * Only if the car is not running, you should console.log `parked!!`.
  * Should return true if it is successful and false if it is not.


* Must have the following constructor parameters:
  * `make`
  * `model`
  * `year`
  * `color`
  * `seats`
* By default, a new `Car` should have the following values **initialized** in the constructor:
  * `previousOwners`
    * should be initialized to an empty array, `[]`.
  * `owner`
    * should be initialized to `manufacturer`.
  * `running`
    * should be initialized to `false`.
* We should be able to do the following with our car:
  * `Car.sell(newOwner)`
    * We should able to sell a car to someone, which should update the `owner` and `previousOwners` array.
    * This takes 1 string parameter for the new owner's name.
    * The old owner should be pushed to the end of the `previousOwners` array.
    * The new `owner` should be set to the parameter passed in.
  * `Car.paint(newColor)`
    * We should be able to paint the car a new color
    * This takes 1 string parameter for the new color's name
    * This should update the color of the car to the new color.

### Phase III

Implement and test the following methods:

* `Car.start()`
  * Should change the running value of the car to `true`.
* `Car.off()`
  * Should change the running value to `false`.
* `Car.driveTo(destination)`
  * Should `console.log` `"driving to <destination>"`, but only if the car is running.
  * Should return true if it is successful and false if it is not.
* `Car.park()`
  * Only if the car is not running, you should console.log `parked!!`.
  * Should return true if it is successful and false if it is not.


### Phase IV

Add the following property as a parameter to the **constructor**:

* `passengers`
  * Should be optional and default to an empty array if not specified.

Implement the following methods:

* `Car.pickUp(name)`
  * Should take a `name` and `console.log` that you are `"driving to pick up <name>"`, but only if the `car` is running AND there are enough seats available.
  * Should also update the `passengers` array to include the new passenger.
  * Should also return true on success and false on failure.
  * The newly picked up passenger should be `pushed` to the end of the array.
* `Car.dropOff(name)`
  * Should take a `name` and remove them from the `passengers` array, but only if they are in the array.
  * Should also only drop them off if the car is `on`.
  * Should also output `"driving to drop off <name>"` and return true on success and false on failure.
* `Car.passengerCount()`
  * Should return the number (integer) of passengers currently in the car.

**NOTE:** When deciding if there are enough seats available, remember that the driver takes up 1 seat, but is NOT counted as a passenger in passengerCount(). You can assume the driver is the owner.


---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
