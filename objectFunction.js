class Person {
    constructor() {
        this.name = "sa6o "
    }
    father() {
        return "I am a first father";
    }
}
var pesho = new Person("pesho")


var obj = {
    lastName: "ivanov",
    method() {
        return "Ivanov is last name";
    }
}
var parent=pesho.__proto__
var parentOne=obj.__proto__

console.log(parent);
console.log(parentOne)
