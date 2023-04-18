import Route from '@ember/routing/route';
import mock from 'hyrax-assessment/mock/data.json';

export default class ApplicationRoute extends Route {
  model() {
    console.log(mock.data);
    return {
      samples: mock.data.relationships.samples.data,
      tests: mock.included.filter((item) => item.type == "sample"),
      calls: mock.included.filter((item) => item.type == 'drug-call-result')
    };
  }
}
