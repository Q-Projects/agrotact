import { error } from '@sveltejs/kit';


export function load ({ params }) {
    if ( [ 'login','register','forgot' ].includes(params.slug) ) {
        console.log( 'valid routes');
        return {
            display : params.slug
        }
    };
    throw error( 403, 'This Request is Forbidden' );
};