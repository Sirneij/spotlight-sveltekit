<script lang="ts">
	import type { CommentType } from '$lib/types/comment.interface';

	type Props = {
		comment: CommentType;
		addReply: (parentId: string, replyText: string) => void;
	};

	let { comment, addReply }: Props = $props();

	let replyText = $state(''),
		showReplyForm = $state(false);

	const handleReply = () => {
		addReply(comment.id, replyText);
		replyText = '';
		showReplyForm = false;
	};
</script>

<article class="text-base">
	<div class="p-3 mb-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
		<footer class="flex justify-between items-center">
			<div class="flex items-center">
				<p class="inline-flex items-center mr-3 text-sm font-semibold">
					<img
						class="mr-2 w-6 h-6 rounded-full"
						src={comment.author.avatar}
						alt={comment.author.name}
					/>
					{comment.author.name}
				</p>
				<p class="text-sm">
					<time datetime={comment.date} title={comment.date}>{comment.dateFormatted}</time>
				</p>
			</div>

			<ul class="flex items-center list-none text-sm">
				<li>
					<a href="/" class="no-underline hover:underline">Edit</a>
				</li>
				<li>
					<a href="/" class="no-underline hover:underline">Remove</a>
				</li>
				<li>
					<a href="/" class="no-underline hover:underline">Report</a>
				</li>
			</ul>
		</footer>
		<p class="-mt-1">{comment.text}</p>

		<button
			type="button"
			class="flex items-center text-sm hover:underline font-medium"
			onclick={() => (showReplyForm = !showReplyForm)}
		>
			<svg
				class="mr-1.5 w-3.5 h-3.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 20 18"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
				/>
			</svg>
			Reply
		</button>
	</div>

	<!-- Line between comment and replies -->
	<div class="border-l-2 border-gray-300 dark:border-gray-700 ml-8 pl-4">
		{#if showReplyForm}
			<div class="reply-form mt-2">
				<textarea
					bind:value={replyText}
					class="w-full p-2 rounded outline-none bg-transparent border border-gray-300 dark:border-gray-700"
					placeholder="Write a reply..."
				></textarea>
				<button
					onclick={handleReply}
					class="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white focus:ring-4 secondary mb-1"
				>
					Submit
				</button>
			</div>
		{/if}

		{#each comment.replies as reply}
			<svelte:self comment={reply} {addReply} />
		{/each}
	</div>
</article>
