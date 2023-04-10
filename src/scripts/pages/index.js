import { appendChildren } from '../modules/nodeUtils/element';
import header from '../layout/header';
import nav from '../layout/nav';
import main from '../layout/main';
import footer from '../layout/footer';

const app = () => {
  const app = document.querySelector('#app');

  appendChildren([[app, [header(), nav(), main(), footer()]]]);

  return app;
};

export default app;
