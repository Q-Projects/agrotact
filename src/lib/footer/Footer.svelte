<script>
	import FooterAccordion from '$lib/footer/FooterAccordion.svelte';

	export let routes;
	
</script>

<footer>
	{#if routes}
		<div class="footer-container">
			{#each Object.keys(routes) as group (group)}
				<section>
					<h2>{group}</h2>
					{#each routes[group] as { name, href }, i (name)}
						<a {href}>{name}</a>
					{/each}
				</section>
			{/each}

			<aside class="social">
				<ul>
					<li>fb</li>
					<li>Tw</li>
					<li>Wa</li>
					<li>In</li>
				</ul>
				<p>Last update: 14/07/2023 10:55pm</p>
				<p>&copy; 2023 Talla Enterprises & fils .Ltd - All rights reserved</p>
				<p>
					Our vision is to serve africains and the world. We are open 24/5 but u can get to us
					anytime
				</p>
			</aside>
		</div>
	{:else}
		<div class="footer-account">
			<p>&copy; 2023 Talla Enterprises & fils .Ltd - All rights reserved</p>
		<p>  
			<b><a style="color: green;" href="/terms">Terms & Conditions</a> </b> and
			<b><a style="color: green;" href="/terms">Customers Policy</a></b>
		</p>
		</div>
	{/if}
</footer>

<style>
	footer {
		width: 100%;
		background: var(--hvy-grn-bg, transparent);
		color: var(--ylw-bg, inherit);
	}

	.footer-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1.6rem;
		margin: 0 auto;
		padding: 1rem;
		max-width: var(--max-wd, 1400px);
	}

	aside {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0.8rem;
		width: 100%;
		text-align: center;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.8rem;
		margin: 1.5rem auto;
	}

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

	.footer-account {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	@media screen and (min-width: 768px) {
		.footer-container {
			flex-flow: row wrap;
		}

		aside {
			display: flex;
			align-items: flex-start;
			width: fit-content;
			text-align: left;
		}

		ul {
			justify-content: flex-start;
			margin: 1rem 0;
		}

		section {
			width: fit-content;
			text-align: left;
			border-bottom: none;
		}
	}
</style>
