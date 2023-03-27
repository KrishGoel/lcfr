/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}", "./src/**/**/*.{html,js,svelte,ts}"],
	theme: {
		screens: {
			'2xl' : { 'max': '1920px' },
			'xl': { 'max': '1280px' },
			'lg': { 'max': '1080px' },
			'md': { 'max': '780px' },
			'sm': { 'max': '640px' }
		},
		extend: {},
	},
	plugins: [],
}
