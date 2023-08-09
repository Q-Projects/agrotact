<script>
	import Card from '../lib/Card.svelte';
	import HomeHeader from '../lib/headers/HomeHeader.svelte';
	import FrameOptions from '../lib/inputs/FrameOptions.svelte';
	import ProductFrame from '../lib/frames/productFrame.svelte';

	const category = ['equipements or tools', 'crops', 'machines', 'meat', 'fruits', 'seed'];
	const days = ['this month','this week','today']
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HomeHeader />

<ProductFrame name={'Looking for'} options={category} />
<ProductFrame name={'Recently Published'} options={days} />


<div class="page-heading">
	<a href="/">
		<h3>Best Providers</h3>
	</a>
	<a href="/account">
		<h3>Trending Providers</h3>
	</a>
	<a href="/login">
		<h3>Country Providers</h3>
	</a>
	<ul>
		<li>All</li>
	</ul>
</div>

<div class="cards-container-II">
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</div>

<div class="page-heading">
	<a href="/terms">Policy</a>
	<a href="/summary">Customer Services</a>
	<a href="/">Trends</a>
	<a href="/">Good Care</a>
	<a href="/">Reviews on Us & testimonies</a>
	<a href="/about/F.A.Q">Support</a>
</div>

<style>
	.page-heading {
		width: 100%;
		max-width: 1400px;
		margin: 1rem auto;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cards-container-II {
		display: grid;
		grid-template-columns: repeat(10, 180px);
		grid-template-rows: 1fr;
		width: 100%;
		max-width: var(--max-wd, 1400px);
		overflow-x: scroll;
		justify-content: start;
		align-items: start;
		gap: 0.5rem;
		margin: 1rem auto;
		padding: 2rem;
	}

	.cards-container-II {
		grid-template-columns: repeat(10, 200px);
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media screen and (min-width: 768px) {
		.cards-container {
			grid-template-columns: repeat(3, 1fr);
			overflow-x: hidden;
		}
	}

	@media screen and (min-width: 968px) {
		.cards-container {
			grid-template-columns: repeat(5, 1fr);
		}

		ul {
			flex-direction: row;
		}
	}
</style>
