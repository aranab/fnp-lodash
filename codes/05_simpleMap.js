// Typical procedural way 
//
// var numbers = [ 1, 2, 3, 4, 5 ];
// var numbersCubed = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     numbersCubed.push(element * element * element);    
// }

var _ = require("lodash");

var numbers = [ 1, 2, 3, 4, 5 ];
var numbersCubed = _.map(numbers, function(element) {
    return element * element * element;
});

console.log(numbersCubed);
