//og ("hello" + " " + " world")
//nst name = "happy"

// repoCount = 30
//nsole.log (`Hello my name is ${name} my repo count is ${repoCount}`);

const gameName = new String('happyi')
console.log(gameName)

//console.log(gameName[3])
//console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));

console.log(gameName.indexOf('p'));

const newstring = gameName.substring(1, 5)
console.log(newstring);

const anotherString = gameName.slice(-9, 3)
console.log(anotherString);

const newstringone = "    happy   "
console.log(newstringone)
console.log(newstringone.trim());

const url = "https://google.com/nikunj%20sevariya"
console.log(url)

console.log(url.replace('%20', '%7'))

console.log(url.includes('happy'));
console.log(url.includes('nikunj'));

console.log(gameName.split('-'));