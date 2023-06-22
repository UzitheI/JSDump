//there is a strict mode that js provides us which can be initialized by using 

'strict mode'

//this above string enables the strict mode,,,,this strict mode is used because javascript doesn't show any form of error signs when there are syntax errors,,,,this can be avoided by using the strict mode 
// for eg 

var handsome;
minerals;
carwas;


// here we have made an error of not giving var infront of variables but js might not show any errors that's why we enable strict mode 

//there are other things like rules for declaring variable etc that are universal and pretty similar to C,,,,,
/*snake casing=ujjwal_puri
camel casing=ujjwalPuri 
pascal casing=UjjwalPuri 
screaming snake casing=UJJWAL_PURI 

these are methods to name a variable,,,,it is not scientific and purely preferential


CHECKING FOR VARIABLES EXISTENCE 

1)USING TYPEOF

*/

var x=10;
console(typeof x !== undefined);

//the answer will be true showing that the variable exists

/*VARIABLE HOISTING

VARIABLE Hoisting is a concept in javascript where if you decide that the variable needs to be hoisted then we can make use of that variable before declaring it 

for eg:*/

str="hoisting";
console.log(str);
var str;
//here the chronology seems messed but it is actually ok because of using the hoisting function in javascript 


//LET keyword

//it is a newer method of describing a variable and it was introduced recently 

let x=4;
let y=5;
console.log(x+y);

//this will give the value 9


// the only difference between var and let is let variables can't be hoisted 

//temporal dead zone=it is the reason before the declaration of a variable where we cannot access that variable 

//the use of let and var is purely preferential in the code,,,there is no performance issue caused by one or the other 


//there are constants as well whose values cannot be changed or redeclared once they are assigned in the program 


//and there are comments as well 


