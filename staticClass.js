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
