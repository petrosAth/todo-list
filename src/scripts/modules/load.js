import List from '../classes/taskList';

const parseObject = (objectId) => JSON.parse(localStorage.getItem(objectId));

const loadTask = (taskList) => {
  taskList.forEach((task) => {
    console.log(`Create loaded task: ${task}`);
  });
};

const loadList = (createFn, listId) => {
  const listToLoad = parseObject(listId);
  createFn(List, listToLoad.title, listId);
};

export { parseObject, loadList, loadTask };
