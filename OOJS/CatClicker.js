var ClickCounter = (function () {

    var count = 0;

    var incrementCounter = function () {
        count = count + 1;
        return count;
    };

    return {

        increment: incrementCounter,
    }
})();

var catClicked = function (field) {
    console.log(ClickCounter);
    document.getElementById(field).innerHTML = "No. of Hits = " + ClickCounter.increment();
    console.log(ClickCounter);
};