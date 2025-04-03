// @ts-nocheck
import type { PageLoad } from "./$types.js";

export const load = async ({ params, fetch }: Parameters<PageLoad>[0]) => {
    const imdbID = params.imdbID;
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
    const movie = await res.json();

    return { movie };
};
