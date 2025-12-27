// dates

//let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());

let myCreatedDate = new Date("2025-11-30")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp)
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDay());

newDate.toLocaleString('default' ,{
    weekday:"long"
    
})

function calculateCartPrice (val1 , val2 , ...num1){
    return num1 
}

console.log(calculateCartPrice(200,400,800))