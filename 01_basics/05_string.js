/**
 * string datatype
 */
const name = "pankaj ghosh";
const repoCount = 50;

// old way
console.log(name + repoCount + "value");

// mordern way
console.log(`hello! my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('pankaj-dotcom');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('d'));

// takes positive value only
const newString1 = gameName.substring(0,4); //(start index, how much charracter needed)
console.log(newString1);

// takes both value negative and positive 
const anotherString = gameName.slice(2,4);//(start index, how much charracter needed)
console.log(anotherString);

const newString2 = "    pankaj   ";
console.log(newString2);
console.log(newString2.trim());

const url = "https://google.com/pankaj%20ghosh"
console.log(url.replace("%20", "-"));
console.log(url.includes("com"));
console.log(gameName.split("-"));
