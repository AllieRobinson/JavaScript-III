/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding -- when you make a function with "this", look to the left of the dot (when the fuction is called) to see what "this" is referring to. Example:

let person = function(name, age) {
    return {
        Name: name;
        Age: age;
        sayName: function() {
            console.log(this.name);
        }
    };
};

let allie = person('Allie', 26);
allie.sayName();

Since allie is to the left of the dot, "this" is referring to allie.

* 2. Explicit binding -- you explicitly state what "this" is referring to when calling the function. Example:

let sayName = function() {
    console.log(`My name is ${this.name}`);
};

let allie = {
    name: Allie,
    age: 26
};

sayName.call(allie);

The "this" keyword is referring to "allie" in this code and it is explicitly written out.

If used with an array, you can use .apply and that is also explicit binding. 
If you want to create a new function that you can call later, you can use .bind, which works like .call but does not immediately call the function.

* 3. The "new" binding creates a new object and the "this" keyword that is used inside of it becomes bound to the new object that was created. Example:

let Car = function(color, make, model) {
    this.color: color;
    this.make: make;
    this.model: model;
};

let prius = new Car('Silver', 'Toyota', 'Prius');

A new object has now been created using the "this" keyword.

* 4. Window binding -- If you don't put anything to the left of the dot when you are invoking a function that uses the "this" keyword it will bind to the window. You generally do not want to do this. Example: 

let sayName = function() {
    console.log(this.name);
};

let me = {
    name: 'allie'
};

sayName(); --> will return undefined because I did not put anything to the left of the dot before sayName
*
* write out a code example of each explanation above --> I already did this above! 
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding