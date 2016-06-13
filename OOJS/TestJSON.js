function testSingleJSON() {
    var student = {
        id: 100,
        name: "Ketaki",
        job: "Devloper"
    };

    console.log(student.id);
    console.log(student.name);
    console.log(student.job);

}

function testArrayJSON() {

    var student = [{
            id: 100,
            name: "Ketaki",
            job: "Devloper"
    },

        {
            id: 101,
            name: "Nikhil",
            job: "Devloper"
     }];

    for (var i in student) {
        var id = student[i].id;
        var name = student[i].name;

        console.log(id);
        console.log(name);
    }


}
(function main() {
    testSingleJSON();
    testArrayJSON();
})();