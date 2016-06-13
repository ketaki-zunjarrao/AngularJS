    var parent = document.querySelectorAll(".sample");

    for (var i = 0; i < parent.length; i++) {
        var child = parent[i];
        child.addEventListener("click", doSomething, true);
    }

    function doSomething(e) {
        console.log(e.currentTarget.id);
    }