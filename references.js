var text="string";
var str=text;
text="welcome";
console.log(str);
//you might think that here str gets logged because str is assigned the value of text and text faces string change but this is not the case
//this is not the case because primitive values like numbers string and booleans in javascript are passed by value, so once the value is passed, another change referring to its address doesn't bring change once it is declared in terms of value 
var obj=obj2={x:10,y:10}
obj2.x=20;
console.log(obj.x);
//this gives 20 because even tho obj and obj2 are declared at the same time but obj2.x got a seperate value after their declaration, it still means that the value of obj2 will change because the value is passed by reference 
//reference means a link to the value where we are passing address
// also 
// we can pass object by value by uing simple statement like 
Object.create();
// here the parameter holds a value 