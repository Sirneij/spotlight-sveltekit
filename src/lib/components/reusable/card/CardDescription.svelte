<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
	{#if children}
		{@render children()}
	{/if}
</p>
