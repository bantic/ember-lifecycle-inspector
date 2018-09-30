import Service from "@ember/service";
import { guidFor } from "@ember/object/internals";

function nameFor(context) {
  let name = context.name;
  let str = `${context}`;
  if (name) {
    str = `${name} (${str})`;
  }
  return str;
}

export default Service.extend({
  init() {
    this._super(...arguments);
    this.events = [];
    this.components = [];
    this.componentMap = {};
  },

  record(eventName, component) {
    console.log(`${nameFor(component)}: ${eventName}`);

    let guid = guidFor(component);
    let event = {
      eventName,
      componentName: nameFor(component),
      guid: guidFor(component)
    };
    this.set('events', [...this.events, event]);

    let componentObj = this.componentMap[guid];
    if (!componentObj) {
      componentObj = {
        guid: guidFor(component),
        name: nameFor(component),
        activeEvent: null
      };

      this.set('components', [...this.components, componentObj]);
      this.componentMap[guid] = componentObj;
    }
  },
});
