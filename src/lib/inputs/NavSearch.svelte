<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let name = 'look';
	export let holder = 'Name, Category , Quantity ...etc';
	let open = false;

	const toggle = () => (open = !open);

	const handleChange = (e) => {
		console.log(e.target.value);
	};
</script>

<aside>
	<button on:click={toggle}> L </button>
	{#if open}
		<input
			transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
			on:change={handleChange}
			type="search"
			{name}
			placeholder={holder}
		/>
	{/if}
</aside>

<style>
	input {
		width: 86px;
		outline: none;
        border: 0;
	}

	button {
		width: 34px;
		height: 36px;
		padding: 0;
		border-radius: 0;
        background: transparent;
	}

	aside {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: fit-content;
		border: 1px solid darkgreen;
        border-radius: 12px;
		padding: 0;
		height: 37px;
        overflow: hidden;
	}

	@media screen and (min-width: 768px) {
        input {
            width: 300px;
        }
	}
</style>
