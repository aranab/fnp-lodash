# Overview
This is functional programming concept exploring with lodash js

 1. [lodash](https://lodash.com/): Run `> npm install --save lodash`
 2. [eslint](https://eslint.org/)

 ### What is funcational programming?
  - Keeps functions and data separate
  - Avoids state change and mutable data
  - Treats functions as first-class citizens
    - First class functions give us the ability to both pass functions as arguments to other functions and to return functions.

## First-Class Functions

### Assigning functions to variables:
 - Basic Syntax
   ```javascript
   const greet = function() {
     console.log("hello");
   }
   ```
   ```javascript
   const square = function(x) {
     return x * x;
   }
   ```
   ```javascript
   called by: 
   greet(); // "hello"
   square(5); // 25
   ```
 - With parentheses
   ```javascript
   var threeSquared = square(3);
   threeSquared; // 9
   ```
 - Without parentheses
   ```javascript
   var anotherSquare = square;
   anotherSquare(3); // 9
   ```
 - NOTE: Once we get into passing functions as arguments and returning them from other functions, we will see that the ability to dynamically assign different functions at runtime can be a huge benefit, both in terms of flexibility and readability.

### Passing functions as arguments:
 - Javascript let's us do just that by allowing us to pass functions as arguments.
   ```javascript
   function combine4and7(someFunction) {
     return someFunction(4, 7);
   }
   ```
 - There is a very common pattern in Javascript called anonymous functions. An anonymous function is just a function without a name.

### Closure and returning functions:
 - Basic Syntax
   ```javascript
    function giveMeAFunction() {
        return function() {
            console.log("I'm a function.");
        }
    }

    const aFunction = giveMeAFunction();
    aFunction(); // prints "I'm a function."
   ```
 - Calling 2nd level function
   ```javascript
    giveMeAFunction()(); // prints "I'm a function."

    function giveMeAFunction() {
        return function() { // level 1
            console.log("I'm a function."); // level 2
        }
    }
   ```
 - Calling 3rd level function
   ```javascript
    giveMeAFunctionThatGivesMeAFunction()()(); // prints "I'm a function."

    function giveMeAFunctionThatGivesMeAFunction() {
        return function() { // level 1
            return function() { // level 2
                console.log("I'm a function."); // level 3
            }        
        }
    }
   ```
 - Named Functions
  ```javascript
    function giveMeAFunction() {
        function printSomething() {
            console.log("I'm a function;");
        }

        return printSomething;
    }

    const aFunction = giveMeAFunction();
    aFunction(); // prints "I'm a function;"
  ```
 - Returning Multiple Functions
  ```javascript
    function return2Functions() {
        return {
            function1: function() {
                console.log("I'm the first function!");
            },
            function2: function() {
                console.log("I'm the second function!");
            }
        };
    }

    var twoFunctions = return2Functions();
    twoFunctions.function1(); // prints "I'm the first function!"
    twoFunctions.function2(); // prints "I'm the second function!"
  ```
 - The ability to return functions leads us back to a very important concept in JavaScript. The concept of scope. As we may know, normal variable in JavaScript are function scoped, meaning that variables defined within a function are available only within the opening and closing brackets of that function. When returning functions, this scope has some interesting implications. If we take a look at below code snippet, we can see that even though the function printValueOfX is outside the scope where x was defined, it still has access to x. The culprit here is a concept called, closure. Here we say that the function printValueOfX captures the variable x.
   ```javascript
    function someFunction() {
        var x = 5;
        return function() {
            console.log("x is " + x); // captures
        };
    }

    var printValueOfX = someFunction();
    printValueOfX(); // prints "x is 5"
   ```

### Higher-Order Functions:
 - A function that takes a function as an argument, returns a function, or both. These kind of functions are called higher-order functions because, in contrast with basic functions, which work with just data, these functions work with other functions as well.

## Array Functions

### Mapping:
 - Map is used when we want to take all the elements in an array and convert them to some other value.
 - Lodash map function:
   ```javascript
   const anotherArray = _.map(originalArray, f);
   const anotherArray = _.map(originalArray, function(element) { return ...});
   ```
 - ***Important Note: _.map() does not change the original array. It only return a copy.***

### Filtering:
 - Filter is used when we want only the elements in an array that fits some kind of criteria. The syntax of filter is similar to map. The only difference is that instead of passing at function that returns value for each element in an array, we pass at a function that returns either **true or false** for each element. If the function that we pass returns true for a given element, then that element is included in the final array. Otherwise, it's left out.
 - Lodash filter function:
   ```javascript
   const anotherArray = _.filter(originalArray, f);
   const anotherArray = _.filter(originalArray, function(element) { return true; // (or false) });
   ```

## License
 Single license MIT 