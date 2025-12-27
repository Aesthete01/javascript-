const tinderUser = new Object()
//const tinderUser = {}

//console.log(tinderuser);

tinderUser.id = "3007abc"
tinderUser.email = "roy@gamil.com"
tinderUser.loggedin = "true"
tinderUser.name = "roy" 

//console.log(tinderUser);

const dailyUser = {
    email: "sam@gamil.com",
    fullname: {
        userfullname:{
            firstname: "saam",
            lastname: "bunny"

        }
    }
}
//console.log(dailyUser.fullname.userfullname.firstname);

const obj1 = {1: "p", 2: "b"}
const obj2 = {3: "a", 4: "c"}   
const obj4 = {5: "a", 6: "c"} 

//const obj3 = Object.assign({}, obj1 , obj2,obj4 )

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = {

}
{

}
users[1]
//console.log(tinderUser)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('loggedin'));

//++++++++++++object de-structure ++++++++++++//

const course = {
    price:"$199", 
    courseinstructor: "happy",
    coursename: "PCM",
}  

//console.log(course.price);

const {coursename: namee} = course

console.log(coursename);

//{
  //"name": "John",
  //"age": 25,
  //"isStudent": false,
  //"skills": ["JavaScript", "Python", "HTML"]
//}  JSON FORMAT.........._........
/*
{
  "identity": "teen_coder",
  "age": 15,
  "current_state": "deep_in_JS",
  "focus": ["APIs", "JSON", "functions", "endless curiosity"],
  "brain": {
    "status": "overloaded",
    "thoughts": ["what_is_callback?", "why_is_this_async?", "maybe_sleep_later"]
  },
  "motto": "age_doesnt_matter_keep_pushing",
  "goal": "understand_everything_or_at_least_try"
} 
*/



