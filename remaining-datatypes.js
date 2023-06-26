//until now we've only created variables without giving much thought into their return type
/*so the typeof function will be used to determine the return type of any variable 
typeof returns the data type of any variable in the form of string 

to make it easy*/
var a=4;
typeof a ;
//this returns 'number' denoting that it is a number 

var c='humble';
//this returns 'string'

// whenever we write
typeof null;
//we get 'object'

//backward compatibility-->it is the ability of programs to adapt with its previous versions 

//when null returns 'object' it is an official bug and it can't be replaced because many programs have already used null as object returning data type//////this bug is hence preserved for backward compatibility 

//we can build a reasoning that null is directing towards an empty pointer and whenever we are dealing with pointers we are dealing with objects

// when we use typeof in the array it also returns object
// array can be called as an object becasue it points to the direction of the first element and not the first element itself,,,,,and we know that anything that points to the data at the memory is an object 

// everything in javascript except primitives are objects and hence when used typeof returns object which makes it easier to understand the difference between primitives and objects 

// we can also differentiate whether an array is pure array or not

/*functions are also objects but they are the only objects which return function when used typeof */
typeof age();

// returns function 


// functions are callable objects in javascript thats why they are given a seperate return type of functions






/*For every primitive, except for null, typeof returns a string containing the name of its type.
For every object, except for a function, typeof returns 'object'.
For null, typeof returns 'object'.
For a function, typeof returns 'function' */






//typeof makes things easy because typeof