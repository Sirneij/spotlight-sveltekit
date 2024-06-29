<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, ...props }: { children: Snippet } = $props();
</script>

<h1 {...props}>
	{@render children()}
</h1>
