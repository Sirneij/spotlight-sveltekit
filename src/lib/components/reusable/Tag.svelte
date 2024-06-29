<script lang="ts">
	import { getComponent } from '$lib/utils/helpers/dynamicComponents';
	import type { Component } from 'svelte';

	type Props = {
		name: string;
		className: string;
		icon?: string;
		iconProps?: Record<string, any>;
	};

	let { name, className, icon = '', iconProps = {} }: Props = $props();

	let ComponentToRender = $state<Component>();

	$effect(() => {
		if (icon && (!iconProps || Object.keys(iconProps).length === 0)) {
			throw new Error('iconProps is required if icon is provided');
		}

		if (icon) {
			getComponent(icon, 'icons').then((component) => {
				ComponentToRender = component;
			});
		}
	});
</script>

<span
	class="{className} bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2 rounded me-2 dark:bg-gray-800 dark:text-gray-500 border border-gray-600"
>
	{#if icon}
		<svelte:component this={ComponentToRender} {...iconProps} />
	{/if}
	{name}
</span>
