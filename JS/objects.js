// singleton - koi bhi constructor se banate haii , dusri tareeke se banane pr multiple instances banega

// object literals
// square brackets lagte h for calling and defining Symbol

const Symvol = Symbol("Key1")
const user = {
name : "yash",
age : 19 ,
[Symvol] : "mykey1",
location : "gurgaon" ,
isLoggedIn: true,
LastLoginDay: ["Monday","Saturday"]
};

// console.log(user["isLoggedIn"]);
// console.log(user[Symvol]); 

// Object.freeze(user) // freeze the content so koi changes nhi hoenge

user.Greeting = function(){
    console.log(" Hello User ");
} 
user.Greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
}
user.Greeting() , user.Greeting2()

const ob1 = {
    Y :"yash",
    S :"srivastava"
}
const ob2 = {
    W:"whats",
    U:"Yours"
} 
// const ob3 = Object.assign(ob1 , ob2) // combines object's values
// console.log(ob3);
// // or we can use 
// const ob3 = {...ob1 , ...ob2}

console.log(Object.values(ob1));
console.log(Object.entries(ob1));
console.log(Object.keys(ob1));
console.log(ob1.hasOwnProperty('Y')); // to check if some property or key is there or not 

const course = {
    courname : " js",
    courseprice : "861"
    , courseTeacher : " ys"
}

const { courseTeacher: namedediaNya } = course // destructure karida : lagakr nya naam dedia 
//destructure mei data extract karte haii

console.log(namedediaNya);