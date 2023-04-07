import { findValidStoredObjects, loadAllItems, loadAllObjects } from './utilities.js';
import { storeObject, storeTaskList } from './store.js';
import { loadObject, createLoadedTaskList } from './load.js';

const masterList = () => {
  const masterList = [];
  const listIds = [];

  const _clearMasterList = () => masterList.splice(0, masterList.length);

  const _getListIndex = (listId) => {
    return masterList.findIndex((list) => list.info.id === listId);
  };

  const _getList = (listId) => masterList[_getListIndex(listId)];

  const createTask = (id, task, title, priority, dueDate, description) => {
    return new task(id, title, priority, dueDate, description);
  };

  const _add = (listObject) => {
    masterList.push(listObject);
    listIds.push(listObject.info.id);
    storeObject('masterList', listIds);
  };

  const createTaskList = (listClass, listTitle, listId) => {
    const newList = new listClass(listTitle, listId);
    _add(newList);
    // taskList().store(newList);
    storeTaskList(newList);
    return newList;
  };

  const rename = (listId, listTitle) => {
    _getList(listId).title = listTitle;
  };

  const addTask = (listId, task) => {
    _getList(listId).addTask(task);
    storeTaskList(_getList(listId));
  };

  const removeTask = (listId, taskId) => {
    _getList(listId).removeTask(taskId);
  };

  const loadListsAndTasks = () => {
    const loadMasterList = () => {
      _clearMasterList();
      console.log('---'.repeat(30)); // NOTE: Debugging
      console.log(masterList); // NOTE: Debugging
      const listsToLoad = loadObject('masterList');
      if (listsToLoad) {
        listsToLoad.forEach((listId) => createLoadedTaskList(createTaskList, listId));
      }
      console.log('---'.repeat(30)); // NOTE: Debugging
      console.log(masterList); // NOTE: Debugging
    };

    return loadMasterList;
  };

  return {
    showAll: masterList,
    createTask,
    createTaskList,
    rename,
    addTask,
    removeTask,
    loadAll: loadListsAndTasks,
  };
};

export { masterList };
