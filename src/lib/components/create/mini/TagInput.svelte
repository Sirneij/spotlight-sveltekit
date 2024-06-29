<script lang="ts">
	import { showInfo } from '$lib/utils/helpers/actions/actions.editor';

	type Props = {
		container: HTMLDivElement;
		tagContainer: HTMLDivElement | undefined;
		suggestionPannel: HTMLDivElement | undefined;
		tagInput: HTMLInputElement | undefined;
	};
	let {
		container = $bindable(),
		tagContainer = $bindable(),
		suggestionPannel = $bindable(),
		tagInput = $bindable()
	}: Props = $props();
</script>

<div class="tags-and-suggestion-container">
	<div class="tag-container" bind:this={tagContainer}>
		<label for="tag-input" class="sr-only">Post tags</label>
		<input
			bind:this={tagInput}
			use:showInfo={{ container: container, infoId: 'tags-info' }}
			type="text"
			id="tag-input"
			placeholder="Add up to 4 tags (atleast 1 is required)..."
		/>
	</div>
	<!-- Display list of tags as user types -->
	<div class="suggestions" bind:this={suggestionPannel}></div>
</div>
