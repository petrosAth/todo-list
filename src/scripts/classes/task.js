class TaskCore {
  #status = false;
  #title;
  #description;
  constructor(title, description = '') {
    this.#title = title;
    this.#description = description;
  }
  set setTitle(title) {
    this.#title = title;
  }
  set setDescription(description) {
    this.#description = description;
  }
  get info() {
    return {
      status: this.#status,
      title: this.#title,
      description: this.#description,
    };
  }
  toggleStatus() {
    this.#status = this.#status ? false : true;
  }
}

class Task extends TaskCore {
  #dueDate;
  #priority;
  #subTasks = [];
  constructor(title, props) {
    super(title, props.description);
    this.#dueDate = props.dueDate || '';
    this.#priority = props.priority || 0;
  }
  set setDueDate(dueDate) {
    this.#dueDate = dueDate;
  }
  set setPriority(priority = 0) {
    this.#priority = priority;
  }
  addSubTask(subtask) {
    this.#subTasks.push(subtask);
  }
  get getSubTasks() {
    return this.#subTasks;
  }
  get info() {
    return {
      status: super.info.status,
      title: super.info.title,
      description: super.info.description,
      dueDate: this.#dueDate,
      priority: this.#priority,
      subTasks: this.#subTasks,
    };
  }
}

export { TaskCore, Task };
