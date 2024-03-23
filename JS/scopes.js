let a=5

if(true){
    let a=2
    console.log("Block Scope :" ,a); // block scope 2 braces k andr hi ata h 
    
}
console.log("Global Scope : " , a); // this is a global scope 

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}