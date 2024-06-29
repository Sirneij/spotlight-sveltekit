<script lang="ts">
	import Card from '$lib/components/reusable/card/Card.svelte';
	import CardTitle from '$lib/components/reusable/card/CardTitle.svelte';
	import CardDescription from '$lib/components/reusable/card/CardDescription.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		href: string;
		children: Snippet;
	};

	let { title, href, children }: Props = $props();
</script>

<Card as="li">
	<CardTitle as="h3" {href}>
		{title}
	</CardTitle>
	<CardDescription>
		{@render children()}
	</CardDescription>
</Card>
