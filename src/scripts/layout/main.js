import { createNewElement, appendChildren } from '../modules/nodeUtils/element';

const main = () => {
  const main = createNewElement('main', { classes: 'main' });
  const tasks = createNewElement('div', { classes: 'tasks' });
  const addTask = createNewElement('button', { classes: ['tasks__add', 'button'] });

  appendChildren([[main, [tasks, addTask]]]);

  return main;
};

export default main;
