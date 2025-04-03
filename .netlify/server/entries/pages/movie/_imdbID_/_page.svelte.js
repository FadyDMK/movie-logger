import { x as push, B as attr, G as attr_class, C as escape_html, E as bind_props, z as pop } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { M as Modal, C as Content, T as Trigger } from "../../../../chunks/Trigger.js";
function LogForm($$payload, $$props) {
  push();
  let form = $$props["form"];
  let movie = $$props["movie"];
  let rating = "";
  $$payload.out += `<div class="container svelte-13oxm5n"><form method="POST" action="?/log" class="svelte-13oxm5n"><h2 class="svelte-13oxm5n">Log Your Movie</h2> <div class="form-item svelte-13oxm5n"><label for="status" class="svelte-13oxm5n">Status</label> <select id="status" name="status" required class="svelte-13oxm5n"><option value="watching" class="svelte-13oxm5n">Watching</option><option value="completed" class="svelte-13oxm5n">Completed</option><option value="dropped" class="svelte-13oxm5n">Dropped</option><option value="plan-to-watch" class="svelte-13oxm5n">Plan to Watch</option></select></div> <div class="form-item svelte-13oxm5n"><label for="rating" class="svelte-13oxm5n">Rating</label> <input type="number" id="rating" name="rating" min="1" max="10" placeholder="Rate from 1 to 10"${attr("value", rating)}${attr_class(form?.error ? "field-error" : "", "svelte-13oxm5n")} required> `;
  if (form?.error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<small class="svelte-13oxm5n">${escape_html(form?.message)}</small>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <input type="hidden" name="imdbID"${attr("value", movie.imdbID)} class="svelte-13oxm5n"> <button type="submit" class="submit-button svelte-13oxm5n">Log Movie</button></form></div>`;
  bind_props($$props, { form, movie });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let movie = data.movie;
  let form = $$props["form"];
  async function fetchMovie(imdbID) {
    const apiKey = "4b24ca2c";
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
    if (!response.ok) {
      console.error("Failed to fetch movie data");
      return;
    }
    movie = await response.json();
  }
  if (data.movie.imdbID) {
    fetchMovie(data.movie.imdbID);
  }
  if (movie) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="movie-container svelte-196vv6l"><img${attr("src", movie.Poster)}${attr("alt", movie.Title)} class="movie-poster svelte-196vv6l"> <div class="movie-details svelte-196vv6l"><h1 class="svelte-196vv6l">${escape_html(movie.Title)} <span class="svelte-196vv6l">(${escape_html(movie.Year)})</span></h1> <p class="genre svelte-196vv6l"><strong>Genre:</strong> ${escape_html(movie.Genre)}</p> <p><strong>Type:</strong> ${escape_html(movie.Type)}</p> <p><strong>Director:</strong> ${escape_html(movie.Director)}</p> <p><strong>Actors:</strong> ${escape_html(movie.Actors)}</p> <p><strong>Released:</strong> ${escape_html(movie.Released)}</p> <p><strong>Language:</strong> ${escape_html(movie.Language)}</p> <p><strong>IMDB Rating:</strong> ⭐ ${escape_html(movie.imdbRating ?? "N/A")}</p> <p class="plot svelte-196vv6l">${escape_html(movie.Plot)}</p> <div class="actions svelte-196vv6l">`;
    Modal($$payload, {
      basic: true,
      small: true,
      children: ($$payload2) => {
        Content($$payload2, {
          class: "modal-content",
          children: ($$payload3) => {
            LogForm($$payload3, { movie, form });
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        Trigger($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<button class="svelte-196vv6l">📖 Log</button>`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="no-movies">No movie found</div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data, form });
  pop();
}
export {
  _page as default
};
