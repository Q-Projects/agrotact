<script>
	import FrameOptions from '../inputs/FrameOptions.svelte';
	import SupplierCard from '../cards/SupplierCard.svelte';

	export let options = [];
	export let name ;
	export let style = 1;
	let query = options[0]

	function changeCards (e) {
		query = e.detail;
	};
</script>

<div class="page-heading">
	<h2>{query} {name}</h2>
	<FrameOptions on:frame={changeCards} {query} options={options.filter( opt => opt !== query )} />
</div>

<div class="cards-container">
	<SupplierCard structure={style} info={{ name:'ingo'}} />
</div>

<style>
	div {
		width: 100%;
		max-width: var(--max-wd, 1440px);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		min-height: 40px;
		margin: 0px auto;
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

	.cards-container {
		display: grid;
		grid-template-columns: repeat(12, 260px);
		grid-template-rows: 140px;
		gap: 0.9rem;
		overflow: auto;
	}

	.cards-container::-webkit-scrollbar {
		width: 10px;
		height: 2px;
	}
  
  /* Track */
  .cards-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  .cards-container::-webkit-scrollbar-thumb {
    background:orangered;
  }
  
</style>
