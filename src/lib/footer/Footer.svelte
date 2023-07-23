<script>
	import FooterAccordion from '$lib/footer/FooterAccordion.svelte';

	const footerData = {
		Categories: [
			{ name: 'Product', href: '/search/product' },
			{ name: 'Product Type 2', href: '/search/product/arachide' },
			{ name: 'Product Type 3', href: '/' },
			{ name: 'Product Type 4', href: '/' }
		],
		About: [
			{ name: 'About Us', href: '/about' },
			{ name: 'Our Services', href: '/about#services' },
			{ name: 'Terms & Conditions', href: '/terms' },
			{ name: 'Privacy Policy', href: '/trems#link4' },
			{ name: 'Customer Policy', href: '/terms#link3' }
		],
		Support: [
			{ name: 'Community', href: '/about' },
			{ name: 'Feedback', href: '/about#faq' },
			{ name: 'Products', href: '/' },
			{ name: 'F.A.Q', href: '/about#faq' }
		],
		Customers: [
			{ name: 'Sign In', href: '/account' },
			{ name: 'Register', href: '/account' },
			{ name: 'Get to Us', href: '/' },
			{ name: 'Suppliers', href: '/search/supplier' },
			{ name: 'Shop', href: '/search/product' }
		]
	};
</script>

<footer>
	<div class="footer-container">
		{#each Object.keys(footerData) as group (group)}
			<section>
				<h2>{group}</h2>
				{#each footerData[group] as { name, href }, i (name)}
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
				Our vision is to serve africains and the world. We are open 24/5 but u can get to us anytime
			</p>
		</aside>
	</div>
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
