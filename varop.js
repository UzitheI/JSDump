var x =10;
document.write(x+4);
console.log(x+4);
//initialization is when we declare a variable and give it a value instantly 
//assigning is when we have already initialized a value and now we are only giving the variable a value or changing its value


//a variable not only stores a new value but it can also store strings
var greetings= "Hellow World";
console.log(greegings);
//this will now print greetins ie hellow world in the console




// a browser also provides an option of dialogue boxes....dialogue boxes work to provide user with input functions and also provide user with alerts
//there are 3 types of alert functions:
/*alert()=alert as the name suggests provides alerts in the form of prompts



synchronous execution=synchronous execution means execution of activities in a code in a pre determined manner 
eg_ you cannot do anything inside a website before clearing the prompt created by alert


function usage
just like C functions require parameters,,these parameters are in italic denoting a requirement to be filled

we might have to denote sometimes that the message that we are providing inside the function alert() is not important or optional one way to do that would be*/

alert();
//without writing anything

//but there is a more convenient way to do thing and that would be
var msg="plz click ok";

alert([msg]);
//[] this shows that the msg option is optional






confirm();

//alert and confirm are similar in case of their initialization 
// the only difference between them is that confirm() option provides the user with an option to ok and cancel while alert() only provides ok option  eg---

confirm(msg);


// every function must have a return type that is every function when given a parameter gives a certain value 

// in case of functions like alert() the return type is undefined

/* but it is slightly different for confirm() as confirm deals its return type in yes or no or in boolean values


the third is 
*/
prompt();

/*prompt is similar to confirm and alert but the key difference is with prompt we can also take user inputs
thats why with the message we also set a default value, that default value is what we enter in the prompt

*/

prompt([msg[defaultvalue]]);
//the outer [] shows that both msg and default value are optional and the inner [] shows that the default value is optional

var age =prompt('What is your age?');
//this first shows the dialoge 'what is your age' and then takes an input age

document.write("you are"+age+"years old");
//this is used to take the age taken from the prompt and then show it in the website

/**here the prompt always takes data in string ie you can enter anything when asked in the prompt but it is required to enter the string in the number that's why we use conversion character



we use
 */
Number(age);

//this function is used to convert the string into a number 

//we can also use 

Number('my name is janet');
//this will now convert the whole string into a number ///////here the output will be Nan(which stands for not a number because, technically this string is not a number, it is a string, thats why it cant be parsed)

/*code readability
this makes the code more readable//////best way to make a code legible or human understandable is to use formatting option 
very familiar with this*/




