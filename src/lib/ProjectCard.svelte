<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let altText: string;
</script>

<div class="p-6 rounded-xl card">
	<div class="card-inner">
		<div class="p-3 rounded-t-xl" style="margin:-1.5rem -1.5rem 0 -1.5rem">
			<h3 class="text-xl font-semibold text-gray-700">{title}</h3>
			<p class="text-gray-700">{description}</p>
		</div>
		<img src={imageUrl} alt={altText} class="mt-4 rounded-xl" />
	</div>
</div>

<style>
	.card {
		transition: all 0.2s;
		position: relative;
		cursor: pointer;
		background: linear-gradient(to right top, rgba(255, 165, 0, 0.2), rgba(31, 108, 120, 0.4));
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.card-inner {
		width: inherit;
		height: inherit;
		border-radius: 8px;
	}

	.card:hover {
		transform: scale(1.04) rotate(1deg);
		transition: transform 0.5s;
	}
</style>
