<script>
	export let product = {
		name: 'dummy',
		category: ['dum 1', 'dum 2', 'dum 3'],
		images: ['/lib', 'hi'],
		promotion: true,
		discount: 4,
		price: 1200
	};
</script>

<a href="/search/product-ooo">
	<img src={product.images[0]} alt={product.name} />

	<ul>
		<li>
			<strong>{product.name}</strong>
		</li>

		{#if product.discount}
			<li>
				{product.price} xfa
			</li>
		{:else}
			<li>
				{product.price} xfa
			</li>
		{/if}
	</ul>
</a>

<style>
	a {
		display: flex;
		justify-content: flex-start;
		align-items: center;
        gap: 0.6rem;
		height: 82px;
		position: relative;
	}

	img {
		background: blueviolet;
		height: 64px;
		width: 76px;
	}
</style>
