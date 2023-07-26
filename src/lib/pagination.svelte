<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let numberOfPages = 1;
	export let currentNumber = 1;

	function next() {
		if (currentNumber + 1 <= numberOfPages) dispatch('page', currentNumber + 1);
	}

	function previous() {
		if (currentNumber - 1 > 0) dispatch('page', currentNumber - 1);
	}

	function goTo(number) {
		dispatch('page', number);
	}

	// Conditional rendering of pages using Array from method:
	$: list =
		numberOfPages < 6
			? Array.from({ length: numberOfPages }, (value, index) => index + 1)
			: currentNumber < numberOfPages - 3
			? Array.from({ length: 5 }, (value, index) => index + currentNumber)
			: Array.from({ length: 5 }, (value, index) => index + numberOfPages - 4);
</script>

<div>
	<select on:change={(e) => dispatch('per', e.target.value)} name="number">
		<option value="10">10</option>
		<option value="30">30</option>
		<option value="50">50</option>
		<option value="100">100</option>
	</select>

	<section>
		<button on:click={previous}>&lsaquo;</button>
		{#each list as item}
			<button class={currentNumber === item ? 'current' : null} on:click={() => goTo(item)}>
				{item}
			</button>
		{/each}
		<button on:click={next}>&rsaquo;</button>
	</section>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 1.2rem auto;
	}

	select {
		width: 52px;
		height: 36px;
		padding-left: 6px;
	}

	button {
		color: inherit;
		background: transparent;
		padding: 0.4rem;
		border-radius: 0;
	}

	button:hover {
		border: 1px solid #ddd;
		background: transparent;
	}

	.current {
		border: 1px solid red;
	}

	@media (min-width: 768px) {
		button {
			padding: 0.6rem;
		}
	}
</style>
