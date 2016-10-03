function Person(name, ){
	this.name = name;
	this.greeting = function(){
		console.log("hi " + this.name);
	}
}

var John = new Person("John");
	this.greeting();
var Bob = new Person("Bob");
	this.greeting();
var Cameron = new Person("Cameron");
	this.greeting();