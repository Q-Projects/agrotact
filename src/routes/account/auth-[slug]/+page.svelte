

<script>
    import Forgot from './forgot.svelte';
	import Login from './login.svelte';
	import Register from './register.svelte';
    export let data;

</script>

{#if data.display === 'login'} 
    <Login />
{:else if data.display === 'register'}
    <Register />
{:else}
    <Forgot />
{/if}

