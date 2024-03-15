const friends = [ "rishi " , "manas ", "mohsina "] 
const c = [ " arnav " , "Sankit ", " Manikanta"]

// isArray = true or false value
// Array.of =  makes array of the data type
// Array.from = makes array like yash ka [y,a,s,h]

const fried =friends.concat(c) 
console.log(fried);

const friend = [...friends, ...c]
console.log(friend);

console.log(Array.from("yash")) //basically creates the string or other data type into the array.
console.log(Array.from({name : " yash "})) //here kisko array banana is not defined so phle usse define krenge then work krenge

let score2 = 100
let score1 = 200
let score5 = 500

console.log(Array.of(score2,score1,score5)); // makes the array from the values
