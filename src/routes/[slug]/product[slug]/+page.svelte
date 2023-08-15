<script>
	import img from '$lib/assets/headers/gflower.jpg';
	import Details from './details.svelte';
	import ImgDisplay from './imgDisplay.svelte';
	import Related from './related.svelte';
	export let data;
</script>

<div class="container">
	<ImgDisplay {img} />
	<Details product={data.product} />
	<Related />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		.container {
			grid-template-columns: 2fr 2fr 1fr;
		}
	}
</style>
