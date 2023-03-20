// these three types are the same
// const array1 = new Array("name1", "name2");
// const array2 = Array("name1", "name2", "name3");
// const array3 = ["name1", "name2", "name3", "name4"];


// console.log(array1[0]);
// console.log(array2[2]);
// console.log(array3[3]);


// const obj = {};
// obj.names = ["nome10", "nome20", "nome30"];
// console.log(obj)

// const arr = [42]; array with number 42 as the unique value
// const arr1 = Array(42); empty items
// console.log(arr1)

// const array3 = ["name1", "name2", "name3", "name4"];
// console.log(array3["length"]) it shows the length of the array

// const array3 = ["name1", "name2", "name3", "name4"];
// array3[4] = "name5"
// console.log(array3); with this way i can add a element in my array


// wen can set several values in the array when we create it
// const array = new Array("value1", var2, 10);
// or
// const array = ["value1", var2, 10];
// the both ways are the same thing

// the length of this array will be 31
// const array = [];
// array[30] = "value31";
// console.log(array.length)


// with this i can remove the last element
// const cats = ["cat1", "cat2", "cat3"];
// cats.length = 2;
// console.log(cats)

// structure for with array
// const array = ["one", "two", "three", "four", "five"];
// for(i = 0; i < array.length; i++) {
//     console.log(array[i])
// };

// forEach
// const array = ["one", "two", "three"];
// array.forEach((arr) =>{if(arr === "two"){console.log("oh, you get level 2")}console.log(arr)} );


// concat work like this
// const array1 = ["value1", "value2", "value3"];
// const array2 = array1.concat(["value4", "value5", "valu6"])
// console.log(array2)

// the method join
// const arrayNormal = ["value1", "value2", "value3", "value4"];
// const myArrayJoined = arrayNormal.join("/")
// console.log(myArrayJoined);

// the method push, it don't need to have an other variable
// const myArrayPushed = [1, 2];
// myArrayPushed.push(3);
// console.log(myArrayPushed);

// method shift delete the data in the first index
// const array = [1, 2, 3];
// const myArray = array.shift();
// console.log(myArray)

// the unshift add a new index in the first index
// const array = [1, 2, 3];
// const myArray = array.unshift(4, 5);
// console.log(array);

// the method slice can cut a value in array
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arraySliced = array.slice(1, 8);
// console.log(arraySliced)

// method splice
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// array.splice(0, 3, "a", "b", "c");
// console.log(array);

// method reverse, this method can reverse the array
// const array = [1, 2, 3, 4];
// console.log(array.reverse());

// the flat method can return a new array with sub-arrays concatenaded
// const array = [1, 2, 3, 4, [5, 6]];
// console.log(array);
// console.log(array.flat());
// i did 2 console.log to remember what it do

// ex 1
// const arrayTest = [1, "b", 3, 4, 5, "b"];
// console.log(arrayTest.indexOf("b"));
// console.log(arrayTest.indexOf("b", 2));


// ex2 with the method map and toUpperCase i can do this
// const array = ["a", "b", "c", "d", "e"];
// const upArray = array.map((letter) => letter.toUpperCase());
// console.log(upArray);


// with the flatMap i can just pass 2 methods using the return in one array
// const arrayA = ["a", "b", "c"];
// const arrayB = arrayA.flatMap((letter) => [letter.toUpperCase(), letter.toLocaleLowerCase()])
// console.log(arrayB);

// filter for filter anything that you wanna
// const array = [1 , "a", 2 , "b", "c", 20, "d", "e", "f"];
// const arrayNum = array.filter((numb) => {if(typeof numb === 'number'){console.log(numb)}})

// the method find will find the first thing that you ask for this find
// const array = [ 79 , "a", 2 , "b", "c", 20, "d", "e", "f"];
// const arrayNum = array.find((numb) => typeof numb === 'number');
// console.log(arrayNum);

// the method findLast will find the first thing that you ask for this find for last
// const array = [ 79 , "a", 2 , "b", "c", 20, "d", "e", "f"];
// const arrayNum = array.findLast((numb) => typeof numb === 'number');
// console.log(arrayNum);

// const array = [1, 2, 3, 4, "a", "b", 5];
// const lastIndex = array.findLastIndex((item) => {if(typeof item === 'number') {console.log(item)}})

// reduce
// const array = [10, 20, 30];
// const total = array.reduce((accumulator, indexValue) => accumulator + indexValue, 0);
// console.log(total);

// const array = new Array(10);
// console.log(array);

// const array = [1, 2, 3];
// array.valor = "value";
// console.log(array);
// console.log(array.valor);