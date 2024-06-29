<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		as?: string;
		className?: string;
		children: Snippet;
	};

	let { as = 'div', className, children, ...props }: Props = $props();

	let restProps = {
		...props,
		class: `pt-6 prose prose-lg text-xl max-w-none dark:prose-invert${className ? ' ' + className : ''} dark:prose-hr:border-zinc-800`
	};
</script>

<svelte:element this={as} {...restProps}>
	{@render children()}
</svelte:element>
