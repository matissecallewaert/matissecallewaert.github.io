<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let altText: string;
	export let colorClass: string;
	let headerColorClass: string;

	$: {
		headerColorClass = `${colorClass.replace('200', '300')}`;
	}
</script>

<div class={colorClass + ' p-6 rounded-xl card'}>
	<div class="card-inner">
		<div class="{headerColorClass} p-3 rounded-t-xl" style="margin:-1.5rem -1.5rem 0 -1.5rem">
			<h3 class="text-xl font-semibold">{title}</h3>
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
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.card-inner {
		width: inherit;
		height: inherit;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 8px;
	}

	.card:hover {
		transform: scale(1.04) rotate(1deg);
		transition: transform 0.5s;
	}
</style>
