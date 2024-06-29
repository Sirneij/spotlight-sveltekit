<script lang="ts">
	import AvatarImage from '$lib/assets/img/head.jpg';

	type Props = {
		large: boolean;
		className?: string;
		avatarSmall: boolean;
		style?: string;
	};

	let { large, className = '', avatarSmall, ...props }: Props = $props();
</script>

<a href="/" aria-label="Home" class="{className} pointer-events-auto">
	<img
		src={AvatarImage}
		alt=""
		sizes={large ? '5rem' : '2.25rem'}
		class="{large
			? 'h-20 w-20'
			: 'h-9 w-9'} rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 {avatarSmall
			? 'border-4 dark:border-zinc-100 border-zinc-800/50'
			: ''}"
		{...props}
	/>
</a>
