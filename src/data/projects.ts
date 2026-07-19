import type { ImageMetadata } from 'astro';
import freightboardImg from '../assets/work/freightboard.png';
import glasshouseImg from '../assets/work/glasshouse.png';
import meridianImg from '../assets/work/meridian.png';
import fieldnotesImg from '../assets/work/fieldnotes.png';
import wayfareImg from '../assets/work/wayfare.png';
import benchpressImg from '../assets/work/benchpress.png';

export interface CaseResult {
	big: string;
	small: string;
}

export interface Project {
	slug: string;
	name: string;
	tag: string;
	/** Image alt text (was the placeholder label) */
	ph: string;
	image: ImageMetadata;
	/** Card description on the Lab grid */
	desc: string;
	client: string;
	year: string;
	scope: string;
	stack: string;
	summary: string;
	challenge: string;
	approach: string;
	results: CaseResult[];
}

export const projects: Project[] = [
	{
		slug: 'freightboard',
		image: freightboardImg,
		name: 'Freightboard',
		tag: 'Web app concept',
		ph: 'Freightboard — dispatch dashboard demo',
		desc: 'A logistics dispatch dashboard — live tables, keyboard-first workflows, sub-second everything.',
		client: 'Self-initiated',
		year: '2025',
		scope: 'Concept + build',
		stack: 'TypeScript, React, Node',
		summary:
			'A logistics dispatch dashboard built to answer one question: how fast can a data-heavy operations UI feel?',
		challenge:
			"Operations tools are usually slow, mouse-heavy, and ugly — because their users can't choose alternatives. Freightboard explores what dispatch software looks like when it's built with consumer-product care: dense data, but instant and keyboard-first.",
		approach:
			'Virtualized live tables over simulated depot data, command-palette navigation, optimistic updates on every action, and a strict 100ms interaction budget. Every pattern here is production-ready and reusable for a real client build.',
		results: [
			{ big: '<100ms', small: 'every interaction, measured' },
			{ big: '0 clicks', small: 'common tasks fully keyboard-driven' },
			{ big: 'Live', small: 'demo you can try right now' },
		],
	},
	{
		slug: 'glasshouse',
		image: glasshouseImg,
		name: 'Glasshouse Store',
		tag: 'E-commerce demo',
		ph: 'Glasshouse — storefront demo product page',
		desc: 'A headless storefront concept: editorial product stories, instant mobile checkout.',
		client: 'Self-initiated',
		year: '2025',
		scope: 'Storefront concept',
		stack: 'Shopify Hydrogen, Sanity',
		summary:
			'A headless storefront concept for a premium skincare brand — editorial storytelling with instant checkout.',
		challenge:
			'Most themed stores make premium brands look generic and load slowly on mobile, where most buying happens. Glasshouse shows the alternative: full editorial freedom without giving up Shopify’s checkout.',
		approach:
			'Headless build with structured content for product stories and ingredient deep-dives, mobile treated as the primary canvas, and a sub-second page budget throughout.',
		results: [
			{ big: '0.9s', small: 'mobile page load' },
			{ big: '100', small: 'Lighthouse performance score' },
			{ big: 'Live', small: 'demo storefront, browsable end to end' },
		],
	},
	{
		slug: 'meridian',
		image: meridianImg,
		name: 'Meridian UI',
		tag: 'Design system',
		ph: 'Meridian UI — component library',
		desc: 'An open component library — 60+ accessible components, tokens, and docs.',
		client: 'Open source',
		year: '2024',
		scope: 'System + docs',
		stack: 'React, Storybook, Tokens',
		summary:
			'An open component library — 60+ accessible components with tokens, docs, and do/don’t examples.',
		challenge:
			'Design systems fail when nobody reads the docs. Meridian is an exercise in documentation people actually use: live examples, copy-paste snippets, and accessibility built in rather than bolted on.',
		approach:
			'Token-based theming, every component keyboard-tested and screen-reader-tested, Storybook docs with do/don’t pairs, and migration codemods as a first-class feature.',
		results: [
			{ big: '60+', small: 'documented, accessible components' },
			{ big: 'WCAG AA', small: 'every component, verified' },
			{ big: 'Open', small: 'source — read every line' },
		],
	},
	{
		slug: 'fieldnotes',
		image: fieldnotesImg,
		name: 'Fieldnotes',
		tag: 'Marketing site',
		ph: 'Fieldnotes — editorial site layout',
		desc: 'An editorial site template that reads like a magazine, loads like a static page.',
		client: 'Self-initiated',
		year: '2024',
		scope: 'Design + build',
		stack: 'Astro, Sanity',
		summary: 'An editorial site template that reads like a magazine and loads like a static page.',
		challenge:
			'Brand sites force a choice: rich and slow, or fast and generic. Fieldnotes explores an editorial layout system — big type, art-directed stories — that still scores 100 on every page.',
		approach:
			'Static generation with a structured CMS the "team" can compose in freely, an editorial grid that adapts per story, and zero client-side JavaScript where none is needed.',
		results: [
			{ big: '100', small: 'Lighthouse, every page' },
			{ big: '0kb', small: 'JavaScript on article pages' },
			{ big: 'Live', small: 'template you can browse' },
		],
	},
	{
		slug: 'wayfare',
		image: wayfareImg,
		name: 'Wayfare',
		tag: 'Web app concept',
		ph: 'Wayfare — booking flow demo',
		desc: 'A three-step travel booking flow — progressive fare loading, mobile-first.',
		client: 'Self-initiated',
		year: '2023',
		scope: 'Booking flow study',
		stack: 'TypeScript, Svelte, Node',
		summary: 'A travel booking flow in three steps — a study in removing friction from checkout.',
		challenge:
			'Booking wizards leak users at every step. Wayfare compresses search-to-confirmation into three screens and never blocks on slow fare data.',
		approach:
			'Progressive fare loading so the UI is always interactive, instant inline validation, mobile-first layout, and state that survives refresh and back-button — the details real checkouts get wrong.',
		results: [
			{ big: '3 steps', small: 'search to confirmation' },
			{ big: '0', small: 'blocking spinners in the flow' },
			{ big: 'Live', small: 'demo — book a fake trip' },
		],
	},
	{
		slug: 'benchpress',
		image: benchpressImg,
		name: 'Benchpress',
		tag: 'Performance study',
		ph: 'Benchpress — performance report view',
		desc: 'A teardown of a slow dashboard, rebuilt live: 11s to 900ms, step by step.',
		client: 'Self-initiated',
		year: '2023',
		scope: 'Teardown + rebuild',
		stack: 'React, Node, ClickHouse',
		summary:
			'A public teardown: a deliberately slow analytics dashboard, profiled and rebuilt from 11 seconds to 900ms.',
		challenge:
			'Every slow app is slow in the same few ways. Benchpress builds a realistically bad dashboard — N+1 queries, bloated bundles, waterfall requests — then fixes it in documented, measurable steps.',
		approach:
			'Profile first, touch nothing without data. Fix the data layer, split the bundle by route, move aggregation server-side — each step benchmarked and written up so you can see exactly what mattered.',
		results: [
			{ big: '0.9s', small: 'final load, from 11s' },
			{ big: '-92%', small: 'bundle size on first paint' },
			{ big: '12', small: 'documented optimization steps' },
		],
	},
];
