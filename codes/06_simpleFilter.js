// Typical procedural way 
//
// var numbers = [ 1, 2, 3, 4, 5 ];
// var evensFromNumbers = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element % 2 === 0) {
//         evensFromNumbers.push(element);    
//     }    
// }

var _ = require("lodash");

var numbers = [ 1, 2, 3, 4, 5 ];
var evensFromNumbers = _.filter(numbers, function(element) {
    return (element % 2 == 0);
});

console.log(evensFromNumbers);
