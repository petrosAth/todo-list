const storeObject = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const storeTaskList = (taskList) => {
  storeObject(taskList.info.id, taskList);
  taskList.info.tasks.forEach((task) => storeObject(task.info.id, task));
};

export { storeObject, storeTaskList };
