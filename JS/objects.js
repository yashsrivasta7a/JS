// singleton - koi bhi constructor se banate haii , dusri tareeke se banane pr multiple instances banega

// object literals

const Symvol = Symbol("Key1")
const user = {
name : "yash",
age : 19 ,
[Symvol] : "mykey1",
location : "gurgaon" ,
isLoggedIn: true,
LastLoginDay: ["Monday","Saturday"]

};
console.log(user["isLoggedIn"]);
console.log(user[Symvol]);
Object.freeze(user) // freeze the content so koi changes nhi hoenge

user.greeting = function (){
    console.log(" Hello User ");
}