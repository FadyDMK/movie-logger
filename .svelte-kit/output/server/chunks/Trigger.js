import { M as sanitize_props, N as rest_props, y as setContext, R as slot, E as bind_props, z as pop, x as push, S as store_set, T as getContext, O as spread_attributes, F as store_get, J as unsubscribe_stores, I as clsx } from "./index.js";
import { f as fallback } from "./equality.js";
import { w as writable } from "./index3.js";
const id = writable();
function Modal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "big",
    "fullscreen",
    "small",
    "button",
    "basic",
    "close"
  ]);
  push();
  let big = fallback($$props["big"], false);
  let fullscreen = fallback($$props["fullscreen"], false);
  let small = fallback($$props["small"], false);
  let button = fallback($$props["button"], true);
  let basic = fallback($$props["basic"], false);
  let close = fallback($$props["close"], false);
  setContext("modalId", Symbol());
  setContext("fullscreen", fullscreen);
  setContext("big", big);
  setContext("small", small);
  setContext("button", button);
  setContext("basic", basic);
  setContext("rest", $$restProps);
  {
    if (close) store_set(id, false);
  }
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  bind_props($$props, {
    big,
    fullscreen,
    small,
    button,
    basic,
    close
  });
  pop();
}
function Portal($$payload, $$props) {
  push();
  $$payload.out += `<template><div><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></template>`;
  pop();
}
function Content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  var $$store_subs;
  const modalId = getContext("modalId");
  const small = getContext("small");
  const big = getContext("big");
  const fullscreen = getContext("fullscreen");
  const button = getContext("button");
  const basic = getContext("basic");
  let rest = getContext("rest");
  const modalClass = rest.class;
  delete rest.class;
  let className = fallback($$props["class"], "");
  Portal($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div${spread_attributes(
        {
          class: `modal__container ${modalClass ? modalClass : ""}`,
          ...rest,
          role: "dialog"
        },
        "svelte-19gxchb",
        {
          hidden: modalId !== store_get($$store_subs ??= {}, "$id", id)
        }
      )}><div${spread_attributes(
        {
          class: `modal__content ${className ? className : ""}`,
          ...$$restProps
        },
        "svelte-19gxchb",
        {
          modal__fullscreen: fullscreen,
          modal__big: big,
          modal__basic: basic,
          modal__small: small
        }
      )}>`;
      if (button) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<button class="close__button svelte-19gxchb"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" stroke="currentColor" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></path><path stroke="#fff" stroke-linecap="round" d="M29.6569 18.3431L18.3432 29.6568"></path><path stroke="#fff" stroke-linecap="round" d="M18.3432 18.3431L29.6569 29.6568"></path></g></svg></button>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (modalId == store_get($$store_subs ??= {}, "$id", id)) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div></div>`;
    },
    $$slots: { default: true }
  });
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { class: className });
  pop();
}
function Trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], "");
  getContext("modalId");
  $$payload.out += `<span${spread_attributes(
    {
      role: "button",
      "aria-pressed": "false",
      class: clsx(className ? className : ""),
      ...$$restProps,
      tabindex: "0"
    },
    "svelte-1auwst5"
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></span>`;
  bind_props($$props, { class: className });
  pop();
}
export {
  Content as C,
  Modal as M,
  Trigger as T
};
