//function calculateCartPrice (val1 , val2 , ...num1){
  //  return num1 
//}

//console.log(calculateCartPrice(200,400,800))

const user = {
     username: "happy",
    price: 199 
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject( {
  username: " sam ",
  price: 500
})  

const mynewarray = [200,500,300,400]

function returnsecondvalue(getarray){
  return getarray[2]
}
console.log(returnsecondvalue(mynewarray));