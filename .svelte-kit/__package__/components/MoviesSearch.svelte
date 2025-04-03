<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Movie } from "../types.js";

    export let movies: Movie[] = [];

    const handleClick = (imdbID: string) => {
        goto(`/movie/${imdbID}`);
    };
</script>

<div class="container">
    {#if movies.length > 0}
        {#each movies as movie}
            <button
                class="movie-line"
                tabindex="0"
                on:click={() => {
                    handleClick(movie.imdbID);
                }}
                on:keypress={() => handleClick(movie.imdbID)}
            >
                <img src={movie.Poster} alt={movie.Title} />
                <div class="info">
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Year}</h3>
                    <h3>{movie.Type}</h3>
                </div>
            </button>
        {/each}
    {:else}
        <div class="no-movies">No movies found</div>
    {/if}
</div>

<style>.container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.movie-line {
  display: flex;
  gap: 20px;
  background-color: #1f1f1f;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 0 1px var(--accent-color);
  cursor: pointer;
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
  align-items: start;
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
}</style>
