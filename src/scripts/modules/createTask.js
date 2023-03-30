const storeTask = (id, prop, value) => {
  const itemKey = value === undefined ? id : `${id}-${prop}`;
  const itemValue = value === undefined ? prop : value;

  localStorage.setItem(itemKey, itemValue);
};

const createTask = (task, title, priority, dueDate, description) => {
  const id = crypto.randomUUID();
  const newTask = new task(id, title, priority, dueDate, description);
  const props = {
    title: title,
    priority: priority,
    dueDate: dueDate,
    description: description,
  };

  storeTask(id, newTask.constructor.name);
  for (const key in props) {
    if (props[key] !== undefined) {
      storeTask(id, key, props[key]);
    }
  }
};

export default createTask;
