
var c = 100
if (true)  {
    let a = 10 
const b = 20
c = 30
console.log(a);

}
console.log(c);


function one() {
    const username = "happy"
    
    function two() {
        const website = "twitter"
        console.log(username, "+",  website);
        
    }
    //console.log(website);

    two()

} 

one ()

if(true) {
    const username = "happy"
    if (username==="happy") { 
        const website = "twitter"
        console.log(username + website )


    }
    //console.log(website)

    
}
//console.log(username);

// +++++++++++++++ interesting +++++++++++++++++++++++ 

console.log(addone(6))
function addone(num) {
    return num + 1 
}
 
 
const addtwo = function(num){
    return num + 2 
}
console.log(addtwo(5) )