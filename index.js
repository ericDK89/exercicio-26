var multiply = function (a, b) {
    var result = a * b;
    console.log(result);
    return result;
};
var sayHello = function (name) {
    var result = "Ol\u00E1 ".concat(name);
    console.log(result);
    return result;
};
multiply(10, 5);
sayHello("Eric");
