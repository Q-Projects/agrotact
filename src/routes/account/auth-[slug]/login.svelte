
<script>
    function handleSubmit (e) {
        console.log(e.target);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <h1>Login</h1>
    <label for="email">email</label>
    <input type="email" name="email" required>
    <label for="password">password</label>
    <input type="password" name='password' required>
    <p>
        Please click <a href="/account/auth-register">Here</a> if you don't have an account.
        Forgot your password? Click <a href="/account/auth-forgot">Here</a>
    </p>
    <button type="submit">Sign In</button>
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