function testJSONParse() {
    var organizer = JSON.parse('{"id": "96b337e2-892d-4ae3-90f7-e29d4317681b",  "tenantId": "105","name": "GS Mktg labs", "description": "Techlbas"}');

    console.log(organizer);
    console.dir(organizer);
    console.log(organizer.id);
}

function testReturnJSON() {
    var exhibition = {
        id: 101,
        name: "Travel and Tourism",
        location: "Mumbai"
    };
    var jsonString = JSON.stringify(exhibition);
    console.log(jsonString);
    console.dir(jsonString);
}
//add();
subtract();

(function main() {
    //testJSONParse();
    //testReturnJSON();  
})();

//function statement
function add() {
    console.log("In add method");
}

//function expression
var subtract = function () {
    console.log("in subtract method");
}