


<script>
    import { fade } from "svelte/transition";
    let open = false;

    function showOptions () {
        open = !open;
    }
</script>

<div>
    <button on:click={showOptions}>
        p
    </button>

    {#if open }
    <section transition:fade={{ duration : 450 }}>
        <a href="/"> my profile</a>
        <a href="/"> login</a>
        <a href="/"> logout</a>
        <a href="/">dashboard</a>
    </section>
    {/if}

</div>


<style>
    div {
        position: relative;
        color: inherit;
    }

    button {
        color: transparent;
        padding: 0;
    }

    section {
        position: fixed;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
        padding: 0.3rem;
        border-radius: 4px;
    }
</style> 