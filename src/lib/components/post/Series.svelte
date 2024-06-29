<script lang="ts">
	import { page } from '$app/stores';
	import BookStack from '$lib/components/icons/BookStack.svelte';
	import { articles } from '$lib/utils/siteMeta';
</script>

<div
	class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-4 max-h-25 overflow-hidden"
>
	<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
		<BookStack
			class="h-6 w-6 flex-none text-zinc-500 dark:text-zinc-400"
			title="Series of articles"
		/>
		<span class="ml-3">Crafting a design system for a multiplanetary future</span>
	</h2>
	<hr class="border-zinc-100 dark:border-zinc-700/40" />
	<div class="overflow-y-auto">
		<ul class="mt-6 space-y-4">
			{#each articles as article}
				<li class="flex gap-4 group relative">
					<a
						href="/articles/{article.slug}"
						class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm {$page
							.url.pathname ===
						'/articles/' + article.slug
							? 'text-teal-500'
							: 'text-zinc-900 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-500'} outline-offset-2 transition active:transition-none"
					>
						<span class="relative z-10">{article.title}</span>
						{#if $page.url.pathname === '/articles/' + article.slug}
							<div
								class="absolute -inset-y-0.5 -inset-x-0.5 z-0 scale-100 bg-zinc-50 opacity-100 transition dark:bg-zinc-800/50 rounded-md"
							></div>
						{:else}
							<div
								class="absolute -inset-y-0.5 -inset-x-0.5 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 rounded-md"
							></div>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
