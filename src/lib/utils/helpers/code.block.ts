import { browser } from '$app/environment';
import hljs from 'highlight.js';

/**
 * Change the theme of the code blocks.
 * @file src/lib/utils/helpers/code.block.ts
 * @param {string} themeName - The name of the theme to change to.
 */
const changeTheme = (themeName: string) => {
	// Disable all theme stylesheets except the one to be enabled
	document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]').forEach((link) => {
		if (!link.href.includes(`${themeName}.min.css`)) {
			link.disabled = true;
		}
	});
	// Enable the selected theme stylesheet
	const themeLink: HTMLLinkElement | null = document.querySelector(
		`link[href*="${themeName}.min.css"]`
	);
	if (themeLink) {
		themeLink.disabled = false;
	}
};

/**
 * Create and show some fancy tools at the top of every code block rendered.
 * @file src/lib/utils/helpers/code.block.ts
 * @param {HTMLElement} block - The current code block.
 */
export const createAndShowCodeblockTools = (block: HTMLElement) => {
	const language = block.getAttribute('class')?.split('-')[1]?.split(' ')[0] || 'plaintext';
	const fileName = block.getAttribute('data-filename') || 'file.txt';
	const runnable = block.getAttribute('data-runnable') === 'true';

	// Main div to hold all elements
	const mainDiv = document.createElement('div');
	mainDiv.classList.add(
		'relative',
		'z-10',
		// '-ml-10',
		'col-span-3',
		'bg-slate-800',
		'rounded-t-xl',
		'shadow-lg',
		'xl:ml-0',
		'dark:shadow-none',
		'dark:ring-1',
		'dark:ring-inset',
		'dark:ring-white/10'
	);

	// Inner div that houses language name and copy icon
	const firstInnerDiv = document.createElement('div');
	firstInnerDiv.classList.add('relative', 'flex', 'text-slate-400', 'text-xs', 'leading-6');

	const languageLabel = document.createElement('div');
	languageLabel.classList.add(
		'mt-2',
		'flex-none',
		'text-sky-300',
		'border-t',
		'border-b',
		'border-t-transparent',
		'border-b-sky-300',
		'px-4',
		'py-1',
		'flex',
		'items-center'
	);
	languageLabel.innerText = fileName === 'file.txt' ? language : fileName;
	firstInnerDiv.appendChild(languageLabel);

	const fillerDiv = document.createElement('div');
	fillerDiv.classList.add('flex-auto', 'flex', 'pt-2', 'rounded-tr-xl', 'overflow-hidden');
	const fillerInnerDiv = document.createElement('div');
	fillerInnerDiv.classList.add(
		'flex-auto',
		'-mr-px',
		'bg-slate-700/50',
		'border',
		'border-slate-500/30',
		'rounded-tl'
	);
	fillerDiv.appendChild(fillerInnerDiv);
	firstInnerDiv.appendChild(fillerDiv);

	const buttonContainer = document.createElement('div');
	buttonContainer.classList.add(
		'absolute',
		'top-2',
		'right-0',
		'h-8',
		'flex',
		'items-center',
		'pr-4',
		'space-x-2'
	);

	const createButton = (icon: string, title: string, onClick: () => void) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.classList.add(
			'text-slate-500',
			'hover:text-slate-400',
			'w-8',
			'h-8',
			'flex',
			'items-center',
			'justify-center'
		);
		button.title = title;
		button.innerHTML = icon;
		button.addEventListener('click', onClick);
		return button;
	};

	const copyButtonIcon = `
		<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-8">
			<path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
			<path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
		</svg>
	`;
	const copyButton = createButton(copyButtonIcon, 'Copy code', () => {
		// For copying the code block, I used `mainDiv.querySelector('code')?.textContent`
		//instead of `block.textContent` to get the updated code block content after editing.
		navigator.clipboard.writeText(mainDiv.querySelector('code')?.textContent as string).then(() => {
			const svg = copyButton.querySelector('svg');
			if (svg) {
				svg.style.color = 'var(--tw-prose-links)';
				svg.style.transform = 'rotate(-15deg)';
				setTimeout(() => {
					svg.style.color = '';
					svg.style.transform = '';
				}, 1500);
			}
		});
	});
	buttonContainer.appendChild(copyButton);

	let outputElement: HTMLElement = document.createElement('div');
	outputElement.classList.add(
		'relative',
		'flex',
		'text-xs',
		'leading-6',
		'overflow-auto',
		'px-4',
		'py-2',
		'max-h-32',
		'hidden'
	);
	outputElement.style.backgroundColor = '#011627';
	outputElement.style.color = '#d6deeb';

	if (runnable) {
		const playButtonIcon = `
		<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-4">
			<path d="M6.75 3.75l10.5 6-10.5 6V3.75z"></path>
		</svg>
	`;
		const playButton = createButton(playButtonIcon, 'Run code', () => {
			const code = mainDiv.querySelector('code')?.textContent;
			if (code && (language === 'js' || language === 'javascript')) {
				try {
					// execute the code using `iframe` to prevent the code from affecting the main page
					const iframe = document.createElement('iframe');
					iframe.style.display = 'none';
					document.body.appendChild(iframe);

					const output = (iframe.contentWindow as any).eval(code);
					// Remove the iframe
					document.body.removeChild(iframe);
					outputElement.innerText = `${output}\n\n\n\n** Process exited - Return Code: 0 **`;
					outputElement.classList.remove('hidden');
				} catch (e) {
					outputElement.innerText = `${e}\n\n\n** Process exited - Return Code: 1 **`;
					outputElement.classList.remove('hidden');
				}
			}
		});
		buttonContainer.appendChild(playButton);
	}

	const toggleButtonIcon = `
		<svg fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="w-8 h-6 code-theme-toggle">
			<path d="M12 1.75V8m0 0H8.25M12 8h3.75M6 12.75v3.5a1.75 1.75 0 0 0 1.75 1.75h8.5A1.75 1.75 0 0 0 18 16.25v-3.5"></path>
			<path d="M3.5 9.25h17"></path>
		</svg>
	`;
	const toggleButton = createButton(toggleButtonIcon, 'Toggle code theme', () => {
		const currentTheme = document.body.getAttribute('data-code') || 'night-owl';
		const newTheme = currentTheme === 'night-owl' ? 'horizon-dark' : 'night-owl';
		changeTheme(newTheme);
		document.body.setAttribute('data-code', newTheme);

		document.querySelectorAll('.code-theme-toggle').forEach((el: Element) => {
			if (el.classList.contains('text-sky-300')) {
				el.classList.remove('text-sky-300');
			} else {
				el.classList.add('text-sky-300');
			}
		});

		// Change the color of the output element
		outputElement.style.backgroundColor = newTheme === 'night-owl' ? '#011627' : '#1c1e26';
		outputElement.style.color = newTheme === 'night-owl' ? '#d6deeb' : '#cbced0';
	});
	buttonContainer.appendChild(toggleButton);

	firstInnerDiv.appendChild(buttonContainer);

	mainDiv.appendChild(firstInnerDiv);

	// Create the pre-wrapper
	const preWrapper = document.createElement('div');
	preWrapper.classList.add('relative');
	const preElement = document.createElement('pre');
	preElement.classList.add('text-sm', 'flex', 'overflow-auto');
	const codeElement = block.cloneNode(true) as HTMLElement;
	codeElement.classList.add('flex-none', 'min-w-full');
	preElement.appendChild(codeElement);
	preWrapper.appendChild(preElement);

	// Only set the code block to be editable if it's a runnable code block
	if (runnable) {
		codeElement.contentEditable = 'true';
		codeElement.spellcheck = false;

		let typingTimer: number;
		const doneTypingInterval = 2000;

		codeElement.addEventListener('keyup', () => {
			clearTimeout(typingTimer);
			typingTimer = setTimeout(() => {
				// format the code block using eslint and prettier

				// Remove the highlighted attribute and re-highlight the code block
				codeElement.removeAttribute('data-highlighted');
				hljs.highlightElement(codeElement);
			}, doneTypingInterval);
		});
	}

	mainDiv.appendChild(preWrapper);

	// Replace the original `pre` block
	block.parentElement?.replaceWith(mainDiv);

	mainDiv.appendChild(outputElement);
};

/**
 * Highlight the code blocks on the page.
 * @file src/lib/utils/helpers/code.block.ts
 * @param {HTMLElement} containerToHighlight - The container to update
 */
export const highlightContainer = (containerToHighlight: HTMLElement) => {
	if (browser) {
		hljs.highlightAll();
		// console.log(containerToHighlight);

		if (containerToHighlight) {
			const blocks = document.querySelectorAll<HTMLElement>('pre code.hljs');
			// console.log(blocks);

			if (blocks) {
				Array.prototype.forEach.call(blocks, (block: HTMLElement) => {
					createAndShowCodeblockTools(block);
				});
			}
		}
	}
};
