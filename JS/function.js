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

const user ={
    username : "yash",
    price : " 55131"
}

function output(kuchbhi) {
    console.log(`User is ${kuchbhi.username} and the price is ${kuchbhi.price}`);
}

output(user)

