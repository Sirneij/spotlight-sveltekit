<script lang="ts">
	type Props = {
		coverImage: string;
		fileInput: HTMLInputElement | undefined;
	};
	let { coverImage = $bindable(), fileInput = $bindable() }: Props = $props();
	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files[0]) {
			const reader = new FileReader();
			reader.onload = (e) => {
				coverImage = (e.target as FileReader).result as string;
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	function removeCoverImage() {
		coverImage = '';
		if (fileInput) fileInput.value = '';
	}

	function triggerFileInput() {
		if (fileInput) fileInput.click();
	}
</script>

{#if coverImage}
	<div class="flex items-center space-x-6">
		<img src={coverImage} alt="Cover" width="100" height="40" />
		<div class="flex space-x-2">
			<button
				type="button"
				onclick={triggerFileInput}
				class="group relative py-1.5 px-3 font-medium text-center text-white secondary rounded-sm"
			>
				Change
				<span
					class="pointer-events-none absolute top-10 -left-1 rounded bg-inherit px-2 py-1 text-sm font-medium text-gray-500 dark:text-white opacity-0 shadow transition-opacity group-hover:opacity-100"
				>
					<span class="text-xs">Some text</span>
				</span>
			</button>
			<button type="button" onclick={removeCoverImage} class="py-1.5 px-3 text-rose-500">
				Remove
			</button>
		</div>
	</div>
{:else}
	<button
		type="button"
		onclick={triggerFileInput}
		class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white secondary"
	>
		Add a cover image
	</button>
{/if}
<input
	type="file"
	bind:this={fileInput}
	accept="image/*"
	class="hidden"
	onchange={handleFileChange}
/>
