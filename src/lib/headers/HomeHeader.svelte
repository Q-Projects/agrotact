<script>
	import { slide, fade, fly } from 'svelte/transition';
	import { elasticIn, elasticInOut, quintIn, quintInOut, quintOut } from 'svelte/easing';

	import img1 from '$lib/assets/headers/route1.jpg';
	import img2 from '$lib/assets/headers/route2.jpg';
	import img3 from '$lib/assets/headers/gflower.jpg';

	let b = 0;

	let imgArr = [img1, img2, img3];

	setInterval(() => {
		b = (b + 1) % 2;
	}, 5000);
</script>

<header>
	{#key b}
		<img out:fade={{ duration: 300, easing: quintIn }} src={imgArr[b]} alt="img {b}" />
	{/key}

	<div>{b}</div>
</header>

<style>
	header {
		display: flex;
		width: 100%;
		height: 500px;
		overflow: hidden;
		position: relative;
	}

	img {
		height: inherit;
		width: 100%;
		filter: grayscale(60%);
	}

	div {
		position: absolute;
		top: 50%;
		left: 45%;
		font-size: large;
		font-weight: bolder;
		color: red;
	}
</style>
