/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                price: '#ef4444',
                'submit-buy': '#e74242',
            },
            spacing: {
                'header-content': '100px',
                'sidebar-height': '500px',
                'content-height': '500px',
                'list-product-height': '500px',
                'sidebar-width': '292px',
            },
        },
    },
    plugins: [],
}
