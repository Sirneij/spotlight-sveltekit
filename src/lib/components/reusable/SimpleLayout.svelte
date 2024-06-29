<script lang="ts">
	import Container from '$lib/components/reusable/Container.svelte';
	import type { Snippet } from 'svelte';

	let { title, intro, children }: { title: string; intro: string; children: Snippet } = $props();
</script>

<Container className="mt-16 sm:mt-32">
	<header class="max-w-2xl">
		<h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			{title}
		</h1>
		<p class="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
			{intro}
		</p>
	</header>
	<div class="mt-16 sm:mt-20">
		{@render children()}
	</div>
</Container>
