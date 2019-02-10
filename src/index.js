import Navigo from 'navigo';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import homeController from './controllers/homeController';
import contactsController from './controllers/contactsController';

let el = $('#content');

const registerEventListeners = (controller) => {
  if (controller._registerEventListeners) {
    controller._registerEventListeners();
  }
};

const renderController = (controller) => {
  let html = controller.render();
  el.html(html);
};

let router = new Navigo(null, true, '#');

router.on('/', () => {
  renderController(homeController);
  registerEventListeners(homeController);
});

router.on('contacts/', () => {
  renderController(contactsController);
  registerEventListeners(contactsController);
});

router.resolve();