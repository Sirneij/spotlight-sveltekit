/**
 * Set the cursor position of input or textarea element
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } ctrl - The input or textarea element
 * @param {number} startPos - The start of the cursor position
 * @param {number} endPos - The end of the cursor position
 */
const setCaretPosition = (ctrl: HTMLTextAreaElement, startPos: number, endPos: number) => {
	if (ctrl.setSelectionRange) {
		ctrl.focus();
		ctrl.setSelectionRange(startPos, endPos);
	}
};

/**
 * Get the cursor position of input or textarea element
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } ctrl - The input or textarea element
 * @returns {Record<string, number>} The start and end position of the cursor in the input or textarea element
 */
const getCaretPosition = (ctrl: HTMLTextAreaElement): Record<string, number> =>
	ctrl.selectionStart
		? {
				start: ctrl.selectionStart,
				end: ctrl.selectionEnd
			}
		: {
				start: 0,
				end: 0
			};

/**
 * Insert text into input or textarea element at a specified position.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 * @param { string } text - The text to be inserted
 * @param { number } posStart - The start position where cursor should be placed
 * @param { number } posEnd - The end position where cursor should be placed
 */
export const updateTexareaValue = (
	contentTextArea: HTMLTextAreaElement,
	text: string,
	posStart: number,
	posEnd = 0
) => {
	if (contentTextArea) {
		const start = contentTextArea.selectionStart + posStart;
		let end = start + posEnd;
		if (posEnd === 0) {
			end = contentTextArea.selectionStart + posStart;
		}
		contentTextArea.value = `${contentTextArea.value.slice(
			0,
			contentTextArea.selectionStart
		)}${text}${contentTextArea.value.slice(contentTextArea.selectionStart)}`;

		setCaretPosition(contentTextArea, start, end);
	}
};

