
<script>
    export let img;
</script>

<aside>
    <div>
        <img class="big-img" src={img} alt="flower" />
    </div>
    <img class="sml-img" src={img} alt="flower" />
    <img class="sml-img" src={img} alt="flower" /> juiii
</aside>

<style>
    aside {
        display: flex;
        flex-flow: column ;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: fit-content;
        gap: 0.5rem;
    }

    div {
        background: yellow;
        border: 1px solid #ddd;
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