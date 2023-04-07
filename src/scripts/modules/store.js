const storeObject = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const storeTaskList = (taskList) => {
  const tasks = [];
  taskList.info.tasks.forEach((task) => {
    tasks.push([ task.constructor.name.toLowerCase(), task.info.id ]);
    storeObject(task.info.id, task);
  });
  storeObject(taskList.info.id, { title: taskList.title, tasks: tasks });
};

export { storeObject, storeTaskList };
