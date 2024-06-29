<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, ...props }: { children: Snippet } = $props();
</script>

<span {...props}>
	{@render children()}
</span>
