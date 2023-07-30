
<script>
    import img2 from '$lib/assets/headers/gflower.jpg';

    export let structure = 0; 
    export let name;
    export let quantity;
    export let price;
    export let discount;
    export let promotion;
    export let towns

    const redirect = () => {

    }
</script>

<button class={structure === 1 ? 'cardOne' : 'cardTwo' } on:click={redirect}>
    {#if promotion} 
        <span>-{discount}%</span>
    {/if}
    <img src={img2} alt="n" />
    <small>{towns.join(', ')}</small>
    <h4>{name}</h4>
    <p>Quantity: {quantity}</p>
    <p>possible en details  </p>
    <p>{price} xfa</p>
</button>

<style>
    button {
        width: 100%;
        padding: 1rem;
        border-radius: 7px;
        border: 1px solid #ddd;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        position: relative;
        font-size: smaller;
        cursor: pointer;
        background: transparent;
        color: black;
    }

    img {
        height: 200px;
        width: 100%;
    }

    span {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 0 0 12px;
        background: red;
        color: white;
        width: 50px;
        height: 30px;
        text-align: center;
    }

    small {
        text-overflow: ellipsis;
    }

    .cardOne {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 380px;
    }

    .cardTwo {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-items: flex-start;
        height: 240px;
    }

    .cardTwo img {
        width: 47%;
        height: 100%;
    }
</style>