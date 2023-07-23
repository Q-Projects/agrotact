<script>
	import AboutHeader from '$lib/headers/AboutHeader.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<AboutHeader />

<h1>About US</h1>

<div id="who">
	<section>
		<h2>Our Vision</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem aspernatur tempore,
			illo veniam deleniti mollitia animi optio exercitationem ea debitis, odio corrupti quasi
			dolores et corporis voluptatum facere. Sapiente.
		</p>
		<ol>
			<li>Help</li>
			<li>Build</li>
			<li>Encourage</li>
		</ol>
	</section>

	<img src="" alt="img" />
</div>

<div class="service-slider">
	<section>
		<h2>Our Services</h2>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum velit nam autem aspernatur eaque
		possimus voluptas doloribus pariatur ipsam provident, voluptatibus, hic non. Id, voluptatem quis.
		Ab eligendi quis hic.
	</section>

	<section>
		<button> &lt; </button>
		<div class="service-box">
			<h3>Service Name</h3>
			<h3>Type of Service</h3>
		</div>
		<button>&gt;</button>
	</section>
</div>

<div>
	<section>
		<h2>The Best Possible Quality?</h2>
		<dl>
			<dt>Best Suppliers</dt>
			<dd>we do .....</dd>
			<dt>Best Market Enviroment</dt>
			<dd>The aim was ....</dd>
			<dt>Our Help is top notch</dt>
			<dd>Through this platform we......</dd>
		</dl>
	</section>

	<img src="" alt="video" />
</div>

<div class="opportunities">
	<section>
		<h2>Get in Contact with Farmers and Companies in Africa</h2>
		<p>We aim to ease your efforts and times on AgriMart :</p>
	</section>

	<ul class="o-list">
		<li>Access to fruits</li>
		<li>Access to Seeds</li>
		<li>Access to Weeds</li>
		<li>Access to Farmers</li>
		<li>Access to Big Producers</li>
	</ul>
</div>

<h1 id="tuto">Where to start?</h1>

<div class="start-guide">
	<div class="funny" />
	<h3>Service Name</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque possimus? Sunt praesentium
		dolor perferendis sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque nam
		dignissimos vitae delectus quam error? In fugit aspernatur mollitia, consectetur itaque
		adipisci, corporis quis reiciendis est nemo quae vel. Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Fuga deleniti culpa assumenda minima. Reprehenderit, libero soluta, obcaecati
		tempora earum molestias nobis culpa magni repellendus perspiciatis voluptatem maxime veritatis
		est at. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum ducimus error nihil
		ratione, ab quidem, placeat illo sequi debitis sunt recusandae nam suscipit asperiores ut
		pariatur, totam vero adipisci.
	</p>
</div>

<h1>F.A.Q</h1>
<div id="faq">
	<p>Please Feel Free to contactUS. We will be glad to help you</p>
	<button>Get To US Now</button>
</div>

<style>
	div {
		width: 100%;
		max-width: var(--max-wd, 1400px);
		margin: 1rem auto;
		padding: 1rem;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: flex-start;
	}

	h1 {
		max-width: var(--max-wd, 1400px);
		width: 100%;
		padding: 1rem;
		margin: 1rem auto;
	}

	h2 {
		width: 100%;
		text-align: left;
		color: blue;
	}

	img {
		background: blue;
		width: 300px;
		height: 300px;
	}

	section {
		width: 100%;
	}

	#faq {
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 768px) {
		section {
			width: 50%;
		}

		h1 {
			text-align: center;
		}
	}

	@media (min-width: 1028px) {
		section {
			width: 49%;
		}
	}
</style>
