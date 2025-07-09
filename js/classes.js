class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    speak() {
        console.log(`${this.name} is speaking`)
    }

}

const p1 = new Person('Maria', 'Silva');
console.log(p1);
console.log(p1.speak());