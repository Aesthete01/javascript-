// for of 

// ["","",""]
// [{},{},{}]

const arr =  [1,2,3,4,5]

for (const num of arr) {
   // console.log(num)
}

const greetings = "hlo bro"
for (const greet of greetings) {
    //console.log(greet)
}

// maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
  
//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
}

// const myobject = {
//     game1: 'badminton',
//     game2: 'basketball'
// }

// for (const [key , value] of myobject) {
//     console.log(key,'-',value)
// }

const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb:'ruby',
    py:'python'
}

for (const key in myobject) {
   //console.log(`${key} shortcut is for  ${myobject[key]}`)
    
}

const programming = ["js", "py", "c++", "rb", "java"]

for (const key in programming) {
  
   //console.log(key) 
   //console.log(programming[key]);
    
}
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")

// for (const key in map) {
// console.log(key);
    
// }

// for each 

const coding = [ "js","rb","c++", "java","python"]

// coding.forEach( function(key) { 
//     console.log(key);
// } )

// coding.forEach( (val) => {
//     console.log(val)
// } )

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

// coding.forEach( (itme,index,arr) => {
//     console.log(itme,index)
// })

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
         languagename: "python",
        languagefilename: "py"
    }
] 

mycoding.forEach( (item) => {
    console.log(item.languagename);
})

mycoding.forEach( (item) => {
    console.log(item.languagefilename);
})

