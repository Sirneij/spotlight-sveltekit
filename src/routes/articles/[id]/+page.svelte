<script lang="ts">
	import ArticleLayout from '$lib/components/reusable/ArticleLayout.svelte';
	import { highlightContainer } from '$lib/utils/helpers/code.block';
	import type { PageData } from './$types';
	import CommentThread from '$lib/components/reusable/CommentThread.svelte';

	let { data }: { data: PageData } = $props();

	const meta = {
		title: 'Introducing Animaginary: High performance web animations',
		date: '2023-01-01'
	};

	let previousPathname = $state(false),
		contentContainer = $state<HTMLDivElement | null>(null);

	$effect(() => {
		if (history) previousPathname = history.length > 1;

		highlightContainer(contentContainer as HTMLElement);
	});

	let comments = [
		{
			id: '1',
			text: 'Great post!',
			author: {
				name: 'Michael Gough',
				avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
			},
			date: '2022-02-08',
			dateFormatted: 'Feb. 8, 2022',
			replies: []
		},
		{
			id: '2',
			text: 'Awesome work!',
			author: {
				name: 'John Doe',
				avatar: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg'
			},
			date: '2022-02-09',
			dateFormatted: 'Feb. 9, 2022',
			replies: [
				{
					id: '3',
					text: 'Thanks!',
					author: {
						name: 'Michael Gough',
						avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg'
					},
					date: '2022-02-09',
					dateFormatted: 'Feb. 9, 2022',
					replies: []
				}
			]
		}
	];
</script>

<svelte:head>
	<link rel="stylesheet" type="text/css" href="/horizon-dark.min.css" />
	<link rel="stylesheet" type="text/css" href="/night-owl.min.css" />
</svelte:head>

<ArticleLayout {meta} {previousPathname}>
	<div bind:this={contentContainer}>
		{@html data.article}
	</div>
	<hr class="my-8" />
	<CommentThread {comments} />
</ArticleLayout>
