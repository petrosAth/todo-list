import { dateFormat } from '../modules/utilities';

class Task {
  #id;
  #status = false;
  constructor(id, title = 'New task', priority = 0) {
    const validUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    this.#id = validUuid.test(id) ? id : crypto.randomUUID();
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
  constructor(id, title, priority, dueDate, description) {
    super(id, title, priority);
    this.dueDate = dateFormat().toString(dueDate);
    this.description = description;
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
