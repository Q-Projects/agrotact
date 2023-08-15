<script>
	import FrameOptions from '../inputs/FrameOptions.svelte';
	import ProductCard from '../cards/ProductCard.svelte';
	import Card from '../Card.svelte';

	export let options = [];
	export let name;
	export let style = 1;
	let query = options[0];

	const dummy = {
		id: '11',
		name: 'Plantains',
		price: 2500,
		countries: ['Cameroon', 'Guinea', 'RDC', 'Nigeria'],
		towns: ['lagos', 'Okra 2', 'bla', 'blabla'],
		promotion: false,
		discount: 0,
		harvestDay: null,
		quantity: '10 kg',
		category: 'Nourriture',
		supplier: {
			id: '3'
		}
	};

	function changeCards(e) {
		query = e.detail;
	};
</script>

<div class="page-heading">
	<h2>{name} {query}</h2>
	<FrameOptions on:frame={changeCards} {query} options={options.filter((opt) => opt !== query)} />
</div>

<div class={style === 1 ? 'cards-container' : 'row-cards-container'}>
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
	<ProductCard structure={1} info={dummy} />
</div>

<style>
	.page-heading {
		width: 100%;
		max-width: var(--max-wd, 1440px);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		min-height: 70px;
		margin: 10px auto;
	}

	h2 {
		text-transform: capitalize;
		position: relative;
	}

	h2::after {
		content: ' ';
		position: absolute;
		top: 110%;
		left: 0;
		height: 2px;
		width: 240px;
		background: #ddd;
	}

	.cards-container,
	.row-cards-container {
		display: grid;
		grid-template-columns: repeat(12, 240px);
		grid-auto-rows: 420px;
		gap: 0.2rem;
		justify-content: space-between;
		overflow: auto;
		max-width: var(--max-wd, 1440px);
		padding: 1rem 2rem;
		margin: 0px auto;
	}

	.row-cards-container {
		height: fit-content;
		gap: 0.9rem;
	}

	.cards-container::-webkit-scrollbar,
	.row-cards-container::-webkit-scrollbar {
		width: 10px;
		height: 5px;
	}

	/* Track */
	.cards-container::-webkit-scrollbar-track,
	.row-cards-container::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	.cards-container::-webkit-scrollbar-thumb,
	.row-cards-container::-webkit-scrollbar-thumb {
		background: transparent;
	}

	@media (min-width: 768px) {
		.cards-container {
			grid-template-columns: repeat(auto-fill, 240px);
		}
	}
</style>
