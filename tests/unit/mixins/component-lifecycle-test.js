import EmberObject from '@ember/object';
import ComponentLifecycleMixin from 'lifecyle-inspector/mixins/component-lifecycle';
import { module, test } from 'qunit';

module('Unit | Mixin | component-lifecycle', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ComponentLifecycleObject = EmberObject.extend(ComponentLifecycleMixin);
    let subject = ComponentLifecycleObject.create();
    assert.ok(subject);
  });
});
