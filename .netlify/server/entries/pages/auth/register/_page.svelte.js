import { B as attr, G as attr_class, C as escape_html, E as bind_props, z as pop, x as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let form = $$props["form"];
  $$payload.out += `<div class="container svelte-1gfpmi1"><h1 class="title svelte-1gfpmi1">Create an account</h1> <h3>Already have an account? <a href="/auth/login">Log in</a></h3> <form method="POST" action="?/signup"><div class="form-item svelte-1gfpmi1"><label for="username" class="svelte-1gfpmi1">Username<sup><small class="svelte-1gfpmi1">*</small></sup></label> <input type="text" id="username" name="username" required${attr("value", form?.username ?? "")}${attr_class("svelte-1gfpmi1", void 0, { "fieldError": form?.usernameUsed })}></div> <div class="form-item svelte-1gfpmi1"><label for="password" class="svelte-1gfpmi1">Password<sup><small class="svelte-1gfpmi1">*</small></sup></label> <input type="password" id="password" name="password" required${attr_class("svelte-1gfpmi1", void 0, { "fieldError": form?.weakPassword })}></div> <div class="field-item svelte-1gfpmi1">`;
  if (form?.error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<small class="svelte-1gfpmi1">${escape_html(form?.message)}</small>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="form-item svelte-1gfpmi1"><button type="submit" class="svelte-1gfpmi1">Register</button></div></form></div>`;
  bind_props($$props, { form });
  pop();
}
export {
  _page as default
};
