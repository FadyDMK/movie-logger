<script lang="ts">
    import MovieCard from "$lib/components/MovieCard.svelte";
    import { user, isAuthed } from "$lib/stores/stores.ts";
    import type { Movie } from "$lib/types.js";
    import { onMount } from "svelte";

    export let data;

    $: isAuthed.set(data.isAuthed);

    let movies: Movie[] = [];

    $: user.set(data?.authedUser);

    const moviesToShowcase = [
        "tt27503384",
        "tt0364569",
        "tt0468569",
        "tt1853728",
        "tt0816692",
        "tt0133093",
        "tt0137523",
        "tt0110912",
        "tt1375666",
        "tt0080684",
    ];

    // Fetch movies from the API
    async function fetchMovies() {
        try {
            const fetchedMovies = await Promise.all(
                moviesToShowcase.map(async (id) => {
                    try {
                        const response = await fetch(
                            `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
                        );

                        if (!response.ok)
                            throw new Error("Failed to fetch movie");

                        return await response.json();
                    } catch (error) {
                        console.error(`Error fetching movie ${id}:`, error);
                        return null;
                    }
                }),
            );

            movies = fetchedMovies.filter((movie) => movie !== null);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }
    onMount(() => {
        fetchMovies();
    });
</script>

<div class="container">
    <div>
        <strong>Welcome to Movie Logger {$user?.username ?? ""} </strong>
    </div>
    <p>Track, rate, and organize your movies effortlessly.</p>
    <a href={$isAuthed ? "/log" : "/auth/register"} class="btn">
        Start Logging Movies
    </a>

    <div class="wave">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill="#0e0013"
                fill-opacity="1"
                d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,154.7C672,149,768,75,864,69.3C960,64,1056,128,1152,138.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    </div>
</div>

<!-- Movies Section -->
<div class="movies-section">
    <h2>Dev's Recommendation</h2>
    {#if movies.length > 0}
        <div class="movies">
            {#each movies as movie}
                <MovieCard data={movie} />
            {/each}
        </div>
    {:else}
        <p>Loading movies...</p>
    {/if}
</div>

<style lang="scss">
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 150px;
        padding-bottom: 150px;
        font-size: 2rem;
        background: linear-gradient(-45deg, #5a0077, #c147e9, #e5b8f4, #3d087b);
        background-size: 400% 400%;
        animation: gradientBG 8s ease infinite;
        position: relative;
        overflow: hidden;
        color: white;
    }

    .wave {
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 170px;
        z-index: 10;
    }

    .btn {
        background-color: var(--secondary-color);
        color: var(--text-color);
        padding: 0.8rem 1.5rem;
        font-size: 1.2rem;
        margin-top: 20px;
        border-radius: 10px;
        font-weight: bold;
        transition: 0.3s;
    }

    .btn:hover {
        background-color: var(--accent-color);
        cursor: pointer;
    }

    .movies-section {
        position: relative;
        background-color: #0e0013;
        padding-top: 100px;
        margin-top: 10px; 
        z-index: 5;
    }
    .movies-section h2 {
        text-align: center;
        color: white;
        font-size: 2rem;
        margin-bottom: 20px;
    }
    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }

    @media (max-width: 1024px) {
        .wave {
            display: none;
        }
    }
</style>
