<script>
	import ProductFrame from '../../lib/frames/ProductFrame.svelte';
	import SupplierFrame from '../../lib/frames/SupplierFrame.svelte';

	const days = ['this month', 'this week', 'today'];
	const suppliers = ['best','highly rated'];
</script>

<div class="page-container">
	<slot />
</div>

<ProductFrame style={2} name={'Recommended'} options={days} />
<SupplierFrame style={1} name={'suppliers'} options={suppliers}  />


<style>
	.page-container {
		width: 100%;
		max-width: var(--max-wd, 1400px);
		margin: 6rem auto;
		padding: 2rem;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
</style>
