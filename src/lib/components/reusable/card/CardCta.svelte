<script lang="ts">
	import ChevronRightIcon from '$lib/components/icons/ChevronRight.svelte';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div
	aria-hidden="true"
	class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
>
	{@render children()}
	<ChevronRightIcon class="ml-1 h-4 w-4 stroke-current" />
</div>
