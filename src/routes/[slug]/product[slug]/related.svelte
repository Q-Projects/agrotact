<script>
	import RecentCard from "../../../lib/cards/RecentCard.svelte";

</script>


<div class="related-products">
    <h2>Reletated Category</h2>
    <RecentCard />
    <RecentCard />

    <h2>New Product</h2>
    <RecentCard />
    <RecentCard />

    <h2>Most Recent</h2>
    <RecentCard />
    <RecentCard />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    h2 {
        position: relative;
    }

    h2::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 15%;
        height: 3px;
        background: rgb(0, 139, 51);
    }
</style>