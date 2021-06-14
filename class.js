class Friend {
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
console.log(fr1.goodFriend());
console.log(fr1.__proto__.goodFriend());
console.log(Friend.prototype.goodFriend());
console.log(fr1.goodFriendChild());
console.log(".................................4");

//Friend.goodFriendClass()
//console.log(Friend.prototype.__proto__);
