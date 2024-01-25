<script lang="ts">
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let altText: string;
	export let colorClass: string;
	let headerColorClass: string;

	$: {
		headerColorClass = `${colorClass.replace('100', '300')}`;
	}
</script>

<div class={colorClass + ' p-6 rounded-xl'}>
	<div class="{headerColorClass} p-3 rounded-t-xl" style="margin:-1.5rem -1.5rem 0 -1.5rem">
		<h3 class="text-xl font-semibold">{title}</h3>
		<p class="text-gray-700">{description}</p>
	</div>
	<img src={imageUrl} alt={altText} class="mt-4 rounded-xl" />
</div>
