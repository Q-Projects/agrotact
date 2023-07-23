
<script>
    import Card from '$lib/Card.svelte';

</script>

<div class="page-container">
    <slot />
</div>

<div style="margin: 1rem auto;" class="page-container">

    <h2>Best Suppliers</h2>
    
    <div class="cards-container">
        <Card /> <Card /> <Card /><Card /> <Card /> <Card />
    </div>

    <h2>Best Suppliers Product</h2>

    <div class="cards-container">
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
    </div>

</div>

<style>
    .page-container {
        width: 100%;
        max-width: var(--max-wd, 1400px);
        margin: 6rem auto;
        padding: 1rem;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .cards-container {
        display: grid;
        grid-template-columns: repeat(6, 200px );
        grid-template-rows: 1fr;
        gap: 1rem;
        overflow-x: auto;
        margin: 1rem auto;
        width: 100%;
    }

    h2 {
        margin: 1rem 0;
        position: relative;
    }

    h2::after {
        content: '';
        width: 90px;
        height: 3px;
        background: #ddd;
        position: absolute;
        top: 110%;
        left: 0;
    }
</style>