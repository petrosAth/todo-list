import { storeObject, storeTaskList } from './store.js';
import loadMasterList from './load.js';

const masterList = () => {
  const masterList = [];
  const taskListIds = [];

  const _clearMasterList = () => masterList.splice(0, masterList.length);

  const _getListIndex = (taskListId) => masterList.findIndex((list) => list.info.id === taskListId);

  const _getTaskList = (taskListId) => masterList[_getListIndex(taskListId)];

  const createTask = (taskClass, id, title, priority, dueDate, description) => {
    return new taskClass(id, title, priority, dueDate, description);
  };

  const addTask = (taskListId, task) => {
    _getTaskList(taskListId).addTask(task);
    storeTaskList(_getTaskList(taskListId));
  };

  const removeTask = (taskListId, taskId) => {
    _getTaskList(taskListId).removeTask(taskId);
  };

  const _addTaskList = (listObject) => {
    masterList.push(listObject);
    taskListIds.push(listObject.info.id);
    storeObject('masterList', taskListIds);
  };

  const createTaskList = (listClass, listTitle, taskListId) => {
    const newTaskList = new listClass(listTitle, taskListId);
    _addTaskList(newTaskList);
    storeTaskList(newTaskList);
    return newTaskList;
  };

  const renameTaskList = (taskListId, listTitle) => {
    _getTaskList(taskListId).title = listTitle;
  };

  const load = (taskListClass, taskClasses) => {
    _clearMasterList();
    console.log('---'.repeat(30)); // NOTE: Debugging
    console.log(masterList); // NOTE: Debugging
    loadMasterList('masterList', createTaskList, taskListClass, createTask, taskClasses);
    console.log('---'.repeat(30)); // NOTE: Debugging
    console.log(masterList); // NOTE: Debugging
  };

  return {
    showAll: masterList,
    createTask,
    createTaskList,
    renameTaskList,
    addTask,
    removeTask,
    load,
  };
};

export { masterList };
