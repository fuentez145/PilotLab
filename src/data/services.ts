export interface ServiceStep {
	n: string;
	name: string;
	desc: string;
}

export interface Service {
	slug: string;
	n: string;
	/** Index-page card name */
	name: string;
	/** SERP title (≤60 chars) and meta description (≤160 chars) */
	seoTitle: string;
	seoDesc: string;
	/** Detail hero, split across two lines (second line blue) */
	title1: string;
	title2: string;
	/** Index-page card description */
	desc: string;
	/** Detail hero intro */
	intro: string;
	/** Index-page "What you get" list */
	items: string[];
	/** Detail "This is for you if" cards */
	fits: string[];
	steps: ServiceStep[];
	deliverables: string[];
	labSlug: string;
	labName: string;
	labDesc: string;
	cta: string;
}

export const services: Service[] = [
	{
		slug: 'web-applications',
		n: '01',
		name: 'Web applications',
		seoTitle: 'Web App Development — SaaS, Dashboards & Tools | PilotLab',
		seoDesc:
			'SaaS products, dashboards, and internal tools built end to end — scoped together, prototyped first, demoed live every week, launched with a month of free support.',
		title1: 'Web',
		title2: 'applications',
		desc: 'Dashboards, SaaS products, and internal tools — complex interfaces that stay fast at scale and pleasant under pressure.',
		intro:
			'Dashboards, SaaS products, and internal tools — complex interfaces that stay fast at scale. Built end to end: scoping, design, engineering, launch.',
		items: [
			'Product scoping and technical plan',
			'UI design and interactive prototype',
			'Full build with weekly live demos',
			'Testing, deployment, and documentation',
			'A month of post-launch support, free',
		],
		fits: [
			'You have a product idea and need it built right the first time.',
			'Your internal tool is a spreadsheet held together with hope.',
			'Your existing app has outgrown its first version.',
		],
		steps: [
			{ n: '01', name: 'Scope together', desc: 'A discovery call and written brief. We define what "done" means — features, users, success criteria — before anything is signed.' },
			{ n: '02', name: 'Prototype first', desc: 'A clickable prototype of the core flows so you can feel the product before a line of production code exists.' },
			{ n: '03', name: 'Build in the open', desc: 'Weekly demos on a live staging URL. You watch the real product grow, not read status reports.' },
			{ n: '04', name: 'Launch and stay', desc: 'Deployment, docs, a recorded walkthrough — and a month on call after launch, free.' },
		],
		deliverables: [
			'A production application in your repos, under your accounts',
			'Interactive prototype and UI designs',
			'Full documentation and recorded walkthrough',
			'Test suite and deployment pipeline',
			'A month of post-launch support',
		],
		labSlug: 'freightboard',
		labName: 'Freightboard',
		labDesc: 'A dispatch dashboard concept — dense data, keyboard-first, every interaction under 100ms.',
		cta: 'Have a product in mind?',
	},
	{
		slug: 'e-commerce',
		n: '02',
		name: 'E-commerce',
		seoTitle: 'E-commerce Development — Headless Storefronts | PilotLab',
		seoDesc:
			'Headless storefronts on Shopify or fully custom: editorial brand storytelling, sub-second mobile loads, instant checkout. Built to convert — and easy to run yourself.',
		title1: 'E-',
		title2: 'commerce',
		desc: 'Headless storefronts on Shopify or fully custom — built to convert on mobile and easy for you to run day to day.',
		intro:
			'Headless storefronts on Shopify or fully custom — premium brand storytelling with instant mobile checkout. Built to convert and easy to run yourself.',
		items: [
			'Storefront design and content model',
			'Headless build with Shopify checkout',
			'Performance budget: sub-second mobile',
			'CMS setup and editor training',
			'Analytics and conversion tracking',
		],
		fits: [
			"Your themed store looks like everyone else's and loads slower.",
			"Most of your traffic is mobile but most of your sales aren't.",
			'Your brand deserves better than template constraints.',
		],
		steps: [
			{ n: '01', name: 'Audit and plan', desc: "We measure your current funnel — where visitors drop, what's slow — and agree on the targets." },
			{ n: '02', name: 'Design the story', desc: 'Editorial product pages, ingredient deep-dives, bundles — a content model your team can compose in freely.' },
			{ n: '03', name: 'Build headless', desc: 'Custom front end, Shopify checkout kept for trust and speed. Sub-second mobile is the budget, not the goal.' },
			{ n: '04', name: 'Launch and measure', desc: 'Analytics wired to the metrics that matter, editor training, and a month on call.' },
		],
		deliverables: [
			'A headless storefront you fully own',
			'CMS with editor training — publish without a developer',
			'Sub-second mobile performance, verified',
			'Conversion and analytics setup',
			'A month of post-launch support',
		],
		labSlug: 'glasshouse',
		labName: 'Glasshouse Store',
		labDesc: 'A storefront concept — editorial storytelling, 0.9s mobile loads, browsable end to end.',
		cta: 'Ready to sell better?',
	},
	{
		slug: 'marketing-sites',
		n: '03',
		name: 'Marketing sites',
		seoTitle: 'Marketing Sites — Fast, SEO-Ready Brand Sites | PilotLab',
		seoDesc:
			'Brand sites that load instantly, rank well, and are a joy to edit. Static-first builds targeting 100 Lighthouse, with a CMS you can publish with in minutes.',
		title1: 'Marketing',
		title2: 'sites',
		desc: 'Brand sites that load instantly, rank well, and are a joy to edit — no developer needed for day-to-day updates.',
		intro:
			'Brand sites that load instantly, rank well, and are a joy to edit. Designed from your brand — or we build the brand direction with you.',
		items: [
			'Design from brand or from scratch',
			'Static-first build, 100 Lighthouse target',
			'CMS you can publish with in minutes',
			'SEO fundamentals baked in',
			'Launch checklist and handover call',
		],
		fits: [
			'Your site is six months out of date because updating it needs a developer.',
			"You're launching and need a credible home fast.",
			'Your current site is slow enough to lose visitors before it paints.',
		],
		steps: [
			{ n: '01', name: 'Content first', desc: 'We start with what you need to say — pages, stories, proof — and design around it, not the other way.' },
			{ n: '02', name: 'Design the system', desc: 'A layout system, not just pages: type, grid, and components that scale as you add content.' },
			{ n: '03', name: 'Build static-first', desc: '100 Lighthouse is the target on every page. Zero JavaScript where none is needed.' },
			{ n: '04', name: 'Hand over the keys', desc: 'A CMS you can publish with in minutes, SEO fundamentals baked in, launch checklist done together.' },
		],
		deliverables: [
			'A brand site scoring 100 on Lighthouse',
			'CMS you can publish with — no developer needed',
			'SEO fundamentals: metadata, sitemaps, structured data',
			'Design system that grows with you',
			'Launch checklist and handover call',
		],
		labSlug: 'fieldnotes',
		labName: 'Fieldnotes',
		labDesc: 'An editorial site template — reads like a magazine, loads like a static page.',
		cta: 'Need a better home?',
	},
	{
		slug: 'rescue-performance',
		n: '04',
		name: 'Rescue & performance',
		seoTitle: 'Website Rescue & Performance Optimization | PilotLab',
		seoDesc:
			'Slow, fragile, or abandoned build? We audit with data, fix by priority, and benchmark every step — real teardowns have gone from 11-second loads to 900ms.',
		title1: 'Rescue &',
		title2: 'performance',
		desc: 'Slow, fragile, or half-finished builds inherited and made solid — profiled first, fixed with data, benchmarked after.',
		intro:
			"Slow, fragile, or half-finished builds inherited and made solid. Profiled first, fixed with data, benchmarked after — no rewrites you don't need.",
		items: [
			'Full audit with measured findings',
			'Prioritized fix plan you can sanity-check',
			'Hands-on fixes, benchmarked step by step',
			'Before/after performance report',
			'Knowledge transfer to your team',
		],
		fits: [
			'Your app takes double-digit seconds to load and customers mention it.',
			'A previous developer or agency left mid-project.',
			'You\'ve been told "it needs a full rewrite" and want a second opinion.',
		],
		steps: [
			{ n: '01', name: 'Measure everything', desc: "Profiling before opinions. A full audit with numbers: what's slow, why, and what it costs you." },
			{ n: '02', name: 'Plan the fixes', desc: 'A prioritized plan ordered by impact-per-effort — you can sanity-check it with anyone you trust.' },
			{ n: '03', name: 'Fix and benchmark', desc: 'Each fix measured against the baseline. You see the numbers move week by week.' },
			{ n: '04', name: 'Transfer the knowledge', desc: "A before/after report and a session with your team so the same problems don't come back." },
		],
		deliverables: [
			'Audit report with measured findings',
			'Prioritized, sanity-checkable fix plan',
			'Hands-on fixes, benchmarked step by step',
			'Before/after performance report',
			'Knowledge-transfer session with your team',
		],
		labSlug: 'benchpress',
		labName: 'Benchpress',
		labDesc: 'A public teardown — a slow dashboard rebuilt from 11 seconds to 900ms, step by step.',
		cta: 'Something feel broken?',
	},
	{
		slug: 'api-platform-engineering',
		n: '05',
		name: 'API and platform engineering',
		seoTitle: 'API & Platform Engineering Services | PilotLab',
		seoDesc: 'Reliable APIs and internal platforms that connect your product, data, and team — designed for observability, security, and steady growth.',
		title1: 'API and',
		title2: 'platform engineering',
		desc: 'Reliable APIs, integrations, and internal platforms that give your product a stable foundation for growth.',
		intro: 'Reliable APIs, integrations, and internal platforms that give your product a stable foundation for growth. We make the contracts clear, the operations visible, and the handover practical.',
		items: ['API and integration architecture', 'Authentication, permissions, and rate limits', 'Background jobs, queues, and webhooks', 'Observability, testing, and deployment', 'Documentation your team can use'],
		fits: ['Your product depends on fragile integrations or undocumented endpoints.', 'Your team needs a platform layer before more features can ship safely.', 'You want infrastructure that is understandable, not a second product to maintain.'],
		steps: [
			{ n: '01', name: 'Map the contracts', desc: 'We document the systems, data boundaries, and failure modes before choosing an implementation.' },
			{ n: '02', name: 'Build the foundation', desc: 'Clear API contracts, authentication, validation, and deployment paths are established first.' },
			{ n: '03', name: 'Instrument the edges', desc: 'Logs, metrics, traces, retries, and alerts make the platform observable under real traffic.' },
			{ n: '04', name: 'Hand over the system', desc: 'Your team gets documentation, runbooks, and a walkthrough of how to operate what we built.' },
		],
		deliverables: ['Documented API and integration contracts', 'Secure auth and permission model', 'Tested deployment and rollback path', 'Operational dashboards and alerts', 'Runbooks and team handover'],
		labSlug: 'freightboard',
		labName: 'Freightboard',
		labDesc: 'A dense operational dashboard concept built around reliable data and fast interactions.',
		cta: 'Need a stronger foundation?',
	},
	{
		slug: 'ai-integration-workflow-automation',
		n: '06',
		name: 'AI integration and workflow automation',
		seoTitle: 'AI Integration & Workflow Automation Services | PilotLab',
		seoDesc: 'Practical AI integrations and workflow automation for teams that want measurable time savings, human oversight, and systems they can operate.',
		title1: 'AI integration',
		title2: 'and workflow automation',
		desc: 'Practical AI features and connected workflows that remove repetitive work without hiding decisions in a black box.',
		intro: 'Practical AI features and connected workflows that remove repetitive work without hiding decisions in a black box. We pair models with validation, approvals, monitoring, and the tools your team already uses.',
		items: ['Workflow audit and automation roadmap', 'AI-assisted classification and extraction', 'CRM, help desk, and internal tool integrations', 'Human review and approval flows', 'Evaluation, monitoring, and cost controls'],
		fits: ['Your team spends hours copying information between tools.', 'You need AI in a real workflow, not another isolated demo.', 'You want automation with clear ownership, fallbacks, and an audit trail.'],
		steps: [
			{ n: '01', name: 'Find the leverage', desc: 'We map repetitive work and choose a narrow workflow with a measurable baseline.' },
			{ n: '02', name: 'Prototype safely', desc: 'A small, reviewable proof uses real-shaped inputs while keeping high-impact actions behind approval.' },
			{ n: '03', name: 'Connect the tools', desc: 'We integrate the systems of record with structured outputs, retries, permissions, and visible failures.' },
			{ n: '04', name: 'Measure and improve', desc: 'Quality checks, cost tracking, and a handover keep the workflow useful as your team and models change.' },
		],
		deliverables: ['A scoped automation roadmap', 'Production AI integration or workflow', 'Validation and human approval controls', 'Evaluation and monitoring approach', 'Documentation and operating handover'],
		labSlug: 'fieldnotes',
		labName: 'Fieldnotes',
		labDesc: 'An editorial workflow concept — structured content, clear systems, and a calm publishing experience.',
		cta: 'Have repetitive work to remove?',
	},
];
