/**
 * date and time
 */

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myNewDate = new Date(2023,0,23);
console.log(myNewDate.toDateString());

let newDate = new Date(2023,0,23,5,3);
console.log(newDate.toLocaleString());

let newDate2 = new Date("01-14-2023");
console.log(newDate2.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(newDate2.getTime());

console.log(timeStamp/1000);
console.log(Math.floor(timeStamp/1000));

let newDate3 = new Date();
console.log(newDate3);
console.log(newDate3.getDate());
console.log(newDate3.getMonth());
console.log(newDate3.getDay());

// change default format
newDate3.toLocaleString("default", {
    weekday:"long",
})