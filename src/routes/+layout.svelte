<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';

	const { data, children }: { data: PageData; children: Snippet } = $props();
	const isCreate = $derived(data.url.includes('create'));
</script>

<div class="fixed inset-0 flex justify-center sm:px-8">
	<div class="flex w-full max-w-7xl lg:px-8">
		<div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
	</div>
</div>
<div class="relative" class:h-screen={isCreate}>
	<Header isHomePage={data.url === '/'} {isCreate} />
	<main>
		{@render children()}
	</main>
	{#if !isCreate}
		<Footer />
	{/if}
</div>
