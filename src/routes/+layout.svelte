<script>
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer class="px-8 py-4 mt-8">
		<div class="text-center">© {currentYear} Portfolio of Matisse Callewaert</div>
	</footer>
</div>

<style>
	:root {
		color: white;
		background-color: #121212;
	}
</style>
