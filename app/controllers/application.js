import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  isSidebarExpanded = false
  selectedItemId = 'none'
  selectedTest = {}


  @action
  handleExpandNavigation() {
    this.toggleProperty('isSidebarExpanded');
  }

  @action
  handleSelectItem(id) {
    const selectedTest = this.model.tests.find((test) => test.id == id);
    this.set('selectedItemId', id);
    this.set('selectedTest', selectedTest);
  }

}
