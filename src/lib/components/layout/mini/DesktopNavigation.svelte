<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	let {
		navItems,
		className
	}: {
		navItems: { name: string; href: string }[];
		className: string;
	} = $props();
	let activeClass = 'text-teal-700 dark:text-teal-400';

	const pathname = $derived($page.url.pathname);
</script>

<nav transition:fly={{ y: 20, duration: 300 }} class={className}>
	<ul
		class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
	>
		{#each navItems as { name, href }, i}
			<li>
				<a
					{href}
					class={`relative block px-3 py-2 transition hover:text-teal-700 dark:hover:text-teal-400 ${pathname === href ? activeClass : ''}`}
				>
					{name}
					{#if pathname === href}
						<span
							class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-700/0 via-teal-700/40 to-teal-700/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
						></span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
