// Immediately Invoked Function Expressions 

//named iife
(function chai(){
    console.log(`DB`);
}); // to avoid global scope pollution  // ;is used jab 2 IIFE lagare ho warna wo exit ni lega and chalta rhega


// unnamed
( (name) => {
console.log(`DB is connected ${name}`);
})('yash')

// pehla () return na dena pade uske liye , then function declare krre , last wala () for calling
