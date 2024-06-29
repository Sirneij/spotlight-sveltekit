<script lang="ts">
	import Post from '$lib/components/reusable/Post.svelte';
	import SimpleLayout from '$lib/components/reusable/SimpleLayout.svelte';
	import { articles } from '$lib/utils/siteMeta';

	const headline = "I write about things I'm learning and things I'm building.";
	const intro =
		'All of my long-form thoughts on programming, leadership, infrastructure, and more, collected in chronological order.';
</script>

<SimpleLayout title={headline} {intro}>
	<div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
		<div class="flex max-w-3xl flex-col space-y-16">
			{#each articles as article}
				<Post {article} />
			{/each}
		</div>
	</div>
</SimpleLayout>
