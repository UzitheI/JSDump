//a function is a block of code which gets executed when called,functions are normally created outside the main function and whenever they are called while passing certain parameters in the main function, they execute themselves bringing a change in the main program 

// in javascript functions can be either named or anonymous 

// eg:

function workout(a,b){
    return a+b;
}
//this is an example of a function 

//to call a function we simply :
 workout(c,d);
//  here c and d act as the function parameter inside the main function 

//more examples

function printwrite(){
    var name=prompt("Enter your name:");
    document.write("Your name is "+name+".Welcome to the program.");
}

//this will first take the prompt and then print your name and welcome you to the program when they are called..a major advantage of function is that it can be called as many times as you want making the code reusable 

// a parameter is what we call a value that is being passed inside the function's () and an argument is the actual value 

//the return keyword is used to return the value of the function 

//the return is expression 

// ie in the function workout we return a+b using parameters a and b 


/*functions are similar to variables,so they must abide by the naming principle that is followed by other variables


multiple parameters and multiple arguments are differentiated by help of commas

*/

function logsum(a,b){
    console.log(a+b);
    //here we can see that parameters and arguments are similar to each other ie first parameter has the same value as the first argument
}
//if the number of parameters and arguments mismatch, javascript would not throw an error but the remaining arguments have 
//adding a number in these spaces returns naN in these log spaces


function fun(a,b) {
    if(a==undefined ||b==undefined){
        console.log("The function requires more parameters\n");
}
    else{
        console.log(a+b);
    }
}fun();fun(2);fun(2,3);
// VM516:3 The function requires more parameters

// VM516:3 The function requires more parameters

// VM516:6 5
/*as we can see, passing incomplete parameters can be tackled by using following measures */

//sometimes undefined can be used to call a function
function gotti(undefined,undefined);
gotti();
//function requires 2 parameters


//return can be now used to determine what result the function gives

// sum(a,b){
    console.log(a+b);
    return;
    //return a+b;

//here return can be used to return the sum of a and b
//return can also be used for its exit functionality which means that as soon as the program hits return,the function is exited so it should be made with consideration 






























//a function is a block of code that can be executed whenever they are called

/*a function is really important because it makes code less redundant ie we can use code many times,that saves time and increases readability,,,,another major use of function is to improve understanding and make better division of labour and at the end of the day,,functions are extremely useful to make programming understandable for everyone */

//how to write a function in javascript

function functionName(){
    document.write("kakka");
}
//this is how you write a function in javascript

//the whole block of the function code is stored in a memory block and it remains dormant there until the function is called to be executed
//a function can be called by:
functionName();
//here parameters are to be entered inside the function to execute the code

// example of taking an input of a user and prompting it back using function

function input(){
    var info=prompt("Are you gay?");
    alert(info);
}
input();
//this calls the function and they can be called again and again  

//variables are


