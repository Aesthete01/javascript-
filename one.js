// today i studied if else condition or how to use them in js 
//few operators ; ==, ===(datatype),!=, >=,<=, >,< ,&&,||
// var in global scope 
// if(balance >700) console.log("test")
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// numer=number ; string=string 
// ++++ falsy values 
// 0 , false , null , undefined , 0n , -0 , BigInt , "", NaN 
// ++++ truthy values 
// [] , "0" , 'false' ," " , {}, function(){}  
// condition to check array 
// if (usermail.length ===0) {
// console.log("array is empty") 
//  const emptyobj = {}

// if (Object.keys(emptyobj).length ){
//     console.log("object is empty "); 
// }

// nullish coalescing operator (??): null undefined 

let num1; 
// num1 = 5 ?? 10 
 
//num1 = null ?? 10 
//num1 = undefined ?? 10 
num1 = undefined ?? 10 ?? 15 
console.log(num1)

// terniary operator 

// condition ? true : false 

const icecreamprice = 100 
icecreamprice  <= 70 ? console.log("less than 70") : console.log("more then 70 ")
