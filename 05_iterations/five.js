/**
 * for-each loop
 */
const coding = ["java", "python", "ruby", "c++"];

coding.forEach( function(item){
    console.log(item);
});

coding.forEach( function(item, index, arr){
    console.log(item, index, arr);
});

const myCoding = [
    {
        languageName : "javascript",
        languageFileExtension : "js"
    },
    {
        languageName : "python",
        languageFileExtension : "py"
    },
    {
        languageName : "c++",
        languageFileExtension : "cpp"
    }
]

myCoding.forEach( function(item) {
    console.log(`${item.languageFileExtension} the is extension of ${item.languageName}`);
})