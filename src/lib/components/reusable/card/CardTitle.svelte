<script lang="ts">
	import CardLink from '$lib/components/reusable/card/CardLink.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		as?: string;
		href?: string;
		children: Snippet;
		className?: string;
	};

	let { as = 'h2', href, className, children, ...props }: Props = $props();

	let restProps = {
		...props,
		class: `text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100${className ? ' ' + className : ''}`
	};
</script>

<svelte:element this={as} {...restProps}>
	{#if href}
		<CardLink {href}>
			{@render children()}
		</CardLink>
	{:else}
		{@render children()}
	{/if}
</svelte:element>
