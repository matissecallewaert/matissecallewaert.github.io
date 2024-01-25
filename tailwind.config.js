/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.svelte', './public/index.html'],
	theme: {
		extend: {}
	},
	plugins: [],
	safelist: [
		'bg-blue-100',
		'bg-blue-300',
		'bg-orange-100',
		'bg-orange-300',
		'bg-green-100',
		'bg-green-300',
		'bg-purple-100',
		'bg-purple-300'
	]
};
