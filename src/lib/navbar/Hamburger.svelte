<script>
	import { createEventDispatcher } from 'svelte';

	export let open;

	const dispatch = createEventDispatcher();

	const toggle = () => dispatch('toggle', !open);
</script>

<button class={open ? 'cross' : ''} on:click={toggle}>
	<svg class="hamburger" viewBox="0 0 100 100">
		<rect class="line top" width="80" height="10" x="10" y="25" rx="5" />

		<rect class="line middle" width="80" height="10" x="10" y="45" rx="5" />

		<rect class="line bottom" width="80" height="10" x="10" y="65" rx="5" />
	</svg>
</button>

<style>
	button {
		background: transparent;
		padding: 0;
		border-radius: 0;
		height: fit-content;
		width: fit-content;
	}

	.hamburger {
		height: 52px;
		widows: 52px;
	}

	.line {
		transition: y 0.6s ease-in-out 0.4s, opacity 0.2s linear 0.3s, transform 0.3s linear;
		transform-origin: center;
	}

	.cross .line {
		transition: y 0.4s ease-in-out, opacity 0.2s linear 0.3s, transform 0.3s linear 0.3s;
		transform-origin: center;
	}

	.cross :is(.top, .bottom) {
		y: 45;
	}

	.cross .top {
		transform: rotate(45deg);
	}

	.cross .middle {
		opacity: 0;
	}

	.cross .bottom {
		transform: rotate(-45deg);
	}

	button.cross {
		position: fixed;
		right: 80vw;
		transition: all 0.8s ease-in;
		z-index: 8;
	}
</style>
