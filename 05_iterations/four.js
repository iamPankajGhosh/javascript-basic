/**
 * for-in loop
 */
const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} extension of ${myObject[key]}`);
}

const coding = ["js", "rb", "py", "cpp", "java"];

for (const key in coding) {
   console.log(coding[key]);
}