<script lang="ts">
	import type { CommentType } from '$lib/types/comment.interface';
	import Comment from './Comment.svelte';

	type Props = {
		comments: Array<CommentType>;
	};

	let { comments }: Props = $props();

	const addReply = (parentId: string, replyText: string) => {
		const addReplyRecursive = (
			comments: Array<CommentType>,
			parentId: string,
			replyText: string
		) => {
			for (let comment of comments) {
				if (comment.id === parentId) {
					comment.replies.push({
						id: new Date().getTime().toString(),
						text: replyText,
						author: {
							name: 'John Doe',
							avatar: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
						},
						date: new Date().toISOString(),
						dateFormatted: new Date().toLocaleDateString(),
						replies: []
					});
					return true;
				} else if (comment.replies.length) {
					if (addReplyRecursive(comment.replies, parentId, replyText)) {
						return true;
					}
				}
			}
			return false;
		};

		addReplyRecursive(comments, parentId, replyText);
		comments = [...comments];
	};
</script>

<div class="flex justify-between items-center mb-6">
	<h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
		Discussion ({comments.length})
	</h2>
</div>
<form>
	<div class="w-full mb-4 border rounded-lg border-gray-200 dark:border-gray-700">
		<div class="px-4 py-2 rounded-t-lg">
			<label for="comment" class="sr-only">Your comment</label>
			<textarea
				id="comment"
				rows="4"
				class="px-0 text-sm w-full rounded outline-none bg-transparent"
				placeholder="Write a comment..."
				required
			></textarea>
		</div>
		<div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
			<button
				type="submit"
				class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg focus:ring-4 secondary"
			>
				Post comment
			</button>
			<div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
				<button
					type="button"
					class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
				>
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 12 20"
					>
						<path
							stroke="currentColor"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
						/>
					</svg>
					<span class="sr-only">Attach file</span>
				</button>
				<button
					type="button"
					class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
				>
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 16 20"
					>
						<path
							d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
						/>
					</svg>
					<span class="sr-only">Set location</span>
				</button>
				<button
					type="button"
					class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
				>
					<svg
						class="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 18"
					>
						<path
							d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
						/>
					</svg>
					<span class="sr-only">Upload image</span>
				</button>
			</div>
		</div>
	</div>
</form>
{#each comments as comment}
	<Comment {comment} {addReply} />
{/each}
