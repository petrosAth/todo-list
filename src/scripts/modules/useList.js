import { findValidStoredObjects, loadAllItems, loadAllObjects } from './utilities.js';
import List from '../classes/taskList.js';
import { storeList, storeObject } from './store.js';

const listOfLists = () => {
  const listOfLists = [];
  const listIds = [];

  const _getListIndex = (listId) => {
    return listOfLists.findIndex((list) => list.info.id === listId);
  };

  const _getList = (listId) => {
    return listOfLists[_getListIndex(listId)];
  };

  const _storeListOfLists = () => {
    storeList('listOfLists', listIds);
  };

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
    listOfLists.push(listObject);
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
    // console.log(
    //   listOfLists[_getListIndex(listId)].info.id,
    //   listOfLists[_getListIndex(listId)].constructor.name,
    //   listOfLists[_getListIndex(listId)].info.title
    // );
    _storeList(_getList(listId).info.id, _getList(listId).info.title);
  };

  const removeTask = (listId, taskId) => {
    _getList(listId).removeTask(taskId);
  };

  return {
    showAll: listOfLists,
    create,
    rename,
    addTask,
    removeTask,
  };
};

const loadAllLists = () => {
  const objectsToLoad = findValidStoredObjects([List]);
  // console.log(objectsToLoad);
  objectsToLoad.forEach((object) => {
    const loadedList = new List(object.object.title, object.id);
    // console.log(`object.object.title: ${object.object.title}`);
    // console.log(`object.id: ${object.id}`);
    // console.log(loadedList);
  });
};

export { listOfLists, loadAllLists };
