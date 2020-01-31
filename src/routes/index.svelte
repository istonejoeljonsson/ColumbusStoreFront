<script>
    import { onMount } from 'svelte';

    let cats = [];
    let catInput;
    let isLoading = false;

    //! 2nd alt is to use shortcut in svelte instead of onMount
    onMount(() => {
        //! Get kitties on initial load
        isLoading = true;
        fetch('https://svelte-sapper-28604.firebaseio.com/cats.json')
            .then(res => {
                if (res.status !== 200 || !res.ok) {
                    throw new Error(`Epic fail while fetching😒 ${res.status}`);
                }
                return res.json(); // Yields another promise when converting
            })
            .then(data => {
                isLoading = false;
                console.log(data);
                //! if you need the ids from FB do for in
                // const loadedCat = [];
                // for (const key in data) {
                //     loadedCat.push({
                //         ...data[key],
                //         id: key,
                //     });
                // }
                //! IF not just:
                cats = Object.values(data);

                //! Need to return for shortcut syntax
                return cats;
            })
            .catch(err => {
                isLoading = false;
                console.log(err);
            });
    });

    function addCat() {
        cats = [...cats, catInput.value];
        isLoading = true;
        // No fixxed endpoint i FB,
        // Start with this below and whatever you type you get as folder structure:)
        // With FB add ${anyEndpoint} (.json) at the end!
        fetch('https://svelte-sapper-28604.firebaseio.com/cats.json', {
            method: 'POST',
            body: JSON.stringify(catInput.value), //!Sending one kitty at a time not whole list at this time
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => {
                isLoading = false;
                if (res.status !== 200 || !res.ok) {
                    throw new Error(`Epic fail while fetching😒 ${res.status}`);
                }
                //...
            })
            .catch(err => {
                isLoading = false;
                console.log(err);
            });
    }
</script>

<style>
    h1,
    figure,
    p {
        @apply text-center m-0 mx-auto;
    }

    h1 {
        @apply text-5xl uppercase font-bold m-0 mb-2;
    }

    figure {
        @apply m-0 mb-4;
    }

    img {
        @apply m-auto w-full max-w-sm;
        @screen md {
            @apply max-w-xs;
        }
    }

    p {
        @apply m-4 mx-auto;
    }

    h1 {
        @apply text-6xl;
    }
    .cat__wrapper {
        display: flex;
        flex-flow: column wrap;
        width: 100%;
        font-size: 2rem;
    }
    .cat__wrapper > * {
        margin-bottom: 1.5rem;
        padding: 0;
        padding: 1rem;
    }
    .cat__wrapper input {
        border: 1px solid #ccc;
        order: 3;
    }
    .cat__wrapper button {
        /* background: #305a5a; */
        background: #000;
        box-shadow: 0 1px 1px 1px black;
        color: #fff;
        order: 4;
    }
    .cat__wrapper li,
    label {
        text-align: center;
    }
    .cat__wrapper label {
        font-size: 4rem;
        font-weight: bold;
    }
</style>

<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
    <img alt="Borat" src="great-success.png" />
    <figcaption>HIGH FIVE!</figcaption>
</figure>

<p>
    <strong>
        Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
</p>
<!-- Testing firebase restAPI and server -->
<!-- with onMount------------------------------------- -->
<div class="cat__wrapper">
    <label for="cat">Cats</label>
    <input
        type="text"
        id="cat"
        bind:this={catInput}
        placeholder="Add kitty to 🔥" />
    <button on:click={addCat}>😻</button>
    {#if isLoading}
        <p>Loading kitties...</p>
    {:else}
        <ul>
            {#each cats as cat}
                <li>{cat} says Meouuw 😽</li>
            {/each}
        </ul>
    {/if}
</div>
<!-- --------------------------------------------------- -->
<!-- not good in this case since I want the whole array if adding new cats -->
<!-- <div class="cat__wrapper">
    <label for="cat">Cats</label>
    <input
        type="text"
        id="cat"
        bind:this={catInput}
        placeholder="Add kitty to 🔥" />
    <button on:click={addCat}>😻</button>
    {#await getAllCats}
        <p>Loading kitties...</p>
    {:then catData}
        <ul>
            {#each catData as cat}
                <li>{cat} says Meouuw 😽</li>
            {/each}
        </ul>
    {:catch error}
        <p>{error.message}</p>
    {/await}
</div> -->
