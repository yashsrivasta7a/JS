const user = {
    username : "yash",
    age : 17 ,
    gender : "male" ,
    location : "gurugram" ,
    welcomeMessage : function() {
        console.log(` Hello ${this.username} , welcome to the website `); 
        // this creates the current context basically iss scope mei jo bhi h usko access krlega
        // console.log(this);
     }   
}
user.welcomeMessage()
user.username = "ys";      // ab hum dekhenge YS print hua quki humne THIS use kia toh wo current value ko print krra h na ki jo phle se h wo 
user.welcomeMessage()

// console.log(this);

// function chai(){
//     const user = " Yash "
//     console.log(this.user);        // function mei nahi chalega only object mei chlaega
// }

// chai()

// const chai = () => {
//     const user = " Yash "
//   console.log(this.user); 
// }

// chai()

// ++++++++++++++++++++++++ Explicit Return ARROW FN ++++++++++++++++++++

// const addition = (bum1,bum2) => {
//     return bum1 + bum2
// }
// console.log(addition(3,5));

// ++++++++++++++++++++++++ Implicit Return ARROW FN ++++++++++++++++++++

const addition = ( num2,num1 ) => ( num1+num2 ) // return likhne ki zruat ni hoti sirf paranthesis laga dete hai  
console.log(addition(5,6)); 


const myArray= [5,8,9,6,2,14]
