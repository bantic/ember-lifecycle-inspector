import Mixin from "@ember/object/mixin";
import { inject as service } from "@ember/service";

export default Mixin.create({
  lifecycle: service(),

  init() {
    this._super(...arguments);
    this.get("lifecycle").record("init", this);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.get("lifecycle").record("didReceiveAttrs", this);
  },

  willRender() {
    this._super(...arguments);
    this.get("lifecycle").record("willRender", this);
  },

  didInsertElement() {
    this._super(...arguments);
    this.get("lifecycle").record("didInsertElement", this);
  },

  didRender() {
    this._super(...arguments);
    this.get("lifecycle").record("didRender", this);
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.get("lifecycle").record("didUpdateAttrs", this);
  },

  willUpdate() {
    this._super(...arguments);
    this.get("lifecycle").record("willUpdate", this);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get("lifecycle").record("willDestroyElement", this);
  },

  willClearRender() {
    this._super(...arguments);
    this.get("lifecycle").record("willClearRender", this);
  },

  didDestroyElement() {
    this._super(...arguments);
    this.get("lifecycle").record("didDestroyElement", this);
  }
});
