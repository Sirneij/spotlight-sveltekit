<script lang="ts">
	import { siteMeta } from '$lib/utils/siteMeta';
	import Card from '$lib/components/reusable/card/Card.svelte';
	import CardTitle from '$lib/components/reusable/card/CardTitle.svelte';
	import CardEyebrow from '$lib/components/reusable/card/CardEyebrow.svelte';
	import CardDescription from '$lib/components/reusable/card/CardDescription.svelte';
	import CardCta from '$lib/components/reusable/card/CardCta.svelte';
	import Container from '$lib/components/reusable/Container.svelte';
	import Newsletter from '$lib/components/home/Newsletter.svelte';
	import Resume from '$lib/components/home/Resume.svelte';
	import TwitterIcon from '$lib/components/icons/social/Twitter.svelte';
	import InstagramIcon from '$lib/components/icons/social/Instagram.svelte';
	import GitHubIcon from '$lib/components/icons/social/GitHub.svelte';
	import LinkedInIcon from '$lib/components/icons/social/LinkedIn.svelte';
	import { articles, tagList } from '$lib/utils/siteMeta';
	import Tag from '$lib/components/reusable/Tag.svelte';
</script>

<Container className="mt-9">
	<div class="max-w-2xl text-lg">
		<h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			Software Engineer, Teacher, and Techical Writer.
		</h1>
		<p class="mt-6 prose dark:prose-invert">
			I'm John, a full-stack software engineer with a passion for tackling complex problems and
			crafting user-friendly web applications.
		</p>
		<p class="mt-6 prose dark:prose-invert">
			I specialize in using technologies such as Python (<a href="https://www.djangoproject.com/"
				>Django</a
			>,
			<a href="https://flask.palletsprojects.com/">Flask</a>),
			<a href="https://www.rust-lang.org/">Rust</a>, <a href="https://golang.org/">Go</a>, and
			<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>/<a
				href="https://www.typescriptlang.org/">TypeScript</a
			>.
		</p>
		<p class="mt-6 prose dark:prose-invert">
			Poke around application to learn more about my work, read my articles, or get in touch. It's
			all about building stuff and learning new things.
		</p>
		<div class="mt-6 flex gap-6">
			<a href={siteMeta.author.twitter} aria-label="Follow on Twitter">
				<TwitterIcon
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>

			<a href={siteMeta.author.instagram} aria-label="Follow on Instagram">
				<InstagramIcon
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
			<a href={siteMeta.author.github} aria-label="Follow on GitHub">
				<GitHubIcon
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
			<a href={siteMeta.author.linkedin} aria-label="Follow on LinkedIn">
				<LinkedInIcon
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
		</div>
	</div>
</Container>
<!-- <Photos /> -->
<Container className="mt-24 md:mt-28">
	<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
		<div class="flex flex-col gap-16">
			{#each articles as article (article.slug)}
				<Card as="article">
					<CardTitle href={`/articles/${article.slug}`}>
						{article.title}
					</CardTitle>
					<CardEyebrow as="time" decorate dateTime={article.date}>
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
			{/each}
		</div>
		<div class="space-y-10 lg:pl-16 xl:pl-24">
			<Newsletter />
			<Resume />
		</div>
	</div>
</Container>
