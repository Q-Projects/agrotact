<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let options = [];
	export let query;
	let widx = 0;
	let open = false;

	const dispatch = createEventDispatcher();

	function clicked(e) {
		dispatch('frame', e.target.innerHTML);
		open = !open;
	}
</script>

<svelte:window bind:innerWidth={widx} />

<div role="button" tabindex="0" on:mouseleave={() => (open = false)}>
	<p><button class="underline" on:click={clicked}>{query}</button></p>
	{#if open || widx > 768}
		<section>
			<button class="underline" on:click={clicked}>{query}</button>
			{#each options as option}
				<button
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 5000 }}
					class={query === option ? 'underline' : null}
					on:click={clicked}>{option}</button
				>
			{/each}
		</section>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: 3px solid orangered;
		position: relative;
	}

	p {
		display: inline-block;
	}

	section {
		position: absolute;
		top: -20%;
		right: 0;
		z-index: 1;
		display: flex;
		flex-direction: column;
		height: 160px;
		overflow-y: auto;
		background: white;
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}

	button {
		background: transparent;
		color: inherit;
		text-transform: capitalize;
		width: 120px;
		padding: 10px;
		margin: 0;
		border-radius: 0px;
		transition: background 0.3s linear;
	}

	.underline {
		background: orangered;
		color: whitesmoke;
		font-weight: bolder;
	}

	@media (min-width: 768px) {
		section {
			position: static;
			flex-direction: row;
			align-items: flex-end;
			height: fit-content;
			box-shadow: none;
		}

		p {
			display: none;
		}

		button {
			width: fit-content;
		}
	}
</style>
