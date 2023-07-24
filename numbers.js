//we dont have to declare int and float seperately in javascript like in other languages
//javascript treats both of these numbers like they are numbers so we can basically use

var a=Number(prompt("enter a number:"));
//by this we can only accept number value from the user if we know that the values we are going to receive are in numbers


//number primitives and objects
//primitives are values with no methods or values attaches
/*javascript has a number of primitives:
numbers
strings
booleans
undefined
null 

we will only discuss numbers

number primitives are numerical values which doesn't have any properties or methods that are attached to it

basic arithmetic operations like addition,substraction and multiplication can be done in these numeric literals

//literals are constants and a number is constant*/
var x=45;
//here x has become an primitive integer literal because a literal integer has been assigned to it 


typeof 45;
//returns number because the value is a number
//the name of the primitive is a number


new Number(x);
//here we called a function Number,this makes it a numeric object and since we used new with it, it has now become a constructor

var x=new Number(x);
// it logs Number{0} which indicates that numbers with no specific value is automatically assigned a value 0

// here if we use typeof the value returned here should be object because we know that objects when returned gives the type object

//here it is not necessary to use 
new Number(x);
// matter of fact  it is similar to writing;
number=x;
// so why do we use this, we use this because a primitive cannot have methdos and properties assosciated with them,this makes it impossible to work with this value but thats where the number function converts it into object and after being converted into object, they can be accessed 

x.toString();
// if we have 10 it converts it into '10'
// here 10 couldn't be accessed withour converting into a object Number(10) but js does it automatically for us,,thats why its important to know how these underlying mechanisms work 

//another concept is floor and ceil function
//floor function takes a float number and returns it highest item ie
// floor(10.099) gives 10
//ceil(10.099 gives) 11 as it gives the highest value 

//in javascript we can write scientific notations by using an 
// e tag 

// mantissa*base^exponent
// for eg:
1e3
// gives 1000

Number.MAX_VALUE
//this helps to access the largest possible value that can be written in javascript 
//also strings can be converted into numbers using 
Number('50');
// -->50
// but when we pass 
Number('50a')
// -->NaN
/*here Nan stands for Not a number as 50a cannot be converted into a number 

sometimes a number cant be parsed by the javascript engine for example*/
Number('40px');
//-->Nan
/*such type of values are required when we are using CSS values, so here we require another function to parse this kind of value */
parseInt(String[,radix]);
// is its syntax and parse int is used to write a string into number


//the unary + operator can also be used to convert a string into an integer

+'50';
// -->50
// so we can use the unary operator as well, it is simply making use of the null pointer as it is considering it to be 0

// we have special numbers Nan and infinity, Nan stands for not a number and infinity stands for anything above
Number.MAX_VALUE

//we can check for special numbers using 2 functions, ie 
isNaN();
// and 
isFinite();

eg:
isFinite(2);
true;
isNaN(3);
false;
//this is the primal use of these functions


