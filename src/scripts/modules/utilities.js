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

const loadItem = (itemsClasses, itemName, itemId, itemProps) => {
  const props = (key, propNames) => {
    const props = [];
    propNames.forEach((name) => {
      props.push(localStorage.getItem(`${key}-${name}`));
    });
    return props;
  };

  // new taskClasses[taskName](taskId, ...props(taskId, taskProps));
  const newTask = new itemsClasses[itemName](itemId, ...props(itemId, itemProps));
  console.log(newTask);
};

const loadAllItems = (itemClasses, itemProps) => {
  const itemIdsToLoad = findInStorage(itemClasses);
  for (const itemId in itemIdsToLoad) {
    if (Object.prototype.hasOwnProperty.call(itemIdsToLoad, itemId)) {
      loadItem(itemClasses, itemIdsToLoad[itemId], itemId, itemProps);
    }
  }
};

export { storeItem, loadAllItems };
