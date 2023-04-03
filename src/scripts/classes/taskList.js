class List {
  #id;
  constructor(name = 'New list', id) {
    this.name = name;
    const validUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    this.#id = validUuid.test(id) ? id : crypto.randomUUID();
    this.list = [];
  }
  get info() {
    return {
      id: this.#id,
      name: this.name,
      length: this.list.length,
      tasks: this.list,
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
    this.list.push(...[].concat(tasks));
    this.list.sort(this.#sortByDueDate);
    this.list.sort(this.#sortByPriority);
  }
  removeTask(taskId) {
    const taskIndex = this.list.findIndex((task) => task.info.id === taskId);
    this.list.splice(taskIndex, 1);
  }
}

export default List;
