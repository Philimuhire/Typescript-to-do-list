// Define a Task class to represent individual tasks
class Task {
    private static nextId = 1;
  
    constructor(public id: number, public description: string, public completed: boolean = false) {
      // Assign a unique ID to each task
      this.id = Task.nextId++;
    }
  }
  
  // Define a class to manage the To-Do List
  class TodoList {
    private tasks: Task[] = [];
  
    // Method to add a new task to the list
    addTask(description: string): void {
      const newTask = new Task(0, description);
      this.tasks.push(newTask);
      console.log(`Task "${description}" added.`);
    }
  
    // Method to mark a task as completed
    completeTask(id: number): void {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
        console.log(`Task "${task.description}" marked as completed.`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    }
  
    // Method to remove a task from the list
    removeTask(id: number): void {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        const removedTask = this.tasks.splice(index, 1)[0];
        console.log(`Task "${removedTask.description}" removed.`);
      } else {
        console.log(`Task with ID ${id} not found.`);
      }
    }
  
    // Method to display the current tasks in the list
    displayTasks(): void {
      console.log("Tasks:");
      this.tasks.forEach(task => {
        const status = task.completed ? "[✓]" : "[ ]";
        console.log(`${status} ${task.description} (ID: ${task.id})`);
      });
    }
  }
  
  // Create an instance of TodoList
  const todoList = new TodoList();
  
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
  