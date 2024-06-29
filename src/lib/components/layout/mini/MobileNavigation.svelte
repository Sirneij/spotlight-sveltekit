<script lang="ts">
	import ChevronDown from '$lib/components/icons/ChevronDown.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import { fly } from 'svelte/transition';

	let { className, navItems }: { className: string; navItems: { name: string; href: string }[] } =
		$props();

	let isOpen = $state(false);

	const toggleMenu = () => {
		isOpen = !isOpen;
	};
</script>

<div class={className}>
	<button
		class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
		onclick={toggleMenu}
	>
		{#if isOpen}
			<Close class="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
		{:else}
			<span>Menu</span>
			<ChevronDown
				class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
			/>
		{/if}
	</button>
	{#if isOpen}
		<nav transition:fly={{ y: 20, duration: 300 }} class="mt-6">
			<ul
				class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
			>
				{#each navItems as { name, href }, i}
					<li>
						<a {href} class="block py-2">{name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</div>
