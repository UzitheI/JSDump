//conditional element and iteration work hand in hand,,,they are the basis of modern programming,,,,,iteration is when we write a piece of code with a stopping condition and then the computer executes the condition until another condition is met 
/*javascript provides 2 types of iteration functions 
they are:
1)FOR LOOP
2)WHILE LOOP

*/

var i;
for(i=0;i<4;i++){
    document.write(i);
}
//here the program will run until i reaches 3 and continuously prints the value of i from 0 to 3 

// i++ is called a postfix increment operator and the i is also known as the counter variable and the middle statement is called the stopping condition ,ie the condition stops when the value of i is equals to or greater than 4 

//we can also declare the counter variable inside the loop

//it is necessary to group while writing ie 
document.write("The expression is"+(a+1));
// we cant write it as:
document.write("The expression is"+a+1);
//remember these will give 2 different ouptuts


var nums = [1, 3, 5];

for (var i = 0; i < nums.length; i++) {
   console.log(nums[i]);
}


// ..this is how the items of an array can be accesed using a for loop

var lang=["c++","python","c"];for(var i=0;i<lang.length;i++){console.log("The language present is"+lang[i]);console.log("/n");}

//strings can also be used like numbers in for loop in javascript 

// the result here will be 
// the language present is c++
/*the language present is python 
the language present is c


another method is while loop 

its functionality is similar to for loop but it is semantically different,,while loop at first checks the condition and then only decides on the iteration



*/
var i=0;
while(i<4){
    document.write(i);
    i++;
}

//here the program starts with intializing i and then write the condition inside the parameter of while loop and then we write the statement inside the while loop and then use the change factorie i++
var lang=prompt("Enter your name:");

while(!lang){
    alert("invalid input");
    lang=prompt("Enter your name");
}
document.write("Your name is"+lang);

//here ! checks the boolean expression !lang returns true if lang is falsey i.e has a value that coerces into the Boolean false. This happens if it is an empty string ('') or the value null.


//the !lang returns true when the condition is met and then then the loop is exited


