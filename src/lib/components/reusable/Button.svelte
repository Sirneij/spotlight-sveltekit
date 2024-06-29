<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		variant?: 'primary' | 'secondary';
		className?: string;
		href?: string | null;
		children: Snippet;
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		download?: string;
	};

	let { variant = 'primary', className = '', href = null, children, ...props }: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none {variant} {className}"
		{...props}
	>
		{@render children()}
	</a>
{:else}
	<button
		{...props}
		class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none {variant} {className}"
	>
		{@render children()}
	</button>
{/if}
