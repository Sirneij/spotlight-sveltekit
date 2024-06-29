<script lang="ts">
	import { tagsAbortController } from '$lib/states/tags.svelte';
	import { tagsFromServer } from '$lib/utils/dummy';
	import {
		showInfo,
		useKeyCombinations,
		useTextareaHeight
	} from '$lib/utils/helpers/actions/actions.editor';
	import { customSelect } from '$lib/utils/helpers/tags.select';
	import Commands from '$lib/components/create/mini/Commands.svelte';
	import ImageInput from '$lib/components/create/mini/ImageInput.svelte';
	import TagInput from '$lib/components/create/mini/TagInput.svelte';

	type Props = {
		container: HTMLDivElement;
		textArea: HTMLTextAreaElement;
	};

	let { container, textArea }: Props = $props();

	let coverImage = $state<string>(''),
		fileInput = $state<HTMLInputElement>(),
		tagContainer = $state<HTMLDivElement>(),
		suggestionPannel = $state<HTMLDivElement>(),
		tagInput = $state<HTMLInputElement>();

	$effect(() => {
		customSelect(
			tagsFromServer,
			suggestionPannel as HTMLDivElement,
			tagInput as HTMLInputElement,
			tagContainer as HTMLDivElement
		);

		// Cleanup. Remove event listeners when component is destroyed or unmounted to prevent memory leaks.
		return () => tagsAbortController.abort();
	});
</script>

<form id="editor" class="tab-content">
	<div class="w-full mb-4 bg-white dark:bg-zinc-900">
		<div class="pt-8 bg-transparent dark:bg-transparent px-14">
			<ImageInput bind:coverImage bind:fileInput />
		</div>
		<div class="pt-2 bg-transparent dark:bg-transparent px-14">
			<label for="title" class="sr-only">Post title</label>
			<input
				id="title"
				use:showInfo={{ container: container, infoId: 'title-info' }}
				class="w-full h-28 px-0 text-6xl outline-none text-gray-800 bg-inherit border-none focus:ring-0 dark:text-white dark:placeholder-gray-400"
				placeholder="New post title here..."
				required
			/>
		</div>
		<div class="py-2 bg-transparent dark:bg-transparent px-14">
			<TagInput {container} bind:tagContainer bind:suggestionPannel bind:tagInput />
		</div>

		<Commands bind:textArea={textArea as HTMLTextAreaElement} />

		<div class="px-14 py-2 bg-transparent dark:bg-transparent h-full">
			<label for="editor-textarea" class="sr-only">Publish post</label>
			<textarea
				id="editor-textarea"
				bind:this={textArea}
				use:showInfo={{ container: container, infoId: 'editor-info' }}
				use:useKeyCombinations
				use:useTextareaHeight={container}
				class="w-full p-0 h-full text-xl outline-none text-gray-800 bg-inherit border-none focus:ring-0 dark:text-white dark:placeholder-gray-400 resize-none"
				placeholder="Write an article..."
				required
			></textarea>
		</div>
	</div>
	<button
		type="submit"
		class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg focus:ring-4 secondary"
	>
		Publish post
	</button>
</form>
