<script>
	export let list = [];
	export let name = '?';

	let width;

	let open = false;

	$: if (width > 768) {
		open = true;
	} else {
		open = false;
	}

	function toggleIt(e) {
		
	}
</script>

<svelte:window bind:innerWidth={width} />
<svelte:document on:click={toggleIt} />

<section>
	<h2>{name}</h2>
	{#if open}
		{#each list as { name, href }, i (name)}
			<a {href}>{name}</a>
		{/each}
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.8rem;
		width: 100%;
		height: fit-content;
		overflow-y: hidden;
		text-align: center;
		border-bottom: 1px solid var(--bder-bg);
	}

	@media screen and (min-width: 768px) {
		section {
			width: fit-content;
			text-align: left;
			border-bottom: none;
		}
	}
</style>
