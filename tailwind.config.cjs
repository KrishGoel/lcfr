/** @type {import("tailwindcss").Config} */

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}", "./src/**/**/*.{html,js,svelte,ts}"],
	theme: {
		screens: {
			'sm': {'min': '0px', 'max': '450px'},
			'md': {'min': '450px', 'max': '720px'},
			'lg': {'min': '720px', 'max': '1920px'},
			'xl': {'min': '1920px'}
		  },
		extend: {},
	},

	// To be able to use calc(), uncomment the following line
	mode: 'jit',

	plugins: [],
}
