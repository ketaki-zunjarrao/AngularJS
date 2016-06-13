var Calculator = function (pname) {
    var name = pname;

    var doAdd = function (x, y) {
        console.log("in add method");
        return x + y;
    };

    var doSubtract = function (x, y) {
        console.log("in subtract method");
        return x - y;
    };

    return {
        add: doAdd,
        subtract: doSubtract,
        company: name
    }
};


function main() {
    var calc = new Calculator("Casio");
    console.dir(calc);
    console.log(calc.add(10, 20));
    console.log(calc.subtract(10, 5));
    console.log(calc.company);
}
//console.dir(main);
main.job = "devloper";
console.dir(main);