/**
 * Add markdown bold command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addBoldCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	const text = `****`;
	if (contentTextArea.value.indexOf(text) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(text, '');
	} else {
		updateTexareaValue(contentTextArea, text, text.length / 2);
	}
};
/**
 * Add markdown italics command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addItalicCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`*emphasize text*`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`*emphasize text*`, '');
	} else {
		updateTexareaValue(contentTextArea, `*emphasize text*`, 1, `emphasize text`.length);
	}
};
/**
 * Add markdown link command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addLinkCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`[text](link)`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`[text](link)`, '');
	} else {
		updateTexareaValue(contentTextArea, `[text](link)`, 1, `text`.length);
	}
};
/**
 * Add markdown unordered list command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addUnorderedListCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`\n- First item\n- Second item\n`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`\n- First item\n- Second item\n`, '');
	} else {
		updateTexareaValue(
			contentTextArea,
			`\n- First item\n- Second item\n`,
			`\n- `.length,
			`First item`.length
		);
	}
};
/**
 * Add markdown ordered list command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addOrderedListCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`\n1. First item\n2. Second item\n`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`\n1. First item\n2. Second item\n`, '');
	} else {
		updateTexareaValue(
			contentTextArea,
			`\n1. First item\n2. Second item\n`,
			`\n1. `.length,
			`First item`.length
		);
	}
};
/**
 * Add markdown heading command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addHeadingCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`\n## Your heading two \n\n`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`\n## Your heading two \n\n`, '');
	} else {
		updateTexareaValue(
			contentTextArea,
			`\n## Your heading two \n\n`,
			`\n## `.length,
			`Your heading two `.length
		);
	}
};

/**
 * Add markdown image command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addImageCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`![alt text](url)`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`![alt text](url)`, '');
	} else {
		updateTexareaValue(contentTextArea, `![alt text](url)`, `![`.length, `alt text`.length);
	}
};
/**
 * Add custom Github command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addGithubCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`\n{% github {owner}/{repo-name} %}\n`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(
			`\n{% github {owner}/{repo-name} %}\n`,
			''
		);
	} else {
		updateTexareaValue(
			contentTextArea,
			`\n{% github {owner}/{repo-name} %}\n`,
			`\n{% github `.length,
			`{owner}`.length
		);
	}
};

/**
 * Add markdown codeblock command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addCodeBlockCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (
		contentTextArea.value.indexOf(
			'\n```language:filename {line nos} runnable:\n<code here>\n```'
		) !== -1
	) {
		contentTextArea.value = contentTextArea.value.replace(
			'\n```language:filename {line nos} runnable:\n<code here>\n```',
			''
		);
	} else {
		updateTexareaValue(
			contentTextArea,
			'\n```language:filename {line nos} runnable:\n<code here>\n```',
			'\n```'.length,
			`language:filename {line nos} runnable:\n<code here>`.length
		);
	}
};

/**
 * Add markdown notice command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addNoteCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (
		contentTextArea.value.indexOf(
			'\n<div class="admonition note">\n<span class="title"><b>Note:</b></span>\n<p></p>\n</div>'
		) !== -1
	) {
		contentTextArea.value = contentTextArea.value.replace(
			'\n<div class="admonition note">\n<span class="title"><b>Note:</b></span>\n<p></p>\n</div>',
			''
		);
	} else {
		updateTexareaValue(
			contentTextArea,
			'\n<div class="admonition note">\n<span class="title"><b>Note:</b></span>\n<p></p>\n</div>',
			'\n<div class="admonition note">\n<span class="title"><b>Note:</b>'.length
		);
	}
};

/**
 * Add markdown tip command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addTipCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (
		contentTextArea.value.indexOf(
			'\n<div class="admonition tip">\n<span class="title"><b>Tip:</b></span>\n<p></p>\n</div>'
		) !== -1
	) {
		contentTextArea.value = contentTextArea.value.replace(
			'\n<div class="admonition tip">\n<span class="title"><b>Tip:</b></span>\n<p></p>\n</div>',
			''
		);
	} else {
		updateTexareaValue(
			contentTextArea,
			'\n<div class="admonition tip">\n<span class="title"><b>Tip:</b></span>\n<p></p>\n</div>',
			'\n<div class="admonition tip">\n<span class="title"><b>Tip:</b>'.length
		);
	}
};

/**
 * Add markdown warning command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addWarningCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (
		contentTextArea.value.indexOf(
			'\n<div class="admonition warning">\n<span class="title"><b>Warning:</b></span>\n<p></p>\n</div>'
		) !== -1
	) {
		contentTextArea.value = contentTextArea.value.replace(
			'\n<div class="admonition warning">\n<span class="title"><b>Warning:</b></span>\n<p></p>\n</div>',
			''
		);
	} else {
		updateTexareaValue(
			contentTextArea,
			'\n<div class="admonition warning">\n<span class="title"><b>Warning:</b></span>\n<p></p>\n</div>',
			'\n<div class="admonition warning">\n<span class="title"><b>Warning:</b>'.length
		);
	}
};

/**
 * Add markdown quote command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addQuoteCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf(`\n> Quote here\n`) !== -1) {
		contentTextArea.value = contentTextArea.value.replace(`\n> Quote here\n`, '');
	} else {
		updateTexareaValue(contentTextArea, `\n> Quote here\n`, `\n> `.length, `Quote here`.length);
	}
};

/**
 * Add markdown code command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addCodeCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (contentTextArea.value.indexOf('`code here`') !== -1) {
		contentTextArea.value = contentTextArea.value.replace('`code here`', '');
	} else {
		updateTexareaValue(contentTextArea, '`code here`', '`'.length, 'code here'.length);
	}
};

/**
 * Add markdown table command to input or textarea element. Remove if present.
 * @file $lib/utils/editor/commands.ts
 * @param { HTMLTextAreaElement } contentTextArea - The input or textarea element
 */
const addTableCommand = (event: Event, contentTextArea: HTMLTextAreaElement) => {
	if (
		contentTextArea.value.indexOf(
			'\n| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |\n'
		) !== -1
	) {
		contentTextArea.value = contentTextArea.value.replace(
			'\n| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |\n',
			''
		);
	} else {
		updateTexareaValue(
			contentTextArea,
			'\n| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |\n',
			'\n| Header 1 | Header 2 |\n| --- | --- |\n| Row 1 | Row 2 |\n'.length
		);
	}
};

// Define a type for the handler functions
type HandlerFunction = (e: Event, textArea: HTMLTextAreaElement) => void;

// Define a type for the Handlers object, with an index signature
interface HandlersType {
	[key: string]: HandlerFunction;
}

export const Handlers: HandlersType = {
	bold: addBoldCommand,
	italize: addItalicCommand,
	link: addLinkCommand,
	unorderedlist: addUnorderedListCommand,
	orderedlist: addOrderedListCommand,
	heading: addHeadingCommand,
	uploadimage: addImageCommand,
	github: addGithubCommand,
	codeblock: addCodeBlockCommand,
	// note: addNoteCommand,
	// tip: addTipCommand,
	// warning: addWarningCommand,
	quote: addQuoteCommand,
	code: addCodeCommand,
	table: addTableCommand
};
