<script lang="ts">
    import type { Movie } from "$lib/types.js";

    export let movies: Movie[] = [];
</script>

<div class="container">
    {#if movies.length > 0}
        {#each movies as movie}
            <div class="movie-line">
                <img src={movie.Poster} alt={movie.Title} />
                <div class="info">
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Year}</h3>
                    <h3>{movie.Type}</h3>
                </div>
            </div>
        {/each}
    {:else}
        <div class="no-movies">No movies found</div>
    {/if}
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .movie-line {
        display: flex;
        gap: 20px;
        background-color: #1f1f1f;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0 0 1px var(--accent-color);
    }

    .movie-line img {
        width: 100px;
        height: 150px;
        border-radius: 10px;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        color: var(--text-color);
        font-weight: 700;
    }
    .info h2 {
        font-size: 1.5em;
    }
    .info h3 {
        font-size: 1em;
        color: lightgrey;
        font-weight: 600;
    }

    .no-movies {
        text-align: center;
        font-size: 1.5em;
    }
</style>
