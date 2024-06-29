import type { Action } from 'svelte/action';

import { detectOS, normalizeKey } from '$lib/utils/commons';
import { Handlers } from '$lib/utils/helpers/editor/commands';

/**
 * Show the info text when the element is focused
 * @param node - The element to focus
 * @param args - The container and the info id
 * @returns - The destroy function
 * @example
 * ```svelte
 * <input use:showInfo={{ container, infoId }} />
 * ```
 */
export const showInfo: Action<
	HTMLDivElement | HTMLTextAreaElement,
	{ container: HTMLDivElement; infoId: string }
> = (
	node: HTMLDivElement | HTMLTextAreaElement | HTMLInputElement,
	args: { container: HTMLDivElement; infoId: string }
) => {
	const show = (e: Event) => {
		const info = args.container.querySelector('#info') as HTMLElement;
		const infoTexts = info.querySelectorAll('div');
		infoTexts.forEach((text) => text.classList.add('hidden'));
		(args.container.querySelector(`#${args.infoId}`) as HTMLElement).classList.remove('hidden');
		info.classList.remove('hidden');

		// Get the position of the focused element
		const rect = node.getBoundingClientRect();

		info.style.top = `${rect.top}px`;
	};

	const hide = (e: Event) => {
		const info = args.container.querySelector('#info') as HTMLElement;
		const focusEvent = e as FocusEvent;

		// Check if it's a click event on the info container
		// If it is, don't hide the info container
		// because users may want to interact with the info container
		if (!info.contains(focusEvent.relatedTarget as Node) && focusEvent.relatedTarget !== info) {
			info.classList.add('hidden');
		}
	};

	node.addEventListener('focus', show);
	node.addEventListener('blur', hide);

	return {
		destroy() {
			node.removeEventListener('focus', show);
			node.removeEventListener('blur', hide);
		}
	};
};

export const useKeyCombinations: Action<HTMLTextAreaElement> = (node: HTMLTextAreaElement) => {
	const keysPressed: Record<string, boolean> = {};
	const os = detectOS();

	// Add the key to the keysPressed object when the key is pressed
	const handleKeyDown = (e: KeyboardEvent) => {
		const normalizedKey = normalizeKey(os, e.key);
		keysPressed[normalizedKey] = true;

		const isControlKeyPressed = keysPressed['Control'];
		const isShiftKeyPressed = keysPressed['Shift'];
		const isAltKeyPressed = e.altKey;

		if (isControlKeyPressed) {
			switch (normalizedKey) {
				case 'b':
					e.preventDefault();
					Handlers.bold(e, node);
					break;
				case 'i':
					e.preventDefault();
					if (isShiftKeyPressed) {
						Handlers.uploadimage(e, node);
						break;
					}
					Handlers.italize(e, node);
					break;
				case 'h':
					e.preventDefault();
					if (isShiftKeyPressed) {
						Handlers.heading(e, node);
						break;
					}
					break;
				case 'k':
					e.preventDefault();
					if (isShiftKeyPressed) {
						Handlers.codeblock(e, node);
						break;
					}
					Handlers.code(e, node);
					break;
				case 'l':
					e.preventDefault();
					Handlers.link(e, node);
					break;
				case 'q':
					e.preventDefault();
					Handlers.quote(e, node);
					break;
				case 'u':
					e.preventDefault();
					Handlers.unorderedlist(e, node);
					break;
				case 'o':
					e.preventDefault();
					Handlers.orderedlist(e, node);
					break;
				case 't':
					e.preventDefault();
					Handlers.table(e, node);
					break;
				case 'g':
					e.preventDefault();
					if (isShiftKeyPressed) {
						Handlers.github(e, node);
						break;
					}
					break;
			}
		}
	};

	// Remove the key from the keysPressed object when the key is released
	// Why? Because we want to know when the key is pressed and when it is released
	const handleKeyUp = (e: KeyboardEvent) => {
		delete keysPressed[normalizeKey(os, e.key)];
	};

	node.addEventListener('keydown', handleKeyDown);
	node.addEventListener('keyup', handleKeyUp);

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeyDown);
			node.removeEventListener('keyup', handleKeyUp);
		}
	};
};

const adjustTextareaHeight = (container: HTMLDivElement, textArea: HTMLTextAreaElement) => {
	const containerHeight = container.clientHeight;
	const textAreaOffsetTop = textArea.offsetTop;
	const padding = 17;
	const calculatedHeight = containerHeight - textAreaOffsetTop - padding;
	textArea.style.height = `${calculatedHeight}px`;
};

export const useTextareaHeight: Action<HTMLTextAreaElement, HTMLDivElement> = (
	node: HTMLTextAreaElement,
	container: HTMLDivElement
) => {
	const adjustHeight = () => adjustTextareaHeight(container, node);

	const handleReadyStateChange = (event: Event) => {
		const target = event.target as Document;
		switch (target.readyState) {
			case 'complete':
				node.style.height = `310px`;
				break;
		}
	};

	document.addEventListener('readystatechange', handleReadyStateChange);

	window.addEventListener('resize', adjustHeight);

	return {
		destroy() {
			document.removeEventListener('readystatechange', handleReadyStateChange);
			window.removeEventListener('resize', adjustHeight);
		}
	};
};

export const openTabs: Action<HTMLButtonElement, { tabId: string }> = (
	node: HTMLButtonElement,
	args: { tabId: string }
) => {
	const openTab = (e: Event) => {
		// Get the parent, grandparent, and great-grandparent of the button
		// Why: To get the tab contents and tabs
		const nodeParent = node.parentElement as HTMLElement;
		const nodeGrandParent = nodeParent.parentElement as HTMLElement;
		const nodeGreatGrandParent = nodeGrandParent.parentElement as HTMLElement;
		const tabContents = nodeGreatGrandParent.querySelectorAll('.tab-content');
		const tabs = nodeGrandParent.querySelectorAll('.tab');

		// Remove the active class from all tabs and hide all tab contents
		// Why: To show the active tab and hide the inactive tab contents
		tabs?.forEach((tab) => tab.classList.remove('tab-active'));
		tabContents.forEach((tabContent) => tabContent.classList.add('hidden'));

		// Get the tab and tab content to show
		const tab = e.target as HTMLElement;
		const tabContent = nodeGreatGrandParent.querySelector(`#${args.tabId}`) as HTMLElement;
		tab.classList.add('tab-active');
		tabContent.classList.remove('hidden');
	};

	node.addEventListener('click', openTab);

	return {
		destroy() {
			node.removeEventListener('click', openTab);
		}
	};
};
