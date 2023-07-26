<script>
	import ProductCard from '$lib/cards/ProductCard.svelte';
	import SearchBar from '$lib/inputs/SearchBar.svelte';
	import Pagination from '$lib/pagination.svelte';

	export let items;
	$: itemsCount = items.length;
	let currentNumber = 1;
	let numberPerPage = 10;
	$: numberOfPages = Math.ceil(itemsCount / numberPerPage);

	function search(e) {
		console.log(e.detail);
	}

	function changeCard(e) {
		console.log(e.detail);
	}

	function changePage(e) {
		console.log('changing page to: ' + e.detail);
		currentNumber = e.detail;
	}

	function changePerPage(e) {
		numberPerPage = parseInt(e.detail);
	}

	function sortList(e) {
		console.log(e.detail);
	}
</script>

<div>
	<SearchBar on:sortBy={sortList} on:search={search} on:style={changeCard} />

	<div class="cards-container">
		{#each items as item, index (item.id)}
			<ProductCard />
		{/each}
	</div>

	<Pagination on:page={changePage} on:per={changePerPage} {numberOfPages} {currentNumber} />
</div>

<style>
	.cards-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.4rem;
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
	}

	@media screen and (min-width: 1024px) {
		.cards-container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
