let person = {
    firstName: "Pesho",
    lastName: "Petrov",
    age() {
        return 26
    },
}
const age=person.age
console.log(person.age());

let person1 = {
    firstName: "Pesho1",
    lastName: "Petrov1",
}
person1.age=age
console.log(person1.age());
