
<script>
    export let img;
</script>

<aside>
    <img class="big-img" src={img} alt="flower" />
    <img class="sml-img" src={img} alt="flower" />
    <img class="sml-img" src={img} alt="flower" />
</aside>

<style>
    aside {
        display: flex;
        flex-flow: column wrap;
        width: calc(100% - 50px);
        height: 320px;
        gap: 0.5rem;
    }

    .big-img {
        width: 100%;
        height: 280px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.5s linear;
    }

    .sml-img {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        cursor: pointer;
    }

    img:hover {
        filter: grayscale(30%);
    }

    
</style>