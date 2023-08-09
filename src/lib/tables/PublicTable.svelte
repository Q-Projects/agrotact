<script>
	import ProductCard from '$lib/cards/ProductCard.svelte';
	import Pagination from '$lib/pagination.svelte';

	export let items;
	export let cardStyle;

	let currentNumber = 1;
	let numberPerPage = 10;
	$: itemsCount = items.length;
	$: numberOfPages = Math.ceil(itemsCount / numberPerPage);
	$: currentItems = [...items.slice((currentNumber - 1) * numberPerPage, currentNumber * numberPerPage )];

	function changePage(e) {
		currentNumber = e.detail;
	}

	function changePerPage(e) {
		numberPerPage = parseInt(e.detail);
	}
</script>

<div class={cardStyle === 1 ? 'cards-container' : 'cards-container2'}>
	{#each currentItems as item, index (item.id)}
		<ProductCard {...item} structure={cardStyle} />
	{/each}
</div>

<Pagination on:page={changePage} on:per={changePerPage} {numberOfPages} {currentNumber} />

<style>
	.cards-container,
	.cards-container2 {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.4rem;
		transition: all 0.2s ease-in-out;
	}

	@media screen and (min-width: 290px) {
		.cards-container {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.8rem;
		}
	}
	@media screen and (min-width: 768px) {
		.cards-container {
			grid-template-columns: repeat(3, 1fr);
		}

		.cards-container2 {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: 1024px) {
		.cards-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
