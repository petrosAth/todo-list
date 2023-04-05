import format from 'date-fns/format';
import parse from 'date-fns/parse';

const dateFormat = () => {
  const dateFormat = "yyyy-MM-dd'T'H:mm";

  const toString = (dateArray) => {
    if (Array.isArray(dateArray)) {
      return format(new Date(...dateArray), dateFormat);
    }
    return;
  };

  const toDate = (dateString) => {
    return parse(dateString, dateFormat, new Date());
  };

  return {
    toString,
    toDate,
  };
};

const storeItem = (id, itemProps) => {
  for (const prop in itemProps) {
    if (Object.prototype.hasOwnProperty.call(itemProps, prop)) {
      if (itemProps[prop] !== undefined) {
        let storedPropName = prop === id ? id : `${id}-${prop}`;
        localStorage.setItem(storedPropName, itemProps[prop]);
      }
    }
  }
};

const storeObject = (id, itemProps) => {
  for (const prop in itemProps) {
    if (Object.prototype.hasOwnProperty.call(itemProps, prop)) {
      localStorage.setItem(id, JSON.stringify(itemProps));
    }
  }
};

const createRegExpsFromClassName = (classes) => {
  const regExps = [];
  for (const className in classes) {
    if (Object.prototype.hasOwnProperty.call(classes, className)) {
      regExps.push(`^${className}$`);
    }
  }
  return regExps;
};

const getItemClassName = (value, classNamesArray) => {
  let itemClassName;
  classNamesArray.forEach((className) => {
    const name = new RegExp(className);
    if (name.test(value)) {
      itemClassName = className;
    }
  });
  return itemClassName;
};

const findInStorage = (classes) => {
  console.log(classes);
  const tasksToLoad = {};
  for (const key in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
      let value = localStorage.getItem(key);
      let itemClassName = getItemClassName(value, createRegExpsFromClassName(classes));
      if (itemClassName !== undefined) {
        tasksToLoad[key] = value;
      }
    }
  }
  return tasksToLoad;
};

const findValidStoredObjects = (objectClasses) => {
  const objectsToLoad = [];
  for (const id in localStorage) {
    if (Object.prototype.hasOwnProperty.call(localStorage, id)) {
      const potentialObjectStringified = localStorage.getItem(id);
      const potentialObject = JSON.parse(potentialObjectStringified);
      // for (const objectClass in objectClasses) {
      //   if (Object.prototype.hasOwnProperty.call(objectClasses, objectClass)) {
      //     objectsToLoad.push({ id: id, object: potentialObject });
      //   }
      // }
      objectClasses.forEach((objectClass) => {
        if (objectClass.name === potentialObject.type) {
          objectsToLoad.push({ id: id, object: potentialObject });
        }
      });
    }
  }
  return objectsToLoad;
};

const loadItem = (itemsClasses, itemName, itemId, itemProps) => {
  const props = (key, propNames) => {
    const props = [];
    propNames.forEach((name) => {
      props.push(localStorage.getItem(`${key}-${name}`));
    });
    return props;
  };

  // new taskClasses[taskName](taskId, ...props(taskId, taskProps));
  const newItem = new itemsClasses[itemName](itemId, ...props(itemId, itemProps));
  console.log(newItem);

  // if (['Task', 'TaskExt'].includes(itemName)) {
  //   // new taskClasses[taskName](taskId, ...props(taskId, taskProps));
  //   // const newTask = new itemsClasses[itemName](itemId, ...props(itemId, itemProps));
  //   // console.log(newTask);
  //
  //   // createTask(itemsClasses[itemName], ...props(itemId, itemProps));
  //   // const newTask = createTask(itemsClasses[itemName], ...props(itemId, itemProps));
  //   // console.log(newTask);
  // }

  // if (['List'].includes(itemName)) {
  //   const newList = createList(itemsClasses[itemName], ...props(itemId, itemProps));
  //   console.log(newList);
  // }
};

const loadObject = (object, objectClasses) => {
  // const newObject = new objectClasses[object.object.type](object.object.title, object.id);
  // console.log(newObject);
  // console.log(`object.object.type: ${object.object.type}`);
  // console.log(`objectClasses: ${objectClasses.constructor.name}`);

  // console.log(
  //   `object.id: ${object.id} | object.object.type: ${object.object.type} | object.object.title: ${object.object.title} `
  // );
  return;
};

const loadAllItems = (itemClasses, itemProps) => {
  const itemIdsToLoad = findInStorage(itemClasses);
  console.log(`itemIdsToLoad: ${itemIdsToLoad}`);
  for (const itemId in itemIdsToLoad) {
    if (Object.prototype.hasOwnProperty.call(itemIdsToLoad, itemId)) {
      loadItem(itemClasses, itemIdsToLoad[itemId], itemId, itemProps);
    }
  }
};

const loadAllObjects = (objectClasses) => {
  const objectsToLoad = findValidStoredObjects(objectClasses);
  // for (const objectId in objectIdsToLoad) {
  //   if (Object.prototype.hasOwnProperty.call(objectIdsToLoad, objectId)) {
  //     loadObject(objectId);
  //   }
  // }
  objectsToLoad.forEach((object) => {
    // console.log(object, objectClasses);
    console.log(objectClasses);
    loadObject(object, objectClasses);
  });
};

export { dateFormat, findValidStoredObjects, storeItem, storeObject, loadAllItems, loadAllObjects };
