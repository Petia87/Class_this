class Animal {
    constructor(color, type) {
        this.color = color
        this.type = type
    }
    say() {
        console.log("I'am an animal");
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
class Person extends Animal {
    constructor(color, type, hasConsciousness) {
        super(color, type)
        this.hasConsciousness = hasConsciousness
    }
}
var bear = new Animal("brown", "mammal", "hasMilk")
var shark = new Animal("gray", "fish", "hasEggs")
var person = new Animal("gray", "fish", "hasEggs")

bear.say("I am bear")