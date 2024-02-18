// Define a Task class to represent individual tasks
var Task = /** @class */ (function () {
    function Task(id, description, completed) {
        if (completed === void 0) { completed = false; }
        this.id = id;
        this.description = description;
        this.completed = completed;
        // Assign a unique ID to each task
        this.id = Task.nextId++;
    }
    Task.nextId = 1;
    return Task;
}());
// Define a class to manage the To-Do List
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    // Method to add a new task to the list
    TodoList.prototype.addTask = function (description) {
        var newTask = new Task(0, description);
        this.tasks.push(newTask);
        console.log("Task \"".concat(description, "\" added."));
    };
    // Method to mark a task as completed
    TodoList.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (task) { return task.id === id; });
        if (task) {
            task.completed = true;
            console.log("Task \"".concat(task.description, "\" marked as completed."));
        }
        else {
            console.log("Task with ID ".concat(id, " not found."));
        }
    };
    // Method to remove a task from the list
    TodoList.prototype.removeTask = function (id) {
        var index = this.tasks.findIndex(function (task) { return task.id === id; });
        if (index !== -1) {
            var removedTask = this.tasks.splice(index, 1)[0];
            console.log("Task \"".concat(removedTask.description, "\" removed."));
        }
        else {
            console.log("Task with ID ".concat(id, " not found."));
        }
    };
    // Method to display the current tasks in the list
    TodoList.prototype.displayTasks = function () {
        console.log("Tasks:");
        this.tasks.forEach(function (task) {
            var status = task.completed ? "[✓]" : "[ ]";
            console.log("".concat(status, " ").concat(task.description, " (ID: ").concat(task.id, ")"));
        });
    };
    return TodoList;
}());
// Create an instance of TodoList
var todoList = new TodoList();
// Add some initial tasks
todoList.addTask("Learn TypeScript");
todoList.addTask("Build a To-Do List app");
todoList.addTask("Practice coding");
// Display the current tasks
todoList.displayTasks();
// Mark a task as completed
todoList.completeTask(2);
// Remove a task
todoList.removeTask(1);
// Display the updated tasks
todoList.displayTasks();
