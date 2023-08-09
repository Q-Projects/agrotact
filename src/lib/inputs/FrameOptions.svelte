<script>
	export let options = [];
    export let current = 1

	function clicked(e) {
		console.log(e.target.innerHTML);
        current = e.target.innerHTML.toLowerCase();
	}
</script>

<div>
	{#each options as option }
		<button class={current === option ? 'underline' : null } on:click={clicked}>{option}</button>
	{/each}
</div>

<select name="" id="">
    {#each options as option }
		<option class={current === option ? 'underline' : null } on:click={clicked}>{option}</option>
	{/each}
</select>

<style>

    div {
        display: none;
    }

    select {
        width: 70px;
    }

	button {
		background: transparent;
		color: inherit;
        text-transform: capitalize;
        padding: 10px;
        border-radius: 0px;
        border-bottom: 4px solid orangered;
	}

    .underline {
        border-bottom: none;
        transition: all 0.3s linear;
    }

    @media (min-width: 768px ) {
        div {
            display: inline-block;
        }
        select {
            display: none;
        }
    }
</style>
