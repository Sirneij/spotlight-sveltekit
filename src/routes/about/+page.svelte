<script lang="ts">
	import Container from '$lib/components/reusable/Container.svelte';
	import TwitterIcon from '$lib/components/icons/social/Twitter.svelte';
	import InstagramIcon from '$lib/components/icons/social/Instagram.svelte';
	import GitHubIcon from '$lib/components/icons/social/GitHub.svelte';
	import LinkedInIcon from '$lib/components/icons/social/LinkedIn.svelte';
	import MailIcon from '$lib/components/icons/Mail.svelte';
	import portraitImage from '$lib/assets/img/head.jpg';
	import { siteMeta } from '$lib/utils/siteMeta';

	let socialLinks = [
		{ href: siteMeta.author.twitter, icon: TwitterIcon, text: 'Follow on Twitter' },
		{ href: siteMeta.author.instagram, icon: InstagramIcon, text: 'Follow on Instagram' },
		{ href: siteMeta.author.github, icon: GitHubIcon, text: 'Follow on GitHub' },
		{ href: siteMeta.author.linkedin, icon: LinkedInIcon, text: 'Follow on LinkedIn' },
		{ href: `mailto:${siteMeta.author.email}`, icon: MailIcon, text: siteMeta.author.email }
	];
</script>

<Container className="mt-16 sm:mt-32">
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<div class="lg:pl-20">
			<div class="max-w-xs px-2.5 lg:max-w-none">
				<img
					src={portraitImage}
					alt=""
					sizes="(min-width: 1024px) 32rem, 20rem"
					class="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
				/>
			</div>
		</div>
		<div class="lg:order-first lg:row-span-2">
			<h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
				I'm John Owolabi Idogun. I live in Stony Brook, USA, where I build impactful web
				applications and teach software engineering.
			</h1>
			<div class="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
				<p>
					Hello! I'm John, a full-stack software engineer with a passion for tackling complex
					problems and crafting user-friendly web applications. I specialize in using technologies
					such as Python (<a href="https://www.djangoproject.com/">Django</a>,
					<a href="https://flask.palletsprojects.com/">Flask</a>),
					<a href="https://www.rust-lang.org/">Rust</a>, <a href="https://golang.org/">Go</a>, and
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>/<a
						href="https://www.typescriptlang.org/">TypeScript</a
					>.
				</p>
				<p>
					<b>Graduate Teaching Assistant:</b> Managing student projects in game programming and
					software engineering at <a href="https://www.stonybrook.edu/">Stony Brook University</a>.
				</p>
				<p>
					<b>Technical Writer:</b> Contributor to <a href="https://github.com/Sirneij">GitHub</a>
					and <a href="https://dev.to/sirneij">DEV Community</a>, writing detailed tutorials on web
					development and authentication systems.
				</p>
				<p>
					<b>Current Focus:</b> Learning <a href="https://www.rust-lang.org/">Rust</a> and machine learning,
					collaborating on Rust and Python projects, and exploring opportunities in FinTech.
				</p>
				<p>
					<b>Technologies:</b> Skilled in Python (<a href="https://www.djangoproject.com/">Django</a
					>, <a href="https://flask.palletsprojects.com/">Flask</a>), Rust (Actix-web, Axum), Go,
					JavaScript/TypeScript, and various front-end frameworks.
				</p>
				<p>
					I am always excited to learn new technologies, share my knowledge, and work on meaningful
					projects.
				</p>
			</div>
		</div>

		<div class="lg:pl-20">
			<ul role="list">
				{#each socialLinks as { href, icon: Icon, text }, index}
					<li class={index > 0 ? 'mt-4' : ''}>
						<a
							{href}
							class="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
						>
							<Icon class="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
							<span class="ml-4">{text}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</Container>
