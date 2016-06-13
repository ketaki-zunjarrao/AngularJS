var Calculator = function () {

    return {
        add: function (x, y) {
            console.log("in add method");
            return x + y;
        },
        subtract: function (x, y) {
            console.log("in subtract method");
            return x - y;
        }
    }
};


(function main() {
    var calc = new Calculator();
    console.dir(calc);
    console.log(calc.add(10, 20));
    console.log(calc.subtract(10, 5));
})();