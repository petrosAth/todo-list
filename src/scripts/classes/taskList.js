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
  addTask(tasks) {
    this.list.push(...[].concat(tasks));
  }
  removeTask(taskId) {
    const taskIndex = this.list.findIndex((task) => task.info.id === taskId);
    this.list.splice(taskIndex, 1);
  }
}

export { List };
