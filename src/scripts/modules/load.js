const loadObject = (objectId) => JSON.parse(localStorage.getItem(objectId));

const loadTask = (task, createTaskFn, taskClasses) => {
  const loadedTask = () => {
    const taskProps = [];
    Object.values(loadObject(task[1])).forEach((value) => {
      taskProps.push(value);
    });
    return taskProps;
  };
  return createTaskFn(taskClasses[task[0]], task[1], ...loadedTask());
};

const loadTaskList = (taskListId, createTaskListFn, taskListClass, createTaskFn, taskClasses) => {
  const loadedTaskList = loadObject(taskListId);
  const createdLoadedTaskList = createTaskListFn(taskListClass, loadedTaskList.title, taskListId);
  loadedTaskList.tasks.forEach((loadedTask) => {
    createdLoadedTaskList.addTask(loadTask(loadedTask, createTaskFn, taskClasses));
  });
};

const loadMasterList = (masterListName, createTaskListFn, taskListClass, createTaskFn, taskClasses) => {
  const masterList = loadObject(masterListName);
  if (masterList) {
    masterList.forEach((taskListId) => {
      loadTaskList(taskListId, createTaskListFn, taskListClass, createTaskFn, taskClasses);
    });
  }
};

export default loadMasterList;
