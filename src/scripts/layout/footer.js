import { createNewElement, appendChildren } from '../modules/nodeUtils/element';

const footer = () => {
  const footer = createNewElement('footer', { classes: 'footer' });
  const footerCredentials = createNewElement('div', { classes: 'footer__credentials' });
  const credentialsText = createNewElement('span', { classes: 'credentials__text' }, { text: 'Developed with ♥ by ' });
  const credentialsLink = createNewElement(
    'a',
    { classes: 'credentials__link' },
    { text: 'petrosAth', link: 'https://github.com/petrosAth', newTab: true }
  );

  appendChildren([
    [footerCredentials, [credentialsText, credentialsLink]],
    [footer, footerCredentials],
  ]);

  return footer;
};

export default footer;
