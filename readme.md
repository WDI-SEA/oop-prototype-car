# Prototype Body Shop

## Implement the following

The idea of this lab is to get you comfortable with Object Oriented Programming (OOP) and introduce you to Test Driven Development (TDD) in JavaScript. By the end you should be comfortable working with objects and writing prototypes.

All of the tests have been written for you, so all you need to do is run `npm test` to see if the Car passes the tests.

## Cars

We need a prototype for a car. Can you help us with your sweet javascript skills?

### Phase I

Our car should have the following:

* make
* model
* year
* color
* seats
* running
* owner
* previous_owners


As a default a `new Car` should have the following values:
* previous_owners should be an empty array, `[]`.
* current_owner: should be `manufacturer`.
* `running` should be false.

We should also be able to do the following with our car.

*  `Car.sell()`, We should able to sell a car to someone, which should update the `owner` and `previous_owners` array. This takes 1 string parameter for the new owner's name. New owners should be `pushed` to the end of the array.

* `Car.paint()`, which should take a new color (string) and update the color of the car to the new color.


## Phase II

Implement and test the following methods:

* `Car.start()` should change the running value of the car to `true`.
* `Car.off()` should change the running value to `false`.
* `Car.driveTo()` should `console.log` `"driving to <destination>"`, but only if the car is running. Should return true if it is successful and false if it is not. *(this method needs to take a `destination` param.)*
* `Car.park()` only if the car is not running you should console.log `parked!!`.  Should return true if it is successful and false if it is not.


## Phase III

Add the following property to the **constructor**:

* `passengers`

it should be optional and default to an empty array if not specified.

Implement the following methods:

* `Car.pickUp()` should take a `name` and `console.log` that you are `"driving to 'pick up <friend>'"`, but only if the `car` is running AND there are enough seats available. It should also update the `passengers` array to include the new passenger. It should also return true on success and false on failure. Newly picked up passengers should be `pushed` to the end of the array.
* `Car.dropOff()` it should take a `name` and remove them from the `passengers` array, but only if they are in the array. It should also only drop them off if the car is `on`. It should also output `"driving to drop off <friend>"` and return true on success and false on failure.
* `Car.passengerCount()` should return the number (integer) of passengers currently in the car.


**NOTE:** When deciding if there are enough seats available remember that the driver takes up 1 seat, but is NOT counted as a passenger in passengerCount(). You can assume the driver is the owner.
