import homeTemplate from "./../views/home.handlebars";
import {someProcessing} from "../models/home";
import $ from 'jquery';

export default new class {
  _registerEventListeners() {
    $('button').on('click', () => {
      console.log('clicked');
    });
  };

  render() {
    someProcessing();

    return homeTemplate();
  }
}