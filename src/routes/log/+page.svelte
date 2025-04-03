<script lang="ts">
    import type { Movie } from "$lib/types.ts";
    import { onMount } from "svelte";
    let movies: Movie[] = [];

    const moviesToShowcase = [
        "tt27503384", "tt0364569", "tt0468569", "tt1853728",
        "tt0816692", "tt0133093", "tt0137523", "tt0110912",
        "tt1375666", "tt0080684"
    ];

    async function fetchMovies() {
        movies = await Promise.all(
            moviesToShowcase.map(async (id) => {
                const response = await fetch(
                    `http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
                );
                if (!response.ok) throw new Error("Failed to fetch movies");
                return await response.json();
            })
        );
    }

    onMount(fetchMovies);
</script>

<div class="movie-grid">
    {#each movies as movie}
        <div class="movie-card">
            <img src={movie.Poster} alt={movie.Title} loading="lazy" />
            <div class="movie-info">
                <h2>{movie.Title}</h2>
                <p>{movie.Year} • {movie.Type}</p>
                <p class="rating">IMDB rating: ⭐ {movie.imdbRating ?? "N/A"}</p>
                <p class="rating">Your rating: ⭐ </p>
            </div>
            <div class="actions">
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    
    .movie-grid {
        margin-top: 50px; ;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        padding: 40px 20px;
    }

    .movie-card {
        background-color: #1f1f1f;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 15px;
    }

    .movie-card:hover {
        transform: scale(1.05);
    }

    .movie-card img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
    }

    .movie-info {
        margin-top: 10px;
        color: var(--text-color);
    }

    .rating {
        color: gold;
        font-weight: bold;
    }

    .actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .actions button {
        background-color: var(--secondary-color);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 0.9rem;
        transition: 0.3s;
        cursor: pointer;
    }

    .actions button:hover {
        background-color: var(--accent-color);
    }
</style>
