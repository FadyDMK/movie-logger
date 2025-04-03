import { B as attr, C as escape_html, E as bind_props, z as pop, x as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let form = $$props["form"];
  $$payload.out += `<div class="container svelte-4n26ns"><h1 class="title svelte-4n26ns">Login To Your Account</h1> <h3>Don't have an account? <a href="/auth/register">Click here!</a></h3> <form method="POST" action="?/login"><div class="form-item svelte-4n26ns"><label for="username" class="svelte-4n26ns">Username<sup><small class="svelte-4n26ns">*</small></sup></label> <input type="text" id="username" name="username" required${attr("value", form?.username ?? "")} class="svelte-4n26ns"></div> <div class="form-item svelte-4n26ns"><label for="password" class="svelte-4n26ns">Password<sup><small class="svelte-4n26ns">*</small></sup></label> <input type="password" id="password" name="password" required class="svelte-4n26ns"></div> <div class="field-item svelte-4n26ns">`;
  if (form?.error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<small class="svelte-4n26ns">${escape_html(form?.message)}</small>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="form-item svelte-4n26ns"><button type="submit" class="svelte-4n26ns">Login</button></div></form></div>`;
  bind_props($$props, { form });
  pop();
}
export {
  _page as default
};
