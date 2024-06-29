<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, ...props }: { children: Snippet } = $props();
</script>

<h3 {...props}>
	{@render children()}
</h3>
