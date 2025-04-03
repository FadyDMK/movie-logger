<script lang="ts">
    import Searchbar from "./Searchbar.svelte";
    import logo from '/src/logo.png';
    import { isAuthed } from "$lib/stores/stores.ts";
    import { goto } from "$app/navigation";

    async function handleLogout() {
        isAuthed.set(false);
        await goto("/auth/logout");
    }



    $: data={
        logo: true,
        logoSrc: logo,
        logoLink: true,
        linkUrl: '/',
        optionalLinkText: '',
        altText: 'logo',
        links: [
            {
                url: '/',
                displayInNav: true,
                linkText: 'Home'
            },
            {
                url: '/log',
                displayInNav: $isAuthed,
                linkText: 'Log'
            },
            {
                url: '/notfound',
                displayInNav: false,
                linkText: ''
            },
            {
                url: '/auth/login',
                displayInNav: !$isAuthed,
                linkText: 'Log In'
            },
            {
                url: '/auth/register',
                displayInNav: !$isAuthed,
                linkText: 'Sign Up'
            }

        ]
    };

    console.log("isAuthed:", $isAuthed);
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let clicked = false;

    function handleResize() {
        windowWidth = window.innerWidth;
        if (windowWidth > 1024) {
            clicked = false;
        }
    }

    const handleClick = () => {
        clicked = !clicked;
    };

    const resetClicked = () => {
        clicked = false;
    };
</script>

<svelte:window on:resize={handleResize} />
<nav class={clicked ? "navbar-clicked" : "navbar"}>
    <div class="menu-icon">
        <div
            class="icon-wrapper"
            on:click={handleClick}
            on:keypress={handleClick}
            role="button"
            tabindex="0"
        >
            <i class={clicked ? "fa fa-times" : "fas fa-bars"}></i>
        </div>
        {#if data.logoLink}
            <a class="logo-link-text" href={data.linkUrl}
                ><img
                    class="logo"
                    src={data.logoSrc}
                    alt={data.altText}
                />{data.optionalLinkText ? data.optionalLinkText : ""}
            </a>
        {:else}
            <img class="logo" src={data.logoSrc} alt={data.altText} />
        {/if}
    </div>
    <div class="searchbar">
        <Searchbar />
    </div>
    {#each data.links as link}
        {#if link.displayInNav}
            <div
                class={clicked ? "navbar-item-clicked" : "navbar-item"}
                on:click={resetClicked}
                on:keypress={resetClicked}
                role="button"
                tabindex="0"
            >
                <a href={link.url} class="link-text">{link.linkText}</a>
            </div>
        {/if}
    {/each}
    {#if $isAuthed}
        <button class={clicked ? "navbar-item-clicked" : "navbar-item"} on:click={handleLogout}>Log Out</button>
    {/if}
</nav>

<style lang="scss">
    button {
        background-color: rgb(255, 255, 255, 0);
    }
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        height: 5rem;
        background-color: #140f1f;
        color: #fff;
        z-index: 999;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        transition: all 0.2s ease-out;
        margin-bottom: 0;
    }
    .navbar-clicked {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #000;
        color: #fff;
        z-index: 999;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        transition: all 0.2s ease-out;
        height: 5em;
    }

    .navbar-item {
        display: flex;
        height: 4em;
        color: #fff;
        font-size: 1.2em;
        align-items: center;
    }
    .navbar-item:hover {
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
    }
    .navbar-item-clicked {
        display: flex;
        height: 4em;
        color: #fff;
        font-size: 1.2em;
        align-items: center;
    }
    .searchbar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        max-width: 400px;
        width: 100%;
        
  

    }
    .navbar-item-clicked:hover {
        color: #fff;
        border-bottom: 4px solid #fff;
        transition: all 0.2s ease-out;
    }
    .icon-wrapper {
        margin-top: -0.5em;
        margin-right: 1em;
        display: none;
    }
    .menu-icon {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .fa-bars {
        display: flex;
        font-size: 2rem;
        cursor: pointer;
    }
    .fa-times {
        display: flex;
        font-size: 2rem;
        cursor: pointer;
    }
    .fa-times:hover {
        position: relative;
        box-shadow: 0 0 20px 5px #777575;
        background-color: rgba(119, 117, 117, 0.58);
        transition: all 0.2s ease-out;
        border-radius: 50%;
    }
    .fa-bars:hover {
        position: relative;
        box-shadow: 0 0 20px 5px#777575;
        background-color: rgba(119, 117, 117, 0.58);
        transition: all 0.2s ease-out;
        border-radius: 50%;
    }
    .logo {
        width: 4em;
        height: 4em;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 1024px) {
        /* CSS styles for tablets/mobile go here */

        .searchbar {
            display: none;
        }

        button:hover {
            background-color: rgb(255, 255, 255, 0);
        }
        button:focus {
            background-color: #fff;
            color: #242424;
            transition: all 0.2s ease-out;
        }

        a:focus {
            color: #242424;
            background-color: #fff;
            color: #242424;
            transition: all 0.2s ease-out;
        }
        .navbar {
            height: 4.5em;
            width: 100vw;
            color: #fff;
            z-index: 999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
        }
        .navbar-clicked {
            height: 100vh;
            width: 100vw;
            color: #fff;
            z-index: 999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
        }
        .navbar-item {
            display: none;
        }
        .navbar-item-clicked {
            display: flex;
            width: 100vw;
            color: #fff;
            font-size: 1.2em;
            align-items: center;
            justify-content: center;
        }
        .navbar-item-clicked:hover {
            background-color: #fff;
            color: #242424;
            transition: all 0.2s ease-out;
        }
        .navbar-item-clicked:hover a {
            color: #242424;
        }
        .navbar-item:hover a {
            color: #242424;
        }
        .navbar-item:hover {
            background-color: #fff;
            color: #242424;
            transition: all 0.2s ease-out;
        }
        .link-text {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
        }

        .link-text:hover {
            color: #242424;
        }
        .menu-icon {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 3em;
            padding-top: 1em;
            padding-bottom: 0.5em;
        }
        .fa:hover {
            color: #242424;
        }
        .icon-wrapper {
            display: flex;
            margin-top: 0;
            margin-right: 1em;
        }
    }

    @media (max-width: 768px) {
        /* CSS styles for mobile phones go here */
    }
</style>
