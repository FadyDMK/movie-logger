<script lang="ts">
    import { onMount } from "svelte";
    export let data;
    import { Icon, InformationCircle, Plus } from "svelte-hero-icons";
</script>

<div class="container">
    <div class="img" style="background-image: url({data.Poster})">
        <button><Icon src={Plus} size="30" solid /></button>
    </div>
    <h2>{data.Title}</h2>
    <div class="middle">
        <div class="rating">
            <svg
                height="511pt"
                viewBox="0 -10 511.98685 511"
                width="511pt"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                    fill={data.imdbRating >= 2.5 ? "#ffc107" : "#727276"}
                />
            </svg>
            <svg
                height="511pt"
                viewBox="0 -10 511.98685 511"
                width="511pt"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                    fill={data.imdbRating >= 5 ? "#ffc107" : "#727276"}
                />
            </svg>
            <svg
                height="511pt"
                viewBox="0 -10 511.98685 511"
                width="511pt"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                    fill={data.imdbRating >= 7.5 ? "#ffc107" : "#727276"}
                />
            </svg>
            <svg
                height="511pt"
                viewBox="0 -10 511.98685 511"
                width="511pt"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                    fill={data.imdbRating == 10 ? "#ffc107" : "#727276"}
                />
            </svg>
        </div>
        <div class="last">
            <Icon src={InformationCircle} size="20" class="info" />

            <div class="for">
                <div class="infos">
                    <p>
                        Initial release : <span>{data.Released}</span>
                    </p>

                    <p>Director : <span>{data.Director}</span></p>

                    <p>Langauges : <span>{data.Language}</span></p>

                    <p>Awards : <span>{data.Awards}</span></p>

                    <p>
                        Actors : <span>{data.Actors}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <p class="plot">
        {data.Plot}
    </p>
</div>

<style lang="scss">
    .middle {
        display: flex;
        justify-content: space-between;
    }
    .container {
        width: 300px;
        height: 500px;
        background: linear-gradient(45deg, #452d4d, var(--background-color), #111, var(--primary-color));
        border-radius: 15px;
        padding: 10px 20px 30px;
        position: relative;
        box-shadow: 0 0 1px var(--secondary-color);
        overflow-y: hidden;
    }
    .container:hover {
        height: fit-content;
        overflow-y: visible;
        transform: scale(1.01);
        transition: all 0.5s ease-in;
    }

    h3 {
        margin: 10px 0 15px;
        font-size: 1em;
        font-size: 1em;
    }

    .info {
        position: absolute;
        justify-self: right;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .img {
        width: 280px;
        height: 350px;
        margin: 0 auto 20px;
        background-color: var(--primary-color);
        border-radius: 5px;

        position: relative;
        box-shadow: 0 0 5px 3px var(--accent-color);
        background-size: contain;
    }

    .img button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: var(--primary-color);
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 15px;
    }

    .img button:hover {
        background-color: var(--secondary-color);
        cursor: pointer;
    }

    .container > h2,
    .container > p {
        text-align: center;
        margin: 0;
    }

    h2,
    h3 {
        text-transform: uppercase;
    }

    .rating {
        width: fit-content;
        margin: 0 auto;
        text-align: center;
        margin: 10px 0 15px;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .rating svg {
        width: 15px;
        height: 15px;
        cursor: pointer;
    }

    .last {
        display: inline-block;
        cursor: pointer;
        position: relative;
        align-self: center;
    }

    .last:hover .infos {
        display: block;
    }

    .last svg path {
        fill: #aaa;
    }

    p {
        font-size: 0.8em;
    }

    .infos {
        background-color: #101020;
        border-radius: 10px;
        position: absolute;
        padding: 10px;
        top: 20px;
        text-align: left;
        cursor: pointer;
        left: -10px;
        width: 300px;
        box-shadow: 0 0 2px 1px #aaa;
        display: none;
    }

    .infos p {
        display: inline-block;
        margin: 2px;
        font-size: 1em;
    }

    .infos span {
        font-size: 0.8em;
        color: #8080d8;
    }

    .infos::before {
        content: "";
        width: 20px;
        height: 20px;
        background-color: #101020;
        position: absolute;
        top: -8px;
        left: 8px;
        transform: rotate(45deg);
    }
    .plot {
        font-size: 0.9em;
        text-align: justify;
        margin: 10px 0;
    }
</style>
