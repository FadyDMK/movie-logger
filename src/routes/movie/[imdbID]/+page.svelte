<script lang="ts">
    export let data;
    let movie = data.movie;

    // Watch for changes in the `data.movie.imdbID` parameter
    $: if (data.movie.imdbID) {
        fetchMovie(data.movie.imdbID);
    }

    async function fetchMovie(imdbID: string) {
        const apiKey = import.meta.env.VITE_OMDB_API_KEY;
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
        if (!response.ok) {
            console.error("Failed to fetch movie data");
            return;
        }
        movie = await response.json();
    }
</script>

{#if movie}
    <div class="movie-container">
        <img src={movie.Poster} alt={movie.Title} class="movie-poster" />
        
        <div class="movie-details">
            <h1>{movie.Title} <span>({movie.Year})</span></h1>
            <p class="genre"><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Type:</strong> {movie.Type}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating ?? "N/A"}</p>
            <p class="plot">{movie.Plot}</p>

            <div class="actions">
                <button>📖 Log</button>
            </div>
        </div>
    </div>
{:else}
    <div class="no-movies">No movie found</div>
{/if}

<style lang="scss">
    .movie-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 20px;
        padding: 20px;
        max-width: 800px;
        margin: 100px auto;
        background-color: #1f1f1f;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .movie-poster {
        width: 250px;
        height: auto;
        border-radius: 10px;
    }

    .movie-details {
        flex: 1;
        color: var(--text-color);
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2rem;
        color: var(--accent-color);
    }

    h1 span {
        font-size: 1.5rem;
        color: lightgray;
    }

    .genre {
        font-weight: bold;
        color: #f39c12;
    }

    .plot {
        margin-top: 10px;
        font-size: 1rem;
        color: lightgray;
    }

    .actions {
        margin-top: 20px;
        display: flex;
        gap: 15px;
    }

    .actions button {
        background-color: var(--secondary-color);
        color: white;
        padding: 10px 15px;
        margin-left: auto;
        font-size: 1rem;
        border-radius: 5px;
        font-weight: bold;
        transition: 0.3s;
    }

    .actions button:hover {
        background-color: var(--accent-color);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .movie-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .movie-poster {
            width: 100%;
            max-width: 300px;
        }

        .actions {
            justify-content: center;
        }
    }
</style>