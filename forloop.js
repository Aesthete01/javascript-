// for loop 

for (let index = 1; index <=  10; index++) {
    const Element = index; 
   if (Element==5){
    console.log("5 is the best number"); 
   }
   
   console.log(Element); 

}

for (let index = 0; index <= 10 ; index++) {
//console.log(`outer loop value: ${index}`)
    for (let p = 0; p  <= 10;  p++) {
       // console.log(`inner loop value ${p} and inner loop${index} `)
       //console.log(index + '*' + p + '=' + index*p) 
        
    }
    
}

let myarray = ["apple", "banana", "guava"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index]; 
    //console.log(element);
}


// break and continue 

for (let index = 0; index <= 10 ; index++) {
    if (index == 5) {
        console.log("5 detected"); 
        break 
    }
    console.log(`value of index is  ${index}`);   
    
}

for (let index = 1; index <= 10;  index++) {
    if (index == 5) {
        console.log('5 detected'); 
        continue
    }
    console.log(`value of index is  ${index}`);   
    
}




