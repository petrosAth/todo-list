import { createNewElement, appendChildren } from '../modules/nodeUtils/element';

const main = () => {
  const main = createNewElement('main', { classes: 'main' });
  const tasks = createNewElement('div', { classes: 'tasks' }); // DEBUG: change id to classes
  const addTask = createNewElement('button', { classes: ['tasks__add', 'button'] }, { text: '+' });

  appendChildren([[main, [tasks, addTask]]]);

  return main;
};

export default main;
