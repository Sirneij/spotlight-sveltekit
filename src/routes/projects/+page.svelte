<script lang="ts">
	import SimpleLayout from '$lib/components/reusable/SimpleLayout.svelte';
	import Card from '$lib/components/reusable/card/Card.svelte';
	import CardLink from '$lib/components/reusable/card/CardLink.svelte';
	import CardDescription from '$lib/components/reusable/card/CardDescription.svelte';
	import { projects } from '$lib/utils/siteMeta';
	import LinkIcon from '$lib/components/icons/Link.svelte';

	const headline = "Things I've made trying to put my mark on the universe.";
	const intro =
		"I've worked on tons of little projects over the years, but these are some of the ones that I'm most proud of. If you see something that piques your interest, check it out via the link below. While you're there, feel free to contribute any ideas that would make it better. Remember: Open source!";
</script>

<SimpleLayout title={headline} {intro}>
	<ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<Card as="li">
				<div
					class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
				>
					<img src={project.logo} alt="" class="h-8 w-8" />
				</div>
				<h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
					<CardLink href={project.link.href}>{project.name}</CardLink>
				</h2>
				<CardDescription>{project.description}</CardDescription>
				<p
					class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
				>
					<LinkIcon class="h-6 w-6 flex-none" />
					<span class="ml-2">{project.link.label}</span>
				</p>
			</Card>
		{/each}
	</ul>
</SimpleLayout>
