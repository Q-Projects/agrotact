<script>
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let query = '';
	let open = false;

	const dispatch = createEventDispatcher();

	const stylo = (e) => dispatch('style', e.target.innerHTML);

	const sortBy = (e) => dispatch('sortBy', e.target.value);

	const search = (e) => {
		if (open) dispatch('search', query);
		open = !open;
	};
</script>

<div>
	<aside>
		{#if open}
			<input
				transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
				type="search"
				name="search"
				bind:value={query}
				placeholder="Name, Category , Quantity ...etc"
			/>
		{/if}
		<button on:click={search}> L </button>
	</aside>

	<section>
		<button on:click={stylo}>1</button>
		<button on:click={stylo}>2</button>
		<button on:click={stylo}>3</button>
	</section>

	<select on:change={sortBy} name="sort" id="">
		<option value="n/a">Sort By</option>
		<option value="quantity">Quantity</option>
		<option value="Price">Price</option>
		<option value="Harvest">Harvest</option>
	</select>
</div>

<style>
	div {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		gap: 0.8rem;
		width: 100%;
		max-width: var(--max-wd, 1400px);
		margin: 1rem 0;
		padding-bottom: 1rem;
		border-bottom: 4px solid #ddd;
	}

	select,
	input {
		outline: none;
		border: 0;
		padding-left: 5px;
		height: 32px;
	}

	select {
		width: 80px;
	}

	button {
		width: 36px;
		height: 100%;
		padding: 0;
		border-radius: 0;
		background: dimgray;
	}

	aside {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: calc(100% - 80px- 0.9rem);
		border: 1px solid dimgray;
		border-radius: 12px;
		padding: 0;
		height: 34px;
		overflow: hidden;
	}

	@media screen and (min-width: 768px) {
		div {
			flex-flow: row nowrap;
		}

		input {
			padding-left: 10px;
		}
	}
</style>
