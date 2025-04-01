<script lang="ts">
    import type { Movie } from "$lib/types.js";
    import MovieCard from "./MovieCard.svelte";
    import MoviesSearch from "./MoviesSearch.svelte";

    let search = "";
    let movies: Movie[] = [];
    let timeout: string | number | NodeJS.Timeout | undefined;
    let searching = false;

    function handleSearch() {
        searching = true;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(getMovies, 500);
    }

    async function getMovies() {
        if (!search) {
            reset();
            return;
        }

        const apiKey = import.meta.env.VITE_OMDB_API_KEY;
        const data = await fetch(
            `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`,
        )
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .catch((err) => {
                console.error(err);
            });
        movies = data?.Search || [];
        searching = false;
    }

    function reset() {
        movies = [];
        searching = false;
    }
</script>

<div class="container">
    <input
        id="search"
        bind:value={search}
        on:input={handleSearch}
        placeholder="Search for a movie"
    />
    <div class="result">
        {#if searching}
            <div class="loading">Loading...</div>
        {:else if movies.length > 0}
            <MoviesSearch {movies} />
        {:else if movies.length === 0 && search}
            <div class="no-movies">No movies found</div>
        {/if}
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        width: 600px;
        height: 800px;
    }
    .result {
        height: 100%;
        overflow-y: scroll;
        display: none;
    }

    #search:focus + .result {
        display: block;
    }
    #search {
        width: 100%;
        padding: 10px;
        font-size: 1.2rem;
        border: 1px solid var(--accent-color);
        background-color: rgb(225, 214, 231);
        color: black;
        border-radius: 5px;
        overflow-y: scroll;
    }
    #search:focus {
        border-color: var(--primary-color);
    }

    .loading {
        text-align: center;
        background-color: #1f1f1f;
        padding: 20px;
    }

    .no-movies {
        text-align: center;
        padding: 20px;
        background-color: #1f1f1f;
    }
</style>
