function ys(a,b){
console.log(a+b); 
}

ys(1,2) 

function name(usernamee){
    if(!usernamee){
        console.log("Invalid Username");
    return
}
return `${usernamee} just logged in` }
console.log(name("YS"));


function cartPrice(...num){ //Rest operator use kia toh bht saare elemenet dal skte
    return num
}

console.log(cartPrice(200,222,424,1313));