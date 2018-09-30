import { helper } from '@ember/component/helper';

export function isActiveEvent([currentEvent, component, eventName]/*, hash*/) {
  if (!currentEvent) { return; }
  if (currentEvent.guid === component.guid) {
    if (eventName === currentEvent.eventName) {
      return true;
    }
  }
}

export default helper(isActiveEvent);
