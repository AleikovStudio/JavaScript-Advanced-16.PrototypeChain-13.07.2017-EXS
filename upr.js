class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `My name is: ${this.name} and I am ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, facultyName) {
        super(name, age);
        this.facultyName = facultyName;
    }
}

let person = new Person("Sashko", 32);
console.log("" + person);