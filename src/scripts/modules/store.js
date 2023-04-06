const storeList = (name, listProps) => {
  localStorage.setItem(name, JSON.stringify(listProps));
};

const storeObject = (id, objectProps) => {
  for (const prop in objectProps) {
    if (Object.prototype.hasOwnProperty.call(objectProps, prop)) {
      localStorage.setItem(id, JSON.stringify(objectProps));
    }
  }
};

export { storeList, storeObject };
