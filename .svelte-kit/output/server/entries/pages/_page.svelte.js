import { M as sanitize_props, N as rest_props, A as ensure_array_like, O as spread_attributes, E as bind_props, z as pop, x as push, P as attr_style, Q as stringify, C as escape_html, B as attr, F as store_get, J as unsubscribe_stores } from "../../chunks/index.js";
import "../../chunks/client.js";
import { f as fallback } from "../../chunks/equality.js";
/* empty css                                                   */
import { i as isAuthed, u as user } from "../../chunks/stores.js";
const InformationCircle = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.75 8a.75.75 0 0 0 0 1.5h.75v1.75a.75.75 0 0 0 1.5 0v-2.5A.75.75 0 0 0 8.25 8h-1.5Z", "clip-rule": "evenodd" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z", "clip-rule": "evenodd" }] } };
const Plus = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M12 4.5v15m7.5-7.5h-15" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z", "clip-rule": "evenodd" }] } };
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["src", "size", "solid", "mini", "micro"]);
  push();
  let icon;
  let src = $$props["src"];
  let size = fallback($$props["size"], "100%");
  let solid = fallback($$props["solid"], false);
  let mini = fallback($$props["mini"], false);
  let micro = fallback($$props["micro"], false);
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  icon = src?.[solid ? "solid" : mini ? "mini" : micro ? "micro" : "default"];
  const each_array = ensure_array_like(icon?.path ?? []);
  $$payload.out += `<svg${spread_attributes(
    {
      ...icon?.a,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      "aria-hidden": "true",
      ...$$restProps
    },
    null,
    void 0,
    void 0,
    3
  )}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let a = each_array[$$index];
    $$payload.out += `<path${spread_attributes({ ...a }, null, void 0, void 0, 3)}></path>`;
  }
  $$payload.out += `<!--]--></svg>`;
  bind_props($$props, { src, size, solid, mini, micro });
  pop();
}
function MovieCard($$payload, $$props) {
  push();
  let data = $$props["data"];
  const each_array = ensure_array_like([2.5, 5, 7.5, 10]);
  $$payload.out += `<div class="container svelte-17xvsk0"><div class="img svelte-17xvsk0"${attr_style(`background-image: url(${stringify(data.Poster)})`)}><button class="svelte-17xvsk0">`;
  Icon($$payload, { src: Plus, size: "30", solid: true });
  $$payload.out += `<!----></button></div> <h2 class="svelte-17xvsk0">${escape_html(data.Title)}</h2> <div class="middle svelte-17xvsk0"><div class="rating svelte-17xvsk0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let threshold = each_array[$$index];
    $$payload.out += `<svg height="20" width="20" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg" class="svelte-17xvsk0"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968
                        -58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438
                        16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344
                        18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844
                        c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875
                        4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593
                        c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031
                        -28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"${attr("fill", data.imdbRating >= threshold ? "#ffc107" : "#727276")}></path></svg>`;
  }
  $$payload.out += `<!--]--></div> <div class="info-wrapper svelte-17xvsk0">`;
  Icon($$payload, {
    src: InformationCircle,
    size: "20",
    class: "info"
  });
  $$payload.out += `<!----> <div class="info-box svelte-17xvsk0"><p>Initial Release: <span>${escape_html(data.Released)}</span></p> <p>Director: <span>${escape_html(data.Director)}</span></p> <p>Languages: <span>${escape_html(data.Language)}</span></p> <p>Awards: <span>${escape_html(data.Awards)}</span></p> <p>Actors: <span>${escape_html(data.Actors)}</span></p></div></div></div> <p class="plot svelte-17xvsk0">${escape_html(data.Plot)}</p></div>`;
  bind_props($$props, { data });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  let movies = [];
  isAuthed.set(data.isAuthed);
  user.set(data?.authedUser);
  const each_array = ensure_array_like(movies);
  $$payload.out += `<div class="container svelte-mwamtb"><div class="svelte-mwamtb"><strong class="svelte-mwamtb">Welcome to Movie Logger ${escape_html(store_get($$store_subs ??= {}, "$user", user)?.username ?? "")}</strong></div> <p class="svelte-mwamtb">Track, rate, and organize your movies effortlessly.</p> <a${attr("href", store_get($$store_subs ??= {}, "$isAuthed", isAuthed) ? "/log" : "/auth/register")} class="btn svelte-mwamtb">Start Logging Movies</a> <div class="wave svelte-mwamtb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="svelte-mwamtb"><path fill="#0e0013" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,154.7C672,149,768,75,864,69.3C960,64,1056,128,1152,138.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" class="svelte-mwamtb"></path></svg></div></div> <div class="movies-section svelte-mwamtb"><h2 class="svelte-mwamtb">Dev's recommendation</h2> <div class="movies svelte-mwamtb"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let movie = each_array[$$index];
    MovieCard($$payload, { data: movie });
  }
  $$payload.out += `<!--]--></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
