import { appendChildren } from '../modules/nodeUtils/element';
import header from './header';
import nav from './nav';
import main from './main';
import footer from './footer';

const app = () => {
  const app = document.querySelector('#app');

  appendChildren([[app, [header(), nav(), main(), footer()]]]);

  return app;
};

export default app;
