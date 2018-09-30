import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';

export default Component.extend({
  lifecycle: service(),
  events: reads('lifecycle.events'),
  components: reads('lifecycle.components'),
  eventIndex: 0,

  currentEvent: null,

  actions: {
    playOne() {
      if (this.get('eventIndex') >= this.get('events.length')){
        return;
      }
      let event = this.get('events').objectAt(this.get('eventIndex'));
      this.set('currentEvent', event);
      this.incrementProperty('eventIndex');
    }
  }
});
