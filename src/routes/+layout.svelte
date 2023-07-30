<script>
	import { beforeUpdate } from 'svelte';
	import '$lib/globalStyles.css';
	import Footer from '$lib/footer/Footer.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';

	export let data;
	let b = data.main;

	beforeUpdate(() => {
		console.log('...updating');
		b = data.main;
	});
</script>

{#if b}
	<Navbar />
{/if}

<main>
	<slot />
</main>

<Footer routes={data.shortcuts} />

<style>
	main {
		width: 100%;
	}
</style>
