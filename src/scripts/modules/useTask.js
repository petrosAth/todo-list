import { Task, TaskExt } from '../classes/task';

const storeTask = (id, prop, value) => {
  const itemKey = value === undefined ? id : `${id}-${prop}`;
  const itemValue = value === undefined ? prop : value;

  localStorage.setItem(itemKey, itemValue);
};

const createTask = (task, title, priority, dueDate, description) => {
  const id = crypto.randomUUID();
  const newTask = new task(id, title, priority, dueDate, description);
  const props = {
    title: title,
    priority: priority,
    dueDate: dueDate,
    description: description,
  };

  storeTask(id, newTask.constructor.name);
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      if (props[key] !== undefined) {
        storeTask(id, key, props[key]);
      }
    }
  }
};

const getTask = (value, tasks = []) => {
  let taskClassName;
  tasks.forEach((task) => {
    const name = new RegExp(task);
    if (name.test(value)) {
      taskClassName = task;
    }
  });
  return taskClassName;
};

const loopTasks = (tasks = []) => {
  const tasksToLoad = {};
  for (const key in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      let value = localStorage.getItem(key);
      let taskName = getTask(value, tasks);
      if (taskName !== undefined) {
        tasksToLoad[key] = value;
      }
    }
  }
  return tasksToLoad;
};

const getRegExpFromClassName = (classes) => {
  const regExps = [];
  for (const key in classes) {
    if (Object.prototype.hasOwnProperty.call(classes, key)) {
      regExps.push(`${classes[key].name}$`);
    }
  }

  return regExps;
};

const loadTask = (taskClasses, tasksToLoad) => {
  const load = (key, propNames = []) => {
    const props = [];
    propNames.forEach((name) => {
      props.push(localStorage.getItem(`${key}-${name}`));
    });
    return props;
  };

  for (const key in tasksToLoad) {
    if (Object.prototype.hasOwnProperty.call(tasksToLoad, key)) {
      if (tasksToLoad[key] === 'Task') {
        const newTask = new taskClasses['Task'](key, ...load(key, ['title', 'priority']));
        console.log(newTask);
      } else if (tasksToLoad[key] === 'TaskExt') {
        const newTask = new taskClasses['TaskExt'](key, ...load(key, ['title', 'priority', 'dueDate', 'description']));
        console.log(newTask);
      }
    }
  }
};

const loadTasks = (taskClasses) => {
  const tasksToLoad = loopTasks(getRegExpFromClassName(taskClasses));
  loadTask(taskClasses, tasksToLoad);
};

export { createTask, loadTasks };
