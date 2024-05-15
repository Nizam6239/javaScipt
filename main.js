// const prompt = require("prompt-sync")({ sigint: true });
// let firstName = prompt("What is your first name ?");
// let lastName = prompt("What is your last name ?");
// console.log("Welcome"+ firstName +" "+ lastName);


// const allUser = [{
//     firstName : "Nizam",
//     age : 20,
//     gender : "Male"
// },
// {
//     firstName : "Raja",
//     age : 22,
//     gender : "Male"
// },
// {
//     firstName : "Naima",
//     age : 21,
//     gender : "Female"
// }]

// for(let i = 0; i < allUser.length; i++){
//     if(allUser[i]["gender"] == "male"){
//         console.log(allUser[i]["firstname"]);
//     }
// }

// function findSum(a, b){
//     return a + b;
// }

// const value = findSum(1,2);

// console.log(value);

// 
function cube(n){
    return n*n*n;
  }
  
  function square(n) {
    return n*n;
  }
  
  function sumOfSomething(a, b, fn){
    return fn(a) + fn(b);
  }
  
  console.log(sumOfSomething(2, 3, square));
  console.log(sumOfSomething(2, 3, cube));