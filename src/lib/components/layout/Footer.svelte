<script lang="ts">
	import { siteMeta } from '$lib/utils/siteMeta';
	import Container from '$lib/components/reusable/Container.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mt-32">
	<Container className="">
		<div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
			<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
				<div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
					<a href="/about" class="transition hover:text-teal-500 dark:hover:text-teal-400">About</a>
					<a href="/projects" class="transition hover:text-teal-500 dark:hover:text-teal-400">
						Projects
					</a>
					<a href="/articles" class="transition hover:text-teal-500 dark:hover:text-teal-400">
						Articles
					</a>
					<a href="/uses" class="transition hover:text-teal-500 dark:hover:text-teal-400">Uses</a>
				</div>
				<p class="text-sm text-zinc-600 dark:text-zinc-300">
					&copy; {year}
					{siteMeta.copyright}
				</p>
			</div>
		</div>
	</Container>
</footer>
