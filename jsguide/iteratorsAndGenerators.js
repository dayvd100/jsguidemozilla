// function makeRangeInterator(start = 0, end = Infinity, step = 1){

//     let nextIndex = start;
//     let interationCount = 0;

//     const rangeInterator = {
//         next() {
//             let result;

//             if(nextIndex < end){
//                 result = {value: nextIndex, done: false};
//                 nextIndex += step;
//                 interationCount++;
//                 return result;
//             }
//             return {value: interationCount, done: true};
//         },
//     };
//     return rangeInterator;
// }

// const it = makeRangeInterator(1, 10, 2);
// let result = it.next();
// while(!result.done){
//     console.log(result.value);
//     result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value); 

// to do a generator function we can use * in declaration of thefunction

// function* doSomething () {
//     const msg =  yield "Hey";
//     const msg2 = yield "Hey, i am the second message";
//     console.log("you got in the end");
// }


// const nada = doSomething();
// console.log(nada);

// do{
//     console.log(nada.next().value)
// }
// while(run){
//     console.log(nada.next().value);
//     if(nada.next().done === true){
//        run = false;
//     }
// }


// function main () {
    //   const generator = doSomething();
    //   const result = generator.next();
    //   console.log (result.value);
    //   const  result2 = generator.next();
    //   console.log(result2.value);
    //   const  result3 = generator.next(); in this line, the msg3.done vai retornar true

//     const generator = doSomething();
//     console.log(generator.next().value);
//     console.log(generator.next().value);
//     console.log(generator.next().value);
      
// }

// main();

// const foo = function* doSomething(){
//     yield "i am the first msg";
//     yield "i am the second msg";
//     yield "i am the third msg";
//     yield "i am the fourth msg";
// }

//and with this i can get all values with JS's help
// for(let msg of foo()){
//     console.log(msg);
// }
// i can 

//this way i can take the value manually
// const execute = foo();
// console.log(execute.next().value);


// const doSome = doSomething();
// console.log(doSome);

// for(i = 0; i < Infinity; i++){

//     console.log(doSome.next().value);

// }

// function* sayHello (){
//     yield "Hello 1";
//     yield "Hello 2";
//     yield "Hello 3";
//     yield "Hello 4";
//     yield "Hello 5";
// }

// const getSayHellos = sayHello();

// for(let hello of getSayHellos){
//     console.log(hello)
// }

function* sayHello(){
    yield "i am the 1";
    yield "i am the 2";
    yield "i am the 3";
    yield "i am the 4";
}

const getSayHello = sayHello();

for(let hello of getSayHello){
    console.log(hello);
}