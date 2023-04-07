// import { storeTask } from './store.js';
import { storeItem, loadAllItems } from './utilities.js';

const createTask = (id, task, title, priority, dueDate, description) => {
  const newTask = new task(id, title, priority, dueDate, description);

  // storeItem(id, {
  //   [id]: task.name,
  //   title: title,
  //   priority: priority,
  //   dueDate: dueDate,
  //   description: description,
  // });

  // storeTask(newTask.info.id, {
  //   title: title,
  //   priority: priority,
  //   dueDate: dueDate,
  //   description: description,
  // });

  return newTask;
};

const loadAllTasks = (taskClasses) => {
  // console.log(`taskClasses: ${taskClasses}`);
  loadAllItems(taskClasses, ['title', 'priority', 'dueDate', 'description']);
};

export { createTask, loadAllTasks };
