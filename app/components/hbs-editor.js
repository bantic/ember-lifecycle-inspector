import Component from "@ember/component";
import { observer, computed } from "@ember/object";
import Compiler from "npm:ember-source/dist/ember-template-compiler";
import { getOwner } from "@ember/application";
import { htmlSafe } from "@ember/string";

let compileCount = 0;

export default Component.extend({
  compiledTemplateName: null,

  compileTemplate: observer("templateHbs", function() {
    compileCount++;
    let templateHbs = this.get("templateHbs");
    if (!templateHbs) {
      return;
    }
    let template;
    try {
      template = Compiler.compile(templateHbs);
    } catch (e) {
      this.set("compileError", e);
      return;
    }

    // use a unique template name each time
    let templateName = `mytemplate${compileCount}`;
    getOwner(this).register(`template:${templateName}`, template);
    this.set("compiledTemplateName", templateName);
  }),

  style: computed("compileError", function() {
    let style;
    if (this.get("compileError")) {
      style = `outline: 5px solid red;`;
    } else {
      style = `outline: 5px solid black;`;
    }

    return htmlSafe(style);
  }),
});
