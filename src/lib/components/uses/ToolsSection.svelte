<script lang="ts">
	import Section from '$lib/components/reusable/Section.svelte';
	import type { Snippet } from 'svelte';
	type Props = {
		title: string;
		children: Snippet;
	};
	let { title, children, ...props }: Props = $props();
</script>

<Section {title} {...props}>
	<ul role="list" class="space-y-16">
		{@render children()}
	</ul>
</Section>
