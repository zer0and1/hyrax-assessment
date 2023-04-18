import { module, test } from 'qunit';
import { setupRenderingTest } from 'hyrax-assessment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-viewer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TestViewer />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <TestViewer>
        template block text
      </TestViewer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
