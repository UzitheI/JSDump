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


