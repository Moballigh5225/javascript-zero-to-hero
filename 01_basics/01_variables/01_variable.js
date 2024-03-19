const  city  = " bengaluru";
let country = "india";
var state = "delhi";
shaheenbagh = "noida";

console.table([city,country,state,shaheenbagh])

/* prefer not to use var 
because of issue in block scope and functional scope

Function Scope: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.
*/