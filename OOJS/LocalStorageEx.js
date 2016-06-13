var ClickCounter = (function () {

    var count = 0;

    var incrementCounter = function () {

        if (typeof (Storage) !== "undefined") {
            localStorage.count = Number(localStorage.count + 1);
            return localStorage.count;

        } else {
            return "sorry no support";
        }

    };

    return {

        increment: incrementCounter,

    }
})();

var catClicked = function () {
    console.log(ClickCounter);
    document.getElementById("count").innerHTML = "No. of Hits = " + ClickCounter.increment();
    console.log(ClickCounter);

};