
// const coding = ["js","rb","c++","py"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item 
// })

// console.log(values); 

//const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)  => {
//     return num> 4 
// })

// const newnums = []
// mynums.forEach( (num) => {
//     if (num > 4 ) {
//         newnums.push(num)
        
//     } 
// })



// console.log(newnums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008
  },
  {
    title: "Book Three",
    genre: "Science",
    publish: 2005,
    edition: 2015
  },
  {
    title: "Book Four",
    genre: "History",
    publish: 1998,
    edition: 2012
  }
];

let userbooks = books.filter( (bk) => bk.genre === 'Non-Fiction')

  userbooks = books.filter ( (bk) => {
    return bk.publish > 2000 && bk.genre === "Science"
  })

    //console.log(userbooks);

    const mynumbers = [1,2,3,4,5,6,7,8,9,10]

  //const numbers =   mynumbers.map( (num) => { return num + 10 } )

  // chaining 
const newnums = mynumbers 
                 .map((num) => num *20 )
                .map( (num) =>  num + 2 )
                 .filter( (num) => num >=  62  )
//console.log(newnums);


// reduce 

const mynums = [1,2,3,4]

// const mytotal = mynums.reduce( function (acc,currval) {
//     console.log( ` acc: ${acc} and currval ${currval}`)
//     return acc +currval
// }, 0 )

const mytotal = mynums.reduce( (acc,currval) => {
return acc + currval
},0 )
console.log(mytotal);

shoppingCart = [
    {
        toy: "puppy",
        price: 799
    },
    {
        toy: "bunny",
        price: 1000
    },
    {
        toy: "pengu",
        price: 5000
    }
]

const pricetopay = shoppingCart.reduce( (acc,item) => acc + item.price, 0 );

console.log(pricetopay);



    
    
 