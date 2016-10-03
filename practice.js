// function Person(name){
// 	this.name = name;
// 	this.greeting = function(){
// 		console.log("hello " + this.name);
// 	}
// }

// var John = new Person("John");
// 	John.greeting();
// var Bob = new Person("Bob");
// 	Bob.greeting();
// var Cameron = new Person("Cameron");
// 	Cameron.greeting();

// 	Person.prototype.greeting = function() {
// 		console.log("hi " + this.name);
// 	}


//The old way


// function Sailbot(length, width, sails){
// 	this.length = length;
// 	this.width = width;
// 	this.sails = sails;
// 	this.squareFeet = function(){
// 		return this.length = this.width;
// 	}
// }

// function Steamboat(length, width, smokeStacks){
// 	this.length = length;
// 	this. width = width;
// 	this.smokeStacks = smokeStacks;
// 	this.squareFeet = function(){
// 		return this.length = this.width;
// }

// function Speedboat(length, width, motors){
// 	this.length = length;
// 	this.width = width;
// 	this.motors = motors;
// 	this.squareFeet = function(){
// 		return this.length = this.width;
// }

// function Yacht(length, width, jetSkis){
// 	this.length = length;
// 	this.width = width;
// 	this.jetSkis = jetSkis;
// 	this.squareFeet = function(){
// 		return this.length = this.width;
// }

// function Tugboat(length, width, tuggingCappacity){
// 	this.length = length;
// 	this.width = width;
// 	this.tuggingCappacity = tuggingCappacity;
// 	this.squareFeet = function(){
// 		return this.length = this.width;
// }


// the new way - prototypal inheritance

// function Boat(length, width){
// 	this.length = length;
// 	this.width = width;
// }
// Boat.prototype.squareFeet = function(){
// 	return this.length * this.width

// }

// function Sailboat(length, width, sails){
// 	Boat.call(this, length, width);
// 	this.sails = sails;
// }
// Sailboat.prototype = Object.create(Boat.prototype);
// Sailboat.prototype.constructor = Sailboat;

// function Steamboat(length, width, smokeStacks){
// 	Boat.call(this, length, width);
// 	this.smokeStacks = smokeStacks;
// }

// Steamboat.prototype = Object.create(Boat.prototype);
// Steamboat.prototype.constructor = Steamboat;

// function Barge(length, width, smokeStacks, cargo){
// 	Steamboat.call(this, length, width, smokeStacks);
// 	this.cargo = cargo;
// }

// Barge.prototype = Object.create(Steamboat.prototype);
// Barge.prototype.constructor = Barge;

// var myBarge = new Barge(200, 35, 3, "kittens");
// console.log("my barge is " + myBarge.squareFeet() + " sqft");

// var mySailboat = new Sailboat(21, 10, 2);

// console.log(mySailboat.squareFeet());


// var getAge - function(friend){
// 	return friend.age;
// }
// var john = {name: "John", age: 21};
// getAge(john);

// //the above rewritten with call
// var getAge = function(){
// 	return this.age;
// }

// var john = {name: "john", age: 21};
// getAge.call(john);

// // -----------------------Apply - just like call, but uses an array instead of a comma separated list of parameters

// var setAge = function(newAge){
// 	this.age = newAge;
// }
// var john = {name: "john", age: 22};
// setAge.apply(john, [35]);



//  --------------------hasOwnProperty

// var taco = {
// 	food: 'yes'
// }

// console.log(taco.hasOwnProperty("food"));
// console.log(taco.hasOwnProperty("ahwcnj"));

function Person(name){
	this.name = name;
}
Person.prototype.greet = function(){
	console.log("hi " + this.name);
}
function Student(name, course){
	Person.call(this, name);
	this.course = course;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

var brandi = new Person("brandi");
var carlos = new Student("Kim", "WDI");
var me = new Student("Tanner", "WDI");

// console.log(brandi.hasOwnProperty("name")); //true
// console.log(carlos.hasOwnProperty("name")); // true
// console.log(me.hasOwnProperty("course")); //  true



// --------------------instance of

// console.log(carlos  instanceof Person); //true
// console.log(brandi instanceof Person); // true
// console.log(me instanceof Student); // true
// console.log(brandi instanceof Student); // false




console.log(Person.prototype.isPrototypeOf(brandi));





























