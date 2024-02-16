<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let altText: string;
	export let color: string;
	export let headerColor: string;
</script>

<div class="rounded-xl card">
	<div class="card-inner">
		<div class="p-3 rounded-t-xl">
			<h3 class="text-xl font-semibold text-black-900">{title}</h3>
			<p class="text-black-900">{description}</p>
		</div>
		<div class="flex justify-center items-center">
			<img src={imageUrl} alt={altText} class="mt-4 rounded-xl" />
		</div>
	</div>
</div>

<style>
	.card {
		color: white;
		position: relative;
		transition: all 0.2s;
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
	}

	.card::before,
	.card::after {
		content: '';
		background-color: #fab5704c;
		position: absolute;
	}

	.card::before {
		border-radius: 50%;
		width: 10rem;
		height: 10rem;
		top: 30%;
		right: 14%;
	}

	.card::after {
		content: '';
		position: absolute;
	}

	.card .card-inner {
		width: inherit;
		height: inherit;
		background-color: rgba(255, 255, 255, 0.074);
		-webkit-backdrop-filter: blur(100px);
		backdrop-filter: blur(80px);
		border-radius: 1rem;
		transition: all ease 0.3s;
		padding: 1rem;
	}

	.card:hover {
		transform: scale(1.04) rotate(0.2deg);
		transition: transform 0.5s;
	}
</style>
