Chapter 03 
Functions

Functions are defined like regular binding, but this time the binding references to a function.
Functions are defined using the keyword functions, followed by parenthesis, parameters go between those parenthesis (parameters are optional), curly braces denote the function's body and the statements to be executed by the functions are inside those curly braces.

Functions may or may not define a return statement. The return statement within a function stops the function execution and jumps out of it, giving control back to its caller (whatever that called or invoked the function).

All functions return something implicitly, even the ones that have no return statement, they return undefined.

Functions can be defined in two flavors: Binding function and function declaration.
Binding functions is similar to binding variables, using either let or const keywords followed by the name that will reference the function, then equal sign and the keyword function along with the elements already defined.
Function declaration doesn't use binding approach, function keyword in function declaration is followed by its name and the next elements already defined are the same for binding functions and function declarations.

Binding functions must be binding prior to call, instead, function declarations may be defined after the sentence or program that calls it.

Ther is a third way of defined a function, it is using arrow notation. Those function definitions don't use the function keyword, instead use an arrow (=>) after the parenthesis of the function, if the arrow function just have one parameter it may remove parenthesis, and if the body function just have one return statement in the body, curly braces and return statement can be removed:

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

The call stack