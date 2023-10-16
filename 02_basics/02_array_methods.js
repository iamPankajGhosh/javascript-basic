const marvel_heros = ["ironman","thor","spiderman"];
const dc_heros = ["superman","batman","flash"];

/*marvel_heros.push(dc_heros);
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);*/

// spread operator
const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const margeArr = anotherArr.flat(Infinity);
console.log(margeArr);

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

console.log(Array.isArray("pankaj"));// check the datatype is array or not
console.log(Array.from("pankaj"));// convert string to array
console.log(Array.from({ name : "pankaj"}));// convert object to array