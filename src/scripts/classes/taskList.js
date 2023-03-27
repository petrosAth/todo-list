class TaskList {
  #tasks = [];
  addTask(task) {
    this.#tasks.push(task);
  }
  get tasks() {
    return this.#tasks;
  }
}

export default TaskList;
