function callWith2Arguments(arg1, arg2, func) {
    return func(arg1, arg2);
}

callWith2Arguments(1, 2, add);
callWith2Arguments(9, 4, substract);

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

// Anonymous functions
callWith2Arguments(2, 4, function(x, y) {
    return x * x + y * y;
});
