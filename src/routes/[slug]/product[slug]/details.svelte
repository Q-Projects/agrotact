<script>
    export let product = false;
</script>

<aside>
    <h1>{product}</h1>
    <p>
        <a href="/search">Category 1</a>
        <a href="/search">Category 2</a>
        <a href="/search">Category 3</a>
    </p>
    <p>Price : 877700 xFa</p>
    <p>Quantity Remaining: 5 tonnes</p>
    <p>Havest Day:</p>
    <p>Published Day: 1 week ago</p>

    <p>
        <b>Description:</b> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam, voluptatibus optio
        culpa cum impedit incidunt itaque beatae quo aperiam sit eum officiis quos. Quae nisi officiis
        quasi tempore provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque
        eos culpa, repudiandae commodi laudantium quos illum quidem similique dolores quaerat velit veritatis
        dignissimos iste! Quibusdam nostrum incidunt mollitia consequuntur?
    </p>

    <section>
        <button style="background-color: black;">Contact Supplier</button>
        <button>Get to Supplier Shop</button>
    </section>
</aside>

<style>

    aside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        line-height: 1.9;
    }

    section {
        margin-top: 1.9rem;
    }

    button {
        padding: 0.8rem;
        margin-right: 2rem;
    }
    
</style>