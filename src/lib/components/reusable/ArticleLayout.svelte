<script lang="ts">
	import Container from '$lib/components/reusable/Container.svelte';
	import ArrowLeftIcon from '$lib/components/icons/ArrowLeft.svelte';
	import Prose from '$lib/components/reusable/Prose.svelte';
	import Tag from '$lib/components/reusable/Tag.svelte';
	import Series from '$lib/components/post/Series.svelte';
	import Github from '$lib/components/post/Github.svelte';

	let {
		previousPathname,
		meta,
		children
	}: { previousPathname: boolean; meta: Record<string, any>; children: any } = $props();

	let tagList = ['Default', 'Purple', 'Pink'];
</script>

<Container className="mt-16 lg:mt-32">
	<div class="xl:relative">
		<div class="mx-auto max-w-3xl">
			{#if previousPathname}
				<button
					type="button"
					onclick={() => history.back()}
					aria-label="Go back to articles"
					class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
				>
					<ArrowLeftIcon
						class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
					/>
				</button>
			{/if}
			<article>
				<header class="flex flex-col">
					<h1
						class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
					>
						{meta.title}
					</h1>
					<time
						dateTime={meta.date}
						class="order-first flex items-center text-base text-zinc-500 dark:text-zinc-200"
					>
						<span class="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-200"></span>

						<Tag
							className="ml-3"
							name={meta.date}
							icon="clock"
							iconProps={{
								class: 'w-2.5 h-2.5 me-1.5'
							}}
						/>

						<!-- Add list of tags here -->
						<span class="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-200"></span>
						<div class="flex flex-wrap gap-2 ml-3">
							{#each tagList as tag}
								<Tag className="" name={tag} />
							{/each}
						</div>
					</time>
				</header>
				<Series />
				<Prose className="mt-4">
					<Github />
					{@render children()}
				</Prose>
			</article>
		</div>
	</div>
</Container>
