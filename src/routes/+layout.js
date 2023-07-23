import { page } from '$app/stores';


export function load ({ url }) {

    return {
        main : url.pathname.includes('account') ? false : true
    }
}