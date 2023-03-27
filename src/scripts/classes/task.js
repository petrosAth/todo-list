import TaskList from './taskList';

class Task {
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

class TaskWithProps extends Task {
  #dueDate;
  #priority;
  constructor(title, props) {
    super(title, props.description);
    this.#dueDate = props.dueDate || '';
    this.#priority = props.priority || 0;
    this.subTasks = new TaskList();
  }
  set setDueDate(dueDate) {
    this.#dueDate = dueDate;
  }
  set setPriority(priority = 0) {
    this.#priority = priority;
  }
  get info() {
    return {
      status: super.info.status,
      title: super.info.title,
      description: super.info.description,
      dueDate: this.#dueDate,
      priority: this.#priority,
    };
  }
}

export { Task, TaskWithProps };
