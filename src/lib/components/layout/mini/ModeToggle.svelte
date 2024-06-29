<script lang="ts">
	import Moon from '$lib/components/icons/Moon.svelte';
	import Sun from '$lib/components/icons/Sun.svelte';

	function toggleMode() {
		disableTransitionsTemporarily();

		let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		let isSystemDarkMode = darkModeMediaQuery.matches;
		let isDarkMode = document.documentElement.classList.toggle('dark');

		if (isDarkMode === isSystemDarkMode) {
			delete window.localStorage.isDarkMode;
		} else {
			window.localStorage.isDarkMode = isDarkMode;
		}
	}

	function disableTransitionsTemporarily() {
		document.documentElement.classList.add('[&_*]:!transition-none');
		window.setTimeout(() => {
			document.documentElement.classList.remove('[&_*]:!transition-none');
		}, 0);
	}
</script>

<button
	type="button"
	aria-label="Toggle dark mode"
	class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
	onclick={toggleMode}
>
	<Sun
		class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-700 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-700"
	/>
	<Moon
		class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-700"
	/>
</button>
