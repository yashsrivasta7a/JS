// for of
const ar=[5,6,0];
const ob = {
    username:"yash"
    ,
    rollno:5
}
let obj = Object.keys(ob)
// for loop without condition and increment
for (const val of obj) {
    console.log(val);    
}
// 
const greeting = "hello Hello"
for (const greet of greeting) {
    if(greet == " "){
        continue;
    }
    else {
        console.log(`${greet}`);
    }
}



