<script lang="ts">
	import { article } from '$lib/utils/dummy';
	import { highlightContainer } from '$lib/utils/helpers/code.block';
	let previewData = $state<string>(''),
		container = $state<HTMLDivElement>();
	$effect(() => {
		article().then((data) => {
			previewData = data;
		});

		if (container && previewData) {
			highlightContainer(container as HTMLElement);
		}
	});
</script>

<svelte:head>
	<link rel="stylesheet" type="text/css" href="/horizon-dark.min.css" />
	<link rel="stylesheet" type="text/css" href="/night-owl.min.css" />
</svelte:head>

<div
	id="preview"
	class="tab-content prose prose-lg text-zinc-800 dark:text-zinc-200 hidden"
	bind:this={container}
>
	{#if previewData}
		{@html previewData}
	{:else}
		<div class="flex items-center justify-center h-96">
			<div class="loader">Loading...</div>
		</div>
	{/if}
</div>
