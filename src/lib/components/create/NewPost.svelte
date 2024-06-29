<script lang="ts">
	import Editor from '$lib/components/create/mini/Editor.svelte';
	import Tabs from '$lib/components/create/mini/Tabs.svelte';
	import Info from '$lib/components/create/mini/Info.svelte';
	import Preview from '$lib/components/create/mini/Preview.svelte';

	let container = $state<HTMLDivElement>(),
		textArea = $state<HTMLTextAreaElement>();
</script>

<div class="flex max-h-screen" bind:this={container}>
	<div class="md:w-3/4">
		<Tabs />
		<Editor {container} textArea={textArea as HTMLTextAreaElement} />
		<Preview />
	</div>
	<!-- Info Container -->
	<div class="hidden md:w-1/4 bg-transparent dark:bg-transparent md:block">
		<Info />
	</div>
</div>
