import { K as head, C as escape_html, E as bind_props, z as pop, x as push } from "../../chunks/index.js";
function _error($$payload, $$props) {
  push();
  let error = $$props["error"];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>404 - Page Not Found</title>`;
  });
  $$payload.out += `<main class="error-container svelte-1d6t5wa"><h1 class="svelte-1d6t5wa">Oops! Page Not Found</h1> <p>${escape_html(error?.message || "The page you're looking for does not exist.")}</p> <a href="/" class="back-home svelte-1d6t5wa">Go Back Home</a></main>`;
  bind_props($$props, { error });
  pop();
}
export {
  _error as default
};
