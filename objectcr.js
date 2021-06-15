const person = {
    name: "Pesho",
    say: function () {
        console.log(`My name is ${this.name}.`);
    }
};

const me = Object.create(person);
me.name = 'Matthew';
me.say();

//Object.is(value1, value2);
//Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

//Object.defineProperty()
const object1 = {};
const object2 = {}

//"use strict"
Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

Object.defineProperty(object2, 'property2', {
    value: 42,
    writable: true
});

object1.property1 = 77;
// throws an error in strict mode

object2.property2 = 77;

console.log(object1.property1);
// expected output: 42
console.log(object2.property2);
// expected output: 77


//Object.entries()
const person1 = {
    name: 'Pe6o',
    age: 42,
    height: 186
};

for (const [key, value] of Object.entries(person1)) {
    console.log(`${key}: ${value}`);
}

//6.	Object.fromEntries()
const entries = new Map([
    ['name', 'Pe6o'],
    ['age', 42]
]);

const obj3 = Object.fromEntries(entries);

console.log(obj3);

//7.hasOwnProperty()
const object4 = {};
object4.property4 = 42;
console.log(object4.hasOwnProperty('property4'));
// expected output: true
console.log(object4.hasOwnProperty('1'));
// expected output: false

//8.Object.getPrototypeOf()
const prototype5 = {};
const object5 = Object.create(prototype5);
console.log(Object.getPrototypeOf(object5) === prototype5);
// expected output: true

//9.	instanceof
class Animal {
    constructor(color, type) {
        this.color = color
        this.type = type
    }
    
}
class Bear extends Animal {
    constructor(color, type, hasMilk) {
        super(color, type)
        this.hasMilk = hasMilk
    }
}
class Shark extends Animal {
    constructor(color, type, hasEggs) {
        super(color, type)
        this.hasEggs = hasEggs
    }
}
var bear = new Animal("brown", "mammal", "hasMilk")
var shark = new Animal("gray", "fish", "hasEggs")

console.log(Shark instanceof Animal);//false
console.log(shark instanceof Animal);//true
