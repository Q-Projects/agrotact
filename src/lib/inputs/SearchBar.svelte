<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, slide } from 'svelte/transition';
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
				transition:slide={{ duration: 300, easing: quintOut, axis: 'x' }}
				type="search"
				name="search"
				bind:value={query}
				placeholder="Name, Category , Quantity ...etc"
			/>
			<button on:click={search}> Search </button>
		{:else}
			<button transition:fade={{ delay: 300, duration: 200 }} on:click={() => (open = !open)}>
				L
			</button>
		{/if}
	</aside>

	<section>
		<button on:click={stylo}>1</button>
		<button on:click={stylo}>2</button>

		<select on:change={sortBy} name="sort" id="">
			<option value="n/a">Sort By</option>
			<option value="quantity">Quantity</option>
			<option value="Price">Price</option>
			<option value="Harvest">Harvest</option>
		</select>
	</section>
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
	}

	select,
	input {
		outline: none;
		padding-left: 5px;
		height: 38px;
		width: 200px;
	}

	select {
		width: 80px;
	}

	button {
		width: fit-content;
		height: 38px;
		border-radius: 0px;
		padding: 0 10px;
	}

	aside {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0;
		overflow: hidden;
	}

	section {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		width: fit-content;
	}

	@media screen and (min-width: 768px) {
		div {
			flex-flow: row nowrap;
		}

		aside {
			width: 50%;
		}

		section {
			width: 40%;
		}
	}
</style>
