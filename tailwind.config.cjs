const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'xs': '320px',
			...defaultTheme.screens,

		},
		extend: {}
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')]
};
