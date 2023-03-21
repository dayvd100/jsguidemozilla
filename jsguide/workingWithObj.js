// Using object initializers
const obj = {
    // value1: value1, // property name may be an identifier
    // 2: value2, //or a number
    // "property n": value3 //or a string
}

// const myHonda = {
//     color: "red",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
//   };

const myHonda = {
    color: "blue",
    wheels: 4,
    engine: {cylinders: 4, size: 2.2} //how you can see, a key can have other object like value
}

function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const dayvd = new Person("Dayvd", 19, "M");


function Car(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const myCar = new Car("Honda", "Old", "Civic", dayvd);
// console.log(myCar);
// i can access the owner's data like this (myCar.owner.data)


const animal = {
    nameAnimal: "horse",
    showName(){
        // console.log(this.nameAnimal);
    }
}

animal.size = "big";
// console.log(animal);

const obj2 = {
    a: 1,

    get b(){
        return this.a + 1;
    },


    set c(x){
        this.a = x *2;
    }
}

obj2.c = 10;
console.log(obj2.a)

// the objects types are always differet of each other 
// for example

const person1 = {name: "dayvd"};
const person2 = {name: "dayvd"};
console.log(person1 === person2); //this will show me false, bacause it will always be different
// but we can compare and have a different result using this way
const person3 = person2;
console.log(person3 === person2);