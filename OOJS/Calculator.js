Calculator = (function () {

    var operation = {};
    var result = "";
    operation.displayNum = function (key, field) {
        result = result + key;
        document.getElementById(field).value = result;
    };

    operation.clearDisplay = function (field) {
        document.getElementById(field).value = "";
    };

    operation.answer = function (result, field) {
        document.getElementById(field).value = eval(result);
    };

    return operation;
})();