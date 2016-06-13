var Task = function (id, name, priority) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.isComplete = false;
};

Task.prototype.doTask = function () {
    console.log("Task completed");
    this.isCompleted = true;
};
Task.prototype.saveTask = function () {
    console.log("Task saved on local storage");
};


(function main() {
    var task1 = new Task(101, "Meeting", 1);
    var task2 = new Task(102, "Mail to client", 2);
    console.log(task1);
    task1.doTask();
    task1.saveTask();
    console.log(task2);
    task2.doTask();
    task2.saveTask();
})();