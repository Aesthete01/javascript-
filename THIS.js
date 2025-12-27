const user = {
    username: "happy",
    price: 300, 

    welcomemessage: function() {
      console.log(`${this.username} , welcome to website`);
      console.log(this)
    }
}

//user.welcomemessage()
//user.username = "sam"
//user.welcomemessage()

//console.log(this)

//function sugar() {
    //let username = "happy"
  //  console.log(this.username);

//}

//sugar()
const sugar=  () => {
    let username = "happy"
    console.log(this);
}
sugar()

// const addtwo = () => {}

    //const addtwo = (num1, num2) => {
    //    return num1 + num2 
       
    //}

    //console.log(addtwo(5,2))

    const addtwo = (num1 , num2 ) => ({username: "happy"} )
console.log(addtwo(5,2))

//mynewarray.forEach(() => ())