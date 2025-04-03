<script lang="ts">
    import { goto } from "$app/navigation";

   
    import { onMount } from "svelte";
    import { Icon } from "svelte-hero-icons";
    import { InformationCircle, Plus } from "svelte-hero-icons";
    export let data;

    const handleClick = () => {
        // Handle the click event here
        goto(`/movie/${data.imdbID}`);
    };
</script>

<div class="container">
    <div class="img" style="background-image: url({data.Poster})">
        <button on:click={handleClick}><Icon src={Plus} size="30" solid /></button>
    </div>
    <h2>{data.Title}</h2>
    <div class="middle">
        <div class="rating">
            {#each [2.5, 5, 7.5, 10] as threshold}
                <svg height="20" width="20" viewBox="0 -10 511.98685 511" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968
                        -58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438
                        16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344
                        18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844
                        c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875
                        4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593
                        c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031
                        -28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                        fill={data.imdbRating >= threshold ? "#ffc107" : "#727276"}
                    />
                </svg>
            {/each}
        </div>
        <div class="info-wrapper">
            <Icon src={InformationCircle} size="20" class="info" />
            <div class="info-box">
                <p>Initial Release: <span>{data.Released}</span></p>
                <p>Director: <span>{data.Director}</span></p>
                <p>Languages: <span>{data.Language}</span></p>
                <p>Awards: <span>{data.Awards}</span></p>
                <p>Actors: <span>{data.Actors}</span></p>
            </div>
        </div>
    </div>
    <p class="plot">{data.Plot}</p>
</div>

<style lang="scss">
    .container {
        width: 300px;
        background: linear-gradient(45deg, #452d4d, #32283a, var(--primary-color));
        border-radius: 15px;
        padding: 15px;
        box-shadow: 0 0 5px var(--secondary-color);
        transition: transform 0.3s ease-in-out;
        overflow: visible;
    }

    .container:hover {
        transform: scale(1.05);
    }

    .img {
        width: 100%;
        height: 350px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 2;
    }

    .img button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .img button:hover {
        background-color: var(--secondary-color);
       
    }

    h2 {
        text-align: center;
        margin: 10px 0;
        font-size: 1.2rem;
    }

    .middle {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rating svg {
        width: 20px;
        height: 20px;
        margin: 0 2px;
    }

    .info-wrapper {
        position: relative;
        cursor: pointer;
        
    }

    .info-box {
        display: none;
        position: absolute;
        top: 25px;
        left: 0;
        background: #101020;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 0 5px #aaa;
        width: 250px;
        z-index: 3;
    }

    .info-wrapper:hover .info-box {
        display: block;
    }


    .plot {
        font-size: 0.9em;
        text-align: justify;
        margin-top: 10px;
    }
</style>