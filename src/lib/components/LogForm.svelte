<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import type { logMovieData, Movie } from "$lib/types.ts";
    export let form: logMovieData;
    export let movie: Movie;

    let status = "watching";
    let rating = "";
</script>

<div class="container">
    <form method="POST" action="?/log" use:enhance on:submit={() => goto("/")}>
        <h2>Log Your Movie</h2>

        <div class="form-item">
            <label for="status">Status</label>
            <select id="status" name="status" bind:value={status} required>
                <option value="watching">Watching</option>
                <option value="completed">Completed</option>
                <option value="dropped">Dropped</option>
                <option value="plan-to-watch">Plan to Watch</option>
            </select>
        </div>

        <div class="form-item">
            <label for="rating">Rating</label>
            <input
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="10"
                placeholder="Rate from 1 to 10"
                bind:value={rating}
                class={form?.error ? "field-error" : ""}
                required
            />
            {#if form?.error}
                <small>{form?.message}</small>
            {/if}
        </div>

        <input type="hidden" name="imdbID" value={movie.imdbID} />

        <button type="submit" class="submit-button">Log Movie</button>
    </form>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        padding: 30px;
        border-radius: 20px;
        max-width: 500px;
        background: linear-gradient(-45deg, #5a0077, #c147e9, #e5b8f4, #3d087b);
        background-size: 400% 400%;
        animation: gradient 8s ease infinite;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }

    h2 {
        color: white;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }

    .form-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        color: white;
    }

    label {
        font-size: 1rem;
        font-weight: bold;
    }

    select,
    input {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        outline: none;
        transition: all 0.3s;
    }

    select:focus,
    input:focus {
        border: 2px solid white;
    }

    .field-error {
        border: 2px solid red;
    }

    small {
        color: #f36565;
        font-weight: 600;
    }

    .submit-button {
        margin-top: 20px;
        width: 100%;
        padding: 12px;
        font-size: 1.1rem;
        font-weight: bold;
        color: white;
        background: #a833ff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
    }

    .submit-button:hover {
        background: #c147e9;
    }

    @keyframes gradient {
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
</style>
