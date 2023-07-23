<script>
    function handleSubmit (e) {
        console.log(e.target);
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Register</h1>
    <label for="email">email</label>
    <input type="email" name="email" required>
    <label for="password">password</label>
    <input type="password" name='password' required>
    <button type="submit">Sign In</button>
    <a href="/account/auth-login">Go back</a>
</form>

<style>

    form {
        margin-top: 8vh;
        background: white;
    }

    a {
        color: var(--hv-grn-bg, green);
        font-weight: bold;
    }
</style>