// this is the way without a Promise
// function sumNumbers(){
//     let result = 1 + 1;

//     if(result === 2){
//         successCallBack();
//     } else {
//         errorCallBack()
//     }
// }

// const successCallBack =  () => {
//     console.log("the number is 2");
// }

// const errorCallBack = () => {
//     console.log("the number is not 2");
// }

// sumNumbers();
// then 'could' be 'then' and 'reject' could be 'catch'

// const promise = new Promise((resolve, reject) => {
//     const result = 1 + 3;

//     if(result === 3){
//         resolve("the value is 3");
//     }
//     else{reject("it is not 3")};
// })

// promise.then(
//     (message) => console.log("this is then " + message)
// ).catch((messageCatch) => console.log("this is catch " + messageCatch))

const promise = new Promise((resolve, reject)=>{
    const namePerson = "Dayvd Allyson";

    if(namePerson.length >= 8){
        resolve("oh, your name is big"); //this is a callBack, callBack is a function in another function
    }
    else{
        reject("oh, your name is small");
    }
})  

/*
// for call a promise function i can pass the method then
// promise.then(
//     (response) => console.log(response)
// )
// .catch((response) => console.log(response))
// .then(() => console.log("this will happen, doesn't matter what happened before"));
*/
// i can change my datas returning anything
/*
promise.then((data) => {
    return data.toUpperCase();
}).then((dataUpperCase) => console.log(dataUpperCase));*/


// resolving several promises
const promise1 = (resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 4000)
    
}
const promise2 = (resolve, reject) => {
    resolve("Promise 2");
}
const promise3 = (resolve, reject) => {
    resolve("Promise 3");
}

const resolveAll = Promise.all([promise1(), promise2(), promise3()]).then((data1, data2, data3) => console.log(data1, data2, data3));
resolveAll.then((data) => console.log(data));

const userName = "dayvd100";
fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers:{
        'accept': 'application/vnd.github.v3+json',
    }
}).then((data) => data.json())
.then((dataJson) => console.log(dataJson.login));