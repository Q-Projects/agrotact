<script>
	let subpage = '';
	let pageList = ['Report','profile','products','suppliers', 'subscription', 'announcements', 'clients'];

	function changePage(a) {
		subpage = a.target.innerHTML;
	}
</script>

<h1>This page is meant for all users</h1>

<div class="summary-wrapper">

	<div class="nav">
		{#each pageList as link}
			<button on:click|preventDefault={changePage}>{link}</button>
		{/each}
	</div>

	<div class="page">
        infos on {subpage}
    </div>
</div>

<style>
	.summary-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		max-width: var(--max-wd, 1400px);
		width: calc(100% - 2rem);
		margin: 3rem auto;
        border-radius: 12px;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	}

	.nav, .page {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding: 1rem;
        width: 100%;
	}

    .nav {
        background: var( --hvy-bg, darkgreen);
        border-radius: 12px 12px 0 0 ;
    }

	button {
        text-transform: capitalize;
		padding: 0;
		background: transparent;
	}

    button:hover {
        color: green;
    }

	@media screen and (min-width: 768px) {
		.summary-wrapper {
			grid-template-columns: 300px auto;
        }

        .nav {
            border-radius: 12px 0 0 12px  ;
        }

		.page {
			border-radius: 0 12px 12px 0;
		}
	}
</style>
