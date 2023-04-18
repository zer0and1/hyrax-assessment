import Component from '@glimmer/component';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavigationComponent extends Component {
  @tracked selectedId = '001';

  @action
  handleNavigate(id) {
    this.selectedId = id;
  }
}
