import { storeItem, loadAllItems } from './utilities.js';

const createList = (list, title) => {
  const id = crypto.randomUUID();
  const newList = new list(title, id);

  storeItem(id, {
    [id]: list.name,
    title: title,
  });

  return newList;
};

export { createList };
