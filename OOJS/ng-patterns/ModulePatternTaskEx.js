var Task = function (id, name, priority) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.isComplete = false;

    var doTask = function () {
        console.log("Task completed");
        // this.isCompleted = true;
        return "Task Completed";
    };
    var saveTask = function () {
        console.log("Task saved on local storage");
        return "Task Saved";
    };

    return {
        do: doTask,
        save: saveTask
    }
};


(function main() {
    var task1 = new Task(101, "Meeting", 1);
    var task2 = new Task(102, "Mail to client",
    console.log(task1);
    task1.do();
    task1.save();
    console.log(task2);
    task2.do();
    task2.save();
})();