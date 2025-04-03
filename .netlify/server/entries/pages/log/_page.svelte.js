import { x as push, B as attr, G as attr_class, C as escape_html, E as bind_props, z as pop, A as ensure_array_like } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { M as Modal, C as Content, T as Trigger } from "../../../chunks/Trigger.js";
function UpdateLog($$payload, $$props) {
  push();
  let form = $$props["form"];
  let movie = $$props["movie"];
  movie.status;
  let rating = movie.rating;
  $$payload.out += `<div class="container svelte-13oxm5n"><form class="svelte-13oxm5n"><h2 class="svelte-13oxm5n">Log Your Movie</h2> <div class="form-item svelte-13oxm5n"><label for="status" class="svelte-13oxm5n">Status</label> <select id="status" name="status" required class="svelte-13oxm5n"><option value="watching" class="svelte-13oxm5n">Watching</option><option value="completed" class="svelte-13oxm5n">Completed</option><option value="dropped" class="svelte-13oxm5n">Dropped</option><option value="plan-to-watch" class="svelte-13oxm5n">Plan to Watch</option></select></div> <div class="form-item svelte-13oxm5n"><label for="rating" class="svelte-13oxm5n">Rating</label> <input type="number" id="rating" name="rating" min="1" max="10" placeholder="Rate from 1 to 10"${attr("value", rating)}${attr_class(form?.error ? "field-error" : "", "svelte-13oxm5n")} required> `;
  if (form?.error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<small class="svelte-13oxm5n">${escape_html(form?.message)}</small>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <input type="hidden" name="imdbID"${attr("value", movie.imdbID)} class="svelte-13oxm5n"> <input type="hidden" name="_method" value="PUT" class="svelte-13oxm5n"> <button type="submit" class="submit-button svelte-13oxm5n">Update</button></form></div>`;
  bind_props($$props, { form, movie });
  pop();
}
function _page($$payload, $$props) {
  push();
  let movies = [];
  let logs = [];
  let moviesToShowcase = [];
  let form = $$props["form"];
  let data = $$props["data"];
  if (data.logs) {
    logs = Array.isArray(data.logs) ? data.logs : [];
  }
  if (logs === void 0 || !Array.isArray(logs)) {
    console.error("No logs found or logs is not an array");
  } else {
    logs.forEach((log) => {
      moviesToShowcase.push(log.mediaId);
    });
  }
  if (!movies.length) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="no-movies svelte-1cel0cx">No movies added yet. Start searching and logging!</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(movies);
    $$payload.out += `<h1 class="header svelte-1cel0cx">Your Movie Log</h1> <div class="movie-grid svelte-1cel0cx"><!--[-->`;
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let movie = each_array[index];
      $$payload.out += `<div class="movie-card svelte-1cel0cx"><img${attr("src", movie.Poster)}${attr("alt", movie.Title)} loading="lazy" class="svelte-1cel0cx"> <div class="movie-info svelte-1cel0cx"><h2>${escape_html(movie.Title)}</h2> <p>${escape_html(movie.Year)} • ${escape_html(movie.Type)}</p> <p class="rating svelte-1cel0cx">IMDB rating: ⭐ ${escape_html(movie.imdbRating ?? "N/A")}</p> <p class="rating svelte-1cel0cx">Your rating: ${escape_html(logs[index].rating)}⭐</p> <p class="status svelte-1cel0cx">${escape_html(logs[index].status)}</p></div> <div class="actions svelte-1cel0cx">`;
      Modal($$payload, {
        basic: true,
        small: true,
        children: ($$payload2) => {
          Content($$payload2, {
            class: "modal-content",
            children: ($$payload3) => {
              UpdateLog($$payload3, {
                form,
                movie: {
                  ...logs[index],
                  imdbID: movies[index]?.imdbID,
                  rating: logs[index].rating ?? 0
                }
              });
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!----> `;
          Trigger($$payload2, {
            children: ($$payload3) => {
              $$payload3.out += `<button class="svelte-1cel0cx">Update</button>`;
            },
            $$slots: { default: true }
          });
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!----> <button class="svelte-1cel0cx">Delete</button></div></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { form, data });
  pop();
}
export {
  _page as default
};
