<script lang="ts">
    import { beforeNavigate } from "$app/navigation";
    import type { Movie } from "$lib/types.js";
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
        search = "";
        movies = [];
        searching = false;
    }
    beforeNavigate(() => {
        reset();
    });
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
        width: 600px;
        height: auto;
    }

    .result {
        display: block;
        position: absolute;
        top: 50px;
        width: 100%;
        border-radius: 5px;
        z-index: 10;
        overflow-y: scroll;
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
