import { storeObject } from './store.js';
import { storeItem, loadAllItems } from './utilities.js';

const createTask = (task, title, priority, dueDate, description) => {
  // NOTE: Delete after development
  const id = '';
  // const id = crypto.randomUUID();
  const newTask = new task(id, title, priority, dueDate, description);

  // storeItem(id, {
  //   [id]: task.name,
  //   title: title,
  //   priority: priority,
  //   dueDate: dueDate,
  //   description: description,
  // });

  storeObject(newTask.info.id, {
    title: title,
    priority: priority,
    dueDate: dueDate,
    description: description,
  });

  return newTask;
};

const loadAllTasks = (taskClasses) => {
  // console.log(`taskClasses: ${taskClasses}`);
  loadAllItems(taskClasses, ['title', 'priority', 'dueDate', 'description']);
};

export { createTask, loadAllTasks };
