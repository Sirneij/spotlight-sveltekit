<script lang="ts">
	import Card from './card/Card.svelte';
	import CardCta from './card/CardCta.svelte';
	import CardDescription from './card/CardDescription.svelte';
	import CardEyebrow from './card/CardEyebrow.svelte';
	import CardTitle from './card/CardTitle.svelte';
	import { tagList } from '$lib/utils/siteMeta';
	import Tag from '$lib/components/reusable/Tag.svelte';

	let { article }: { article: any } = $props();
</script>

<article class="md:grid md:grid-cols-4 md:items-baseline">
	<Card className="md:col-span-3">
		<CardTitle href={`/articles/${article.slug}`}>
			{article.title}
		</CardTitle>
		<CardEyebrow as="time" decorate dateTime={article.date} className="md:hidden">
			<Tag
				name={article.date}
				className=""
				icon="clock"
				iconProps={{
					class: 'w-2.5 h-2.5 me-1.5'
				}}
			/>

			<span class="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-200"></span>
			<div class="flex flex-wrap gap-2 ml-3">
				{#each tagList as tag}
					<Tag className="" name={tag} />
				{/each}
			</div>
		</CardEyebrow>
		<CardDescription>{article.description}</CardDescription>
		<CardCta>Read article</CardCta>
	</Card>
	<CardEyebrow as="time" dateTime={article.date} className="mt-1 hidden md:block">
		<Tag
			name={article.date}
			className=""
			icon="clock"
			iconProps={{
				class: 'w-2.5 h-2.5 me-1.5'
			}}
		/>

		<div class="flex flex-wrap gap-1 mt-1">
			{#each tagList as tag}
				<Tag className="" name={tag} />
			{/each}
		</div>
	</CardEyebrow>
</article>
