import { storeItem, loadAllItems } from './utilities.js';

const createTask = (task, title, priority, dueDate, description) => {
  const id = crypto.randomUUID();
  const newTask = new task(id, title, priority, dueDate, description);
  // const taskProps = {
  //   [id]: task.name,
  //   title: title,
  //   priority: priority,
  //   dueDate: dueDate,
  //   description: description,
  // };

  storeItem(id, {
    [id]: task.name,
    title: title,
    priority: priority,
    dueDate: dueDate,
    description: description,
  });

  return newTask;
};

const loadAllTasks = (taskClasses) => {
  loadAllItems(taskClasses, ['title', 'priority', 'dueDate', 'description']);
};

export { createTask, loadAllTasks };
