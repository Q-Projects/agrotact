<script>
	export let data;
	import PublicTable from '$lib/tables/PublicTable.svelte';
	import SearchBar from '$lib/inputs/SearchBar.svelte';
	const items = data.products;

	let cardStyle = 1;

	function search(e) {
		console.log(e.detail);
	}

	function changeCard(e) {
		cardStyle = parseInt(e.detail);
	}
	function sortList(e) {
		console.log(e.detail);
	}
</script>

<h1>Search Products</h1>

<div class="products">
	<div>
		<SearchBar on:sortBy={sortList} on:search={search} on:style={changeCard} />
		<PublicTable {cardStyle}  items={items} />
	</div>

	<form>
		<h1>Filter Box</h1>
		<label for="country">country</label>
		<input type="text" name="country" id="" />
		<label for="town">town / city</label>
		<input type="text" name="town" id="" />

		<h2>Product Details</h2>
		<label for="type">Type</label>
		<input type="text" name="type" id="" />
		<label for="" />
		<label for="time">Recolted</label>
		<input type="text" name="time" id="" />
		<label for="quantity">quantity</label>
		<input type="text" name="quantity" />

		<button>Search</button>
	</form>
</div>

<style>
	.products {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: space-between;
		align-items: start;
		width: 100%;
	}

	form {
		padding-top: 0;
	}

	h1 {
		margin: 2rem 0;
		position: relative;
	}

	h1::after {
		content: '';
		width: 100%;
		height: 3px;
		background: #ddd;
		position: absolute;
		top: 100%;
		left: 0;
	}

	@media screen and (min-width: 768px) {
		.products {
			grid-template-columns: 68% 29%;
			align-items: start;
		}
	}
</style>
