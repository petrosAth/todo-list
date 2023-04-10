import { createNewElement, appendChildren } from '../modules/nodeUtils/element';
import * as listNode from '../modules/nodeUtils/list';

const nav = () => {
  const nav = createNewElement('nav', { classes: 'nav' });

  // List of builtin lists based on date or importance
  const listsBuiltin = createNewElement('div', { classes: 'list' });
  const listsBuiltinBody = createNewElement('ul', { classes: 'list__body' });

  // Builtin list of tasks due today
  const listItemToday = listNode.create('today', 'Today');
  // Builtin list of tasks due in some point in the future
  const listItemUpcoming = listNode.create('upcoming', 'Upcoming');
  // Builtin list of most important tasks
  const listItemImportant = listNode.create('important', 'Important');

  // List of user lists
  const listsUser = createNewElement('div', { classes: 'list' });
  const listsUserTitle = createNewElement('h2', { classes: 'list__title' }, { text: 'Lists' });
  const listsUserBody = createNewElement('ul', { classes: 'list__body', id: 'lists' });
  const listsUserAddList = createNewElement('button', { classes: ['list__add', 'button'] }, { text: '+' });

  appendChildren([
    [listsBuiltinBody, [listItemToday, listItemUpcoming, listItemImportant]],
    [listsBuiltin, listsBuiltinBody],
    [listsUser, [listsUserTitle, listsUserBody, listsUserAddList]],
    [nav, [listsBuiltin, listsUser]],
  ]);

  return nav;
};

export default nav;
