//javascript is an object oriented programming language,ie it is based on the use of various properties and methods
// properties describe the characterstics of an object while methods describe the behaviour of an object
/*there are various types of objects in javascript some of them are:
functions 
arrays
etc 
now we deal with their characterstics and their functions or behaviour

purest of all objects ie object literal for eg:*/

var age { key1:value1,key2:value 2,key n :value n };
// this is the syntax of object literal ,here age is an object 
/*here we also know that functions and arrays are objects....
what is the difference between simple objects and other objects?
-->>simple objects are the most simple form of objects

simple objects come in handy when we have to store large number of data under a single roof for eg:
*/
var url ={
    protocol: "https:",
    domain: "codegauge.com",
    path: '/'
};
 //here a url for https:codegauge.com was created and it was kept in the same object umbrella called 'url'

 /*this object has three properties:
 1)protocol: which rulebook does url follow
 2)domain: what name replaces its ip address
 3)path:where actually are we in the sequence of programs ie home documents etc */

//  now we can access all of these by using '.'

url.protocol
//gives'https' as the value is set to that 

// we can also access this by  
url['protocol'];

// both are similar

var url={
    protocol:"https",
    domain:"www.codegague.com",
    path: "/",
    
    getURL: function(){
        return url.protocol+'://'+url.domain+url.path;
    }
};

//when we use this function we can access the url

//the url can be accessed by using

url.getURL();

