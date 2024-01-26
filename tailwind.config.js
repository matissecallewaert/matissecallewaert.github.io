/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.svelte', './public/index.html'],
	theme: {
		extend: {}
	},
	plugins: [],
	safelist: [
		'bg-blue-200',
		'bg-blue-300',
		'bg-orange-200',
		'bg-orange-300',
		'bg-green-200',
		'bg-green-300',
		'bg-purple-200',
		'bg-purple-300'
	]
};
