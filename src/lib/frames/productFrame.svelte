<script>
	import FrameOptions from '../inputs/FrameOptions.svelte';
	import ProductCard from '../cards/ProductCard.svelte';
	import Card from '../Card.svelte';

	export let options = [];
	export let name = '';
</script>

<div class="page-heading">
	<h3>{name}</h3>
	<FrameOptions {options} />
</div>

<div class="cards-container">
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</div>

<style>
	div {
		width: 100%;
		max-width: var(--max-wd, 1440px);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1rem;
		min-height: 70px;
		margin: 10px auto;
	}

	.cards-container {
		display: grid;
		grid-template-columns: repeat(16, 240px);
		grid-template-rows: 420px;
		gap: 0.2rem;
		overflow: auto;
	}

	@media (min-width: 768px) {
		.cards-container {
			grid-template-columns: repeat(auto-fill, 240px);
		}
	}
</style>
