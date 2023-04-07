class TaskList {
  #id;
  constructor(title = 'New list', id) {
    this.title = title;
    const validUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    this.#id = validUuid.test(id) ? id : crypto.randomUUID();
    this.taskList = [];
  }
  get info() {
    return {
      id: this.#id,
      title: this.title,
      length: this.taskList.length,
      tasks: this.taskList,
    };
  }
  #sortByDueDate(taskA, taskB) {
    if (taskA.dueDate < taskB.dueDate) return 1;
    if (taskA.dueDate < taskB.dueDate) return -1;
    return 0;
  }
  #sortByPriority(taskA, taskB) {
    if (taskA.priority < taskB.priority) return 1;
    if (taskA.priority > taskB.priority) return -1;
    return 0;
  }
  addTask(tasks) {
    this.taskList.push(...[].concat(tasks));
    this.taskList.sort(this.#sortByDueDate);
    this.taskList.sort(this.#sortByPriority);
  }
  removeTask(taskId) {
    const taskIndex = this.taskList.findIndex((task) => task.info.id === taskId);
    this.taskList.splice(taskIndex, 1);
  }
}

export default TaskList;
