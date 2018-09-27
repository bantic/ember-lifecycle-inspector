import Service from "@ember/service";

function nameFor(context) {
  let name = context.name;
  let str = `${context}`;
  if (name) {
    str = `${name} (${str})`;
  }
  return str;
}

export default Service.extend({
  record(hookName, context) {
    console.log(`${nameFor(context)}: ${hookName}`);
  }
});
