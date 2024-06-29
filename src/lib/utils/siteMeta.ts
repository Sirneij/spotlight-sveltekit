import logoAmazon from '$lib/assets/logos/aws.svg';
import logoMicrosoft from '$lib/assets/logos/azure.svg';
import logoAirbnb from '$lib/assets/logos/airbnb.svg';
import logoFB from '$lib/assets/logos/facebook.svg';
import type { Resume } from '$lib/types/Resume.interface';
import { browser } from '$app/environment';
import { detectOS } from './commons';

export const siteMeta = {
	title: 'John Owolabi Idogun',
	description:
		'John Owolabi Idogun is a developer advocate, keynote speaker, author, and open source practitioner.',
	copyright: 'John Owolabi Idogun. All rights reserved.',
	author: {
		name: 'John Owolabi Idogun',
		email: 'me@johnidogun.dev',
		twitter: 'https://twitter.com/sirneij',
		instagram: 'https://www.instagram.com/sirneijofficial/',
		github: 'https://github.com/sirneij',
		linkedin: 'https://linkedin.com/in/john-owolabi-idogun/',
		youtube: 'https://youtube.com/@sirneij',
		resumeUrl: 'https://drive.google.com/uc?export=download&id=1V_0PjQOmWvV82rk4hPdvyLVWyDCpQL6m'
	},
	siteUrl: 'https://www.johnidogun.dev'
};

export const resumes: Resume[] = [
	{
		company: 'Amazon',
		title: 'Principal Developer Advocate',
		logo: logoAmazon,
		start: '2022',
		end: {
			label: 'Present',
			dateTime: new Date().getFullYear().toString()
		}
	},
	{
		company: 'Microsoft Azure',
		title: 'Principal Cloud Developer Advocate',
		logo: logoMicrosoft,
		start: '2017',
		end: '2022'
	},
	{
		company: 'Airbnb',
		title: 'CIO',
		logo: logoAirbnb,
		start: '2014',
		end: '2016'
	},
	{
		company: 'Facebook, Inc.',
		title: 'COO',
		logo: logoFB,
		start: '2008',
		end: '2014'
	}
];

export const projects = [
	{
		name: 'Trans Bench',
		description: 'Benchmarking suite for logic systems and DBMSs.',
		link: {
			href: 'https://github.com/Sirneij/trans-bench',
			label: 'https://github.com/Sirneij/trans-bench'
		},
		logo: 'https://picsum.photos/200'
	},

	{
		name: 'CryptoFlow',
		description:
			'A Q&A web application to demostrate how to build a secured and scalable client-server application with axum and sveltekit',
		link: { href: 'https://cryptoflow-one.vercel.app', label: 'CryptoFlow' },
		logo: 'https://picsum.photos/202'
	},
	{
		name: 'Rust Auth',
		description: 'A fullstack authentication system using rust, sveltekit, and Typescript',
		link: { href: 'https://github.com/Sirneij/rust-auth', label: 'Rust Authentication System' },
		logo: 'https://picsum.photos/203'
	},
	{
		name: 'Go Auth',
		description: 'A fullstack session-based authentication system using golang and sveltekit',
		link: { href: 'https://github.com/Sirneij/go-auth', label: 'github.com' },
		logo: 'https://picsum.photos/204'
	},
	{
		name: 'Kubernetes',
		description: 'Production-Grade Container Scheduling and Management',
		link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
		logo: 'https://picsum.photos/205'
	},
	{
		name: 'Go',
		description: 'Build fast, reliable, and efficient software at scale',
		link: { href: 'https://go.dev', label: 'go.dev' },
		logo: 'https://picsum.photos/206'
	}
];

export const articles = [
	{
		slug: 'article-1',
		title: 'Crafting a design system for a multiplanetary future 1',
		date: '2023-01-01',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
	},
	{
		slug: 'article-2',
		title: 'Crafting a design system for a multiplanetary future 2',
		date: '2023-02-01',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
	},
	{
		slug: 'article-3',
		title: 'Crafting a design system for a multiplanetary future 3',
		date: '2023-03-01',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
	},
	{
		slug: 'article-4',
		title: 'Crafting a design system for a multiplanetary future 4',
		date: '2023-04-01',
		description:
			'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
	}
];

export let tagList = ['rust', 'webdev', 'golang', 'javascript'];

const ctrlOrCmd = detectOS() === 'mac' ? 'CMD' : 'Ctrl';
const altOrOption = detectOS() === 'mac' ? 'Option' : 'Alt';

export const commands = [
	{
		command: 'Bold',
		htmlSymbol:
			'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8v5Zm10 4.5a4.501 4.501 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5ZM8 13v5h5.5a2.5 2.5 0 0 0 0-5H8Z"></path></svg>',
		shortcut: `${ctrlOrCmd}+B`
	},
	{
		command: 'Italicize',
		htmlSymbol:
			'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path></svg>',
		shortcut: `${ctrlOrCmd}+I`
	},
	{
		command: 'Heading',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"></path></svg>',
		shortcut: `${ctrlOrCmd}+Shift+H`
	},
	{
		command: 'Quote',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"></path></svg>',
		shortcut: `Ctrl+Q`
	},
	{
		command: 'Code',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z"></path></svg>',
		shortcut: `${ctrlOrCmd}+K`
	},
	{
		command: 'Link',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M18.364 15.536 16.95 14.12l1.414-1.414a5.001 5.001 0 0 0-3.531-8.551 5 5 0 0 0-3.54 1.48L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 1 1 9.9 9.9l-1.415 1.414zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path></svg>',
		shortcut: `${ctrlOrCmd}+L`
	},
	{
		command: 'UploadImage',
		htmlSymbol:
			'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="w-5 h-5" fill="currentColor"><path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path></svg>',
		shortcut: `${ctrlOrCmd}+Shift+I`
	},
	{
		command: 'UnorderedList',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8zm0 7h13v2H8z"></path></svg>',
		shortcut: `${ctrlOrCmd}+U`
	},
	{
		command: 'OrderedList',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M8 4h13v2H8zM5 3v3h1v1H3V6h1V4H3V3zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2zM8 11h13v2H8zm0 7h13v2H8z"></path></svg>',
		shortcut: `${ctrlOrCmd}+Shift+O`
	},
	{
		command: 'Table',
		htmlSymbol:
			'<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12l16 0" /><path d="M12 4l0 16" /></svg>',
		shortcut: `${ctrlOrCmd}+Shift+T`
	},
	{
		command: 'CodeBlock',
		htmlSymbol:
			'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5zm15 7-3.536 3.536-1.414-1.415L16.172 12 14.05 9.879l1.414-1.415zM7.828 12l2.122 2.121-1.414 1.415L5 12l3.536-3.536L9.95 9.88z"></path></svg>',
		shortcut: `${ctrlOrCmd}+Shift+K`
	},
	{
		command: 'GitHub',
		htmlSymbol:
			'<svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>',
		shortcut: `${ctrlOrCmd}+Shift+G`
	}
];
