//control statements are the code that determine the flow of the programm 
/*there are 2 types of control statements, one of them is:
conditional=conditional means submitting to a condition or a requirement
iterative=iterative constructs are responsible for loops,ie they evaluate the conditions and they re execute the code 

*/

var raining =true;

if(raining) alert("It is raining.");

//it is not necessary to write the statement with the if bracket but there is a symantic that has to be followed 

//in languages like the C language, we use {} in order to make the code more clear,we can do it in javascript too 
//in simple terms it's called mainstream convention 

// a pair of {} represents a block in any programming langauge

//if statements are used with relational operators
/*relational operators means 
>
<
= 
etc ,they are mostly used to compare 

for eg:*/

var image=true;

if(image==true){

    prompt("Is the image true?");
}
else{
    alert("You're making no sense");
}
/*there is another control statement called else,,,,,else has to be follwed by if,,,,,else statement is generally used to print code if the condition in if statement doesn't matches
 */

//switch statement 
var number =prompt("Enter the number:");
switch(number){
    case 1:
        document.write("The number is"+number);    
        break;

    default:
        break;

}
//you can use switch without break as it is not compulsory but not using it can completely change the output of the number
//look into code.html