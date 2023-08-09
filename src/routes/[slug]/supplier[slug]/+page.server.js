
import { error } from '@sveltejs/kit';

export async function load({ params }) {

    console.log(params);

    return {
        product : params.slug
    };
    // throw error(404, 'Not found');
};