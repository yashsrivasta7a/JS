console.log("Print Command")
const accountId = 144553
let accountEmail = "ysyashmks@gmail.com" 
var accountPassword = "yash@8"
accountCity = "GGN"
let accountState
/*
Prefer using LET , dont use Var as block scope and functional scope will have issue
*/

// accountId = 2 // not allowed
accountEmail = "ad@gmail.com"
accountPassword = "yash@88"
accountCity = " delhi "

console.log(accountId);
console.table([accountEmail, accountId, accountState, accountPassword, accountCity]);