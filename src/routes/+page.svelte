<script lang="ts">
    import MovieCard from "$lib/components/MovieCard.svelte";
    import { user } from "$lib/stores/stores.ts";
    import type { Movie } from "$lib/types.js";
    export let data;

    let movies: Movie[] = [];

    $:User = data?.authedUser;

    $:{
        const newUser = data?.authedUser;
        user.set(newUser)
    }
</script>
<h3></h3>

<div class="container">
    <span><strong>Welcome to Movie Logger {User?.username??''} </strong></span>
    Repudiandae cupiditate dolore consequatur porro perferendis vitae, iure sint
    optio error placeat tenetur culpa blanditiis ab! Dolore, ipsam ipsa. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa accusantium
    sapiente ipsum officiis asperiores eligendi ab amet nam minima dolorem nobis
    a reiciendis natus, rerum, corporis libero expedita. Autem? Lorem ipsum
    dolor sit, amet consectetur adipisicing elit. Aliquid dolor doloremque
    dignissimos beatae facere tempore quasi modi? Magni ut neque, atque
    reprehenderit vel odit, fugit eveniet tempore nihil mollitia sequi! Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quasi fuga
    ipsam nesciunt tempora recusandae dolore eius iste minus, eveniet in,
    incidunt consectetur. Reprehenderit iure consectetur deserunt laudantium
    corrupti eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Autem, quod est. Repudiandae cupiditate dolore consequatur porro perferendis
    vitae, iure sint optio error placeat tenetur culpa blanditiis ab! Dolore,
    ipsam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
    ipsa accusantium sapiente ipsum officiis asperiores eligendi ab amet nam
    minima dolorem nobis a reiciendis natus, rerum, corporis libero expedita.
    Autem?
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px;
        font-size: 2rem;
    }
</style>
