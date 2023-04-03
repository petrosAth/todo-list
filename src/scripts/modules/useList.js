import { storeItem, loadAllItems } from './utilities.js';

const masterList = () => {
  const masterList = [];

  const _getListIndex = (id) => {
    return masterList.findIndex((list) => list.info.id === id);
  };

  const _add = (listObject) => {
    masterList.push(listObject);
  };

  const create = (listClass, title, id) => {
    const newList = new listClass(title, id);
    _add(newList);
    storeItem(newList.info.id, {
      [newList.info.id]: listClass.name,
      title: newList.info.name,
    });
  };

  const rename = (id, title) => {
    masterList[_getListIndex(id)].name = title;
  };

  const addTask = (listId, task) => {
    masterList[_getListIndex(listId)].addTask(task);
  };

  const removeTask = (listId, taskId) => {
    masterList[_getListIndex(listId)].removeTask(taskId);
  };

  return {
    showAll: masterList,
    create,
    rename,
    addTask,
    removeTask,
  };
};

const loadAllLists = (listClasses) => {
  loadAllItems(listClasses, ['title']);
};

export { loadAllLists, masterList };
