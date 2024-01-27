<script>
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer class="px-8 py-4 mt-8">
		<div class="text-center text-gray-700">© {currentYear} Portfolio of Matisse Callewaert</div>
	</footer>
</div>

<style>
	.app {
		background-color: #f5f5f5;
	}
</style>
