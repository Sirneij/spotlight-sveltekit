<script lang="ts">
	import { openTabs } from '$lib/utils/helpers/actions/actions.editor';
</script>

<ul
	class="flex flex-wrap text-sm font-medium text-center text-zinc-800 dark:text-zinc-200 justify-end"
>
	<li class="me-2">
		<button
			type="button"
			use:openTabs={{ tabId: 'editor' }}
			class="inline-flex items-center justify-center p-4 rounded-t-lg tab hover:text-teal-700 dark:hover:text-teal-400 tab-active group"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6 me-2"
				width="44"
				height="44"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
				<path d="M16 7h4" />
				<path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
			</svg>
			Edit
		</button>
	</li>
	<li class="me-2">
		<button
			type="button"
			use:openTabs={{ tabId: 'preview' }}
			class="inline-flex items-center justify-center p-4 rounded-t-lg tab hover:text-teal-700 dark:hover:text-teal-400 group"
			aria-current="page"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6 me-2"
				width="44"
				height="44"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path
					d="M11.192 17.966c-3.242 -.28 -5.972 -2.269 -8.192 -5.966c2.4 -4 5.4 -6 9 -6c3.326 0 6.14 1.707 8.442 5.122"
				/>
				<path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
			</svg>
			Preview
		</button>
	</li>
</ul>
