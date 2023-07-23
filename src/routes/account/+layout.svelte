
<div>
    <slot />


<footer>
    <p>&copy; 2023 Talla Enterprises & fils .Ltd - All rights reserved</p>
    <p>
        <a href="/terms">Terms & Conditions</a> and 
        <a href="/terms">Customers Policy</a>
    </p>
</footer>

</div>


<style>

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(225, 227, 227);
        min-height: 100vh;
        width: 100%;
        padding: 1rem;
    }

    footer {
        text-align: center;
    }

    a {
        color: var(--hv-grn-bg, green);
        font-weight: bold;
    }

</style>