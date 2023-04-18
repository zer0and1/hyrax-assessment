import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  isSidebarExpanded = false;
  items = [];
  selectedItemId = 'none';
  selectedTest = null;
  selectedTestCalls = null;
  keyword = "";

  @action
  handleExpandNavigation() {
    this.toggleProperty('isSidebarExpanded');
  }

  @action
  handleSelectItem(id) {
    const selectedTest = this.model.tests.find((test) => test.id == id);
    const selectedTestCalls = this.model.calls.find((call) => call.id == id);
    this.set('selectedItemId', id);
    this.set('selectedTest', selectedTest);
    this.set('selectedTestCalls', selectedTestCalls);
  }

  @action
  handleKeywordChange(event) {
    this.set('keyword', event.target.value);
    this.set('items', this.model.samples.filter((sample) => sample.id.contains(this.keyword)))
  }

  @action
  handleKeywordReset() {
    this.set('keyword', '');
  }
}
