<script lang="ts">
    import { goto } from "$app/navigation";
    import UpdateLog from "$lib/components/UpdateLog.svelte";
    import type { MediaLog, Movie, updateFormData } from "$lib/types.ts";
    import { Content, Modal, Trigger } from "sv-popup";
    import { onMount } from "svelte";
    let movies: Movie[] = [];
    let logs: MediaLog[] = [];
    let moviesToShowcase: Array<string> = [];
    import type { logMovieData } from "$lib/types.ts";
    export let form:logMovieData;
    export let data:logMovieData;

    if (data.logs) {
        logs = Array.isArray(data.logs) ? data.logs : [];
    }
    if (logs === undefined || !Array.isArray(logs)) {
        console.error("No logs found or logs is not an array");
    } else {
        logs.forEach((log) => {
            moviesToShowcase.push(log.mediaId);
        });
    }
    async function deleteLog(id: string, userId: string) {
        const response = await fetch(`/api/log/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
        });
        if (!response.ok) {
            const error = await response.json();
            console.error("Failed to delete log", error);
            return;
        }
        console.log("Log deleted successfully");
        moviesToShowcase = moviesToShowcase.filter((movieId) => movieId !== id);
        logs = logs.filter((log) => log.mediaId !== id);
        movies = movies.filter((movie) => movie.imdbID !== id);
        window.location.href = "/log";
    }

    async function fetchMovies() {
        movies = await Promise.all(
            moviesToShowcase.map(async (id) => {
                const response = await fetch(
                    `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
                );
                if (!response.ok) throw new Error("Failed to fetch movies");
                return await response.json();
            }),
        );
    }

    onMount(fetchMovies);
</script>

{#if !movies.length}
    <div class="no-movies">No movies added yet. Start searching and logging!</div>
{:else}
    <h1 class="header">Your Movie Log</h1>
    <div class="movie-grid">
        {#each movies as movie, index}
            <div class="movie-card">
                <img src={movie.Poster} alt={movie.Title} loading="lazy" />
                <div class="movie-info">
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year} • {movie.Type}</p>
                    <p class="rating">
                        IMDB rating: ⭐ {movie.imdbRating ?? "N/A"}
                    </p>
                    <p class="rating">Your rating: {logs[index].rating}⭐</p>
                    <p class="status">{logs[index].status}</p>
                </div>
                <div class="actions">
                    <Modal basic small>
                        <Content class="modal-content">
                            <UpdateLog
                                form={form}
                                movie={{ ...logs[index], imdbID: movies[index]?.imdbID, rating: logs[index].rating ?? 0 }}
                            />
                        </Content>
                        <Trigger>
                            <button>Update</button>
                        </Trigger>
                    </Modal>
                   
                    <button on:click={() => deleteLog(logs[index].id,logs[index].userId)}>Delete</button>
                </div>
            </div>
        {/each}
    </div>
{/if}



<style lang="scss">
    .header{
        padding-top:75px;
        text-align: center;
        font-size: 2rem;
        color: var(--text-color);
        font-weight: bold;
    }
    .status {
        font-size: 0.9rem;
        color: var(--text-color);
        margin-top: 5px;
    }
    .no-movies {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-size: 1.5rem;
        color: var(--text-color);
    }
    .movie-grid {
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
