import { appendChildren, createNewElement } from './element';

const create = (name, title, type) => {
  const listItem = createNewElement('li', {
    classes: ['list__item', 'list__item'],
    data: ['list', `${name}`],
  });
  const listItemLabel = createNewElement('button', {
    classes: ['list__item__label', 'button'],
    data: ['select', `${name}`],
  });
  const listItemLabelIcon = createNewElement('span', { classes: ['list__item__icon', `icon__${type || name}`] });
  const listItemLabelText = createNewElement(
    'span',
    { classes: 'list__item__text', id: 'label' },
    { text: `${title}` }
  );
  const listItemIndicators = createNewElement('span', { classes: 'list__item__indicators' });
  const listItemCount = createNewElement('span', { classes: ['list__item__count'], id: 'count' });
  const listItemEdit = type
    ? createNewElement('button', { classes: ['list__item__edit', 'button', 'icon__edit'], id: 'edit' })
    : null;
  const listItemDelete = type
    ? createNewElement('button', { classes: ['list__item__delete', 'button', 'icon__delete'], id: 'delete' })
    : null;

  appendChildren([
    [listItemLabel, [listItemLabelIcon, listItemLabelText]],
    [listItemIndicators, [listItemCount, listItemEdit, listItemDelete]],
    [listItem, [listItemLabel, listItemIndicators]],
  ]);

  if (type) {
    const parent = document.querySelector('#lists');
    appendChildren([[parent, listItem]]);
  } else {
    return listItem;
  }
};

const update = (uuid, id, value) => {
  const listItem = document.querySelector(`[data-list=${uuid}]`);
  const selector = {
    label: `.list__item__label>#${id}`,
    count: `.list__item__indicators>#${id}`,
  };
  listItem.querySelector(selector[id]).textContent = value;
};

export { create, update };
