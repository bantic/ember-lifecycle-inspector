import Component from '@ember/component';

const EVENT_NAMES = [
  'init',
  'didReceiveAttrs',
  'didInsertElement',
  'didUpdateAttrs',
  'willUpdate',
  'willRender',
  'didUpdate',
  'didRender',
  'willDestroyElement',
  'willClearRender',
  'didDestroyElement'
];


export default Component.extend({
  init() {
    this._super(...arguments);
    this.eventNames = [...EVENT_NAMES]
  }
});
