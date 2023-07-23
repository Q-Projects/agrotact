<script>
	import Hamburger from '$lib/navbar/Hamburger.svelte';
	import BtnAccount from '$lib/navbar/BtnAccount.svelte';
	import SearchBar from '$lib/navbar/SearchBar.svelte';
	import { fade } from 'svelte/transition';

	let open = false;

	const clicked = () => {
		console.log('hamburger clicked')
		open = !open
	}
</script>

<nav>
	<div>
		<h1 class="logo">AgriMart</h1>
		<SearchBar />
		<BtnAccount />
		<Hamburger on:toggle={clicked} {open} />
	</div>
</nav>

{#if open}
<section transition:fade>
	<a href="/">Home</a>
	<a href="/about">About Us</a>
	<a href="/shop">Navigate</a>
	<a href="/account">Account</a>
</section>
{/if}

<style>
	nav {
		/* color: var(--lgt-grn-bg);
		background: var(--hvy-bg); */
		background: transparent;
		width: 100%;
		padding: var(--bx-paddx);
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}

	div {
		position: relative;
		max-width: var(--max-wd, 1400px);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	section {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 6;
		width: 75vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: red;
	}

</style>
