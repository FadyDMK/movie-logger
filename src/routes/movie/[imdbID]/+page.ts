import type { PageLoad } from "./$types.js";

export const load: PageLoad = async ({ params, fetch }) => {
    const imdbID = params.imdbID;
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
    const movie = await res.json();

    return { movie };
};
