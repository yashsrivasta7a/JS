let a=5

if(true){
    let a=2
    console.log("Block Scope :" ,a); // block scope 2 braces k andr hi ata h 
    
}
console.log("Global Scope : " , a); // this is a global scope 


function one(){
    const username = "Yash" 

    function two() 
    {
    const website = " YT"
    console.log(username);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "yash"
    if(username === "yash"){
        const website = " youtube "
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


function addon(value)
{
return ++value;
}

console.log(addon(5));

const addtwo = function(num){
    return num+2 ;
}
console.log( addtwo(5) );
