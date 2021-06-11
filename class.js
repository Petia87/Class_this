class Family {
    constructor() {
        this.name = "sa6o "
        this.friend = ''
        this.brother = function () {
            return console.log("I am a first child");
        }
    }
    static father() {
        return console.log("I am a first father");
    }
}
var br = new Family()
var sister = new Family()
var teacher = new Family()
br.name
sister.name = "nina"
sister.brother = "I am a second child"
//br.father()
//br.mother()

console.log(sister.name);
/*var ivan = {
    name: "ivan",
    friend: "",
    method() {
        return "Ivan is facebook friend";
    }
}
var ivo = {
    name: "ivo",
}

ivan.friend="ivo"
sister.friend="ivo"
console.log("ivo");
 ivo.brother="ivan"
 ivo.sister="nina"
 console.log(nina)
*/


/*class Friend {
    constructor() {
        this.name = "pesho"
        this.age = "31"
        this.goodFriendChild = function () {
            return "I am a child";
        }
    }
    goodFriend() {
        return "I am a father";
    }
}

var fr1 = new Friend()
Friend.goodFriendClass = function () {
    return "I am a class";
}
console.log(".................................1");
Friend.goodFriendClass()
fr1.goodFriend()
fr1.goodFriendChild()
Friend.prototype.goodFriend()
fr1.__proto__.goodFriend()
console.log(fr1);
console.log(fr1.__proto__);
console.log(".................................2");
console.log(Friend.goodFriendClass);
console.log(Friend.goodFriendClass())
console.log(".................................3");
console.log(fr1.__proto__.goodFriend);
console.log(fr1.__proto__.goodFriend());
console.log(Friend.prototype.goodFriend());
console.log(fr1.goodFriendChild());
console.log(".................................4");
*/
//Friend.goodFriendClass()
//console.log(Friend.prototype.__proto__);
