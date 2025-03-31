<script lang="ts">
    import MovieCard from "$lib/components/MovieCard.svelte";
    import { onMount } from "svelte";
    import type { Movie } from "$lib/types.js";
    import Searchbar from "$lib/components/Searchbar.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import { navbarData } from "$lib/utils/linkUtil.js";

    let movies: Movie[] = [];
    

</script>


<NavBar data={navbarData}/>
<div class="container">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod est. Repudiandae cupiditate dolore consequatur porro perferendis vitae, iure sint optio error placeat tenetur culpa blanditiis ab! Dolore, ipsam ipsa.
</div>

<style lang="scss">
    .container {
        display: flex;
        align-items: center;
        margin: 100px;
        font-size: 2rem;
    }
</style>

