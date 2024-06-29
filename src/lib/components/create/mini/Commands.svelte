<script lang="ts">
	import { Handlers } from '$lib/utils/helpers/editor/commands';
	import { commands } from '$lib/utils/siteMeta';
	type Props = {
		textArea: HTMLTextAreaElement;
	};
	let { textArea = $bindable() }: Props = $props();
</script>

<div class="flex items-center justify-between px-6 md:px-8 lg:px-14 py-2 bg-white dark:bg-black">
	<div class="flex items-center">
		{#each commands as command}
			<button
				{...command.shortcut && { 'aria-label': command.shortcut }}
				type="button"
				class="group relative py-2 px-3 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
				onclick={(e) => Handlers[command.command.toLowerCase()](e, textArea)}
			>
				{@html command.htmlSymbol}
				<span
					class="pointer-events-none absolute top-10 -left-1 rounded bg-inherit px-2 py-1 text-sm font-medium text-gray-500 dark:text-white opacity-0 shadow transition-opacity group-hover:opacity-100"
				>
					{command.command} <br />
					<hr />
					<span class="text-xs">{command.shortcut}</span>
				</span>
			</button>
		{/each}
	</div>
	<button
		type="button"
		data-tooltip-target="tooltip-fullscreen"
		class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
	>
		&vellip;
	</button>
</div>
