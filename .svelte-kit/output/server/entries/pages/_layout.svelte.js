import { A as ensure_array_like, B as attr, C as escape_html, E as bind_props, z as pop, x as push, F as store_get, G as attr_class, I as clsx, J as unsubscribe_stores } from "../../chunks/index.js";
import "../../chunks/client.js";
/* empty css                                                   */
import { f as fallback } from "../../chunks/equality.js";
import { i as isAuthed } from "../../chunks/stores.js";
function MoviesSearch($$payload, $$props) {
  push();
  let movies = fallback($$props["movies"], () => [], true);
  $$payload.out += `<div class="container svelte-1asqs3z">`;
  if (movies.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(movies);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let movie = each_array[$$index];
      $$payload.out += `<button class="movie-line svelte-1asqs3z" tabindex="0"><img${attr("src", movie.Poster)}${attr("alt", movie.Title)} class="svelte-1asqs3z"> <div class="info svelte-1asqs3z"><h2 class="svelte-1asqs3z">${escape_html(movie.Title)}</h2> <h3 class="svelte-1asqs3z">${escape_html(movie.Year)}</h3> <h3 class="svelte-1asqs3z">${escape_html(movie.Type)}</h3></div></button>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="no-movies svelte-1asqs3z">No movies found</div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { movies });
  pop();
}
function Searchbar($$payload, $$props) {
  push();
  let search = "";
  let movies = [];
  $$payload.out += `<div class="container svelte-194s9pn"><input id="search"${attr("value", search)} placeholder="Search for a movie" class="svelte-194s9pn"> <div class="result svelte-194s9pn">`;
  if (movies.length > 0) {
    $$payload.out += "<!--[1-->";
    MoviesSearch($$payload, { movies });
  } else if (movies.length === 0 && search) ;
  else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
const logo = "/_app/immutable/assets/logo.CmU-GB9Y.png";
function NavBar($$payload, $$props) {
  push();
  var $$store_subs;
  let data;
  console.log("isAuthed:", store_get($$store_subs ??= {}, "$isAuthed", isAuthed));
  data = {
    logo: true,
    logoSrc: logo,
    logoLink: true,
    linkUrl: "/",
    optionalLinkText: "",
    altText: "logo",
    links: [
      {
        url: "/",
        displayInNav: true,
        linkText: "Home"
      },
      {
        url: "/log",
        displayInNav: store_get($$store_subs ??= {}, "$isAuthed", isAuthed),
        linkText: "Log"
      },
      {
        url: "/notfound",
        displayInNav: false,
        linkText: ""
      },
      {
        url: "/auth/login",
        displayInNav: !store_get($$store_subs ??= {}, "$isAuthed", isAuthed),
        linkText: "Log In"
      },
      {
        url: "/auth/register",
        displayInNav: !store_get($$store_subs ??= {}, "$isAuthed", isAuthed),
        linkText: "Sign Up"
      }
    ]
  };
  const each_array = ensure_array_like(data.links);
  $$payload.out += `<nav${attr_class(clsx("navbar"), "svelte-qqkruk")}><div class="menu-icon svelte-qqkruk"><div class="icon-wrapper svelte-qqkruk" role="button" tabindex="0"><i${attr_class(clsx("fas fa-bars"), "svelte-qqkruk")}></i></div> `;
  if (data.logoLink) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a class="logo-link-text svelte-qqkruk"${attr("href", data.linkUrl)}><img class="logo svelte-qqkruk"${attr("src", data.logoSrc)}${attr("alt", data.altText)}>${escape_html(data.optionalLinkText ? data.optionalLinkText : "")}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img class="logo svelte-qqkruk"${attr("src", data.logoSrc)}${attr("alt", data.altText)}>`;
  }
  $$payload.out += `<!--]--></div> <div class="searchbar svelte-qqkruk">`;
  Searchbar($$payload);
  $$payload.out += `<!----></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    if (link.displayInNav) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr_class(clsx("navbar-item"), "svelte-qqkruk")} role="button" tabindex="0"><a${attr("href", link.url)} class="link-text svelte-qqkruk">${escape_html(link.linkText)}</a></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$isAuthed", isAuthed)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${attr_class(clsx("navbar-item"), "svelte-qqkruk")}>Log Out</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  let children = $$props["children"];
  let data = $$props["data"];
  isAuthed.set(data.isAuthed);
  NavBar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { children, data });
  pop();
}
export {
  _layout as default
};
