const age = 18;
if (age === 18 || age >= 18){
    console.log("You're Eligible");
}
else{
    console.log("You're not Eligible");
}

const val = "+";
switch(val){
    case "+" :
        console.log("It is addition ");
        break;

    case "- ":
        console.log("It is substraction");
}

// Falsy Value - 
// FALSE , 0 , -0 , BigInt 0n , "" , NULL , NaN, undefined 


// Truthy Value
// "0" , ' false ', " " , [],{},function(){}

Array = [5]

if (Array.length === 0 ){
    console.log("Array is empty ")
}


const emp ={}
if(Object.keys(emp).length === 0){ // converts object into array 

}