<script>
	import HomeHeader from '../lib/headers/HomeHeader.svelte';
	import ProductFrame from '../lib/frames/ProductFrame.svelte';
	import SupplierFrame from '../lib/frames/SupplierFrame.svelte';

	const category = ['equipements or tools', 'crops', 'machines', 'meat', 'fruits', 'seeds'];
	const days = ['this month', 'this week', 'today'];
	const suppliers = ['best','new','highly rated'];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HomeHeader />

<ProductFrame name={'Looking for'} options={category} />
<ProductFrame name={'Recently Published'} options={days} />

<SupplierFrame name={'Suppliers'} options={suppliers} />

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

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media screen and (min-width: 968px) {
		ul {
			flex-direction: row;
		}
	}
</style>
