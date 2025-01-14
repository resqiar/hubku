/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		'./node_modules/preline/preline.js',
	],
	theme: {
		fontFamily: {
			sans: ['Space Grotesk', 'sans serif'],
		},
		extend: {},
	},
	plugins: [
		require('flowbite/plugin'),
		require('preline/plugin'),
	],
}
