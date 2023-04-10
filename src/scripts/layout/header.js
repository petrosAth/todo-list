import { createNewElement, appendChildren } from '../modules/nodeUtils/element';

const header = () => {
  const header = createNewElement('header', { classes: 'header' });
  const menuToggle = createNewElement('button', { classes: ['menu-toggle', 'icon__menu', 'button'] }, { text: '=' });
  const pageTitle = createNewElement('div', { classes: 'page-title' });
  const pageTitleIcon = createNewElement('span', { classes: ['page-title__icon', 'icon__todo'] }, { text: 'i' });
  const pageTitleTitle = createNewElement('h1', { classes: 'page-title__title' }, { text: 'ToDo' });

  appendChildren([
    [pageTitle, [pageTitleIcon, pageTitleTitle]],
    [header, [menuToggle, pageTitle]],
  ]);

  return header;
};

export default header;
