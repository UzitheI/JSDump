//number methods is responsible for working with numbers
/*to precison rounds the numbers */
4.323.toPrecision(2);
55 .toPrecision(3);
// will return 
'55.0';
//there is a space between 55 and . because it is to avoid the compiler to parse the . as a number

//this will convert the number to string and then it will increase the precision by rounding it off to the lowest possible value as directed
//the above statement will give the answer 4.3 as it reduces the 2 numbers 

// if the precision is less than the number then the answer will be in exponential form 

121 .toPrecision(1);
//the answer will be in precision

//another such function is to fixed function,,, to fixed is used in order to round of a given number to its closest possible value 
// for eg:
// if you want to convert 
// 1.289 to 1.29, then we can use the function 
1.2819.toFixed(0);
// -->1
1.289.toFixed(1);
// -->1.2
1.289.toFixed(2);
//-->1.23
1.289.toFixed(3);
//-->1.284


//this is used to convert the number only to decimal values, used widely in sales industry


//to exponential 

134 .toExponential(3);
//this will convert the value of the number to the exponential 

//finally, what if we want to convert the base 2 number to base 8, then we can use to string function
//to string function is mostly used to convert numbers into strings

1343 .toString(2);
//this will convert 1343 to base 2 
44 .toString(2);
'101100'







