// count object access by outside but need to private in scope
// const myCounter = {
//     count: 0,
//     increment: function() {
//         this.count += 1;
//     },
//     currentValue: function() {
//         return this.count;
//     }
// };

// closure helps to create private varible and can be shared to inner object functions
function createCounter() {
    var count = 0;
    return {
        increment: function() {
            count += 1;
        },
        currentValue: function() {
            return count;
        }
    };
}

var myCounter = createCounter();

console.log(myCounter.currentValue());

myCounter.increment();
myCounter.increment();

console.log(myCounter.currentValue());

// myCounter.count = 999; // this is no longer scope in outside

console.log(myCounter.currentValue());