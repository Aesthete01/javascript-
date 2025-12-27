const marvel_heros = ["thor", "ironman", "spiderman" ]
const dc_heros = ["superman", "flash", "batman"]
 //marvel_heros.push(dc_heros);

// console.log(marvel_heros);

 //marvel_heros.concat(dc_heros)
//console.log(marvel_heros)


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
const my_real_array = [1,2,3,[3,4,7],[1,2,[5,3,0,7]]]
const anotherarray = my_real_array.flat(Infinity)
console.log(anotherarray);
console.log(Array.isArray(["thor"]));
console.log(Array.from("happy"));
console.log(Array.from({name: "happy"}));

let score1 = 200
let score2 = 500
let score3 = 900

//console.log(Array.from(score1,score2,score3))
console.log(Array.of(score1,score2,score3));