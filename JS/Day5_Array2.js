const friends = [ "rishi " , "manas ", "mohsina "] 
const c = [ " arnav " , "Sankit ", " Manikanta"]

// isArray = true or false value
// Array.of =  makes array of the data type
// Array.from = makes array like yash ka [y,a,s,h]

let score2 = 100
let score1 = 200
let score5 = 500

const fried =friends.concat(c) 
console.log(fried);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);

const friend = [...friends, ...c] // ... select karleta hai saare elements ko 

console.log(friend);
console.log(Array.from("yash")) //basically creates the string or other data type into the array.
console.log(Array.from({name : " yash "})) //here kisko array banana is not defined so phle usse define krenge then work krenge
console.log(Array.of(score2,score1,score5)); // makes the array from the values
