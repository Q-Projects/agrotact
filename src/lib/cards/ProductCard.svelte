
<script>
    import img2 from '$lib/assets/headers/gflower.jpg';

    const redirect = () => {

    }
</script>

<div role="button" tabindex="0" on:keypress={redirect} on:click={redirect}>
    <span>-4%</span>
    <img src={img2} alt="n" />
    <small>dispo: Garoua, Maroa, Bertoa</small>
    <h4>Arachide Du Nord</h4>
    <p>Quantity: 6 tonnes</p>
    <p>possible en details  </p>
    <small>300,000fcfa</small>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: 360px;
        padding: 1rem;
        border-radius: 7px;
        border: 1px solid #ddd;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        position: relative;
        font-size: smaller;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    img {
        height: 200px;
        width: 100%;
        transition: 0.4s ease-in;
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

    div:hover p {
        color: red;
    }

    div:hover small {
        color: darkcyan;
        font-weight: bolder;
    }

</style>