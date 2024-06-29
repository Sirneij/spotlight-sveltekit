<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, ...props }: { children: Snippet } = $props();
</script>

<h4 {...props}>
	{@render children()}
</h4>
