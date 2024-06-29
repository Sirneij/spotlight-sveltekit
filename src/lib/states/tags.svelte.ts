/**
 * Represents the state of tags.
 *
 * @class TagState
 * @property {Set<string>} tagList - Set of tags.
 * @method addTag - Add a tag to the set.
 * @example
 * ```javascript
 * import { tagState } from '$lib/states/tags.svelte';
 *
 * tagState.addTag('tag');
 * ```
 * @file frontend/src/lib/states/tags.svelte.ts
 */
class TagState {
	// Set of tags.
	tagList = $state<Set<string>>(new Set());

	// Add a tag to the set.
	addTag(tag: string) {
		this.tagList.add(tag);
	}
}

export const tagState = new TagState();

export const tagsAbortController = new AbortController();
