<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		as?: string;
		decorate?: boolean;
		className?: string;
		dateTime?: string;
		children: Snippet;
	};
	let { as = 'p', decorate, className, children, ...props }: Props = $props();

	let classStr = `relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-500 ${decorate ? 'pl-3.5' : ''}`;

	let restProps = {
		...props,
		class: `${classStr}${className ? ' ' + className : ''}`
	};
</script>

<svelte:element this={as} {...restProps}>
	{#if decorate}
		<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
			<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
		</span>
	{/if}
	{@render children()}
</svelte:element>
