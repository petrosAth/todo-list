import { findValidStoredObjects, loadAllItems, loadAllObjects } from './utilities.js';
import { storeList, storeObject } from './store.js';
import { parseObject, loadList, loadTask } from './load.js';

const masterList = () => {
  const masterList = [];
  const listIds = [];

  const _clearMasterList = () => masterList.splice(0, masterList.length);

  const _getListIndex = (listId) => {
    return masterList.findIndex((list) => list.info.id === listId);
  };

  const _getList = (listId) => masterList[_getListIndex(listId)];

  const _storeListOfLists = () => storeList('masterList', listIds);

  const _storeList = (listId, listTitle) => {
    const listTasks = [];
    _getList(listId).info.tasks.forEach((task) => {
      listTasks.push({ [task.constructor.name]: task.info.id });
    });
    storeObject(listId, {
      title: listTitle,
      tasks: listTasks,
    });
  };

  const _add = (listObject) => {
    masterList.push(listObject);
    listIds.push(listObject.info.id);
    _storeListOfLists();
  };

  const create = (listClass, listTitle, listId) => {
    const newList = new listClass(listTitle, listId);
    _add(newList);
    _storeList(newList.info.id, newList.info.title);
  };

  const rename = (listId, listTitle) => {
    _getList(listId).title = listTitle;
  };

  const addTask = (listId, task) => {
    _getList(listId).addTask(task);
    _storeList(_getList(listId).info.id, _getList(listId).info.title);
  };

  const removeTask = (listId, taskId) => {
    _getList(listId).removeTask(taskId);
  };

  const loadListsAndTasks = () => {
    const loadMasterList = () => {
      _clearMasterList();
      console.log('---'.repeat(30)); // NOTE: Debugging
      console.log(masterList); // NOTE: Debugging
      const listsToLoad = parseObject('masterList');
      if (listsToLoad) {
        listsToLoad.forEach((listId) => {
          loadList(create, listId);
          loadTask(_getList(listId).info.tasks);
        });
      }
      console.log('---'.repeat(30)); // NOTE: Debugging
      console.log(masterList); // NOTE: Debugging
    };

    return loadMasterList;
  };

  return {
    showAll: masterList,
    create,
    rename,
    addTask,
    removeTask,
    loadListsAndTasks,
  };
};

export { masterList };
