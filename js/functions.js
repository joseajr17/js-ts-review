// Declaração de função (Function hoisting)

sayHello();
function sayHello() {
    console.log('Hello');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const data = function () {
    console.log("I'm a data")
}
data();

// Arrow function
const arrowFunction = () => {
    console.log("I'm a arrow function");
}
arrowFunction();

// Function in Object
const person = {
    sayHello() {
        console.log('Hello from object');
    }
}

person.sayHello();