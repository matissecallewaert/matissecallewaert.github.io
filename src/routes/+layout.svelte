<script>
	import Header from './Header.svelte';

	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="px-8 py-4 mt-8">
		<div class="text-center text-gray-700">© {currentYear} Portfolio of Matisse Callewaert</div>
	</footer>
</div>
