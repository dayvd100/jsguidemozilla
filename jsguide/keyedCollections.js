// map object
const noises = new Map();
noises.set("dog", "rof");
noises.set("cat", "meow");
noises.set("elephant", "toot");
const noiseDog = noises.get("dog");
// console.log(noiseDog); // the output will be "roof";
noises.delete("cat");
// console.log(noises.has("car")); // the output will be "false", because i deleted the element "cat";
for( const [key, value] of noises){
    // console.log(`the ${key} is doing ${value}`);
}

noises.clear();
// console.log(noises); // this will show me a empty element

// Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
// Use maps if there is a need to store primitive values as keys because object treats each key as a string whether it's a number value, boolean value or any other primitive value.
// Use objects when there is logic that operates on individual elements.

// set object
const mySet = new Set();
mySet.add("dog");
mySet.add("cat");
mySet.add("bird");
mySet.add("horse");
console.log(mySet); // this line will show me the length of the object and the datas;
// mySet.forEach((animal) => console.log(animal));


Array.from(mySet);
[...mySet2] = new Set([1, 2, 3]);
console.log(mySet2)