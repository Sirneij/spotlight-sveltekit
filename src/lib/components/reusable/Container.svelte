<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		className?: string;
		children: Snippet;
		style?: string;
		datacreate?: boolean;
	};

	let { className, children, datacreate, ...props }: Props = $props();
</script>

<div class="outer-container {className}" {...props}>
	<div class="mx-auto max-w-7xl lg:px-4">
		<div class="inner-container">
			{#if !datacreate}
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					{@render children()}
				</div>
			{:else}
				{@render children()}
			{/if}
		</div>
	</div>
</div>
