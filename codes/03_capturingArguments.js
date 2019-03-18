function createCounter(count) {
    return {
        increment: function() {
            count += 1;
        },
        currentValue: function() {
            return count;
        }
    };
}

var counterStartingAt5 = createCounter(5);
console.log(counterStartingAt5.currentValue());
counterStartingAt5.increment();
counterStartingAt5.increment();
console.log(counterStartingAt5.currentValue());

var countStartingAtMinus2 = createCounter(-2);
console.log(countStartingAtMinus2.currentValue());
countStartingAtMinus2.increment();
countStartingAtMinus2.increment();
console.log(countStartingAtMinus2.currentValue());