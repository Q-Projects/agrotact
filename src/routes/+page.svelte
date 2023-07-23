<script>
	
	import Card from "../lib/Card.svelte";
	import HomeHeader from "../lib/headers/HomeHeader.svelte";


	let b = 'nana';
	let count = 0;

	$: if ( count > 12 ) {
		console.log('More than 12');
		alert('Count is too much');
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HomeHeader />

<div class='page-heading'>
	<h3>Products Category</h3>

	<ul>
		<li>All</li>
		<li>Tools</li>
		<li>Tractors</li>
		<li>Trailers</li>
		<li>Fertilizers</li>
		<li>Suits</li>
	</ul>
</div>


<div class="cards-container">
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
	<Card />
</div>

<div class='page-heading'>
	<h3>Recently Publish</h3>

	<ul>
		<li>this week</li>
		<li>this month</li>
		<li>Months ago</li>
		<li>1 year</li>
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

<div class='page-heading'>
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

	.cards-container, .cards-container-II {
		display: grid;
		grid-template-columns: repeat( 10, 180px );
		grid-template-rows: 1fr ;
		width: 100%;
		max-width: var(--max-wd,1400px);
		overflow-x: scroll;
		justify-content: start;
		align-items: start;
		gap: 0.5rem;
		margin: 1rem auto;
		padding: 1rem;
	}

	.cards-container-II {
		grid-template-columns: repeat(10, 200px );
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media screen and (min-width:768px) {
		.cards-container {
			grid-template-columns: repeat( 3, 1fr );
			overflow-x:hidden;
		}
	}

	@media screen and (min-width:968px) {
		.cards-container {
			grid-template-columns: repeat( 5, 1fr );
		}

		ul {
			flex-direction: row;
		}
	}
</style>