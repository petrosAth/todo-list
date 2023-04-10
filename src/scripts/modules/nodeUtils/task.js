import { createNewElement, appendChildren } from './element';

const create = (title, dueDate) => {
  const tasks = document.querySelector('.tasks');
  const tasksItem = createNewElement('div', { classes: 'tasks__item' });

  // Task status
  const itemStatusButton = createNewElement('button', { classes: ['item__status', 'button'] });
  const itemStatusIcon = createNewElement('span', { classes: ['status__icon', 'icon__status'] }, { text: 'O' }); // TODO: replace text with icon

  // Task details
  const itemDetails = createNewElement('div', { classes: 'item__details' });
  const itemTitle = createNewElement('h3', { classes: 'item__title' }, { text: `${title}` });
  const itemDueDate = createNewElement('span', { classes: 'item__dueDate' });
  const dueDateDateIcon = createNewElement('span', { classes: ['dueDate__date__icon', 'icon__date'] }, { text: 'D' });
  const dueDateDateText = createNewElement('span', { classes: 'dueDate__date__text' }, { text: `${dueDate.date}` });
  const dueDateTimeIcon = createNewElement('span', { classes: ['dueDate__time__icon', 'icon__time'] }, { text: 'T' });
  const dueDateTimeText = createNewElement('span', { classes: 'dueDate__time__text' }, { text: `${dueDate.time}` });

  // Task description
  const itemDescription = createNewElement('div', { classes: ['item__description', 'button'] });
  const descriptionText = createNewElement('span', { classes: 'description__text' }, { text: 'Details' });
  const descriptionIcon = createNewElement(
    'span',
    { classes: ['description__icon', 'icon__description'] },
    { text: 'V' }
  ); // TODO: add actual description text

  // Task edit button
  const itemEdit = createNewElement('button', { classes: ['item__edit', 'icon__edit', 'button'] }, { text: '$' }); // TODO: replace text with icon

  // Task delete button
  const itemDelete = createNewElement('button', { classes: ['item__delete', 'icon__delete', 'button'] }, { text: '#' }); // TODO: replace text with icon

  appendChildren([
    [itemStatusButton, itemStatusIcon],
    [itemDueDate, [dueDateDateIcon, dueDateDateText, dueDateTimeIcon, dueDateTimeText]],
    [itemDetails, [itemTitle, itemDueDate]],
    [itemDescription, [descriptionText, descriptionIcon]],
    [tasksItem, [itemStatusButton, itemDetails, itemDescription, itemEdit, itemDelete]],
    [tasks, tasksItem],
  ]);
};

const update = () => {
  return;
};

export { create, update };
