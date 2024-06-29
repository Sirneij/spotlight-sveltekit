<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		children: Snippet;
	};
	let { title, children, ...props }: Props = $props();

	let id = `id_${Math.random().toString(36).substr(2, 9)}`;
</script>

<section
	aria-labelledby={id}
	class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
	{...props}
>
	<div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
		<h2 {id} class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
			{title}
		</h2>
		<div class="md:col-span-3">
			{@render children()}
		</div>
	</div>
</section>
