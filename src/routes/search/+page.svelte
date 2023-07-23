<script>
	import Card from "../../lib/Card.svelte";
	import SearchBar from "../../lib/inputs/SearchBar.svelte";
	import Pagination from "../../lib/pagination.svelte";

    function sortList ( e ) {
        console.log(e.detail)
    };

    function search ( query ) {
        console.log(query);
    };

    function changeCard ( style ) {
        console.log(style);
    };

</script>

<div class="products">

    <div>
        <SearchBar on:sortBy={sortList} on:search={search} on:style={changeCard}  />

        <div class="cards-container">
            <Card />
            <Card />
        </div>
        <Pagination />
    </div>

        <form>
            <h1>Filter Box</h1>
            <label for="country">country</label>
            <input type="text" name="country" id="" />
            <label for="town">town / city</label>
            <input type="text" name="town" id="">

            <h2>Product Details</h2>
            <label for="type">Type</label>
            <input type="text" name="type" id="" />
            <label for=""></label>
            <label for="time">Recolted</label>
            <input type="text" name="time" id=""/>
            <label for="quantity">quantity</label>
            <input type="text" name="quantity" />

            <button>Search</button>
        </form>
</div>

<style>
    .products {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: space-between;
        align-items: start;
        width: 100%;
    }

    form {
        padding-top: 0;
    }

    .cards-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.4rem;
    }

    h1 {
        margin: 2rem 0;
        position: relative;
    }

    h1::after {
        content: '';
        width: 100%;
        height: 3px;
        background: #ddd;
        position: absolute;
        top: 100%;
        left: 0;
    }

    @media screen and (min-width:290px) {
        .cards-container {
            grid-template-columns: repeat( 2, 1fr);
            gap: 0.8rem;
        }
    }
    @media screen and (min-width:768px) {
        .products {
            grid-template-columns: 68% 29%;
            align-items: start;
        }

        .cards-container {
            grid-template-columns: repeat( 3 , 1fr );
        }
    }

    @media screen and (min-width: 1024px) {

        .cards-container {
            grid-template-columns: repeat( 4 , 1fr );
        }
    }


</style>