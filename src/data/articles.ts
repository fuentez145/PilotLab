export interface ArticleSource {
	label: string;
	url: string;
}

export interface Article {
	slug: string;
	title: string;
	dek: string;
	published: string;
	updated: string;
	readTime: string;
	category: string;
	keyword: string;
	intro: string;
	relatedService?: { label: string; href: string };
	sources?: ArticleSource[];
	sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export const articles: Article[] = [
	{
		slug: 'ai-workflow-automation-small-business',
		title: 'AI Workflow Automation for Small Business: A Practical 2026 Playbook',
		dek: 'A grounded way to find the repetitive work worth automating, connect your tools, and add AI without creating a black box nobody can trust.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '8 min read',
		category: 'Field note',
		keyword: 'AI workflow automation for small business',
		intro: 'The useful AI projects are rarely the flashiest ones. They are the small, repeatable workflows that turn a slow handoff into a dependable system: a lead gets qualified, a support request gets routed, or a weekly report arrives already organized. This playbook explains how to start with that work and build toward automation that your team can actually operate.',
		relatedService: { label: 'AI integration and workflow automation', href: '/services/ai-integration-workflow-automation' },
		sections: [
			{
				heading: 'Start with a workflow, not a model',
				paragraphs: [
					'“Add AI” is not a useful project brief. A workflow is. Write down the trigger, the inputs, the decision, the action, and the owner. If you cannot explain the current process in a few sentences, it is too early to automate it.',
					'Look for work that happens often, follows a recognizable pattern, and has a clear definition of done. That combination gives you a measurable baseline and a safe place for AI to assist rather than silently take over.',
				],
				bullets: ['Lead intake and qualification', 'Inbox or ticket triage', 'Document and meeting-note extraction', 'Weekly reporting and data reconciliation'],
			},
			{
				heading: 'Use AI where judgment is repetitive',
				paragraphs: [
					'Traditional automation is excellent at deterministic rules: if a form is submitted, create a record. AI helps when the input is messy but the output still has a useful shape: classify this request, extract these fields, or draft a response for review.',
					'The strongest production pattern in 2026 is usually hybrid. Code handles permissions, validation, retries, and side effects. A model handles the fuzzy middle. A person stays in the loop for high-impact decisions until the evidence says otherwise.',
				],
				bullets: ['Keep money movement and destructive actions behind explicit approval', 'Validate model output against a schema before it reaches another system', 'Store the source input and decision trail for debugging'],
			},
			{
				heading: 'Connect the systems you already use',
				paragraphs: [
					'An automation is only valuable when it crosses the gap between tools. That might mean a website form, CRM, help desk, calendar, accounting system, or private database. Map the system of record first, then give each integration one clear responsibility.',
					'Prefer stable APIs and webhooks over browser clicks. Use idempotency keys so retries do not create duplicate records, and make failures visible with a queue, an alert, or a small operations view. “It usually works” is not a monitoring strategy.',
				],
			},
			{
				heading: 'Measure the outcome before scaling',
				paragraphs: [
					'Choose one operational metric and one quality metric. For example: time from inquiry to first response, and the percentage of triage decisions accepted by a human reviewer. Compare them with a short baseline before you change the process.',
					'Once the workflow is reliable, improve cost, speed, and coverage one at a time. A smaller model may be enough for classification. A batch step may be better for reports. A human review queue may be the right answer for edge cases. The goal is not maximum autonomy; it is dependable leverage.',
				],
			},
			{
				heading: 'A sensible first project',
				paragraphs: [
					'For many small teams, a practical first project is an AI-assisted intake workflow: collect a request, extract structured details, check for missing information, route it to the right person, and draft the next reply. It is narrow enough to test, useful enough to matter, and flexible enough to grow.',
					'At PilotLab, we design these systems around your existing tools and operating habits. That means a clear scope, a visible audit trail, documented failure paths, and a handover your team can maintain—not a mysterious demo that only works for its creator.',
				],
			},
		],
	},
	{
		slug: 'integrate-ai-existing-saas-product',
		title: 'How to Integrate AI Into an Existing SaaS Product',
		dek: 'A practical architecture guide for adding AI features to a live SaaS product without weakening your API boundaries, security model, or user experience.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '9 min read',
		category: 'AI engineering',
		keyword: 'how to integrate AI into an existing SaaS product',
		intro: 'Adding AI to an existing SaaS product is an integration problem before it is a model-selection problem. The hard work is deciding where intelligence belongs, what data it may access, how results are validated, and how users can correct a wrong answer.',
		relatedService: { label: 'AI integration and workflow automation', href: '/services/ai-integration-workflow-automation' },
		sources: [{ label: 'Postman — State of the API Report', url: 'https://www.postman.com/state-of-api/' }],
		sections: [
			{
				heading: 'Choose one user problem first',
				paragraphs: [
					'An AI roadmap becomes manageable when it starts with a specific user problem: finding information, drafting a response, classifying an incoming request, or summarizing a long record. Define what the user can do faster or better after the feature ships.',
					'Avoid starting with an open-ended chatbot unless conversation is genuinely the product experience. A narrow feature gives you clearer evaluation data, a smaller security boundary, and a better fallback when the model is uncertain.',
				],
				bullets: ['Name the user, trigger, input, expected output, and failure path', 'Set a quality threshold before choosing a model', 'Keep the first release small enough to review with real users'],
			},
			{
				heading: 'Put the model behind an application boundary',
				paragraphs: [
					'Do not scatter provider calls throughout your product code. Put model access behind a small application service that owns prompts, schemas, timeouts, retries, provider configuration, and audit events. This gives the rest of the product a stable contract even when models change.',
					'The service should receive the minimum data needed for the task. Redact sensitive fields where possible, separate tenant data explicitly, and make authorization decisions in your application—not in a prompt.',
				],
			},
			{
				heading: 'Treat model output as untrusted input',
				paragraphs: [
					'AI output should pass through the same discipline as any other external input. Use structured schemas, validate enums and identifiers, reject unexpected fields, and never let free-form text directly trigger a destructive side effect.',
					'For retrieval or tool use, log which documents and tools were available. A useful audit trail records the request, selected context, model version, output validation, and human correction without storing more personal data than you need.',
				],
				bullets: ['Schema validation before persistence', 'Permission checks before every tool call', 'Timeouts and bounded retries', 'A human approval path for high-impact actions'],
			},
			{
				heading: 'Roll out with evaluation, not vibes',
				paragraphs: [
					'Create a small evaluation set from real, permission-safe examples. Measure task success, refusal quality, latency, cost, and how often a reviewer has to correct the result. Keep a set of difficult examples so a prompt or model change cannot quietly regress the feature.',
					'Launch behind a flag, compare the assisted flow with the existing flow, and expose a correction action in the interface. Feedback is most useful when it is attached to the exact input, output, and expected result.',
				],
			},
			{
				heading: 'The integration is the product',
				paragraphs: [
					'A model can be swapped. A well-designed integration is what creates durable value: the right data boundary, clear permissions, predictable fallbacks, and a user interface that makes uncertainty visible. Build that foundation first and new AI capabilities become easier to add safely.',
				],
			},
		],
	},
	{
		slug: 'github-copilot-cloud-agent-linear',
		title: 'How to Use GitHub Copilot Cloud Agent With Linear Without Losing Review',
		dek: 'What GitHub’s July 2026 Linear integration changes for small product teams—and the engineering controls to keep AI-generated work reviewable.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '7 min read',
		category: 'AI news',
		keyword: 'how to use GitHub Copilot cloud agent with Linear',
		intro: 'GitHub announced general availability of a Copilot cloud-agent integration for Linear on July 23, 2026. The workflow lets a team assign a Linear issue to Copilot, have it work in an ephemeral GitHub Actions-powered environment, and receive a draft pull request for human review. The useful question is not whether an agent can open code—it is where your team should let it act.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [{ label: 'GitHub Changelog — Copilot cloud agent for Linear', url: 'https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available' }],
		sections: [
			{
				heading: 'What the new workflow does',
				paragraphs: [
					'The integration connects project tracking to an AI coding workflow. A suitably scoped Linear issue can be assigned to Copilot; the agent analyzes the issue, works in an isolated environment, and opens a draft pull request while reporting progress back to Linear. GitHub says users can select models, custom agents, base branches, and working branches.',
					'This is a meaningful reduction in handoff time, especially for maintenance tasks and well-understood slices of a product. It does not remove the need for a good issue, a healthy test suite, or a reviewer who understands the system.',
				],
			},
			{
				heading: 'Start with issues an agent can finish safely',
				paragraphs: [
					'Good first candidates have a narrow scope, a clear acceptance test, and limited access to sensitive systems. Documentation updates, isolated UI changes, test coverage, small refactors, and well-specified bug fixes are easier to evaluate than a vague “improve the billing system” request.',
					'Write the issue as a compact contract: context, files or boundaries to inspect, behavior to preserve, acceptance criteria, test command, and explicit non-goals. The better the issue, the less the agent has to infer.',
				],
				bullets: ['Define the expected behavior with examples', 'Name the test or verification command', 'Call out migrations, secrets, and files that must not change', 'Require a draft pull request rather than direct production changes'],
			},
			{
				heading: 'Keep the pull request as the control point',
				paragraphs: [
					'The draft pull request is the boundary between generation and merging. Require CI, inspect the diff, read the tests, and ask whether the implementation fits the existing architecture. A green check proves only that the checked conditions passed; it does not prove the agent understood the business rule.',
					'Protect production branches, keep least-privilege permissions, and make reviewers accountable for the final change. For tasks that touch data, payments, authentication, or customer-visible policy, keep a domain expert in the review loop.',
			],
			},
			{
				heading: 'Measure throughput and rework together',
				paragraphs: [
					'Track more than the number of pull requests opened. Measure time from assignment to review, review-to-merge time, change-failure rate, reverted work, and reviewer corrections. If throughput rises but rework rises faster, the workflow is not yet helping.',
					'For a small team, a weekly sample of agent-created pull requests is enough to reveal patterns. Improve the issue template, repository instructions, tests, and allowed task types based on what reviewers repeatedly fix.',
			],
			},
			{
				heading: 'The practical takeaway',
				paragraphs: [
					'Use the Linear integration as a new execution path for well-bounded engineering work—not as a replacement for product judgment. The team still owns prioritization, system design, security, and the decision to merge. An agent can shorten the path from issue to draft; engineering discipline determines whether that path is useful.',
				],
			},
		],
	},
	{
		slug: 'api-first-architecture-saas-platforms',
		title: 'API-First Architecture for SaaS Platforms: A Practical Foundation',
		dek: 'How to design contracts, ownership, authentication, and developer experience before a growing SaaS product becomes a pile of fragile integrations.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '9 min read',
		category: 'Platform engineering',
		keyword: 'API-first architecture for SaaS platforms',
		intro: 'API-first architecture means treating the interfaces between capabilities as deliberate product contracts, not accidental by-products of a web controller. For a growing SaaS platform, that shift makes integrations easier to reason about and gives teams a stable foundation for web clients, mobile apps, partners, internal tools, and AI features.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [{ label: 'Postman — State of the API Report', url: 'https://www.postman.com/state-of-api/' }],
		sections: [
			{
				heading: 'API-first is a design decision',
				paragraphs: [
					'API-first does not mean building an API before thinking about users. It means agreeing on the capabilities, data shapes, errors, and permissions that clients need before implementation details harden around one screen or one team.',
					'Begin with the important workflows and the nouns they share. Then define the smallest useful contract for each capability. A contract should explain successful responses, validation failures, authorization failures, pagination, and compatibility expectations.',
			],
			},
			{
				heading: 'Give every boundary an owner',
				paragraphs: [
					'An API becomes difficult to maintain when nobody owns its meaning. Assign ownership for each domain boundary and document which service is the system of record. Consumers should not need to know which internal tables happen to exist today.',
					'For a small team, ownership does not require a large platform department. It requires a named decision-maker, a review path for breaking changes, and a short record of why the contract looks the way it does.',
				],
				bullets: ['Separate public, partner, and internal contracts', 'Define compatibility and deprecation rules', 'Keep business invariants close to the owning domain', 'Publish examples that a developer can run'],
			},
			{
				heading: 'Design security into the contract',
				paragraphs: [
					'Authentication identifies the caller; authorization decides what that caller may do. Model both explicitly. Use tenant boundaries, scoped tokens, resource-level checks, rate limits, and audit events appropriate to the data and risk.',
					'Never rely on a front-end control as the permission boundary. Test unauthorized access as deliberately as the happy path, and make errors useful without revealing private records or implementation secrets.',
			],
			},
			{
				heading: 'Make the platform pleasant to operate',
				paragraphs: [
					'Good API design includes the operational path. Add request IDs, structured logs, latency and error metrics, contract tests, health checks, and a documented rollback path. When an integration fails, the team should be able to identify which contract, tenant, and dependency were involved.',
					'AI features make this even more important: model calls, retrieval, and tool use should pass through explicit application boundaries with timeouts, validation, and cost visibility. API-first thinking gives those features a place to live safely.',
			],
			},
			{
				heading: 'When API-first is worth the investment',
				paragraphs: [
					'You do not need a developer portal for a two-screen prototype. The investment becomes worthwhile when multiple clients depend on the same capability, integrations are slowing delivery, or teams are duplicating business rules. Start with the boundaries causing the most friction and grow from evidence.',
				],
			},
		],
	},
	{
		slug: 'improve-core-web-vitals-web-application',
		title: 'How to Improve Core Web Vitals for a Web Application',
		dek: 'A practical debugging guide to LCP, INP, and CLS: measure real users first, find the bottleneck, and fix the work that changes the experience.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '10 min read',
		category: 'Performance',
		keyword: 'how to improve Core Web Vitals for a web application',
		intro: 'Improving Core Web Vitals is not a contest to make a synthetic score look perfect. It is a structured way to find where real users wait, lose context, or struggle to interact. Start with field data, connect each metric to a user-visible problem, and fix the highest-impact bottleneck before polishing the rest.',
		relatedService: { label: 'Rescue & performance', href: '/services/rescue-performance' },
		sources: [
			{ label: 'Google Search Central — Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
			{ label: 'web.dev — Web Vitals', url: 'https://web.dev/articles/vitals' },
		],
		sections: [
			{
				heading: 'Know what each metric says',
				paragraphs: [
					'LCP measures loading performance, with a “good” target of 2.5 seconds or less. INP measures responsiveness, with a “good” target below 200 milliseconds. CLS measures visual stability, with a “good” target below 0.1. These thresholds are useful guardrails, not a substitute for understanding the page.',
					'Look at the distribution of real experiences rather than one laptop on a fast connection. Segment by device, connection, route, and user journey. A dashboard that looks healthy overall can still have a serious problem on the checkout route or an older phone.',
			],
			},
			{
				heading: 'Fix LCP by finding the critical path',
				paragraphs: [
					'When LCP is slow, identify the element that becomes the largest content and trace what delays it: server response, render-blocking CSS, font loading, an oversized image, client-side data, or a chain of third-party scripts.',
					'Useful fixes often include faster server work, responsive image formats and dimensions, critical styles, preloading only the true hero asset, and rendering important content without waiting for unnecessary JavaScript.',
			],
			},
			{
				heading: 'Fix INP by reducing interaction work',
				paragraphs: [
					'INP problems usually appear after a user clicks, types, or opens something. Profile the interaction and look for long tasks: a large JavaScript bundle, expensive rendering, synchronous parsing, or a handler doing too much at once.',
					'Break work into smaller tasks, defer non-essential work, reduce component churn, and make the next interaction responsive before completing background processing. Measure the interaction users actually report, not just the initial page load.',
			],
			},
			{
				heading: 'Fix CLS by reserving space',
				paragraphs: [
					'Layout shifts happen when content appears without the browser knowing its final size. Give images and embeds dimensions, reserve space for late-loading modules, avoid inserting banners above existing content, and load fonts with a strategy that does not cause important text to jump.',
					'Take a recording of the page during load. The visual sequence often reveals the cause faster than a score alone, especially when a late API response changes the shape of the page.',
			],
			},
			{
				heading: 'Treat performance as a delivery habit',
				paragraphs: [
					'Google describes Core Web Vitals as user-experience metrics and part of page experience; passing them is not a guarantee of higher rankings or revenue. The durable win is a product that feels dependable. Set a performance budget, check field data after releases, and keep third-party scripts accountable.',
				],
			},
		],
	},
	{
		slug: 'modular-monolith-vs-microservices-growing-saas',
		title: 'Modular Monolith vs. Microservices for a Growing SaaS',
		dek: 'How to choose an architecture based on team boundaries, release pain, and operational evidence—without treating microservices as a badge of maturity.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '9 min read',
		category: 'Software architecture',
		keyword: 'modular monolith vs microservices for a growing SaaS',
		intro: 'The modular monolith versus microservices decision is really a question about boundaries and operational capacity. A growing SaaS product needs code that can change safely, teams that can own it, and an architecture that matches the evidence—not the fashion of the moment.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sections: [
			{
				heading: 'A modular monolith is not a shortcut',
				paragraphs: [
					'A modular monolith keeps one deployable application while enforcing meaningful boundaries inside it. Modules own their data and business rules, expose deliberate interfaces, and avoid reaching through each other’s internals. That structure creates many of the design benefits people want from services without immediately paying the network and operations cost.',
					'It only works if the boundaries are real. Shared utility code is fine; shared business state and circular dependencies are warning signs. Use architecture tests, module ownership, and contract-like interfaces to keep the shape honest.',
			],
			},
			{
				heading: 'Microservices buy independence at a price',
				paragraphs: [
					'Separate services can release, scale, and fail independently. That can be valuable when a domain has a distinct load profile, a different security boundary, or a team that genuinely needs independent delivery. It also introduces distributed tracing, network failures, deployment coordination, data consistency questions, and more operational surface area.',
					'If a team cannot comfortably operate one application, splitting it into ten services rarely makes the underlying problem disappear. It usually makes the feedback loop slower and the failure modes harder to see.',
			],
			},
			{
				heading: 'Use decision signals, not slogans',
				paragraphs: [
					'Ask what is actually hurting. Are releases blocked because unrelated teams collide? Does one domain need to scale independently? Is a compliance boundary forcing separation? Are deployments too risky because the code has no internal seams? Each answer points to a different intervention.',
				],
				bullets: ['Team ownership and release independence', 'Domain boundaries and change frequency', 'Scaling and reliability requirements', 'Operational maturity and on-call capacity', 'Data ownership and consistency needs'],
			},
			{
				heading: 'A safe extraction path',
				paragraphs: [
					'Start by making the candidate module coherent inside the monolith. Define its interface, move its data access behind that boundary, add contract tests, and measure its dependencies. Only then consider extracting it behind a network boundary.',
					'Run the old and new paths carefully, make rollback possible, and keep the data migration explicit. An extraction is successful when ownership and operations improve—not merely when a repository contains another service.',
			],
			},
			{
				heading: 'Choose the smallest architecture that supports the next stage',
				paragraphs: [
					'For many growing SaaS teams, a well-structured modular monolith is an excellent default. It preserves a fast local feedback loop while leaving room to extract the boundaries that later prove valuable. Architecture is a tool for changing the product; choose the shape that helps your team change it now.',
				],
			},
		],
	},
	{
		slug: 'build-idempotent-webhook-handler',
		title: 'How to Build an Idempotent Webhook Handler',
		dek: 'A practical design for receiving retries safely, verifying signatures, acknowledging quickly, and moving side effects into a controlled worker.',
		published: '2026-07-26',
		updated: '2026-07-26',
		readTime: '10 min read',
		category: 'API engineering',
		keyword: 'how to build an idempotent webhook handler',
		intro: 'Webhooks are delivery attempts, not exactly-once commands. Providers retry when your endpoint is slow or unavailable, operators may redeliver an event, and queues can surface the same message more than once. An idempotent handler makes those realities safe: the same event can arrive repeatedly without charging a customer twice, creating duplicate records, or triggering the same notification forever.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Stripe Docs — Receive events in your webhook endpoint', url: 'https://docs.stripe.com/webhooks' },
			{ label: 'GitHub Docs — Automatically redelivering failed webhook deliveries', url: 'https://docs.github.com/en/webhooks/using-webhooks/automatically-redelivering-failed-deliveries-for-a-repository-webhook' },
			{ label: 'AWS Docs — Amazon SQS at-least-once delivery', url: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html' },
		],
		sections: [
			{
				heading: 'Start with the delivery model',
				paragraphs: [
					'Before writing the route, assume duplicates, retries, and out-of-order delivery. Stripe documents automatic retries for failed deliveries and says event ordering is not guaranteed. GitHub also provides redelivery tools for failed deliveries. The implication is simple: your endpoint must be safe when the same logical event is delivered again, and it must not infer state from arrival order alone.',
					'This tutorial uses a provider-neutral shape. The provider-specific parts are signature verification, event identifiers, and the API used to recover a missed object. Keep those details at the edge of your application so the business handler can use one internal event contract.',
				],
				bullets: ['A public HTTPS POST endpoint', 'A durable database with a unique constraint', 'A queue or background-job mechanism', 'A provider signing secret stored outside source control', 'A test event and a way to inspect delivery logs'],
			},
			{
				heading: 'Verify first, then deduplicate atomically',
				paragraphs: [
					'Read the raw request body, verify the provider signature with its official library, and reject invalid requests before parsing or acting on the payload. Stripe specifically requires the raw body for signature verification and recommends checking the signed timestamp to reduce replay risk. Do not replace this with an API key check or a secret query parameter.',
					'After verification, insert a receipt keyed by the provider event ID. Make that key unique in the database. The insert must be atomic: a “check then insert” implemented as two separate queries can still process the event twice when two deliveries arrive concurrently.',
				],
				bullets: ['Store provider, event ID, event type, received time, and processing status', 'Use a unique key such as (provider, event_id)', 'Keep the raw payload only as long as your retention policy allows', 'Treat a second insert conflict as a duplicate, not as a server error'],
			},
			{
				heading: 'Acknowledge quickly and process asynchronously',
				paragraphs: [
					'Once the signature is valid and the receipt has been durably recorded or queued, return a 2xx response quickly. Stripe explicitly recommends acknowledging before complex logic and recommends asynchronous processing to absorb delivery spikes. Do not make the provider wait for an email, a slow third-party API, or a multi-step database workflow.',
					'A useful state machine is received, processing, processed, and failed. The worker claims a received event, performs the business operation, and marks it processed in the same consistency model as the operation itself. If the worker crashes, a lease timeout or retry policy should make the event visible again.',
				],
				bullets: ['Return 2xx only after the receipt is durable', 'Put a bounded retry policy around transient downstream errors', 'Use a dead-letter path for events that need human inspection', 'Emit a correlation ID linking the delivery, job, and business record'],
			},
			{
				heading: 'Make the business operation idempotent too',
				paragraphs: [
					'Deduplicating at the webhook table is necessary but not always sufficient. A crash can occur after a side effect succeeds and before the receipt is marked processed. Design the side effect with its own idempotency key: for example, store the provider event ID on the fulfillment record, use a provider-supported idempotency key for outbound requests, or apply a unique constraint to the record being created.',
					'Keep event handling independent of arrival order. If an update references an object you have not seen, retrieve the current object from the provider API or defer the event rather than inventing an intermediate state. AWS makes the same general point for standard SQS queues: consumers should be idempotent because a message can be received again.',
			],
			},
			{
				heading: 'Test the failure modes, not just the happy path',
				paragraphs: [
					'Use the provider CLI or a sandbox to send a real signed event to a local endpoint, then exercise the endpoint repeatedly. Confirm that one event produces one business outcome even when the delivery is duplicated, two workers race, the worker crashes after the side effect, or the provider sends an event before a related event.',
					'In production, monitor delivery latency, non-2xx responses, duplicate receipt counts, queue age, retry counts, and dead-letter events. A duplicate is expected occasionally; an unexplained rise in duplicates or failed acknowledgements is an operational signal. GitHub’s redelivery guidance also demonstrates recording a time window and grouping deliveries by a stable GUID before retrying, rather than blindly replaying every failed attempt.',
				],
				bullets: ['Send the same signed payload twice and expect one side effect', 'Run two workers against the same event and expect one winner', 'Send an invalid signature and expect no database or business write', 'Force a downstream timeout and verify retry plus eventual recovery', 'Replay an old signed payload and verify your timestamp policy'],
			},
			{
				heading: 'Production checklist',
				paragraphs: [
					'Before connecting a webhook to customer-visible or financial actions, review the whole path from request to side effect. The endpoint is a small API surface, but its reliability comes from the database constraint, queue semantics, worker recovery, and observability around it.',
				],
				bullets: ['Signature verification uses the raw body and a managed secret', 'The receipt table has a database-enforced unique event key', 'The endpoint returns 2xx only after durable receipt or enqueue', 'Business writes have their own idempotency protection', 'Retries are bounded and dead-lettered with an operator path', 'Logs exclude secrets and include provider/event correlation IDs', 'Runbooks explain replay, redelivery, and safe recovery'],
			},
		],
	},
];
