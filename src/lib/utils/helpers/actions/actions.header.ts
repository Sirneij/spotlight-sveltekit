import type { Action } from 'svelte/action';

/**
 * To update the styles when the window is resized or scrolled so that landing page photo changes its size and position depending on the window size
 * @param node - The window object
 * @param func - The event listener function
 * @returns - The destroy function
 * @example
 * ```svelte
 * <svelte:window use:applyUpdatedStyles={func} />
 * ```
 */
export const applyUpdatedStyles: Action<Window, EventListener> = (
	node: Window,
	func: EventListener
) => {
	node.addEventListener('resize', func);
	node.addEventListener('scroll', func, { passive: true });
	return {
		destroy() {
			node.removeEventListener('resize', func);
			node.removeEventListener('scroll', func);
		}
	};
};
