/**
 * immediately invoked function expressions
 */

// named IIFE
(function myFunc() {
    console.log("DB Connected");
})();

// unnamed IIFE
((name) => {
    console.log(`DB Connected ${name}`);
})("pankaj");