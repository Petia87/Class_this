class Person{
    constructor(name){
        this.name=name
        this.age=32
    }
    sayHello(prеfix){
        //this = object on which tthe method was called
    console.log(prеfix,this.name);
    }
}
var p=new Person("pesho")

const personThis={
    name:"XXX"
}
Person.prototype.sayHello.call(personThis,"/===")
Person.prototype.sayHello.apply(personThis,["/==="])
p.sayHello.call(personThis,"===")