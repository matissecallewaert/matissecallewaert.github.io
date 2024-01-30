<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let altText: string;
	export let color: string;
	export let headerColor: string;
</script>

<div class="p-6 rounded-xl card" style="background:{color}">
	<div class="card-inner">
		<div
			class="p-3 rounded-t-xl"
			style="margin:-1.5rem -1.5rem 0 -1.5rem; background: {headerColor}"
		>
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
		transition: all 0.2s;
		position: relative;
		cursor: pointer;
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
