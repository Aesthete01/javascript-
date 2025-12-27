//singleton
//object.create

//object literals
const mySym = Symbol("mykey1")
const jsuser = { 
    name: "happy",
    [mySym]:"mykey1", 
   "full name": "happy bunny",
    age: 19,
    email: "happy@google.com",
    isloogedin: false, 
    lastloggedin: ["monday", "tuesday", "friday"],
    location: "jaipur",
}
console.log(jsuser.email)
console.log(jsuser["email"])
//console.log(jsuser.full name)
console.log(jsuser["full name"])
console.log( jsuser[mySym])

jsuser.email = "happy@microsoft.com"
//Object.freeze(jsuser)
jsuser.name = "ramu"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello js user ");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
