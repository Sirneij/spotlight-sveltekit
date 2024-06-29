<script lang="ts">
	import Author from '$lib/assets/img/head.jpg';
	let repository = {
		name: 'example-repo',
		description: 'An example GitHub repository.',
		stars: 123,
		forks: 45,
		issues: 3,
		pullRequests: 2,
		url: 'https://github.com/example/example-repo'
	};
</script>

<a
	href={repository.url}
	target="_blank"
	rel="noopener noreferrer"
	class="block rounded-2xl border border-zinc-100 pr-4 pl-4 dark:border-zinc-700/40 relative overflow-hidden group hover:border-zinc-500 dark:hover:border-zinc-600 transition no-underline"
	style="max-height: 250px;"
>
	<h2 class="flex text-base items-center font-semibold text-zinc-900 dark:text-zinc-100 mb-2 mt-3">
		<img
			src={Author}
			alt="Github author avatar"
			class="h-12 w-12 flex-none text-zinc-500 dark:text-zinc-400"
		/>
		<span class="ml-3">Name_of_repo</span>
	</h2>
	<p class="text-sm text-zinc-600 dark:text-zinc-400">{repository.description}</p>
	<div class=" flex items-center space-x-4 text-sm">
		<div class="flex items-center">
			<span>&#x2B50;</span>
			<span class="ml-1">{repository.stars} stars</span>
		</div>
		<div class="flex items-center">
			<span>&#x1F531;</span>
			<span class="ml-1">{repository.forks} forks</span>
		</div>
		<div class="flex items-center">
			<span>&#x2757;</span>
			<span class="ml-1">{repository.issues} issues</span>
		</div>
		<div class="flex items-center">
			<span>&#x21A9;</span>
			<span class="ml-1">{repository.pullRequests} pull requests</span>
		</div>
	</div>

	<div class="flex justify-center mt-4 mb-2">
		<button
			class="block rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none secondary group"
		>
			View on GitHub
		</button>
	</div>
</a>
