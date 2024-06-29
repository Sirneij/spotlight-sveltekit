<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		as?: string;
		children: Snippet;
		className?: string;
	};

	let { as = 'div', children, className, ...props }: Props = $props();

	let restProps = {
		...props,
		class: `group relative flex flex-col items-start${className ? ' ' + className : ''}`
	};
</script>

<svelte:element this={as} {...restProps}>
	{@render children()}
</svelte:element>
