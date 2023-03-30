class Task {
  #id;
  #status = false;
  constructor(id, title = 'New task', priority = 0) {
    const validUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    this.#id = validUuid.test(id) ? id : crypto.randomUUID();
    // localStorage.setItem(id, 'core');
    this.title = title;
    this.priority = priority;
  }
  get info() {
    return {
      id: this.#id,
      status: this.#status,
      title: this.title,
      priority: this.priority,
    };
  }
  statusComplete() {
    this.#status = true;
  }
  statusIncomplete() {
    this.#status = false;
  }
  statusToggle() {
    this.#status = this.#status ? false : true;
  }
}

class TaskExt extends Task {
  constructor(args, extra = { dueDate: '', description: '' }) {
    super(...[].concat(args));
    this.dueDate = extra.dueDate || '';
    this.description = extra.description || '';
  }
  get info() {
    return {
      id: super.info.id,
      status: super.info.status,
      title: super.info.title,
      priority: super.info.priority,
      dueDate: this.dueDate,
      description: this.description,
    };
  }
}

export { Task, TaskExt };
