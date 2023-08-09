<script>
	import { page } from '$app/stores';

	import img from '$lib/assets/farmer404.png';

	const goBack = () => window.history.go(-1);
</script>

<div class="container">
	<aside>
		<h1>{$page.status} - {$page.error.message}</h1>
		<br />
		<p>
			<small> If you end up here then you did something wrong or there is a possible Bug</small>
		</p>
		<br />
	</aside>
	<img src={img} alt="404-img" />
    <div class="links">
        <a href="/">Home Page</a> <a href={'.'} on:click={goBack}>Go Back</a>
    </div>
</div>



<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		align-items: space-between;
		justify-content: center;
		gap: 1rem;
		max-width: var(--max-wd, 1400px);
		min-height: 30vh;
		margin-left: auto;
        margin-right: auto;
        margin-top: 8rem;
		font-size: x-large;
		padding: 1rem;
	}

    .links {
        width: 100%;
        text-align: center;
    }

	img {
		width: 100%;
        height: auto;
	}

	a {
        display: inline-block;
		margin-left: 2rem;
	}

	@media screen and (min-width: 768px) {

        .container {
            font-size: xx-large;
        }

		aside,
		img {
			width: calc(50% - 1rem);
		}
	}

	@media screen and (min-width: 968px) {
		aside,
		img {
			width: 30%;
		}
	}
</style>
