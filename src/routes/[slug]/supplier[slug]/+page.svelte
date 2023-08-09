<script>
	import img from '$lib/assets/headers/gflower.jpg';
	import Details from './details.svelte';
	import ImgDisplay from './imgDisplay.svelte';
	import Related from './related.svelte';
	export let data;
</script>

<div class="container">
	<div class="product-info">
		<ImgDisplay img={img} />    
		<Details product={data.product} />
	</div>
	<Related />
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        width: 100%;
    }

	.product-info {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: space-between;
		gap: 1rem;
		width: 100%;
	}


	@media screen and (min-width: 768px) {

        .container {
            grid-template-columns: 3fr 1fr;
        }

		.product-info {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media ( min-width: 968px) {
		.product-info {
			grid-template-columns: 1fr 2fr;
		}
	}
</style>
