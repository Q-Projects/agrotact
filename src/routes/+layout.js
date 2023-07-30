import { page } from '$app/stores';


export function load ({ url }) {

    return {
        main : url.pathname.includes('account') ? false : true,
        shortcuts: url.pathname.includes('account') ? false : {
            Categories: [
                { name: 'Product', href: '/search/product' },
                { name: 'Product Type 2', href: '/search/product/arachide' },
                { name: 'Product Type 3', href: '/' },
                { name: 'Product Type 4', href: '/' }
            ],
            About: [
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/about#services' },
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/trems#link4' },
                { name: 'Customer Policy', href: '/terms#link3' }
            ],
            Support: [
                { name: 'Community', href: '/about' },
                { name: 'Feedback', href: '/about#faq' },
                { name: 'Products', href: '/' },
                { name: 'F.A.Q', href: '/about#faq' }
            ],
            Customers: [
                { name: 'Sign In', href: '/account' },
                { name: 'Register', href: '/account' },
                { name: 'Get to Us', href: '/' },
                { name: 'Suppliers', href: '/search/supplier' },
                { name: 'Shop', href: '/search/product' }
            ]
        }
    }
}