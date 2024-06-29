<script lang="ts">
	import BriefcaseIcon from '$lib/components/icons/Briefcase.svelte';
	import ArrowDownIcon from '$lib/components/icons/ArrowDown.svelte';
	import Button from '$lib/components/reusable/Button.svelte';
	import { resumes, siteMeta } from '$lib/utils/siteMeta';
</script>

<div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
	<h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
		<BriefcaseIcon class="h-6 w-6 flex-none" />
		<span class="ml-3">Work</span>
	</h2>
	<ol class="mt-6 space-y-4">
		{#each resumes as resume}
			<li class="flex gap-4">
				<div
					class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
				>
					<img src={resume.logo} alt="" class="h-7 w-7" />
				</div>
				<dl class="flex flex-auto flex-wrap gap-x-2">
					<dt class="sr-only">Company</dt>
					<dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
						{resume.company}
					</dd>
					<dt class="sr-only">Role</dt>
					<dd class="text-xs text-zinc-500 dark:text-zinc-400">
						{resume.title}
					</dd>
					<dt class="sr-only">Date</dt>
					<dd
						class="ml-auto text-xs text-zinc-500 dark:text-zinc-500"
						aria-label={`${resume.start} until ${typeof resume.end !== 'string' ? resume.end.label : resume.end}`}
					>
						<time dateTime={resume.start}>{resume.start}</time>
						<span aria-hidden="true">—</span>
						{#if typeof resume.end === 'object'}
							<time dateTime={resume.end.dateTime}>{resume.end.label}</time>
						{:else}
							<time dateTime={resume.end}>{resume.end}</time>
						{/if}
					</dd>
				</dl>
			</li>
		{/each}
	</ol>
	<Button
		href={siteMeta.author.resumeUrl}
		variant="secondary"
		className="group mt-6 w-full"
		download="true"
	>
		Download Resume
		<ArrowDownIcon
			class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
		/>
	</Button>
</div>
