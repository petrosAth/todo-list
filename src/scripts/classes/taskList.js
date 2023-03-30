class List {
  #name;
  #list = [];
  constructor(name = 'New list') {
    this.#name = name;
  }
  set setName(name) {
    this.#name = name;
  }
  set addTask(task) {
    this.#list.push(task);
  }
  get info() {
    return {
      name: this.#name,
      length: this.#list.length,
      tasks: this.#list,
    };
  }
}

export { List };
