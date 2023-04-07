import List from '../classes/taskList';

const loadObject = (objectId) => JSON.parse(localStorage.getItem(objectId));

const loadTask = (task) => {
  console.log('Create loaded task ' + '---'.repeat(15));
  console.log(task);
};

const createLoadedTaskList = (createFn, listId) => {
  const loadedList = loadObject(listId);
  // console.log('listToLoad.tasks' + '---'.repeat(15));
  // console.log(listToLoad.tasks);
  // createLoadedTask(loadedList.list);
  loadedList.list.forEach((task) => loadTask(task));
  return createFn(List, loadedList.title, listId);
};

export { loadObject, createLoadedTaskList };
