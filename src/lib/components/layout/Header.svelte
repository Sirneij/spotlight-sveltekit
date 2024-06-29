<script lang="ts">
	import Container from '$lib/components/reusable/Container.svelte';
	import MobileNavigation from '$lib/components/layout/mini/MobileNavigation.svelte';
	import DesktopNavigation from '$lib/components/layout/mini/DesktopNavigation.svelte';
	import ModeToggle from '$lib/components/layout/mini/ModeToggle.svelte';
	import Avatar from '$lib/components/layout/mini/Avatar.svelte';
	import { applyUpdatedStyles } from '$lib/utils/helpers/actions/actions.header';

	let { isHomePage, isCreate }: { isHomePage: boolean; isCreate: boolean } = $props();

	let headerRef: HTMLDivElement | null,
		avatarRef = $state<HTMLDivElement | null>(null),
		downDelay = $state(0),
		upDelay = $state(64),
		isInitial = $state(true),
		navItems = $state([
			{ name: 'About', href: '/about' },
			{ name: 'Articles', href: '/articles' },
			{ name: 'Projects', href: '/projects' },
			{ name: 'Create', href: '/create' },
			{ name: 'Uses', href: '/uses' }
		]),
		avatarSmall = $state(false);

	function clamp(number: number, a: number, b: number) {
		let min = Math.min(a, b);
		let max = Math.max(a, b);
		return Math.min(Math.max(number, min), max);
	}

	function setProperty(property: string, value: string) {
		document.documentElement.style.setProperty(property, value);
	}

	function removeProperty(property: string) {
		document.documentElement.style.removeProperty(property);
	}

	function updateHeaderStyles() {
		let { top, height } = (headerRef as HTMLDivElement).getBoundingClientRect() as DOMRect;
		let scrollY = clamp(window.scrollY, 0, document.body.scrollHeight - window.innerHeight);

		if (isInitial) {
			setProperty('--header-position', 'sticky');
		}

		setProperty('--content-offset', `${downDelay}px`);

		if (isInitial || scrollY < downDelay) {
			setProperty('--header-height', `${downDelay + height}px`);
			setProperty('--header-mb', `${-downDelay}px`);
		} else if (top + height < -upDelay) {
			let offset = Math.max(height, scrollY - upDelay);
			setProperty('--header-height', `${offset}px`);
			setProperty('--header-mb', `${height - offset}px`);
		} else if (top === 0) {
			setProperty('--header-height', `${scrollY + height}px`);
			setProperty('--header-mb', `${-scrollY}px`);
		}

		if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
			setProperty('--header-inner-position', 'fixed');
			removeProperty('--header-top');
			removeProperty('--avatar-top');
		} else {
			removeProperty('--header-inner-position');
			setProperty('--header-top', '0px');
			setProperty('--avatar-top', '0px');
		}
	}

	function updateAvatarStyles() {
		if (!isHomePage) return;

		let fromScale = 1;
		let toScale = 36 / 64;
		let fromX = 0;
		let toX = 2 / 16;

		let scrollY = downDelay - window.scrollY;

		let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
		scale = clamp(scale, fromScale, toScale);

		let x = (scrollY * (fromX - toX)) / downDelay + toX;
		x = clamp(x, fromX, toX);

		setProperty('--avatar-image-transform', `translate3d(${x}rem, 0, 0) scale(${scale})`);

		let borderScale = 1 / (toScale / scale);
		let borderX = (-toX + x) * borderScale;
		let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

		setProperty('--avatar-border-transform', borderTransform);
		setProperty('--avatar-border-opacity', (scale === toScale ? 1 : 0) as unknown as string);

		setProperty('--avatar-small', scale === toScale ? 'true' : 'false');
		avatarSmall = scale === toScale;
	}

	function updateStyles() {
		updateHeaderStyles();
		updateAvatarStyles();
		isInitial = false;
	}

	$effect(() => {
		downDelay = avatarRef?.offsetTop ?? 0;
		updateStyles();
	});
</script>

<svelte:window use:applyUpdatedStyles={updateStyles} />

<header
	class="pointer-events-none relative z-50 flex flex-col"
	style="height: var(--header-height); margin-bottom: var(--header-mb);"
>
	{#if isHomePage}
		<div
			bind:this={avatarRef}
			class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
		></div>
		<Container className="top-0 order-last -mb-3 pt-3" style="position: var(--header-position);">
			<div
				class="top-[var(--avatar-top,theme(spacing.3))] w-full"
				style="position: var(--header-inner-position);"
			>
				<div class="relative">
					<div
						class="absolute left-0 top-3 origin-left transition-opacity"
						style="opacity: var(--avatar-border-opacity, 0); transform: var(--avatar-border-transform);"
					></div>
					<Avatar
						large={true}
						className="block h-20 w-20 origin-left"
						{avatarSmall}
						style="transform: var(--avatar-image-transform);"
					/>
				</div>
			</div>
		</Container>
	{/if}
	<div bind:this={headerRef} class="top-0 z-10 h-16 pt-6" style="position: var(--header-position);">
		<Container
			className="top-[var(--header-top,theme(spacing.6))] w-full"
			style="position: var(--header-inner-position);"
			datacreate={isCreate}
		>
			<div class="relative flex gap-4">
				<div class="flex flex-1">
					{#if !isHomePage}
						<Avatar large={false} {avatarSmall} />
					{/if}
					{#if isCreate}
						<span class="text-lg lg:text-2xl font-bold ml-3 text-zinc-800 dark:text-zinc-200">
							Create Post
						</span>
					{/if}
				</div>
				<div class="flex flex-1 justify-end md:justify-center">
					<MobileNavigation className="pointer-events-auto md:hidden" {navItems} />
					<DesktopNavigation className="pointer-events-auto hidden md:block" {navItems} />
				</div>
				<div class="flex justify-end md:flex-1">
					<div class="pointer-events-auto">
						<ModeToggle />
					</div>
				</div>
			</div>
		</Container>
	</div>
</header>

{#if isHomePage}
	<div style="height: var(--content-offset);"></div>
{/if}
