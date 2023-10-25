/**
 * for loop
 */

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

for (let index = 1; index <= 5; index++) {
    console.log(`table of ${index}`);
    for (let j = 1; j <= 10; j++) {
        console.log(index + " * " + j + " = " + index*j);  
        
    }
}

// loop on array
const myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// breake and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        break;
    }
    console.log(index);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        continue;
    }
    console.log(index);
}