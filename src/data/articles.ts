export interface ArticleSource {
	label: string;
	url: string;
}

export interface Article {
	slug: string;
	title: string;
	seoTitle?: string;
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
		seoTitle: 'AI Workflow Automation for Small Business | PilotLab',
		dek: 'A grounded way to find the repetitive work worth automating, connect your tools, and add AI without creating a black box nobody can trust.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '8 min read',
		category: 'Field note',
		keyword: 'AI workflow automation for small business',
		intro: 'The useful AI projects are rarely the flashiest ones. They are the small, repeatable workflows that turn a slow handoff into a dependable system: a lead gets qualified, a support request gets routed, or a weekly report arrives already organized. This playbook explains how to start with that work and build toward automation that your team can actually operate.',
		relatedService: { label: 'AI integration and workflow automation', href: '/services/ai-integration-workflow-automation' },
		sources: [
			{ label: 'NIST — AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
			{ label: 'OpenAI Platform — Structured Outputs', url: 'https://platform.openai.com/docs/guides/structured-outputs' },
		],
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
		seoTitle: 'GitHub Copilot Cloud Agent + Linear | PilotLab',
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
		seoTitle: 'API-First Architecture for SaaS Platforms | PilotLab',
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
		seoTitle: 'Improve Core Web Vitals for Web Apps | PilotLab',
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
		seoTitle: 'Modular Monolith vs Microservices for SaaS | PilotLab',
		dek: 'How to choose an architecture based on team boundaries, release pain, and operational evidence—without treating microservices as a badge of maturity.',
		published: '2026-07-25',
		updated: '2026-07-25',
		readTime: '9 min read',
		category: 'Software architecture',
		keyword: 'modular monolith vs microservices for a growing SaaS',
		intro: 'The modular monolith versus microservices decision is really a question about boundaries and operational capacity. A growing SaaS product needs code that can change safely, teams that can own it, and an architecture that matches the evidence—not the fashion of the moment.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Microsoft Learn — Monolithic Architecture Style', url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/monolith' },
			{ label: 'Microsoft Learn — Microservices Architecture Style', url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices' },
		],
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
	{
		slug: 'design-api-rate-limits-multi-tenant-saas',
		title: 'How to Design API Rate Limits for a Multi-Tenant SaaS',
		seoTitle: 'API Rate Limits for Multi-Tenant SaaS | PilotLab',
		dek: 'A practical guide to choosing rate-limit keys, token-bucket targets, useful 429 responses, and the tests that keep one noisy tenant from hurting everyone else.',
		published: '2026-07-27',
		updated: '2026-07-27',
		readTime: '10 min read',
		category: 'API engineering',
		keyword: 'how to design API rate limits for a multi-tenant SaaS',
		intro: 'Rate limiting is not just a middleware switch. In a multi-tenant SaaS, it is a product and reliability contract: which caller is limited, which operations consume capacity, what happens during a burst, and how a client can recover without turning a 429 into a retry storm. This tutorial lays out a provider-neutral design you can implement at the API boundary and evolve with measured traffic.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'IETF RFC 6585 — 429 Too Many Requests', url: 'https://www.rfc-editor.org/rfc/rfc6585#section-4' },
			{ label: 'IETF RFC 9457 — Problem Details for HTTP APIs', url: 'https://www.rfc-editor.org/rfc/rfc9457' },
			{ label: 'Amazon API Gateway — Request throttling', url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html' },
			{ label: 'MDN — 429 Too Many Requests', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429' },
		],
		sections: [
			{
				heading: 'Prerequisites: define the contract before the counter',
				paragraphs: [
					'You need an authenticated API, a way to identify the tenant and application, a shared store or gateway that all instances can consult, and request metrics with route and tenant dimensions. Do not begin by picking “100 requests per minute” from intuition. First inventory the operations and their cost: a read-heavy search endpoint, a file export, and a password-reset endpoint should not necessarily consume the same capacity.',
					'Decide what the limit protects and what the client should do when it is reached. RFC 6585 defines 429 Too Many Requests for rate limiting and says the response may include Retry-After. That gives clients a protocol signal, but your API still needs a stable policy they can understand.',
				],
				bullets: ['List the routes and downstream resources the limit protects', 'Choose a tenant identifier from verified authentication, not an untrusted header', 'Record baseline requests, latency, errors, and burst patterns for each route', 'Document whether limits are a target, a hard quota, or an abuse-control backstop'],
			},
			{
				heading: 'Choose keys that match the isolation you promise',
				paragraphs: [
					'For a multi-tenant product, the primary key should usually include the tenant ID and a meaningful scope such as API key, user, route group, or region. A single global counter protects infrastructure but lets one customer consume the capacity intended for everybody. A per-IP counter is useful for unauthenticated abuse controls, but it is a poor substitute for tenant identity behind NATs or shared corporate networks.',
					'Use layers rather than one giant number: an edge or IP limit for obvious abuse, a tenant limit for fairness, and a route or operation limit for expensive work. Keep authentication and authorization ahead of the tenant counter so an attacker cannot create arbitrary buckets by changing an input identifier.',
				],
				bullets: ['Infrastructure: protect the whole service and dependency', 'Tenant: preserve fair capacity between customers', 'Credential: isolate one API key or integration', 'Operation: spend more capacity on expensive endpoints', 'Concurrency: cap long-running exports or jobs separately from request rate'],
			},
			{
				heading: 'Implement a token bucket with explicit targets',
				paragraphs: [
					'A token bucket gives each key a refill rate and a maximum burst. A request consumes one or more tokens; if enough are available, it proceeds, otherwise the API rejects it. The refill rate represents sustained capacity and the bucket size represents the burst you are willing to absorb. Amazon API Gateway documents this model and cautions that configured throttling and quotas are best-effort targets, not guaranteed ceilings.',
					'For a first version, keep the decision at one atomic operation in a shared store. The operation should read the current token count and timestamp, calculate refill, consume the cost, and write the new state with an expiry. A local in-memory counter is acceptable for a single process experiment, but it becomes inconsistent as soon as requests reach multiple instances or a deploy replaces the process.',
					'Choose limits from observed traffic and dependency budgets. If an export can hold a worker for seconds, use a separate concurrency limit or queue rather than pretending a request-per-minute number controls that cost. Return the active policy in documentation and, where useful, response headers so clients can build backpressure instead of guessing.',
				],
			},
			{
				heading: 'Make 429 responses safe and useful',
				paragraphs: [
					'Return 429 when the request is valid but the applicable rate policy says to slow down. Include Retry-After when you can calculate a meaningful wait, and make the body machine-readable. RFC 9457 defines the application/problem+json format with fields such as type, title, status, detail, and instance; it also warns against exposing implementation details or sensitive information in error responses.',
					'Keep the client instruction specific: identify the limit scope without revealing another tenant’s data, give the retry delay, and include a request or instance ID that support can find in logs. Clients should honor Retry-After, apply jitter, cap retries, and avoid retrying non-idempotent work blindly. Server-side rate limiting is not a license for every SDK to retry immediately.',
				],
				bullets: ['HTTP status: 429 Too Many Requests', 'Content type: application/problem+json when using problem details', 'Retry-After: a delta in seconds or an HTTP date', 'Stable problem type and a support-safe instance or request ID', 'No stack traces, secrets, internal hostnames, or cross-tenant details'],
			},
			{
				heading: 'Test fairness, failure, and recovery',
				paragraphs: [
					'Test the limiter as a distributed component, not only as a unit function. Send a sustained load at the configured refill rate, then a permitted burst. Run two API instances against the same key and verify that the aggregate behavior stays within the intended target. Run two tenants in parallel and confirm that a noisy tenant does not exhaust the other tenant’s bucket.',
					'Exercise the uncomfortable paths: the shared store is unavailable, the clock moves, a request is retried after a 429, a client sends a duplicate non-idempotent request, and a deployment changes the policy. Choose a deliberate fail-open or fail-closed behavior for each class of route. Failing open may protect availability for low-risk reads; failing closed may be safer for expensive or security-sensitive operations. Make that decision visible in the runbook.',
				],
				bullets: ['Assert 429 plus Retry-After at the boundary', 'Verify two instances update one bucket atomically', 'Verify tenant A cannot consume tenant B’s capacity', 'Measure false positives and legitimate requests rejected', 'Alert on limiter-store errors, 429 rate, queue age, and retry amplification'],
			},
			{
				heading: 'Production checklist',
				paragraphs: [
					'Rate limits work when they are explainable, observable, and adjustable. Start with a small number of policy classes, publish the behavior, and review the evidence after real traffic arrives. Do not promise an exact ceiling if the enforcement layer is best-effort or if multiple layers can reject independently.',
				],
				bullets: ['The key is derived from authenticated tenant and credential context', 'The shared decision is atomic across all application instances', 'Expensive work has a separate queue or concurrency guard', '429 responses include actionable retry information', 'Clients use bounded exponential backoff with jitter', 'Policies, overrides, and emergency blocks are audited', 'Dashboards show limits by route, tenant, status, and dependency', 'A runbook explains policy changes, store outages, and safe overrides'],
			},
		],
	},
	{
		slug: 'add-opentelemetry-tracing-node-api',
		title: 'How to Add OpenTelemetry Tracing to a Node.js API',
		dek: 'Instrument an Express API before application code loads, verify trace context across requests, and make the first production signals useful without leaking sensitive data.',
		published: '2026-07-28',
		updated: '2026-07-28',
		readTime: '11 min read',
		category: 'Platform engineering',
		keyword: 'how to add OpenTelemetry tracing to a Node.js API',
		intro: 'Distributed failures are hard to debug when an API only tells you that a request was slow. OpenTelemetry gives a Node.js service a standard way to connect an incoming request to the work it triggers, but the setup order and data policy matter. This tutorial starts with console output so you can verify the wiring, then shows the production decisions you should make before exporting telemetry to a collector or vendor.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'OpenTelemetry Docs — Node.js getting started', url: 'https://opentelemetry.io/docs/languages/js/getting-started/nodejs/' },
			{ label: 'OpenTelemetry JavaScript — README and examples', url: 'https://github.com/open-telemetry/opentelemetry-js' },
			{ label: 'OpenTelemetry Semantic Conventions — HTTP spans', url: 'https://github.com/open-telemetry/semantic-conventions/blob/main/docs/http/http-spans.md' },
		],
		sections: [
			{
				heading: 'Prerequisites and the shape of the solution',
				paragraphs: [
					'You need a Node.js API, a package manager, and a way to inspect output locally. The example assumes an Express application, but OpenTelemetry’s Node.js guide also points to instrumentation for other frameworks. Start with traces and a console exporter; moving to an OTLP exporter is a separate deployment decision.',
					'The critical detail is load order. The OpenTelemetry SDK and automatic instrumentations must initialize before the modules they patch are imported. If Express, HTTP, or a database client loads first, you can get a healthy-looking app with missing spans.',
				],
				bullets: ['Node.js and an existing API you can run locally', 'A test route that makes at least one downstream request', 'A repeatable start command', 'A local log or collector destination for telemetry'],
			},
			{
				heading: 'Install the Node SDK and automatic instrumentation',
				paragraphs: [
					'For an existing JavaScript or TypeScript service, add the Node SDK and the automatic-instrumentations meta-package. The official OpenTelemetry example uses these packages to initialize a NodeSDK and discover supported libraries such as HTTP and Express. Pin versions with the rest of your application dependencies and review the package compatibility notes when upgrading.',
					'Create an instrumentation entry point separate from your application entry point. A minimal TypeScript version is below. ConsoleSpanExporter is intentionally used for the first verification: it makes a trace visible without requiring a vendor account or collector.',
				],
				bullets: ['npm install @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/sdk-trace-node', 'Keep instrumentation startup free of application business logic', 'Load the instrumentation module before the API entry point'],
			},
			{
				heading: 'Initialize before the API starts',
				paragraphs: [
					'Create instrumentation.ts (or an equivalent JavaScript module) and start the SDK before importing your server. The exact TypeScript loader depends on your runtime; the important part is that the instrumentation module is imported first. OpenTelemetry’s Node.js guide demonstrates the same ordering with Node’s --import flag.',
					'Example configuration:',
				],
				bullets: [
					"import { NodeSDK } from '@opentelemetry/sdk-node';",
					"import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';",
					"import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';",
					'const sdk = new NodeSDK({ traceExporter: new ConsoleSpanExporter(), instrumentations: [getNodeAutoInstrumentations()] });',
					'await sdk.start();',
					'Run your service with the instrumentation module first, for example: npx tsx --import ./instrumentation.ts app.ts.',
				],
			},
			{
				heading: 'Verify the trace, then add useful boundaries',
				paragraphs: [
					'Call an API route and inspect the console. You should see a server span for the incoming request and, when the route makes an instrumented outbound request, a child client span. Confirm that the route, method, status, and duration are useful without placing customer IDs, authorization headers, request bodies, or query secrets into span attributes.',
					'OpenTelemetry’s HTTP semantic conventions describe stable names and attributes for HTTP spans. Use framework and instrumentation defaults where possible rather than inventing a different vocabulary for every service. Add manual spans only around meaningful work—such as a queue publish, a cache miss, or a business operation—and keep names low-cardinality.',
				],
				bullets: ['One request should have one coherent trace ID', 'A downstream HTTP call should appear as a child span when instrumented', 'Errors should record status and exception context without sensitive payloads', 'Route names should be templates such as /orders/:id, not raw IDs'],
			},
			{
				heading: 'Move from console output to production telemetry',
				paragraphs: [
					'The console exporter is a wiring test, not an operations backend. In production, export through OTLP to a collector or observability provider and configure the destination with environment variables or deployment secrets. A collector can centralize batching, retry, filtering, and routing so application code does not depend on one vendor.',
					'Set a sampling policy deliberately. Capturing every trace may be useful while diagnosing a small service, but cost and volume change as traffic grows. Keep error traces and representative slow traces, and make the policy visible in the runbook. Telemetry must also obey your retention and privacy requirements: redact or avoid sensitive attributes before export, and restrict who can query them.',
				],
			},
			{
				heading: 'Test the failure modes and keep a checklist',
				paragraphs: [
					'Testing observability means checking the signals when the system is unhealthy, not just confirming that a log line exists. Add a route test that makes a downstream call, a failed-request test, and a startup test that fails clearly when telemetry configuration is invalid. Then compare the trace to your request ID and application logs so operators can move between systems.',
					'Before enabling the integration for all traffic, review the operational contract with the team that will own it. OpenTelemetry standardizes collection and context propagation; it does not decide your retention, alert thresholds, access controls, or incident workflow.',
				],
				bullets: ['Start the API with instrumentation loaded first', 'Assert a request produces a server span and expected child spans', 'Exercise a 4xx and 5xx path and inspect error attributes', 'Check that retries do not create confusing duplicate business spans', 'Verify no secrets, tokens, raw bodies, or high-cardinality IDs are exported', 'Document exporter, sampling, retention, access, and rollback settings'],
			},
		],
	},
	{
		slug: 'build-reliable-background-job-worker-node',
		title: 'How to Build a Reliable Background Job Worker in Node.js',
		seoTitle: 'Reliable Background Job Workers in Node.js | PilotLab',
		dek: 'A practical queue design for long-running API work: durable jobs, bounded retries, idempotent handlers, visibility timeouts, and an operator-friendly dead-letter path.',
		published: '2026-07-30',
		updated: '2026-07-30',
		readTime: '11 min read',
		category: 'API engineering',
		keyword: 'how to build a reliable background job worker in Node.js',
		intro: 'A background worker is more than a function that runs outside the request. It is a small distributed system with delivery semantics, timeouts, retries, concurrency, and recovery paths. This tutorial shows how to turn a slow API operation into a durable job without promising exactly-once execution that your queue cannot provide.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'BullMQ — Retrying failing jobs', url: 'https://docs.bullmq.io/guide/retrying-failing-jobs' },
			{ label: 'BullMQ — Idempotent jobs', url: 'https://docs.bullmq.io/patterns/idempotent-jobs' },
			{ label: 'AWS SQS — Visibility timeout', url: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html' },
			{ label: 'AWS SQS — Dead-letter queues', url: 'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html' },
		],
		sections: [
			{
				heading: 'Prerequisites: define the job contract',
				paragraphs: [
					'Use a worker when the operation may outlive a useful HTTP request, needs retries, or should not consume web-server capacity. Examples include generating an export, resizing uploaded media, synchronizing a third-party system, or sending a batch of notifications. The API should create a job and return a status reference; the worker should own the long-running work.',
					'Before choosing a queue library, write the contract. Name the job type, payload, owner, expected duration, maximum attempts, retryable errors, cancellation behavior, and final result. Keep the payload small and durable: store a file or large document elsewhere and put its identifier in the job.',
				],
				bullets: ['A Node.js service and a persistent queue backend', 'A database or durable store for job status', 'A worker process that can be restarted independently', 'A correlation or job ID returned to the API client', 'Metrics and logs that an operator can inspect'],
			},
			{
				heading: 'Create the job at the API boundary',
				paragraphs: [
					'The request handler should validate input, authorize the caller, create a job record, enqueue a small payload, and return a reference. For a new job, 202 Accepted communicates that work has been accepted but is not complete; expose a status endpoint such as GET /jobs/:id rather than asking the client to guess when the result is ready.',
					'Keep the database write and queue publish failure visible. If they cannot be committed atomically with your chosen infrastructure, use an outbox: write the intended job event in the same transaction as the job record, then have a publisher reliably move outbox rows into the queue. Do not return success after only an in-memory enqueue.',
				],
				bullets: ['Validate and authorize before enqueueing', 'Generate a stable job ID and an idempotency key for client retries', 'Store queued, running, succeeded, and failed states with timestamps', 'Return 202 plus a status URL, not the eventual result', 'Never put secrets or unnecessary personal data in the queue payload'],
			},
			{
				heading: 'Make the worker safe to retry',
				paragraphs: [
					'Assume the queue can deliver a job again. BullMQ describes idempotent jobs as producing the same final state whether they succeed on the first attempt or after a retry, and recommends keeping jobs atomic and simple. Use a unique business key or an idempotency record around each side effect; a worker-level “already processed” check alone can race or fail after the side effect succeeds.',
					'Split a multi-step workflow when partial progress matters. For example, persist that an export was generated before sending its notification, and make the notification operation use its own idempotency key. If a downstream provider supports idempotency keys, pass the job’s stable operation key rather than creating a new key on every attempt.',
				],
				bullets: ['Use database uniqueness for records that must exist once', 'Keep each job focused on one recoverable unit of work', 'Record the attempt and correlation ID with business changes', 'Treat external responses as untrusted and validate them before persistence', 'Design cancellation as a state transition, not a process kill'],
			},
			{
				heading: 'Set retries, backoff, and concurrency deliberately',
				paragraphs: [
					'Retry only errors that may recover. A timeout or temporary 503 can be retried; an invalid payload, missing permission, or permanent validation error usually needs a failed state and operator or customer action. BullMQ supports fixed and exponential backoff, plus jitter. A practical starting policy is three attempts with exponential backoff and jitter, then a dead-letter or failed-job path—adjust it to the dependency and the cost of the work.',
					'Concurrency is a capacity control, not a speed trophy. Set it from downstream limits, memory use, CPU cost, and tenant fairness. If a job can run longer than the queue’s invisibility or lock window, extend that lease with a heartbeat or choose a queue setting that matches the maximum work duration. AWS documents that an SQS message becomes visible again when its visibility timeout expires, and that this can cause another delivery.',
				],
				bullets: ['Classify errors as retryable, permanent, or unknown', 'Use exponential backoff with jitter for shared dependencies', 'Cap attempts and total elapsed time', 'Limit concurrency separately for expensive job types', 'Alert when queue age or retry amplification rises'],
			},
			{
				heading: 'Verify with failure-injection tests',
				paragraphs: [
					'Test the worker as if it will crash. Enqueue one job, kill the worker during processing, restart it, and verify that the final business state is correct and not duplicated. Run two workers against the same job, make the downstream service return a timeout, and send an invalid payload. Your assertions should cover both the durable job state and the external side effect.',
					'Also test the client contract: a repeated POST with the same idempotency key should return the original job rather than create another one, GET /jobs/:id should expose safe progress and failure information, and a completed job should remain retrievable for the documented retention period. Logs should connect API request, job ID, attempt, downstream call, and final result without recording secrets.',
				],
				bullets: ['Duplicate enqueue produces one logical job', 'A worker crash causes recovery rather than silent loss', 'Two consumers cannot create two business records', 'Permanent errors stop retrying and explain the next action', 'A downstream outage backs off instead of creating a retry storm', 'A dead-lettered job can be inspected and safely replayed'],
			},
			{
				heading: 'Production checklist',
				paragraphs: [
					'A queue is production-ready when an operator can answer what is waiting, what is running, what is failing, and what replaying a message will do. Configure a dead-letter queue or equivalent failed-job set for messages that exceed the retry policy. AWS describes DLQs as a place to isolate unprocessed messages for diagnosis and redrive; retain them long enough for your incident and data-retention processes.',
					'Keep deployment and operations boring: graceful shutdown stops new work and lets active jobs finish or become retryable, health checks distinguish a live process from a worker that can reach its queue, and dashboards show queue depth, oldest-job age, processing duration, attempts, failures, and dead-letter count. The goal is not exactly-once execution. It is at-least-once delivery with idempotent effects and a recovery path humans understand.',
				],
				bullets: ['Queue and job status are durable across process restarts', 'The handler and every important side effect are idempotent', 'Retries have an error policy, backoff, jitter, and a hard limit', 'Lease or visibility timeout exceeds normal work, with heartbeat for outliers', 'Concurrency and per-tenant fairness are measured', 'Dead-lettered jobs have alerts, retention, inspection, and redrive rules', 'Shutdown, deploy, rollback, and replay procedures are documented'],
			},
		],
	},
	{
		slug: 'graceful-shutdown-nodejs-api-kubernetes',
		title: 'How to Implement Graceful Shutdown in a Node.js API',
		seoTitle: 'Graceful Shutdown in Node.js APIs | PilotLab',
		dek: 'Stop accepting traffic, finish safe work, close dependencies, and let Kubernetes replace an API instance without dropping requests or corrupting jobs.',
		published: '2026-07-31',
		updated: '2026-07-31',
		readTime: '10 min read',
		category: 'Platform engineering',
		keyword: 'how to implement graceful shutdown in a Node.js API',
		intro: 'A deploy should not be a small outage. When a Node.js process receives SIGTERM, it needs to stop taking new work while giving in-flight requests and background operations a bounded chance to finish. This tutorial turns that idea into an application contract that works locally and inside Kubernetes, with explicit trade-offs for long-running requests and telemetry.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Node.js Documentation — HTTP server.close()', url: 'https://nodejs.org/api/http.html#serverclosecallback' },
			{ label: 'Node.js Documentation — Process signal events', url: 'https://nodejs.org/api/process.html#signal-events' },
			{ label: 'Kubernetes Documentation — Container lifecycle hooks', url: 'https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/' },
			{ label: 'OpenTelemetry Documentation — Node.js getting started', url: 'https://opentelemetry.io/docs/languages/js/getting-started/nodejs/' },
		],
		sections: [
			{
				heading: 'Prerequisites: define what shutdown must protect',
				paragraphs: [
					'You need a Node.js HTTP API, a repeatable start command, a health or readiness endpoint, and a way to stop the process while a request is running. List the work that can be in flight: HTTP requests, database queries, outbound calls, queue consumers, scheduled jobs, and telemetry export. Each item needs an owner, a timeout, and a decision about whether it may finish during termination.',
					'Do not promise that every operation will complete. A request that can run for ten minutes may exceed the platform grace period. Put long work behind the durable job pattern instead: accept the job, return 202, and let a worker resume it after a restart. Graceful shutdown is a bounded drain, not a request to keep a process alive forever.',
				],
				bullets: ['A Node.js server reference you can close explicitly', 'A readiness endpoint that can report draining', 'A database or client with a documented close method', 'A shutdown timeout shorter than the platform’s hard kill window', 'Tests that can hold one request open while the process stops'],
			},
			{
				heading: 'Handle SIGTERM once and enter draining mode',
				paragraphs: [
					'Node exposes operating-system signals through process events. Register a SIGTERM handler for the shutdown path and guard it so a second signal cannot start a second cleanup sequence. Set a draining flag immediately. Your readiness endpoint should then return a non-ready response so the orchestrator stops routing new traffic to this instance.',
					'Keep the handler small and explicit. A useful sequence is: mark the process draining, stop consumers from claiming new jobs, call server.close(), wait for tracked work or the deadline, close application dependencies, flush telemetry, and exit. Do not put a generic process.on(\'exit\') cleanup routine here: Node’s exit event is too late for asynchronous work.',
				],
				bullets: ['Use SIGTERM as the normal, graceful path', 'Treat a repeated signal as an accelerated shutdown or a logged no-op', 'Make readiness fail as soon as draining begins', 'Keep SIGKILL as an unavoidable hard-stop fallback', 'Log one shutdown reason and one final outcome'],
			},
			{
				heading: 'Stop new HTTP work before closing dependencies',
				paragraphs: [
					'Node’s HTTP server.close() stops new connections and resolves its callback when existing connections finish. Call it before closing the database pool, cache client, or other shared dependencies; otherwise an in-flight request can lose the resource it still needs. If your Node version and traffic pattern require it, separately account for idle keep-alive sockets and connections that never finish.',
					'Track active work when you need a hard deadline. Increment a counter or register a request at the beginning of application handling, decrement it in a finally block, and resolve a drain promise when the count reaches zero. The server callback and the application counter answer different questions: whether the listener is closed and whether your business work is finished.',
				],
				bullets: ['Flip readiness before calling server.close()', 'Call server.close() before closing pools and clients', 'Use request-level timeouts so one stuck request cannot block deploys', 'Avoid force-closing sockets unless the deadline has expired', 'Do not count health probes as business work if they can keep draining open'],
			},
			{
				heading: 'Make the Kubernetes contract match the code',
				paragraphs: [
					'Kubernetes starts termination by running the pod’s termination behavior and sending the container process SIGTERM; after the configured termination grace period, it can send SIGKILL. The exact interaction with load balancing and lifecycle hooks is a deployment concern, so test the behavior in the cluster rather than assuming a local Ctrl+C is equivalent.',
					'Choose a terminationGracePeriodSeconds value that covers normal drain time plus a margin, then set the application shutdown deadline below it. A preStop hook can be useful for platform-specific coordination, but it is not a substitute for handling SIGTERM in the application. Keep the readiness transition in the process so the behavior remains correct when the container is stopped by another supervisor.',
				],
				bullets: ['Readiness changes to failure at the start of draining', 'The application deadline is shorter than terminationGracePeriodSeconds', 'Rolling updates allow enough unavailable capacity for the drain', 'Long requests have an explicit timeout or move to a job worker', 'Logs make pod name, signal, deadline, and remaining work visible'],
			},
			{
				heading: 'Close workers and flush telemetry deliberately',
				paragraphs: [
					'After the HTTP listener stops accepting work, tell queue consumers to stop claiming new messages. Let the current handler finish if it fits inside the deadline; otherwise make the queue’s lease or visibility timeout allow another delivery. The handler still needs idempotent side effects, because a process can be killed after an external write and before it records completion.',
					'Observability has its own shutdown path. OpenTelemetry’s Node.js setup uses an SDK that should be shut down when the process terminates so exporters can flush pending data. Await that shutdown, but bound it with the same overall deadline. Telemetry must never keep a production process alive indefinitely or cause a second copy of a shutdown sequence.',
				],
				bullets: ['Stop fetching new jobs before waiting for active jobs', 'Use leases and idempotent handlers for work interrupted by SIGTERM', 'Close database pools, cache clients, and queue connections after work drains', 'Await telemetry SDK shutdown with a bounded timeout', 'Prefer a clean non-zero exit when the deadline expires with unfinished work'],
			},
			{
				heading: 'Verify the failure modes before production',
				paragraphs: [
					'Add a test route that waits longer than a normal request and a test that starts two requests, sends SIGTERM, and observes the results. Confirm that readiness changes immediately, new business requests stop reaching the instance, the in-flight request either completes within the deadline or fails predictably, and dependencies are closed only after the drain decision.',
					'Repeat the test during a rolling deployment and during a pod deletion. Inspect the load balancer or service behavior, not only application logs. Also kill the process after the deadline and verify that jobs become visible again, no duplicate business record is created, and the next instance can serve traffic. A graceful-shutdown test that never exercises the deadline is only a happy-path test.',
				],
				bullets: ['SIGTERM during an idle process exits cleanly', 'SIGTERM during one request drains that request or applies its timeout', 'A second SIGTERM does not run cleanup twice', 'A new request after draining begins is rejected or routed elsewhere', 'A worker interrupted mid-job is safely retried', 'Telemetry and dependency close errors are logged without hiding the final outcome'],
			},
			{
				heading: 'Production checklist',
				paragraphs: [
					'The implementation is ready when shutdown is observable and bounded. Record shutdown duration, active requests at signal time, forced termination count, interrupted jobs, and dependency-close failures. Review those numbers after deploys: frequent deadline expiry means the timeout, request design, or work placement needs attention.',
				],
				bullets: ['SIGTERM handler is registered before the server starts', 'Readiness becomes false before the drain begins', 'server.close() runs before shared dependencies close', 'All long-running work has a deadline and recovery behavior', 'Queue consumers stop claiming work and active jobs remain idempotent', 'Telemetry flush has a deadline and does not block forever', 'Kubernetes grace period exceeds the application shutdown deadline', 'Rolling deploy and pod-delete tests are part of release verification', 'Metrics and logs show graceful versus forced shutdowns'],
			},
		],
	},
	{
		slug: 'http-caching-api-responses-etag-cache-control',
		title: 'How to Cache API Responses Safely with ETags and Cache-Control',
		seoTitle: 'Cache API Responses Safely with ETags | PilotLab',
		dek: 'A practical guide to faster read APIs: classify data, choose freshness rules, add conditional requests, and verify that a cache never crosses a tenant boundary.',
		published: '2026-08-01',
		updated: '2026-08-01',
		readTime: '10 min read',
		category: 'API engineering',
		keyword: 'how to cache API responses safely with ETags',
		intro: 'Caching can make a read-heavy API feel faster and reduce repeated work, but an incorrect cache can serve yesterday’s permissions or one customer’s data to another. The safe approach is to make cacheability an explicit property of each endpoint, use validators to avoid transferring unchanged representations, and test the boundary as seriously as the happy path.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'IETF RFC 9111 — HTTP Caching', url: 'https://www.rfc-editor.org/rfc/rfc9111' },
			{ label: 'MDN — Cache-Control header', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control' },
			{ label: 'MDN — ETag header', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/ETag' },
			{ label: 'web.dev — HTTP caching', url: 'https://web.dev/articles/http-cache' },
		],
		sections: [
			{
				heading: 'Prerequisites: decide what may be reused',
				paragraphs: [
					'You need an API endpoint that returns a representation, a way to identify the authenticated user or tenant, and a test client that can inspect response headers. Begin with an endpoint inventory rather than a global middleware rule. For each response, record who may see it, how quickly it must reflect changes, whether it contains secrets or personal data, and which upstream resource determines its version.',
					'RFC 9111 distinguishes freshness from validation: a fresh stored response can be reused without contacting the origin, while a stale response can be checked against the origin before reuse. That distinction lets you choose a short freshness window for safe public data and still avoid retransmitting an unchanged body.',
				],
				bullets: ['Public, identical response for every caller: candidate for shared caching', 'Tenant-scoped response: key it by an authenticated tenant or keep it private', 'User-specific or sensitive response: default to private or no-store until proven safe', 'Frequently changing response: use validation or a short explicit freshness lifetime', 'Mutation endpoint: do not treat POST, PUT, PATCH, or DELETE responses as ordinary read-cache entries'],
			},
			{
				heading: 'Choose Cache-Control deliberately',
				paragraphs: [
					'Cache-Control is a policy, not a performance decoration. For a public product catalog that can be five minutes behind, a response might use “public, max-age=60, s-maxage=300”. The browser may reuse it for 60 seconds, while a shared cache may use it for up to 300 seconds. Only use those values when the representation is genuinely safe for every caller.',
					'For a personalized dashboard, “private, max-age=30” can allow the user’s browser to reuse the response without authorizing a CDN to store it. For a response that must not be retained, use “no-store”. Do not confuse “no-cache” with “do not store”: no-cache permits storage but requires validation before reuse. MDN documents these directives and their separate browser and shared-cache behavior.',
				],
				bullets: ['Start with no-store when the data classification is unclear', 'Use private for user- or tenant-specific responses that may live in a browser cache', 'Use public only after proving the response is safe across callers', 'Set max-age from an actual staleness tolerance, not a round number', 'Add Vary only for request fields that genuinely change the representation'],
			},
			{
				heading: 'Add an ETag for conditional requests',
				paragraphs: [
					'An ETag identifies a representation version. Generate it from the serialized response or, preferably, from a stable version maintained with the resource. Return it with the response. When a client later sends If-None-Match with that value, compare it before serializing and sending the full body. If it still matches, return 304 Not Modified with no response body and preserve the relevant cache headers.',
					'This is useful even when max-age is short: a browser or intermediary can revalidate cheaply after the response becomes stale. A weak ETag can describe semantic equivalence when byte-for-byte equality is not required; use a strong validator when consumers rely on exact representation bytes. MDN notes that ETags can also participate in lost-update protection for writes through If-Match, but that is a separate concurrency-control decision.',
				],
				bullets: ['Keep the ETag stable while the representation is unchanged', 'Quote the value according to HTTP syntax, for example "v42"', 'Compare If-None-Match before doing expensive response work', 'Return 304 without a body when the validator matches', 'Do not put customer secrets or raw identifiers into the validator'],
			},
			{
				heading: 'Protect the tenant boundary and cache key',
				paragraphs: [
					'The most serious cache bug is not a stale badge; it is a valid response delivered to the wrong caller. A cache key must include every input that changes the representation, while authorization must still happen at the application boundary. Never let a user-controlled header such as X-Tenant-ID choose the identity used for authorization or caching.',
					'If the response varies by content negotiation, language, or an explicitly supported request header, declare that with Vary or make the variant part of the URL. Be cautious with query strings: a CDN may treat them differently from your application, and a cache-busting parameter can create unbounded entries. Normalize only inputs your contract says are equivalent.',
				],
				bullets: ['Derive tenant and user identity from verified authentication', 'Authorize before reading a private cache entry', 'Include route, normalized query, tenant scope, and representation variant in the key', 'Never cache an authenticated response publicly by accident', 'Test that tenant A cannot receive tenant B’s body or ETag'],
			},
			{
				heading: 'Verify with headers, a body, and a mutation',
				paragraphs: [
					'Test the wire behavior with curl or an equivalent client. Make one request and save the ETag, then send If-None-Match with that value. Expect 304 after the representation is eligible for revalidation. Change the underlying record, repeat the request, and expect a new ETag plus the new body. Also test an expired response through every cache layer you operate; a browser result alone does not prove what a CDN stored.',
					'Exercise failure cases deliberately. Send two different Accept-Language values if your API supports them, use two tenants with the same route and query, omit authentication, and add an unexpected query parameter. Confirm that authorization errors are not cached for a different caller and that a failed origin request cannot be hidden by an accidental stale policy.',
				],
				bullets: ['First response includes the intended Cache-Control and ETag headers', 'Matching If-None-Match returns 304 with no body', 'A changed resource returns 200, a changed ETag, and the new representation', 'Unauthorized and tenant-switched requests never reuse another caller’s response', 'Vary behavior matches the documented representation inputs', 'Cache hit, miss, revalidation, age, and origin status are observable'],
			},
			{
				heading: 'Production checklist and trade-offs',
				paragraphs: [
					'Caching is a consistency trade-off you should be able to explain to a product owner. Longer freshness reduces origin work but extends the time users may see an older value. Short freshness plus ETag validation preserves correctness more closely but still costs a request to revalidate. For data that changes immediately after a mutation, either invalidate the relevant cache entries, version the resource URL, or make the endpoint private and revalidate it according to the product requirement.',
					'Keep cache policy close to the endpoint contract and review it when fields, permissions, or personalization change. Log the cache decision without logging response bodies or tokens. The goal is not to cache every GET; it is to remove safe repeated work while making an incorrect reuse difficult to introduce and easy to detect.',
				],
				bullets: ['Every cached route has an owner and documented staleness tolerance', 'Sensitive responses use private or no-store policy intentionally', 'Shared-cache keys cannot cross tenants, users, languages, or variants', 'ETags change when the representation changes', 'Mutations have an invalidation or versioning plan', '304 responses and cache hits are covered by integration tests', 'Dashboards expose hit ratio, revalidation rate, stale responses, and cache errors', 'A rollback is as simple as changing the response policy to no-store'],
			},
		],
	},
	{
		slug: 'nodejs-fetch-timeouts-retries-backoff',
		title: 'How to Add Timeouts and Retries to Node.js Fetch Calls',
		seoTitle: 'Node.js Fetch Timeouts and Retries | PilotLab',
		dek: 'A production-minded pattern for bounding outbound API calls, retrying only recoverable failures, honoring Retry-After, and avoiding retry storms.',
		published: '2026-08-02',
		updated: '2026-08-02',
		readTime: '10 min read',
		category: 'API engineering',
		keyword: 'how to add timeouts and retries to Node.js fetch calls',
		intro: 'An outbound API call is part of your request path, so its failure behavior belongs in your design—not in a default client setting. Without a timeout, one slow dependency can occupy a request for too long. Without a retry policy, a temporary failure becomes a user-visible error; with an indiscriminate retry policy, a partial outage becomes a traffic spike. This tutorial builds a small, bounded pattern for Node.js fetch calls and shows where it should stop.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Node.js Documentation — Fetch and AbortSignal.timeout()', url: 'https://nodejs.org/api/globals.html#static-method-abortsignaltimeoutdelay' },
			{ label: 'MDN — 503 Service Unavailable', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503' },
			{ label: 'IETF RFC 9110 — Retry-After', url: 'https://www.rfc-editor.org/rfc/rfc9110#name-retry-after' },
		],
		sections: [
			{
				heading: 'Prerequisites: define the dependency contract',
				paragraphs: [
					'You need Node.js 18 or newer for the built-in fetch implementation, a downstream API with documented status codes, and a test endpoint that can delay or fail responses. Before writing a helper, record the dependency’s timeout expectation, authentication method, idempotency support, rate limits, and whether it returns Retry-After. A retry wrapper cannot repair an undocumented business contract.',
					'Separate the caller’s total deadline from an individual attempt timeout. If your incoming request has 1,000 ms left, three 800 ms attempts are not a valid plan. Pass a deadline or remaining budget through the call so the dependency cannot consume time that the caller no longer has.',
				],
				bullets: ['Choose a total budget for the user-visible operation', 'Choose a shorter timeout for each outbound attempt', 'Classify methods and operations as safe, unsafe, or explicitly idempotent', 'Decide which status codes and errors are retryable', 'Add a request or trace ID that the downstream service can log'],
			},
			{
				heading: 'Bound every attempt with AbortSignal.timeout()',
				paragraphs: [
					'Node documents AbortSignal.timeout(delay) as a signal that aborts after the specified number of milliseconds. Use it with fetch so a connection, response, or body that never completes cannot hold the request forever. Treat an abort as a distinct outcome in logs: it may mean a dependency timeout, a caller cancellation, or your overall deadline.',
					'Keep the timeout close to the operation’s real budget. A fast metadata lookup and a report-generation endpoint should not inherit the same number automatically. Start with a measured target, leave room for network and parsing work, and make the value configurable rather than scattering magic numbers through route handlers.',
				],
				bullets: ['Create a fresh timeout signal for each attempt', 'Abort the response body as well as waiting for headers', 'Do not catch every AbortError and label it a retryable outage', 'Log elapsed time, attempt number, operation name, and a safe dependency name', 'Use an outer deadline to cap the sum of all attempts and backoff'],
			},
			{
				heading: 'Retry only work that can be repeated safely',
				paragraphs: [
					'Retries are appropriate for transient failures, not for every non-2xx response. A network reset, timeout, or temporary 503 may recover. A 400 caused by invalid input, a 401 caused by missing credentials, and a 404 for a missing resource generally need a different action. MDN describes 503 as a temporary condition such as maintenance or overload and distinguishes rate limiting as 429, so your policy should treat those signals deliberately rather than lumping all server errors together.',
					'Be conservative with writes. Retrying GET or another operation documented as safe is simpler. Retrying POST can create two records or trigger two charges if the first attempt reached the server but its response was lost. Only retry an unsafe operation when the downstream contract provides an idempotency key or an equivalent deduplication guarantee, and reuse the same key for every attempt.',
				],
				bullets: ['Retry connection failures and timeouts only when the operation is safe', 'Consider 502, 503, and 504 transient, subject to the dependency contract', 'Handle 429 according to its rate-limit policy', 'Do not retry validation, authentication, authorization, or most not-found errors', 'Cap attempts and return a typed failure when the budget is exhausted'],
			},
			{
				heading: 'Use Retry-After, backoff, and jitter together',
				paragraphs: [
					'RFC 9110 defines Retry-After as either an HTTP date or a delay in seconds; when sent with 503 it indicates how long the service is expected to be unavailable. Parse the header defensively and cap the resulting wait by your caller deadline. If the header is absent, use bounded exponential backoff rather than retrying immediately.',
					'A common fallback is base delay multiplied by two for each retry, with a maximum delay and random jitter. Jitter prevents a group of callers that failed together from waking up together. Do not let each library layer add its own retries: one application-level policy around one dependency call is easier to budget and observe than a client, SDK, queue, and route all retrying independently.',
				],
				bullets: ['Prefer a valid Retry-After value from the dependency', 'Otherwise use exponential backoff with a hard maximum', 'Add full or bounded random jitter', 'Never sleep beyond the remaining request deadline', 'Expose attempt count and final reason in metrics without logging secrets'],
			},
			{
				heading: 'Verify with a failure matrix',
				paragraphs: [
					'Test the helper with a controllable local server before connecting it to a real provider. Return a successful response after one failure, delay beyond the attempt timeout, send 503 with Retry-After, send 429, close the socket without a response, and return a permanent 400. Assert both the number of requests sent and the elapsed time; a test that only checks the final error can hide an unsafe duplicate.',
					'Then test the business boundary. For a read, confirm that a transient failure can recover without changing the result. For an idempotent write, confirm every attempt carries the same idempotency key. For a non-idempotent write, confirm the policy fails once rather than guessing whether the server committed the first request. Inject a caller cancellation and verify the helper stops instead of starting another attempt.',
				],
				bullets: ['One transient 503 recovers within the total budget', 'Retry-After is honored but capped', 'A slow response is aborted at the attempt deadline', 'A permanent 400 makes one request and returns a typed error', 'A retried write reuses its idempotency key', 'Caller cancellation prevents further retries', 'Metrics distinguish timeout, retry, final failure, and success-after-retry'],
			},
			{
				heading: 'Production checklist and failure modes',
				paragraphs: [
					'Keep the retry policy at the application boundary where you know the operation’s meaning. A generic HTTP helper can classify transport errors and parse headers, but the caller must decide whether repeating the operation is safe. Return an error that preserves the dependency status, attempt count, request ID, and retryability without exposing response bodies that may contain credentials or personal data.',
					'Watch for retry amplification: rising attempts per request, queue age, dependency latency, and 5xx or 429 rates. If retries increase load without improving successful outcomes, reduce attempts or disable them for that dependency. During a known outage, a fast, clear failure can protect both systems better than a long sequence of doomed attempts.',
				],
				bullets: ['Each dependency has one documented timeout and retry owner', 'Total deadline is shorter than the platform or client request deadline', 'Retryable methods and statuses are explicit', 'Unsafe writes require idempotency protection', 'Retry-After parsing is bounded and tested', 'Backoff includes jitter and never exceeds remaining budget', 'Retries are visible in traces, logs, and metrics', 'A feature flag or configuration change can reduce retries during an incident', 'Runbooks explain when to replay, stop, or escalate a failed operation'],
			},
		],
	},
	{
		slug: 'design-cursor-pagination-multi-tenant-api',
		title: 'How to Design Cursor Pagination for a Multi-Tenant API',
		seoTitle: 'Cursor Pagination for Multi-Tenant APIs | PilotLab',
		dek: 'A practical design for stable list endpoints: choose an ordering, encode an opaque cursor, enforce tenant scope, and test inserts, deletes, and concurrent requests.',
		published: '2026-08-03',
		updated: '2026-08-03',
		readTime: '10 min read',
		category: 'API engineering',
		keyword: 'how to design cursor pagination for a multi-tenant API',
		intro: 'Pagination looks simple until a customer scrolls through a changing dataset or an integration retries the same page. Offset pagination is easy to explain, but deep offsets become expensive and rows can move between pages as records are inserted or deleted. Cursor pagination gives a client a position in a deliberate ordering; it does not remove consistency decisions, but it makes them explicit. This tutorial shows how to design a tenant-safe list endpoint that remains predictable under ordinary writes.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Microsoft Learn — Web API Design Best Practices', url: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#pagination' },
			{ label: 'IETF RFC 8288 — Web Linking', url: 'https://www.rfc-editor.org/rfc/rfc8288' },
			{ label: 'Stripe API Reference — Pagination', url: 'https://docs.stripe.com/api/pagination' },
		],
		sections: [
			{
				heading: 'Prerequisites: define the list contract',
				paragraphs: [
					'You need a stable tenant identity from authentication, a database index that matches the list ordering, and a client contract that says what happens when a cursor expires or a record disappears. Start by naming the resource, supported filters, maximum page size, default ordering, and whether the endpoint is a snapshot or a moving window.',
					'For most operational lists, choose a deterministic descending order such as created_at plus id. The timestamp gives the user a useful order; the unique ID breaks ties. Never order only by a timestamp if two rows can share the same value. Microsoft’s API guidance treats pagination as part of the API design, while Stripe documents cursor-based list parameters such as limit, starting_after, and ending_before as an established client-facing pattern.',
				],
				bullets: ['Derive tenant_id from the verified token or session', 'Document a bounded limit, such as 1–100, and enforce it server-side', 'Choose a unique, indexed ordering for every supported filter', 'Decide whether new records may appear while a client is paging', 'Return a stable response shape even when the next page is empty'],
			},
			{
				heading: 'Use a composite key, not a row number',
				paragraphs: [
					'A cursor should represent the last ordering key the client received, not “page 4”. For an order of created_at descending and id descending, the next query asks for rows where created_at is earlier than the cursor timestamp, or where the timestamp is equal and id is smaller. Fetch limit plus one row so the server can determine has_more without running a separate count query.',
					'Create an index that begins with tenant scope and follows the filter and ordering fields. Conceptually, a query for a tenant’s newest records should be able to seek directly into an index shaped like tenant_id, created_at descending, id descending. The exact index depends on the database and filters; verify it with the query planner rather than assuming the ORM generated an efficient plan.',
				],
				bullets: ['Use a unique tie-breaker in the ordering', 'Apply tenant scope in the database query, not after fetching rows', 'Fetch one extra row to calculate has_more', 'Avoid SELECT COUNT(*) on every page unless the product truly needs a total', 'Keep cursor ordering and database ordering byte-for-byte consistent'],
			},
			{
				heading: 'Make the cursor opaque and bounded',
				paragraphs: [
					'The client should not need to understand database columns. Encode the ordering values and the query version in a signed or authenticated cursor, then use a URL-safe representation. A cursor might carry a version, timestamp, ID, filter hash, and expiry; it should not expose private tenant identifiers or become an unchecked way to alter the query. Base64 alone is encoding, not protection.',
					'Bind the cursor to the request shape. If a client sends a cursor created for a different filter, sort direction, or resource, reject it with a clear 400 rather than silently producing an unexpected page. Keep cursors short enough for URLs, set a retention or expiry policy, and return a typed error when an old cursor can no longer be decoded or honored.',
				],
				bullets: ['Include a cursor version so the format can evolve', 'Authenticate the cursor if its contents influence authorization or query behavior', 'Bind it to resource, filters, direction, and page-size policy', 'Reject malformed, expired, or mismatched cursors', 'Never trust a decoded tenant ID over the authenticated tenant context'],
			},
			{
				heading: 'Expose navigation without coupling clients to storage',
				paragraphs: [
					'A minimal JSON response can contain data, has_more, and next_cursor. If the page has no following row, next_cursor should be null. Keep the cursor in the response body because many API clients do not parse headers, but you may also expose navigational links in a Link header. RFC 8288 defines the Link header model and relation types for connecting a response to related resources; a link such as rel="next" can complement, rather than replace, the body field.',
					'Do not promise that a cursor is a permanent bookmark unless the backend provides snapshot semantics. With a moving dataset, a record inserted above the current position will normally appear on a future fresh traversal, not in a page the client has already passed. A record deleted between requests may simply vanish. Document this behavior and offer a stable export or snapshot job when users need a complete point-in-time report.',
				],
				bullets: ['Return data, has_more, and next_cursor with consistent types', 'Use rel="next" only for a URL the client can safely follow', 'Do not expose SQL offsets or internal primary-key assumptions in the public contract', 'Explain whether concurrent inserts, updates, and deletes can change traversal results', 'Use an export or snapshot workflow for audit-grade completeness'],
			},
			{
				heading: 'Protect tenant isolation at every page',
				paragraphs: [
					'Tenant isolation must be part of the query and the cursor validation. The request’s authenticated tenant determines the scope; the cursor cannot override it. Apply authorization before the database query, include tenant_id in the WHERE clause and index, and test that a cursor copied from tenant A is invalid or harmless when presented by tenant B.',
					'Be equally careful with filters, expansions, and related records. A page may contain tenant-owned projects while an expanded owner or billing object belongs to another boundary. Enforce authorization on the expanded data too, and avoid returning a different error shape that lets callers probe whether an inaccessible record exists.',
				],
				bullets: ['Scope every page query by verified tenant identity', 'Do not derive authorization from cursor contents or client-supplied headers', 'Apply permission checks to expansions and nested resources', 'Use non-sensitive cursor error messages', 'Add cross-tenant negative tests to the integration suite'],
			},
			{
				heading: 'Verify movement, retries, and performance',
				paragraphs: [
					'Test more than the first page. Insert a record between requests, delete the last item from a page, update an item’s ordering field, request a cursor with a different filter, and replay the same request. Assert the API’s documented behavior: no unauthorized rows, no accidental infinite loop, and no duplicate within the traversal under the consistency model you chose.',
					'Run the endpoint against realistic tenant sizes and inspect database plans for the first page and a deep cursor. Track page latency, rows scanned, empty-page frequency, invalid-cursor responses, and client retries. A cursor design that is logically correct but scans a large tenant’s entire table is not ready for production.',
				],
				bullets: ['First page and deep cursor use the intended index', 'Limit values above the maximum are clamped or rejected consistently', 'The same cursor and request shape produce the documented result', 'Concurrent inserts and deletes match the stated consistency behavior', 'Tenant A never sees tenant B data, including through expansions', 'Metrics expose latency, scan work, invalid cursors, and traversal errors'],
			},
		],
	},
	{
		slug: 'version-public-api-without-breaking-clients',
		title: 'How to Version a Public API Without Breaking Clients',
		seoTitle: 'Version a Public API Without Breaking Clients | PilotLab',
		dek: 'A practical compatibility plan for evolving API contracts: classify changes, choose a version boundary, test real consumers, and retire old behavior without surprises.',
		published: '2026-08-03',
		updated: '2026-08-03',
		readTime: '10 min read',
		category: 'API architecture',
		keyword: 'how to version a public API without breaking clients',
		intro: 'API versioning is not a string you add to a URL after a breaking release. It is a compatibility promise to the clients, integrations, mobile apps, and internal teams that depend on your contract. This guide gives small product teams a practical way to decide what is breaking, choose a version boundary, roll out a change, and remove old behavior only when the evidence says it is safe.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'OpenAPI Initiative — OpenAPI Specification v3.2.0', url: 'https://spec.openapis.org/oas/latest.html' },
			{ label: 'Microsoft Learn — Web API Design Best Practices', url: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
			{ label: 'IETF RFC 9110 — HTTP Semantics', url: 'https://www.rfc-editor.org/rfc/rfc9110' },
		],
		sections: [
			{
				heading: 'Start with a compatibility inventory',
				paragraphs: [
					'Before choosing v2, find out what actually consumes the API. List first-party web and mobile clients, partner integrations, scheduled jobs, SDKs, exports, and undocumented scripts. Record the endpoints, fields, status codes, authentication scopes, pagination behavior, and retry assumptions each consumer uses. A version boundary is only useful if you know who needs to cross it.',
					'Keep a small compatibility matrix in the repository next to the API description. For every planned change, mark whether an old client can continue to parse the response, send the same request, and preserve its intended behavior. Do not rely on “the JSON still looks similar”: changing an enum, error shape, default sort, or permission rule can break a client just as surely as removing a field.',
				],
				bullets: ['Name every known consumer and its owner', 'Capture real request and response examples, with secrets removed', 'Record fields clients send, read, ignore, or treat as required', 'Include operational dependencies such as webhooks and retry jobs', 'Turn unknown consumers into an explicit migration risk'],
			},
			{
				heading: 'Classify changes before you version them',
				paragraphs: [
					'Use additive changes when the existing contract can safely tolerate them: adding an optional response field, adding a new endpoint, or accepting a new request field that has a documented default. Even additive changes need consumer testing because some clients deserialize strictly or assume an exhaustive enum. Treat the consumer, not the server implementation, as the compatibility boundary.',
					'Removing or renaming a field, changing its type, making an optional request required, changing the meaning of a status code, narrowing permissions, or changing ordering semantics is a candidate breaking change. HTTP semantics also matter: RFC 9110 identifies safe methods and PUT and DELETE as idempotent, which affects whether a client can recover from a lost response. Do not silently change retry behavior while calling the release compatible.',
				],
				bullets: ['Additive: new optional field, endpoint, or documented capability', 'Potentially breaking: new enum value, changed default, or stricter validation', 'Breaking: removed field, changed type, required input, or changed meaning', 'Operationally breaking: new latency, quota, timeout, or retry behavior', 'Security-breaking: a changed authorization rule or data visibility'],
			},
			{
				heading: 'Choose one visible version boundary',
				paragraphs: [
					'For a public HTTP API, choose a versioning location that clients can consistently send and operators can consistently observe. A path such as /v1/orders is easy to route, document, log, and explain. A media-type version can keep resource URLs stable but requires every client and tool to negotiate the representation correctly. A query parameter is simple to introduce but easy to omit or cache incorrectly. Pick one primary mechanism instead of making consumers guess across endpoints.',
					'Keep the version at the contract boundary, not scattered through business logic. Route v1 and v2 into shared domain operations where their behavior is genuinely the same, then put translation code at the edge when request or response shapes differ. This avoids duplicating the core business rules while making incompatibilities visible. Microsoft’s API guidance emphasizes resource-oriented URIs, standard HTTP methods, stateless requests, and loose coupling; versioning should preserve those properties rather than turn every version into a separate product.',
				],
				bullets: ['Document the default behavior explicitly; never make it implicit', 'Keep one canonical OpenAPI description per supported contract', 'Translate at the edge when versions share business behavior', 'Do not let v1 and v2 write conflicting meanings to the same resource', 'Include version in metrics, traces, logs, and support diagnostics'],
			},
			{
				heading: 'Make the contract executable in CI',
				paragraphs: [
					'An OpenAPI document is useful only when it is treated as a release artifact. The specification defines a standard, language-agnostic description for HTTP APIs, including paths, operations, parameters, request bodies, responses, and reusable schemas. Keep the document under review, validate it on every change, and generate or check examples from the same source rather than maintaining a second unofficial reference.',
					'Add three layers of verification. First, validate the document itself so malformed paths, references, and schemas fail before deployment. Second, run contract tests against the live or staged server to check status codes, headers, and bodies for representative requests. Third, run consumer tests for the clients most likely to break: strict deserializers, mobile versions that cannot update quickly, and partner integrations with narrow retry logic. A green unit suite is not evidence that an old client can still talk to the new contract.',
				],
				bullets: ['Fail CI when the API description is invalid or incomplete', 'Compare the proposed contract with the last released contract', 'Test required fields, enums, errors, pagination, and authorization', 'Run old-client fixtures against the new server before rollout', 'Publish examples that can be copied into a real request'],
			},
			{
				heading: 'Deprecate with an observable migration path',
				paragraphs: [
					'When a replacement is ready, publish the migration guide before turning off the old contract. Show the old request, the new request, field mappings, changed errors, authentication differences, and a rollback or fallback plan. Give each consumer an owner and a date for testing. If you do not know which clients are still active, add usage telemetry before setting a removal date.',
					'Use response headers, documentation, dashboards, and direct communication to make deprecation visible. A warning without a route, owner, or deadline is easy to ignore. Measure requests by version and consumer identity, but do not expose tokens or personal data in logs. Keep the old path read-only or limited only if that is an intentional, documented product decision; changing semantics during deprecation creates a second migration problem.',
				],
				bullets: ['Publish a migration guide with before-and-after examples', 'Track traffic by version, endpoint, consumer, and error class', 'Notify known owners and give them a test environment', 'Set a removal date only after usage and support impact are understood', 'Keep rollback possible while the new contract proves itself'],
			},
			{
				heading: 'Production checklist and failure modes',
				paragraphs: [
					'The safest API migrations are boring: one explicit contract, a small compatibility layer, tests that represent real consumers, and dashboards that show whether traffic moved. Avoid releasing v2 because the codebase feels untidy. Release it when the old contract prevents a necessary change or when a security, data, or product requirement cannot be met compatibly.',
					'Watch for the failure modes that version numbers do not solve. A v2 endpoint can still leak tenant data, return inconsistent errors, or make non-idempotent writes unsafe to retry. A client can send the right version and still use an expired token. Keep authorization, validation, rate limits, idempotency, and observability as shared platform controls, then test them separately for every public contract.',
				],
				bullets: ['The compatibility matrix has owners and current examples', 'Breaking changes have an explicit version and migration guide', 'Each supported version has a validated contract in CI', 'Old-client and consumer tests run before production rollout', 'Version and consumer usage are observable without sensitive logs', 'Deprecation has a communication plan, deadline, and rollback path', 'Authorization, retries, rate limits, and idempotency are tested per version', 'The removal decision is based on measured usage, not hope'],
			},
		],
	},
	{
		slug: 'design-http-api-error-responses-problem-details',
		title: 'How to Design HTTP API Error Responses with Problem Details',
		seoTitle: 'Design HTTP API Error Responses with Problem Details | PilotLab',
		dek: 'A practical contract for errors that clients can handle: choose the right status, return application/problem+json, expose validation fields safely, and test the failure paths.',
		published: '2026-08-03',
		updated: '2026-08-03',
		readTime: '9 min read',
		category: 'API engineering',
		keyword: 'how to design HTTP API error responses',
		intro: 'An API error is part of the client contract, not an implementation detail to hide behind a generic 500. When every endpoint returns a different shape, clients have to parse strings, support teams lose useful context, and retries become guesswork. This tutorial shows how to create a small, consistent error contract using HTTP status semantics and the Problem Details format, while keeping sensitive implementation details out of the response.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'IETF RFC 9457 — Problem Details for HTTP APIs', url: 'https://www.rfc-editor.org/rfc/rfc9457' },
			{ label: 'MDN — HTTP response status codes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status' },
			{ label: 'Microsoft Learn — Web API Design Best Practices', url: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
		],
		sections: [
			{
				heading: 'Prerequisites: map failures before formats',
				paragraphs: [
					'You need an HTTP API, a client or integration you can test, and a way to inspect status codes, headers, and response bodies. Start by listing the failures your API can produce: malformed JSON, invalid fields, missing authentication, insufficient permission, missing resources, conflicts, rate limits, dependency failures, and unexpected server errors.',
					'Choose the HTTP status from the meaning of the failure, not from the exception class. A 400 means the request cannot be processed as sent; 401 means the request lacks valid authentication; 403 means the server understood the request but refuses it; 404 means the target resource cannot be found; 409 is useful when the request conflicts with the current resource state; and 429 signals that the client should slow down. Keep this mapping documented and consistent across routes.',
				],
				bullets: ['List the status code, retryability, and next action for each failure class', 'Separate client-correctable errors from server and dependency failures', 'Decide which fields are safe for an unauthenticated caller to see', 'Give operators a correlation or instance ID without exposing internals', 'Treat validation, authorization, and rate-limit behavior as public contract'],
			},
			{
				heading: 'Use one machine-readable envelope',
				paragraphs: [
					'RFC 9457 defines Problem Details as a common format for machine-readable HTTP error information. Its JSON representation uses the application/problem+json media type and has standard members including type, title, status, detail, and instance. The type identifies the kind of problem; detail describes this occurrence; instance can identify the specific occurrence for support or forensics.',
					'A representative validation response could be a 422 with a type such as https://api.example.com/problems/validation-error, a stable title, a short detail, an instance or request ID, and an errors extension containing safe field locations. Keep extensions focused on information clients can act on. Do not make clients scrape the human wording in title or detail to decide what to do.',
				],
				bullets: ['Set Content-Type to application/problem+json for the JSON problem representation', 'Use an absolute, stable type URI you control when possible', 'Keep title stable for the problem type and detail specific to the occurrence', 'Use extension fields for structured validation or business context', 'Document the problem types and examples alongside the endpoint contract'],
			},
			{
				heading: 'Keep errors useful without leaking secrets',
				paragraphs: [
					'An error response should help the caller recover, but it is still public output. Never return stack traces, SQL fragments, access tokens, internal hostnames, provider credentials, or another tenant’s identifiers. Log the detailed exception on the server with an access-controlled correlation ID, then return a stable problem type and a support-safe instance value.',
					'Be careful with authorization and resource existence. Depending on your security model, returning 404 for an inaccessible resource can avoid revealing whether it exists; returning 403 may be more useful when the caller is allowed to know the resource but lacks an action. Choose deliberately and apply the same rule to every route. The client should not be able to infer private data by comparing error wording, timing, or shape.',
				],
				bullets: ['Expose field names and safe constraints, not raw validator internals', 'Generate request or instance IDs at the edge and include them in logs', 'Redact credentials, personal data, and provider response bodies', 'Return the same error shape for every failure path in the API', 'Make error messages localization-friendly if clients display them directly'],
			},
			{
				heading: 'Make retry behavior explicit',
				paragraphs: [
					'Clients need to know whether trying again can help. Validation, authentication, authorization, and most not-found errors should not be retried unchanged. A 429 should normally include Retry-After when the server can calculate a meaningful delay. A 503 can indicate temporary unavailability, but a client still needs a bounded retry policy and the operation must be safe to repeat.',
					'Do not encode retryability only in detail text. Add a documented problem type or extension such as retryable: true only if your team can keep that field accurate, and keep idempotency separate from availability. A temporary timeout on a POST does not prove that the server did nothing; retries for unsafe writes need an idempotency key or an equivalent deduplication contract.',
				],
				bullets: ['Use 429 and Retry-After for rate limiting, with a bounded client backoff', 'Use 503 for temporary service unavailability when that is the actual condition', 'Do not retry malformed requests or failed authorization without a change', 'Require idempotency protection before retrying an unsafe write', 'Record status, problem type, attempt count, and request ID in client telemetry'],
			},
			{
				heading: 'Test the contract at the wire boundary',
				paragraphs: [
					'Unit tests for an exception mapper are not enough. Send malformed input, an invalid field, a missing token, a forbidden resource, a missing record, a conflicting update, a rate-limited request, and a simulated dependency failure. Assert the status, Content-Type, required problem members, stable type, and absence of sensitive fields. Test both JSON clients and clients that send an Accept header without application/problem+json.',
					'Add contract fixtures for the clients that matter most. A client should branch on status and type, not on a sentence in detail. Verify that a request ID in the response can locate the server log, that errors from one tenant do not mention another, and that the server’s unexpected exception path still returns a safe generic problem rather than a framework default page.',
				],
				bullets: ['Every documented failure returns the intended status and media type', 'Validation errors identify safe fields without exposing request secrets', 'Problem type remains stable when human wording changes', '429 and temporary failures expose the documented retry signal', 'Unexpected failures have an operator correlation path and a safe body', 'Contract tests run against the deployed or staged HTTP boundary'],
			},
			{
				heading: 'Production checklist and trade-offs',
				paragraphs: [
					'Problem Details is a useful common envelope, not a reason to put every internal fact in JSON. Some responses are still resource representations, and a status code may be enough for a simple case. Use the format where clients need structured error information, then keep the type vocabulary small enough that teams can support it.',
					'Centralize the mapping at an application boundary, but let domain code provide typed causes and safe metadata. Monitor problem types by route, tenant-safe consumer identity, status, and dependency. When a new failure appears in production, add a test and decide whether it is a new public type or an existing category. Consistency is earned by closing that feedback loop, not by adding a middleware package and moving on.',
				],
				bullets: ['Error types and status mappings have an owner', 'The API contract documents examples and client next actions', 'Problem responses never contain secrets, stack traces, or cross-tenant data', 'Retry and idempotency rules are explicit for every retriable operation', 'Correlation IDs connect client reports to server logs and traces', 'Contract and failure-injection tests run in CI and before releases', 'Dashboards show new problem types, spikes, and dependency-related failures', 'A generic fallback remains safe when an unknown exception escapes'],
			},
		],
	},
	{
		slug: 'implement-transactional-outbox-nodejs-api',
		title: 'How to Implement a Transactional Outbox in a Node.js API',
		seoTitle: 'Transactional Outbox in a Node.js API | PilotLab',
		dek: 'Keep database state and published events aligned with one transaction, then deliver from a durable outbox without pretending delivery is exactly once.',
		published: '2026-08-06',
		updated: '2026-08-06',
		readTime: '11 min read',
		category: 'API architecture',
		keyword: 'how to implement a transactional outbox in a Node.js API',
		intro: 'A common integration bug starts with a reasonable-looking sequence: update the order, call the message broker, and return success. If the database commit succeeds but the publish fails, downstream systems never hear about the order. If the publish succeeds and the database rolls back, they hear about state that does not exist. A transactional outbox closes that dual-write gap by recording the intended event in the same database transaction as the business change, then publishing it asynchronously with explicit duplicate and recovery handling.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'AWS Prescriptive Guidance — Transactional outbox pattern', url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html' },
			{ label: 'microservices.io — Transactional outbox', url: 'https://microservices.io/patterns/data/transactional-outbox.html' },
			{ label: 'PostgreSQL Documentation — Transactions', url: 'https://www.postgresql.org/docs/current/tutorial-transactions.html' },
		],
		sections: [
			{
				heading: 'Prerequisites: identify the dual write',
				paragraphs: [
					'This pattern is useful when one user action must change your database and notify another component: creating an order and emitting order.created, changing a subscription and enqueueing billing work, or updating a record and invalidating a downstream projection. You need a transactional database, a broker or queue, a worker process, and an event contract that a consumer can validate. If the side effect can stay inside the same database, an outbox may be unnecessary complexity.',
					'Draw the current sequence and mark every failure window. A broker call inside the request can make latency and availability depend on the broker. A database commit followed by a publish can lose the event. A publish followed by a rollback can create a false event. The outbox makes the database transaction the source of truth for what should eventually be delivered; it does not make the broker transactional with your database.',
				],
				bullets: ['A database transaction that owns the business write', 'An outbox table in the same database', 'A publisher that can retry safely', 'A consumer contract with event IDs and schema versions', 'Metrics, logs, and an operator path for stuck rows'],
			},
			{
				heading: 'Write the business row and event together',
				paragraphs: [
					'Create an outbox row in the same transaction as the business change. A useful row has an immutable event ID, event type, schema version, aggregate or resource ID, tenant scope where relevant, serialized payload, creation time, attempt count, and delivery state. Keep the payload sufficient for the consumer to act, but avoid copying secrets or data that the consumer does not need.',
					'In a Node.js service, the application-level shape might be createOrder(input), then insert an outbox record for OrderCreated, then commit. The route returns success only after that transaction commits. PostgreSQL describes a transaction as an all-or-nothing unit: if a later statement fails, earlier changes can be rolled back. That atomic boundary is the core guarantee the pattern relies on.',
				],
				bullets: ['Use one database transaction for the domain write and outbox insert', 'Generate the event ID before persistence and keep it stable across retries', 'Store aggregate ID and sequence or created_at for ordering decisions', 'Add an index for undelivered rows, such as (status, created_at)', 'Do not call the broker from inside the database transaction'],
			},
			{
				heading: 'Publish with a poller or change-data mechanism',
				paragraphs: [
					'A separate publisher finds pending rows, claims a bounded batch, sends each event to the broker, and records the delivery result. A simple polling worker is often the easiest first implementation: it uses ordinary database queries, is easy to run locally, and makes the retry state visible. AWS documents a variation that scans an outbox, sends events to SQS, and deletes rows after a successful response.',
					'Claiming needs concurrency control. Use a lease or a database mechanism such as row locking with skip-locked behavior so two workers do not actively process the same row at once. This reduces contention but does not eliminate duplicates: a worker can publish successfully and crash before marking the row delivered. Keep the row or a delivery record long enough to support diagnosis and replay, rather than deleting the evidence immediately.',
				],
				bullets: ['Fetch a small, ordered batch rather than scanning the whole table', 'Claim rows with a lease that expires if a worker dies', 'Publish outside the database transaction', 'Mark delivered only after the broker acknowledges the event', 'Use backoff for transient failures and isolate permanently invalid events'],
			},
			{
				heading: 'Design consumers for at-least-once delivery',
				paragraphs: [
					'The publisher has an unavoidable crash window between sending an event and recording that it was sent. Therefore the practical contract is at-least-once delivery: a consumer may receive the same event more than once. AWS explicitly calls out duplicate messages as an issue and recommends tracking processed messages so consumers are idempotent. Put the event ID in the message envelope and make the consumer’s business effect safe to repeat.',
					'For a projection, upsert by aggregate ID and ignore an event ID already applied. For a notification or external write, use a unique delivery key or the provider’s idempotency key. If event ordering matters, include an aggregate sequence and reject or defer a gap; do not assume broker arrival order is enough. A duplicate-safe consumer is more valuable than a publisher that claims exactly-once semantics it cannot prove.',
				],
				bullets: ['Persist processed event IDs where the side effect is persisted', 'Make repeated delivery produce the same final state', 'Validate event type and schema version before acting', 'Use aggregate sequence numbers when order is a business requirement', 'Send poison messages to a reviewed dead-letter path'],
			},
			{
				heading: 'Test the crash windows and operational limits',
				paragraphs: [
					'Test the boundary, not just the happy path. Force the business transaction to fail and confirm that neither the business row nor its outbox event remains. Commit the transaction, stop the API before publishing, restart the worker, and confirm the event is eventually delivered. Publish an event and interrupt the worker before its status update; the next attempt should create no duplicate business effect at the consumer.',
					'Measure the outbox as a queue. Alert on oldest pending age, pending count, publish failure rate, retry count, lease expirations, consumer lag, and dead-letter count. Put limits on payload size and retention. If the outbox grows without bound, the problem may be a broker outage, a poison event, insufficient worker capacity, or a transaction path that creates events faster than the system can deliver them.',
				],
				bullets: ['Rollback leaves no orphan event', 'A committed transaction survives an API or worker restart', 'A publisher crash after broker acknowledgement causes one logical consumer effect', 'Two workers cannot corrupt delivery state', 'A malformed event is quarantined with a replay decision', 'Tenant and authorization boundaries hold during replay'],
			},
			{
				heading: 'Production checklist and trade-offs',
				paragraphs: [
					'The transactional outbox trades a small amount of database storage and worker complexity for a much clearer reliability boundary. It is not a replacement for a broker, a schema registry, or a distributed transaction in every situation. It also does not guarantee immediate delivery: consumers observe eventual consistency, and a long broker outage creates a growing backlog. Document that delay as part of the product behavior.',
					'Choose polling when simplicity and operational visibility matter; consider a database change-data mechanism when polling load or delivery latency justifies its infrastructure. Whichever route you choose, keep the event contract versioned, preserve enough delivery history to investigate incidents, and give operators a safe replay tool. Never replay a financial or destructive event without consumer idempotency and an explicit scope.',
				],
				bullets: ['Business write and outbox insert share one committed transaction', 'Outbox rows have stable IDs, schema versions, ownership, and retention', 'Publisher claims work safely and retries with bounded backoff', 'Consumers are idempotent and validate event envelopes', 'Ordering requirements are explicit per aggregate, not assumed globally', 'Backlog, age, retries, failures, and replay actions are observable', 'Dead-letter and replay procedures protect tenants and destructive actions', 'The team knows when an outbox is simpler than a distributed transaction'],
			},
		],
	},
	{
		slug: 'correlation-ids-nodejs-api-async-local-storage',
		title: 'How to Add Correlation IDs to a Node.js API',
		seoTitle: 'Correlation IDs in Node.js APIs | PilotLab',
		dek: 'A practical pattern for tracing one request through logs and downstream calls: accept safe context, keep it across async work, return it to the client, and avoid turning identifiers into secrets.',
		published: '2026-08-08',
		updated: '2026-08-08',
		readTime: '10 min read',
		category: 'Platform engineering',
		keyword: 'how to add correlation IDs to a Node.js API',
		intro: 'When a customer reports a failed request, “check the logs” is not enough if the logs cannot be connected to that request. A correlation ID gives one operation a stable handle across the API, background work, and downstream calls. This tutorial uses Node.js AsyncLocalStorage for application logs, explains how that differs from distributed trace context, and lays out the privacy and failure controls that make the pattern safe in production.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Node.js Documentation — Asynchronous context tracking', url: 'https://nodejs.org/api/async_context.html' },
			{ label: 'W3C — Trace Context Recommendation', url: 'https://www.w3.org/TR/trace-context/' },
			{ label: 'OpenTelemetry Documentation — Traces', url: 'https://opentelemetry.io/docs/concepts/signals/traces/' },
		],
		sections: [
			{
				heading: 'Prerequisites: define what the ID is for',
				paragraphs: [
					'You need a Node.js HTTP API, structured application logs, a request test client, and a way to inspect outbound calls. Decide first whether you need a log-correlation ID, a distributed trace ID, or both. A correlation ID is an application support handle; a trace ID belongs to a tracing system and follows the trace-context protocol. They can be related, but they should not be treated as interchangeable by accident.',
					'Use an identifier that is opaque, bounded in length, and safe to put in logs and a response header. Generate one at the edge when the caller does not provide one. If you accept an incoming value, validate its characters and length, and decide whether your trust boundary permits it to be echoed. Never use an email address, access token, database key, or other sensitive value as the correlation ID.',
				],
				bullets: ['Choose a response header such as X-Request-ID and document it', 'Generate a random ID with a collision-resistant library', 'Limit accepted input to a safe character set and maximum length', 'Keep the ID out of authorization and business decisions', 'Define retention and access rules for logs containing the ID'],
			},
			{
				heading: 'Create the context at the HTTP boundary',
				paragraphs: [
					'Wrap each request in an AsyncLocalStorage context before calling application code. Node documents this API as a way to associate state with an asynchronous duration such as a web request, and its run() method makes the store available to asynchronous operations created inside the callback. That is the useful property: a logger deep in a service does not need every function signature to grow a requestId parameter.',
					'Keep the store small and immutable by convention. A practical shape is { requestId, traceId } where traceId is present only when a trusted tracing library has established one. Set the response header before sending the response, and register the request context before parsing or invoking handlers so errors from the whole path can be correlated.',
				],
				bullets: ['Call storage.run(store, handler) once per incoming request', 'Read the current store with getStore() inside log and client helpers', 'Use a fallback such as “-” when code runs outside a request', 'Do not mutate one shared store object between concurrent requests', 'Test both synchronous logs and logs after await, timers, and promises'],
			},
			{
				heading: 'Make every log and response useful',
				paragraphs: [
					'Create one logger wrapper that adds requestId, route, service, level, and timestamp to structured records. Log the ID at request start and completion, on handled errors, and around important dependency calls. Keep messages human-readable, but let machines filter by fields rather than searching a sentence. Include a duration and status at the edge so support can find the complete request quickly.',
					'Return the same ID in a response header, including for errors generated by the application boundary. The client can then give support a short value without exposing the full request or a trace payload. Do not promise that the header proves a request succeeded or that it is globally unique forever; it is a lookup handle with a defined retention window.',
				],
				bullets: ['Use structured fields rather than interpolating IDs into unparseable text', 'Log safe dependency name, operation, duration, and outcome', 'Preserve the ID when mapping exceptions to HTTP errors', 'Return the ID in success and error responses', 'Never log request bodies, tokens, cookies, or full provider payloads by default'],
			},
			{
				heading: 'Propagate context to downstream systems deliberately',
				paragraphs: [
					'For an internal HTTP call, send the correlation ID in the header your services agree on. For distributed tracing, use an OpenTelemetry propagator to inject the W3C traceparent and tracestate headers rather than hand-building them. The W3C specification defines those headers for propagating context between services; OpenTelemetry uses spans to describe the path and parent-child relationships of a request.',
					'Queues need an explicit message envelope because AsyncLocalStorage does not cross a process boundary. Put a safe correlation ID and, where applicable, trace context in message metadata. The consumer should start a new local context for the job, preserve the originating ID for lookup, and also generate a job or attempt ID so one request that creates many jobs does not make their logs indistinguishable.',
				],
				bullets: ['Inject context at one outbound HTTP or messaging boundary', 'Use standard trace propagation for traces; do not invent a trace format', 'Treat incoming downstream headers as untrusted input', 'Create a new context when a worker begins processing a message', 'Keep request, job, and attempt IDs separate but linkable'],
			},
			{
				heading: 'Verify concurrency, failure, and trust boundaries',
				paragraphs: [
					'Write an integration test that sends two requests concurrently and records logs after an await, a timer, and an outbound call. Assert that each record has the correct ID and that no value leaks between requests. Send an invalid or oversized incoming ID and confirm the server replaces or rejects it according to the documented policy. Force a 4xx, 5xx, timeout, and uncaught error, then verify that every response still exposes a safe lookup ID.',
					'Test process boundaries separately. Enqueue a job, stop the API, process it in a worker, and confirm that the worker logs link back to the originating request while using its own job context. If you export traces, compare the trace view with logs and make sure sampling or a missing parent does not make the application correlation ID disappear.',
				],
				bullets: ['Concurrent requests keep distinct IDs through asynchronous work', 'Malformed, long, or attacker-chosen IDs cannot poison logs or headers', 'Error handlers preserve the ID without returning stack traces', 'Downstream calls and queue messages carry only approved context', 'Worker retries retain the logical job link and add an attempt identifier', 'Logs can be searched by ID without granting access to sensitive payloads'],
			},
			{
				heading: 'Production checklist and limitations',
				paragraphs: [
					'Correlation IDs improve the path from a customer report to an operator’s evidence; they do not replace metrics, traces, structured errors, or durable job state. AsyncLocalStorage can also lose context around unusual callback integrations or incorrectly managed event emitters, so verify the libraries and add an explicit context bridge when needed. A missing ID should be visible as a telemetry defect, not silently replaced everywhere without investigation.',
					'Keep the implementation at the platform boundary and document it for every service. Decide how proxies handle the response header, whether external callers may supply an ID, how IDs are redacted from analytics, and how long logs remain searchable. The useful outcome is not a fancy identifier: it is a repeatable support workflow that connects request, dependency, worker, and failure evidence without weakening privacy.',
				],
				bullets: ['One owner maintains the ID format and propagation policy', 'Request and job contexts are initialized before application work', 'Logs, error responses, HTTP clients, and workers use the same documented fields', 'Trace context is delegated to a standards-compliant tracing library', 'Concurrency and process-boundary tests run in CI', 'Dashboards expose requests with missing or malformed correlation data', 'Retention and access controls cover all correlated logs and traces', 'A runbook shows support how to search an ID and escalate the incident'],
			},
		],
	},
	{
		slug: 'add-openapi-contract-tests-nodejs-api',
		title: 'How to Add OpenAPI Contract Tests to a Node.js API',
		seoTitle: 'OpenAPI Contract Tests for Node.js APIs | PilotLab',
		dek: 'A practical test boundary for API teams: validate the OpenAPI document, exercise the running server, and catch status, schema, and compatibility drift before release.',
		published: '2026-08-08',
		updated: '2026-08-08',
		readTime: '11 min read',
		category: 'API engineering',
		keyword: 'how to add OpenAPI contract tests to a Node.js API',
		intro: 'A unit-tested route can still violate the API contract that clients depend on. It may return the wrong status, omit a required field, accept an undocumented parameter, or drift from the OpenAPI document that partners use to integrate. This tutorial shows a small product team how to turn an OpenAPI description into a release check for a Node.js API, while keeping the specification honest and the tests useful rather than noisy.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'OpenAPI Initiative — OpenAPI Specification v3.2.0', url: 'https://spec.openapis.org/oas/latest.html' },
			{ label: 'Microsoft Learn — Web API Design Best Practices', url: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
			{ label: 'Node.js Documentation — Test runner', url: 'https://nodejs.org/api/test.html' },
		],
		sections: [
			{
				heading: 'Prerequisites: choose the contract boundary',
				paragraphs: [
					'You need a Node.js HTTP API that can run in a test environment, an OpenAPI document checked into the project, and a client capable of sending requests and inspecting status codes, headers, and JSON bodies. The examples assume the document describes the public HTTP behavior; it should not be a private sketch that only backend developers read.',
					'First list the routes and consumers that matter. A contract test is most valuable where a mobile client, partner integration, generated SDK, or separate frontend depends on exact behavior. Include authentication, pagination, error responses, and content types—not only the successful 200 example. Microsoft’s API guidance treats these interface choices as part of API design, and the OpenAPI specification provides the machine-readable description that tools and reviewers can share.',
				],
				bullets: ['A running API with a deterministic test database or fixtures', 'An OpenAPI file with paths, parameters, request bodies, and responses', 'A Node.js test command that can start or target the test server', 'Representative authenticated and unauthenticated requests', 'A decision about which compatibility changes should fail CI'],
			},
			{
				heading: 'Make the OpenAPI document executable',
				paragraphs: [
					'Treat the OpenAPI document as a versioned release artifact. Every operation should identify its parameters, request body, success response, content type, and meaningful failure responses. Reusable schemas should describe required fields, formats, enums, nullable behavior, and additional properties according to the behavior your clients can rely on. An incomplete document produces incomplete tests.',
					'Add a first CI step that parses and validates the document before any server test runs. Then compare the proposed document with the last released document using a compatibility-aware checker or a reviewed diff. A syntax check catches malformed YAML; it does not tell you that removing a response field breaks a consumer. Require review for removed fields, narrowed enums, new required inputs, changed status meanings, or authentication changes.',
				],
				bullets: ['Keep the document beside the API code and review it like source', 'Use one canonical schema for a response instead of copied examples that drift', 'Give error responses stable types or schemas where clients act on them', 'Fail early on invalid references, duplicate operations, or missing response definitions', 'Review additive changes too because strict clients may reject unknown fields or enum values'],
			},
			{
				heading: 'Exercise the deployed shape, not just functions',
				paragraphs: [
					'A contract test should send an HTTP request to the running application and validate the response against the operation described in OpenAPI. This catches wiring problems that a controller unit test misses: route registration, middleware order, serialization, headers, authentication, and the actual status code. Keep the server and test database isolated so the test can run repeatedly without depending on a developer’s machine.',
					'Use Node’s built-in test runner or the test framework already used by the service; the important property is that the test is a normal repeatable command. Start the API on an ephemeral port, wait for its readiness check, run the requests, and close the server in teardown. If the project uses a separate process, make startup failure fail the test rather than turning every request into a misleading connection error.',
				],
				bullets: ['Run the test against the real HTTP listener and serialization path', 'Use fixtures that cover a valid resource, a missing resource, and invalid input', 'Assert Content-Type as well as the JSON shape', 'Send authentication and tenant context exactly as a real client does', 'Make readiness, startup, and teardown part of the test lifecycle'],
			},
			{
				heading: 'Test the failure contract deliberately',
				paragraphs: [
					'Most integration breakage hides in failure behavior. For each important operation, test malformed JSON, missing required fields, invalid enum values, missing authentication, insufficient permission, a missing resource, a conflict, and a rate-limit or dependency failure where those cases exist. Assert the documented status, media type, required problem fields, and safe error shape. Do not accept a framework-generated HTML error page just because the happy path validates.',
					'Keep assertions specific to the public contract. Check that a problem type is stable and that a request or instance ID is present if the API promises one, but avoid asserting the exact human detail sentence. This leaves room to improve wording without breaking clients. Also assert that stack traces, tokens, raw provider payloads, and cross-tenant identifiers are absent from responses and logs used by the test.',
				],
				bullets: ['A 400 or 422 identifies safe validation fields without echoing secrets', '401 and 403 behavior matches the authentication contract', '404 and 409 are distinguishable where client recovery differs', '429 includes the documented retry signal when applicable', 'Unexpected failures return the safe generic schema, not a debug page', 'Tenant A cannot infer or receive tenant B data through an error'],
			},
			{
				heading: 'Cover compatibility and real consumers',
				paragraphs: [
					'Validation against today’s OpenAPI file only proves that the server agrees with itself. Add fixtures for the clients you cannot silently update: an older mobile app, a partner payload, a generated SDK, or a scheduled integration. Run those requests against the staged server and check both parsing and behavior. A response can remain valid JSON while changing an enum, default sort, pagination cursor, or permission rule in a way that breaks the consumer.',
					'Keep the test set narrow enough to run on every pull request, then add broader staging checks for representative workflows. When a contract change is intentional, update the document, migration note, consumer fixture, and release review together. Never weaken a failing test merely to make a rollout green; first decide whether the contract or the implementation is wrong.',
				],
				bullets: ['Run old-client fixtures before merging a breaking-looking change', 'Test generated clients or partner examples where they exist', 'Include pagination, authentication scopes, and retry assumptions', 'Record the endpoint and contract version in test output', 'Review compatibility failures with the consumer owner, not only the API owner'],
			},
			{
				heading: 'Production checklist and failure modes',
				paragraphs: [
					'Contract tests are a boundary control, not proof that the business behavior is correct. They will not tell you whether a price calculation is right, whether a query is fast under a large tenant, or whether an authorization policy is appropriate unless those expectations are represented in the contract and fixtures. Pair them with domain tests, security tests, load checks, and observability.',
					'Keep failures diagnosable. Print the operation, request ID, status, content type, and a redacted response excerpt; never dump authorization headers or customer payloads into CI logs. Review test data when schemas change, pin the OpenAPI toolchain, and run the same contract checks against the artifact you intend to deploy. The payoff is a smaller gap between what the team documents, what the server does, and what clients are allowed to assume.',
				],
				bullets: ['The OpenAPI document validates before server tests run', 'Contract tests execute through the real HTTP boundary', 'Success, validation, auth, not-found, conflict, and dependency paths are covered', 'Schemas and media types are checked without overfitting wording', 'Compatibility checks compare against the last released contract', 'Fixtures include tenant isolation and sensitive-field assertions', 'CI logs are useful but redact secrets and personal data', 'The test command runs against the staged release artifact before production', 'Failures have an owner and a documented contract-change process'],
			},
		],
	},
	{
		slug: 'build-reliable-outbound-api-client-nodejs',
		title: 'How to Build a Reliable Outbound API Client in Node.js',
		seoTitle: 'Reliable Outbound API Client in Node.js | PilotLab',
		dek: 'A practical design for timeouts, bounded retries, Retry-After, jitter, and idempotency when your service depends on another API.',
		published: '2026-08-09',
		updated: '2026-08-09',
		readTime: '10 min read',
		category: 'API engineering',
		keyword: 'how to build a reliable outbound API client in Node.js',
		intro: 'An outbound API call is a dependency boundary, not just a fetch statement. The remote service can be slow, rate-limit you, return a transient 503, or accept a request just before your process times out. This tutorial gives a small product team a provider-neutral design for a Node.js client that fails predictably, retries only when it is safe, and leaves enough evidence to debug the next incident.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Node.js Documentation — Fetch', url: 'https://nodejs.org/api/globals.html#fetch' },
			{ label: 'IETF RFC 9110 — Retry-After', url: 'https://www.rfc-editor.org/rfc/rfc9110#name-retry-after' },
			{ label: 'MDN — 429 Too Many Requests', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429' },
			{ label: 'AWS Builders’ Library — Timeouts, retries, and backoff with jitter', url: 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/' },
		],
		sections: [
			{
				heading: 'Prerequisites: define what “safe to retry” means',
				paragraphs: [
					'You need a Node.js service, a client or SDK boundary for the remote API, a repeatable test command, and a way to inspect structured logs. Start by listing each operation’s method, timeout budget, side effects, and recovery path. A GET that reads a record is not the same retry decision as a POST that creates a shipment or charges a card.',
					'Classify failures before choosing a policy. A connection reset, timeout, 502, 503, or 504 may be transient; a 400, 401, 403, or validation 422 usually needs a code or credential change, not another attempt. A 429 is a deliberate request to slow down: MDN notes that the response may include Retry-After, so the client should use that signal rather than immediately multiplying the load.',
				],
				bullets: ['Set a total request deadline, not only a socket timeout', 'Mark operations as read-only, idempotent, or non-idempotent', 'Define the maximum attempts and maximum retry time', 'Decide what the caller sees when the dependency stays unavailable', 'Keep credentials, base URLs, and limits in configuration'],
			},
			{
				heading: 'Put a deadline around every request',
				paragraphs: [
					'Node’s built-in fetch gives you a standard HTTP client surface, but it does not know your business deadline. Pass an AbortSignal with a timeout for each attempt and also track a deadline for the whole operation. Without both, three individually “reasonable” retries can consume the entire time budget and leave your own request waiting until its caller gives up.',
					'Choose the budget from the user journey and dependency behavior. A synchronous page request may need to fail fast and enqueue work; a background reconciliation job can wait longer. Keep the timeout shorter than the upstream load balancer or platform timeout so your service can return a useful error instead of being killed mid-request.',
				],
				bullets: ['Create one absolute deadline at the start of the operation', 'Derive each attempt timeout from the remaining budget', 'Abort the request and release response bodies on timeout', 'Include elapsed time and attempt number in internal logs', 'Never log authorization headers or full customer payloads'],
			},
			{
				heading: 'Retry with bounded exponential backoff and jitter',
				paragraphs: [
					'For a retryable failure, wait before trying again. A common schedule grows the delay after each attempt, then caps it: the first retry might wait a short interval, later retries longer, but never beyond the operation’s remaining deadline. Add random jitter to the selected delay. If many workers fail at the same time and all sleep for exactly the same duration, they can wake together and create another spike.',
					'Keep the policy in one reusable helper rather than duplicating it in every integration. The helper should receive the HTTP method, status or error class, attempt number, remaining deadline, and whether the operation is safe to repeat. It should return either a bounded delay or a final decision. Do not retry a non-idempotent operation merely because the TCP connection failed: the remote server may have completed it before the failure reached you.',
				],
				bullets: ['Retry only transient errors and explicitly retryable statuses', 'Use exponential growth with a hard cap and random jitter', 'Stop when the absolute deadline or attempt limit is reached', 'Honor a valid Retry-After value when it fits the remaining budget', 'Prefer an idempotency key for provider-supported write operations'],
			},
			{
				heading: 'Treat Retry-After and response bodies carefully',
				paragraphs: [
					'RFC 9110 defines Retry-After as either a delay in seconds or an HTTP date. Parse both forms, reject negative or unreasonable values, and clamp the result to your own maximum wait. A remote server’s suggestion is useful, but it cannot override the deadline your caller gave you. If there is no usable header, fall back to your local backoff policy.',
					'Read enough of the response to release the connection, but do not assume every error body is safe to expose to users. Convert provider errors into your application’s stable error categories and retain a redacted provider code for operators. On a 429 or 503, the final error should tell the caller whether to retry later, enqueue the work, or ask a person to intervene.',
				],
				bullets: ['Accept delta-seconds and HTTP-date forms', 'Clamp remote delays to the operation deadline and policy maximum', 'Preserve provider request IDs for support investigations', 'Map upstream failures to stable internal error types', 'Never return raw upstream bodies, tokens, or stack traces'],
			},
			{
				heading: 'Make writes idempotent and observable',
				paragraphs: [
					'Timeouts create ambiguity: you may not know whether the remote write happened. For a provider that supports idempotency keys, generate one stable key for the logical operation and reuse it across retries; do not generate a new key for each attempt. If the provider has no such feature, use a client-side operation record, a unique business constraint, or a reconciliation step before issuing the write again.',
					'Log one logical operation with child attempt records. Capture the dependency name, route, status or error class, duration, attempt count, retry delay, outcome, and provider request ID. Add metrics for timeout rate, retry rate, exhausted deadlines, 429s, and latency by dependency. These signals tell you whether the client is recovering from normal blips or hiding a dependency that is consistently unhealthy.',
				],
			},
			{
				heading: 'Verify the failure modes before production',
				paragraphs: [
					'Use a local stub server or provider sandbox that can deliberately delay responses, close a connection, return 429 with Retry-After, return 500 and 503, and succeed only on a later attempt. Assert the number of requests, total elapsed time, parsed delay, final error category, and idempotency key. A test that only checks the eventual 200 misses the behavior that protects your system under pressure.',
					'Run the same checks under concurrency. Confirm that jitter produces a spread of retry times, that one slow dependency does not occupy every request slot, and that cancellation stops future attempts. Then test a completed write followed by a simulated timeout: the client must reconcile or safely reuse the key rather than create a duplicate. In production, pair the client with a circuit breaker or queue when repeated dependency failure would otherwise consume all your workers.',
				],
				bullets: ['Timeout: no unbounded wait and no retry after the deadline', '429: Retry-After is honored within the local cap', '503: bounded retries with jitter and a useful final error', 'Non-idempotent write: no blind retry without a safe key or reconciliation', 'Cancellation: queued delays and in-flight work stop promptly', 'Metrics: attempts, exhausted deadlines, and dependency latency are visible'],
			},
		],
	},
	{
		slug: 'design-kubernetes-health-endpoints-nodejs-api',
		title: 'How to Design Kubernetes Health Endpoints for a Node.js API',
		seoTitle: 'Kubernetes Health Endpoints for Node.js APIs | PilotLab',
		dek: 'Separate startup, liveness, and readiness so Kubernetes can restart broken processes without routing traffic to an API that is not ready.',
		published: '2026-08-11',
		updated: '2026-08-11',
		readTime: '9 min read',
		category: 'Platform engineering',
		keyword: 'how to design Kubernetes health endpoints for a Node.js API',
		intro: 'A health endpoint is a control signal, not a nicer version of “the process is running.” Kubernetes uses probe results to decide whether to restart a container or stop sending traffic to it. If one endpoint tries to answer both questions, a temporary dependency outage can trigger a restart storm—or a live but unusable instance can keep receiving requests. This tutorial gives each signal a narrow contract and shows how to test it.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Kubernetes — Liveness, Readiness, and Startup Probes', url: 'https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/' },
			{ label: 'Kubernetes — Configure probes', url: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/' },
			{ label: 'Kubernetes — Pod termination lifecycle', url: 'https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination' },
			{ label: 'MDN — 503 Service Unavailable', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503' },
		],
		sections: [
			{
				heading: 'Start with three different questions',
				paragraphs: [
					'Startup asks: “Has this process finished initialization?” Liveness asks: “Is the process sufficiently broken that restarting it may recover the service?” Readiness asks: “Should this instance receive traffic right now?” Kubernetes documents these as separate probe types, and the distinction is the most important design decision.',
					'Keep the handlers cheap, local, and deterministic. They should not perform a full customer request, scan a large table, or call five remote services. A probe runs repeatedly and its failure can affect every replica, so the check itself must not become a new outage dependency.',
				],
				bullets: ['Startup: initialization and configuration are complete', 'Liveness: the event loop and essential process are making progress', 'Readiness: this replica can safely accept the traffic you route to it'],
			},
			{
				heading: 'Implement small Node.js endpoints',
				paragraphs: [
					'Expose separate paths such as /health/startup, /health/live, and /health/ready. The live handler should return 200 from memory when the process is running. The startup handler should remain unsuccessful until required initialization has completed. The readiness handler should return unsuccessful while the server is draining, configuration is invalid, or a dependency that the API cannot operate without is unavailable.',
					'Use the status code as the contract: a successful probe returns 2xx, while a failed HTTP probe returns a non-2xx or times out. Return a small JSON body for humans and logs, but do not include secrets, connection strings, stack traces, or detailed dependency errors. During planned draining, 503 is appropriate for a temporary inability to accept requests; MDN notes that Retry-After can communicate an estimated recovery time when one is known.',
				],
			},
			{
				heading: 'Choose dependencies carefully',
				paragraphs: [
					'Readiness may check a dependency when serving without it would produce guaranteed failures—for example, a database required by every request. Put a short timeout on that check and distinguish “not ready” from “process must restart.” A database being briefly unavailable usually belongs in readiness, not liveness; restarting every replica does not repair a shared database and can remove the last healthy capacity.',
					'Liveness should detect an unrecoverable local condition such as a deadlock or an event loop that cannot make progress. Do not make liveness depend on third-party APIs, DNS, or a remote cache unless the process truly cannot recover without a restart. Kubernetes cautions that incorrect liveness probes can cause cascading failures by restarting containers under load.',
				],
				bullets: ['Local process failure: liveness failure may be justified', 'Required shared dependency outage: usually readiness failure', 'Optional analytics or cache outage: keep the instance ready and degrade', 'Slow dependency check: fail the check quickly rather than consuming probe workers'],
			},
			{
				heading: 'Configure startup before liveness',
				paragraphs: [
					'If initialization takes time, use a startupProbe instead of inflating liveness initialDelaySeconds. Kubernetes does not run liveness or readiness probes until the startup probe succeeds, which gives a slow application a defined warm-up budget without weakening the steady-state liveness policy. Set failureThreshold multiplied by periodSeconds to cover the measured worst-case startup plus margin, then keep the liveness interval focused on real runtime failure.',
					'Configure readiness independently. It should succeed only after the app can serve its real contract, not merely after the HTTP listener binds. If readiness later fails, Kubernetes stops sending normal Service traffic to the Pod; that makes readiness the right place for temporary overload, dependency recovery, and deliberate drain state.',
				],
			},
			{
				heading: 'Verify the signals under failure',
				paragraphs: [
					'Test the endpoint behavior without Kubernetes first: start the API before initialization completes, stop the required dependency, force the application into draining mode, and simulate a local deadlock in a test build. Assert both status codes and response time. Then apply the Deployment and inspect Pod events, EndpointSlices, restart counts, and rollout behavior rather than relying only on curl from inside the container.',
					'Run a load test while toggling readiness. Confirm that a readiness failure removes traffic without restarting the process, while a liveness failure eventually creates a replacement. Test startup with a deliberately slow boot. Finally, test a dependency outage across all replicas: the intended result is controlled unavailability and a useful alert, not a synchronized restart loop.',
				],
				bullets: ['Startup fails until initialization is genuinely complete', 'Liveness remains local and does not flap during a dependency outage', 'Readiness turns false during drain and recovers after a transient fault', 'Probe handlers meet their timeout under normal load', 'Events, restart counts, and traffic endpoints explain the result', 'Alerts distinguish not-ready capacity from crashed containers'],
			},
			{
				heading: 'Production checklist',
				paragraphs: [
					'Health checks are part of the API’s operational contract. Version their behavior with the service, document which dependencies are required for readiness, and review probe changes like code that can restart production. A green liveness probe should never be interpreted as proof that the customer-facing workflow is healthy.',
				],
				bullets: ['Startup, liveness, and readiness have separate routes and meanings', 'Probe handlers are cheap, bounded, and safe to expose internally', 'Liveness does not restart every replica for a shared dependency outage', 'Readiness reflects drain, overload, and required dependency state', 'startupProbe protects slow initialization without weakening liveness', 'Deployment tests inspect traffic routing and restart behavior', 'Dashboards show ready replicas, probe failures, restarts, and probe latency'],
			},
		],
	},
	{
		slug: 'rotate-api-keys-without-downtime',
		title: 'How to Rotate API Keys Without Downtime',
		seoTitle: 'Rotate API Keys Without Downtime | PilotLab',
		dek: 'A provider-neutral rollout for replacing API credentials safely: overlap keys, deploy consumers, revoke deliberately, and verify the cutover.',
		published: '2026-08-14',
		updated: '2026-08-14',
		readTime: '10 min read',
		category: 'API security',
		keyword: 'how to rotate API keys without downtime',
		intro: 'An API-key rotation fails when a team treats it as a single replacement instead of a migration. If the old key is revoked before every consumer has switched, a deployment becomes an outage. If the old key stays valid forever, the exposure window never closes. This tutorial shows a safer overlap-and-revoke sequence that works for service-to-service integrations, third-party providers, and APIs your team operates.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'OWASP — Secrets Management Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html' },
			{ label: 'Google Cloud — Best practices for managing API keys', url: 'https://cloud.google.com/docs/authentication/api-keys-best-practices' },
			{ label: 'Microsoft Learn — Subscriptions in Azure API Management', url: 'https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions' },
		],
		sections: [
			{
				heading: 'Prerequisites: map the credential before changing it',
				paragraphs: [
					'You need an inventory of the key’s consumers, a secret store or deployment mechanism, access to the provider’s revoke or regenerate operation, and metrics that can show accepted requests by credential or consumer. Start by naming the owner, provider, scope, environment, last rotation, and emergency contact. A key that nobody can identify is not ready for a safe rotation.',
					'Classify the credential before choosing the runbook. A server-side API key can usually be overlapped and swapped. A browser-exposed key is not a secret in the same sense and needs provider restrictions, referrer or application limits, and a migration away from privileged access. Google warns against putting keys in client code or repositories, and recommends restrictions, monitoring, deletion of unused keys, and more secure alternatives where available.',
				],
				bullets: ['List every service, job, local tool, and partner using the key', 'Confirm whether the provider supports two active keys or an equivalent overlap window', 'Record permissions, allowed APIs, environments, and rate limits', 'Verify that application logs, URLs, crash reports, and CI output do not expose the value', 'Define the rollback and emergency-revocation owner before the change'],
			},
			{
				heading: 'Create the replacement before deploying it',
				paragraphs: [
					'Generate the new key with the narrowest scope that can perform the required work. Store it in the same managed secret system as the current key, but under a distinct version or name. Do not paste it into source control, a ticket, a chat message, or a command line that will be retained in shell history. OWASP recommends centralizing secrets, applying least privilege, automating rotation, and auditing access rather than relying on manual handling.',
					'If the provider exposes primary and secondary credentials, use them as a deliberate migration pair. Microsoft documents this pattern for Azure API Management: an application can switch from one key to the other, then regenerate the unused key, and repeat the process. If the provider supports only one active key, create a second credential or temporary scoped identity if possible; otherwise schedule a maintenance window and make the outage risk explicit rather than pretending overlap exists.',
				],
				bullets: ['Give the replacement a distinct identifier and creation timestamp', 'Match or reduce the old key’s permissions; do not widen access during rotation', 'Set the secret value through deployment configuration, not application source', 'Record who or what created it without recording the secret itself', 'Keep the old key active while consumers are being migrated'],
			},
			{
				heading: 'Deploy consumers with an explicit cutover',
				paragraphs: [
					'Change the consumer to read the new secret version, then deploy it through the normal path. Prefer an application configuration name such as PROVIDER_API_KEY rather than baking a provider-specific key into multiple modules. If you need an instant rollback, keep the previous value available as a separately controlled fallback for the overlap period, but do not silently try both keys forever: that can hide a bad deployment and complicate attribution.',
					'For several consumers, migrate one low-risk workload first. Verify successful calls, latency, provider-side usage, and application error rates before moving scheduled jobs or customer-facing traffic. A rolling deployment can briefly contain old and new processes, so the provider must accept both keys until the rollout and any process restarts have completed.',
				],
				bullets: ['Deploy the replacement to one canary consumer first', 'Track traffic by consumer and credential label where the provider allows it', 'Restart long-lived workers that load secrets only at process startup', 'Confirm every environment was updated, including staging and scheduled jobs', 'Keep the rollback switch documented and time-bounded'],
			},
			{
				heading: 'Verify the cutover before revoking the old key',
				paragraphs: [
					'Do not infer completion from a green deployment. Make a verification matrix: call the provider from each consumer, exercise a representative read and write, run one scheduled path, and inspect failures for the old credential. If the provider cannot distinguish keys in usage data, add a safe application-side credential label to request metrics or logs. Never log the raw value; a label such as api-key-2026-08 is enough.',
					'Check the negative path before revocation by temporarily denying the old key in a non-production environment or using a provider test credential. Then confirm that an invalid or revoked key produces the documented authentication failure and that your service does not retry it indefinitely. A credential problem is not a transient network failure; retries can create noise and delay the real fix.',
				],
				bullets: ['All known consumers succeed with the replacement', 'No new production requests are attributed to the old credential', 'A restart does not revert to a baked-in or empty default', 'Authentication failures alert without exposing the secret', 'Health checks and smoke tests cover the provider dependency', 'The old key has a clear expiry or revocation time'],
			},
			{
				heading: 'Revoke, then remove the migration scaffolding',
				paragraphs: [
					'After the overlap window has covered deployments, retries, worker restarts, and the longest scheduled interval, revoke or regenerate the old key. Delete unused credentials where the provider supports it; Google explicitly recommends retaining only actively used keys. Record the revocation event, the replacement identifier, affected consumers, and verification evidence. This is the point where a routine rotation becomes auditable rather than tribal knowledge.',
					'If old-key traffic appears after revocation, do not immediately restore it without identifying the consumer. Restore only under the incident owner’s decision, then fix the stale deployment, forgotten script, or copied secret. Keep dual-key support as a temporary migration mechanism, not a permanent authentication strategy. For future rotations, automate creation, secret publication, canary verification, expiry reminders, and revocation as far as the provider permits.',
				],
			},
			{
				heading: 'Production checklist and failure modes',
				paragraphs: [
					'Rotation is safe when the sequence is reversible until verification is complete and irreversible only after ownership is clear. The overlap window protects availability; least privilege and restrictions reduce the impact of a leak; monitoring tells you whether a consumer was missed. No generic runbook can choose the right interval for every system, so base it on deployment time, job frequency, cache or process lifetime, and the provider’s key behavior.',
					'Treat a suspected compromise differently from routine hygiene. For an active leak, prioritize containment: restrict or revoke the exposed credential, inspect usage, replace dependent secrets, and preserve evidence. Do not wait for the normal overlap period if an attacker may be using the key. For ordinary rotation, keep the process calm and observable so an emergency procedure is not the only time the team handles credentials.',
				],
				bullets: ['Key scope and provider restrictions are reviewed before creation', 'Secrets are stored and injected through an access-controlled mechanism', 'Old and new credentials can overlap only for a documented window', 'Canary, restart, scheduled-job, and negative-authentication tests pass', 'Raw keys never appear in source, URLs, logs, tickets, or CI artifacts', 'Usage and authentication failures are monitored by consumer', 'Revocation and replacement events are recorded without secret values', 'Compromise response can revoke quickly and supports forensic review', 'The next rotation can be automated instead of repeated manually'],
			},
		],
	},
	{
		slug: 'limit-nodejs-api-request-body-size',
		title: 'How to Limit Request Body Size in a Node.js API',
		seoTitle: 'Limit Request Body Size in Node.js APIs | PilotLab',
		dek: 'A practical boundary for safer APIs: reject oversized requests early, handle chunked bodies, keep proxy limits aligned, and test the 413 path without buffering untrusted input.',
		published: '2026-08-14',
		updated: '2026-08-14',
		readTime: '10 min read',
		category: 'API security',
		keyword: 'how to limit request body size in a Node.js API',
		intro: 'A request body is an input and a resource claim at the same time. If an endpoint parses unlimited JSON or accepts an unbounded upload, one client can consume memory, CPU, connection time, storage, or downstream API capacity. This tutorial shows how to enforce a body-size policy at the edge of a Node.js API, why checking Content-Length alone is insufficient, and how to make the rejection path clear for clients and operators.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Node.js Documentation — HTTP message headers', url: 'https://nodejs.org/api/http.html#messageheaders' },
			{ label: 'Node.js Documentation — Streams', url: 'https://nodejs.org/api/stream.html' },
			{ label: 'MDN — 413 Content Too Large', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413' },
			{ label: 'MDN — Content-Length header', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Length' },
			{ label: 'OWASP — API Security Project', url: 'https://owasp.org/www-project-api-security/' },
		],
		sections: [
			{
				heading: 'Start with an endpoint-specific budget',
				paragraphs: [
					'Do not choose one global number and apply it to every route. A JSON command, a CSV import, and a media upload have different parsing and storage costs. Define the maximum accepted body in bytes, the allowed content types, whether compression is supported, and what the client should do when the limit is exceeded. MDN defines 413 Content Too Large for a request larger than the server is willing or able to process; “Payload Too Large” is the older phrase still seen in some systems.',
					'Write the limit into the API contract and deployment configuration. Keep the application limit at or below the limit enforced by your reverse proxy or gateway, otherwise clients may receive a proxy-generated response with a different shape. If a route genuinely accepts large files, stream them to dedicated object storage or an upload service instead of turning the API process into a file buffer.',
				],
				bullets: ['Set separate limits for JSON commands, imports, and uploads', 'Count bytes, not JavaScript string characters', 'Reject unsupported Content-Type values before parsing', 'Document the limit and the 413 response shape', 'Keep proxy, gateway, web server, and application limits aligned'],
			},
			{
				heading: 'Use Content-Length as an early check, not the whole defense',
				paragraphs: [
					'Content-Length reports the message-body size when the sender knows it in advance. That makes it a useful cheap rejection: parse it as a bounded non-negative integer and return 413 before allocating a body buffer when it is above the route limit. Never trust it as proof that the body is safe, because HTTP can carry a body without a usable Content-Length, including streamed or chunked requests.',
					'For a body arriving as a Node.js readable stream, count each data chunk as it arrives. Stop accumulating as soon as the running byte count exceeds the limit, destroy or otherwise close the request according to your server framework’s documented behavior, and send one response if the connection is still writable. The important ordering is limit check, bounded accumulation, then parsing—not parse first and measure later.',
				],
				bullets: ['Read the header before creating a body buffer', 'Reject invalid or ambiguous length metadata safely', 'Count Buffer.byteLength or raw chunk lengths while streaming', 'Use a hard maximum for every route that reads a body', 'Stop reading and release resources after an over-limit decision'],
			},
			{
				heading: 'Keep parsing and validation behind the byte guard',
				paragraphs: [
					'Once the byte limit has passed, validate the media type and character or encoding assumptions before deserializing. For JSON, collect only up to the configured limit, decode once, then parse and validate against the request schema. A size check does not make the resulting object safe: deeply nested data, huge arrays, expensive validation, and repeated fields can still consume disproportionate resources.',
					'Use a parser limit that is owned by the route rather than a hidden default in a shared helper. If the application uses a framework body parser, configure its limit and still verify how it behaves for chunked requests, malformed JSON, and parser errors. For multipart uploads, a multipart-aware streaming parser must enforce both the complete request limit and per-file or per-field limits; a JSON parser limit does not protect that path.',
				],
				bullets: ['Validate Content-Type before selecting a parser', 'Bound array lengths, string lengths, nesting, and field counts', 'Keep malformed JSON separate from oversized input', 'Use streaming multipart handling for files', 'Never log the rejected body or echo it in the error response'],
			},
			{
				heading: 'Return a useful 413 without creating a retry storm',
				paragraphs: [
					'Return 413 when the request itself is too large, with a stable machine-readable error type and the maximum accepted size if that information is safe to publish. The client should change the request, not retry the same bytes. A 413 is different from 429 rate limiting and 503 temporary unavailability; do not attach a generic retry policy that sends the oversized request again.',
					'If the request may have reached a proxy first, make the application and proxy error responses close enough that clients can recover consistently. Include a request or correlation ID, but do not include internal parser messages, stack traces, uploaded content, or infrastructure details. Record the route, configured limit, observed size category, and outcome in metrics rather than logging sensitive payloads.',
				],
				bullets: ['Use HTTP 413 Content Too Large for an over-limit body', 'Set application/problem+json if that is your API error contract', 'Tell clients the next action: reduce, split, or use an upload flow', 'Do not recommend retrying the unchanged request', 'Track rejected bytes by route and authenticated tenant where appropriate'],
			},
			{
				heading: 'Test headers, streams, parsers, and the proxy boundary',
				paragraphs: [
					'Test the running HTTP server, not only the body-reading helper. Send a body just below the limit with Content-Length and expect the normal response. Send one just above it and expect 413 without the handler or database being called. Then send the same content in chunks without relying on Content-Length and confirm that the server stops at the byte boundary rather than buffering the entire request.',
					'Exercise malformed lengths, invalid JSON, an unsupported media type, a slow body, a compressed body if compression is accepted, and multipart files larger than their per-file limit. Run the requests through the real reverse proxy or gateway as well as directly against Node. A passing unit test cannot prove that the outer layer has not silently rejected smaller requests or allowed a larger one through a different route.',
				],
				bullets: ['Below-limit JSON reaches the handler and validates normally', 'Over-limit Content-Length is rejected before business work', 'Chunked input is rejected when accumulated bytes cross the limit', 'Malformed JSON returns the documented parse error, not a 500', 'Unsupported media types return the documented 415 path', 'Proxy and application limits produce an observable, compatible contract', 'Slow and concurrent oversized requests do not exhaust memory or connections'],
			},
			{
				heading: 'Production checklist and trade-offs',
				paragraphs: [
					'Request limits reduce one class of unrestricted resource consumption; they are not a complete abuse-control system. OWASP describes API resource consumption as involving bandwidth, CPU, memory, storage, and paid downstream actions. Pair body limits with authentication, rate limits, request and connection timeouts, concurrency controls, quotas, and per-operation budgets. A small body can still trigger an expensive query or an external API call.',
					'The right limit is a product decision as well as a security decision. Make ordinary valid requests fit comfortably, give imports and files an intentional asynchronous path, and review limits when schemas or customer workflows change. Alert on rejected-request spikes, memory pressure, parser latency, connection duration, and proxy-versus-application status differences. The goal is not to reject more traffic; it is to make resource use bounded and failures predictable.',
				],
				bullets: ['Every body-reading route has an explicit byte limit and owner', 'The limit is enforced before parsing and for streamed or chunked input', 'JSON, multipart, and compressed requests have separate reviewed policies', '413 responses are stable, safe, and not retried unchanged', 'Proxy and application limits are tested together', 'Metrics expose over-limit requests, parser cost, memory, and connection duration', 'Large-file and bulk-import workflows use streaming or asynchronous processing', 'The runbook explains how to change a limit without causing an outage'],
			},
		],
	},
	{
		slug: 'stream-large-json-export-nodejs-api',
		title: 'How to Stream a Large JSON Export from a Node.js API',
		seoTitle: 'Stream Large JSON Exports from a Node.js API | PilotLab',
		dek: 'A practical design for exporting many records without building the whole response in memory: stream rows, respect backpressure, handle disconnects, and test the limits.',
		published: '2026-08-14',
		updated: '2026-08-14',
		readTime: '11 min read',
		category: 'API engineering',
		keyword: 'how to stream large JSON exports from a Node.js API',
		intro: 'A “download all” endpoint often starts as JSON.stringify(await loadEverything()) and works until a customer requests a large tenant export. Then memory grows with the result set, time-to-first-byte is delayed, and one slow client can keep expensive work alive. Streaming improves the shape of the problem, but it is not magic: you still need bounded queries, backpressure, authorization, cancellation, and a decision about whether an asynchronous export is the better product. This tutorial shows a provider-neutral pattern for a Node.js API.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'Node.js Documentation — Streams', url: 'https://nodejs.org/api/stream.html' },
			{ label: 'Node.js Documentation — HTTP response.write()', url: 'https://nodejs.org/api/http.html#responsewritechunk-encoding-callback' },
			{ label: 'MDN — Transfer-Encoding', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Transfer-Encoding' },
			{ label: 'IETF RFC 9112 — HTTP/1.1 message framing', url: 'https://www.rfc-editor.org/rfc/rfc9112.html' },
		],
		sections: [
			{
				heading: 'Prerequisites: decide whether streaming is the right product',
				paragraphs: [
					'Use a streamed response when the caller needs one download, the result can be produced incrementally, and the request can finish within your platform’s connection and execution limits. You need a Node.js HTTP server, a data access layer that can iterate in bounded batches or a cursor, an authorization check that runs before rows are read, and a client that can consume a response progressively.',
					'Streaming is a transport strategy, not a replacement for a durable export job. If the query takes minutes, the result must be retried, the user needs progress, or the file should remain available after disconnect, create a background job and write to object storage instead. A live stream has no convenient rewind once bytes have been sent and headers cannot be changed after the first chunk.',
				],
				bullets: ['Define the maximum rows, bytes, and connection duration', 'Authorize the tenant and export filters before opening the cursor', 'Choose JSON, newline-delimited JSON, or CSV based on client needs', 'Decide how a disconnected client cancels database work', 'Provide an asynchronous export path for long or repeatable jobs'],
			},
			{
				heading: 'Keep the response valid while sending it incrementally',
				paragraphs: [
					'For a JSON array, write the opening bracket, serialize one record at a time, place commas between records, and write the closing bracket only after the iterator completes. Never concatenate untrusted fields into JSON by hand; serialize each record with JSON.stringify so quotes, newlines, and Unicode are encoded correctly. Set Content-Type to application/json and a download-friendly Content-Disposition before the first write.',
					'You may not know Content-Length in advance. In HTTP/1.1, an unknown-length response can be framed with chunked transfer, while HTTP/2 has different framing and does not use the Transfer-Encoding header. Let Node and the proxy choose the protocol framing; do not manually add Transfer-Encoding: chunked as if it were an application format. If the consumer can accept it, newline-delimited JSON is simpler to recover and process record by record, but it is not one JSON array and requires a line-oriented parser.',
				],
				bullets: ['Write headers before the first body chunk', 'Use JSON.stringify for every record', 'Track whether a comma is needed instead of trimming a trailing comma', 'Do not set Content-Length unless the complete byte length is known', 'Keep the media type and download filename stable in the API contract'],
			},
			{
				heading: 'Respect backpressure instead of writing into memory',
				paragraphs: [
					'Node’s writable stream APIs use a boolean return value to signal whether more data should be written immediately. When response.write() returns false, pause the producer and wait for the response’s drain event before continuing. Ignoring that signal lets the application queue chunks faster than the network can deliver them, which moves the memory problem from your array into the writable buffer.',
					'Use an async generator or a small Readable transform so the database iterator advances only when the response is ready for more data. Keep each chunk bounded: a row containing a large text field can still be expensive, and a batch that serializes thousands of rows at once defeats the point. Measure the row and chunk sizes you actually see rather than assuming a record is small.',
				],
				bullets: ['Treat false from response.write() as “stop producing for now”', 'Resume on drain, not with an unbounded setImmediate loop', 'Read database rows in bounded batches or cursor pages', 'Avoid loading the complete result set or a complete batch into an array', 'Track bytes written, rows written, and time spent waiting for drain'],
			},
			{
				heading: 'Handle errors and disconnects before they become leaks',
				paragraphs: [
					'Once the first byte is sent, a later database error cannot be converted into a normal JSON error response without corrupting the document. Decide what the client should do with a truncated stream, log the failure with a request ID, and close or destroy the response according to your server framework’s documented behavior. If an export must be resumable or explain a failure to a user, an asynchronous file is usually a better contract.',
					'Listen for the request or response closing and abort the database iterator, query, or transaction. A browser cancel, proxy timeout, and mobile network change are normal events, not exceptional reasons to keep scanning rows. Also impose a server-side deadline and maximum output size. Authorization is checked once at the boundary, but every query must still include the authenticated tenant scope; never use a client-provided tenant ID from the export URL as the security boundary.',
				],
				bullets: ['Stop database work when the client disconnects', 'Use an AbortSignal or equivalent cancellation path where the driver supports it', 'Log truncated exports distinctly from completed exports', 'Never send a second JSON error after the body has started', 'Enforce tenant scope, row limits, byte limits, and a total deadline'],
			},
			{
				heading: 'Choose the data access pattern carefully',
				paragraphs: [
					'A streaming HTTP response does not make an unbounded database query safe. Prefer a deterministic ordering and a cursor or keyset condition so the database can progress through an index. Select only the fields the export needs, avoid per-row queries, and decide how concurrent inserts or updates affect the result. If the export must represent one point in time, use a database snapshot or materialize the rows into a job; a moving live query can legitimately produce a moving view.',
					'Keep the transaction lifetime in mind. Holding a snapshot open while a slow client downloads can retain database resources or interfere with cleanup. For large exports, materializing a safe result to object storage in a worker often gives better isolation than keeping an API request and database transaction open. For smaller exports, bounded cursor reads plus a short connection deadline can be a reasonable compromise.',
				],
				bullets: ['Use an index that matches tenant, filters, and ordering', 'Avoid N+1 lookups while serializing rows', 'Document whether the export is a snapshot or a moving result', 'Do not hold scarce database resources open for an unbounded client', 'Move long-running or repeatable exports to a durable job and file'],
			},
			{
				heading: 'Verify the wire behavior and production limits',
				paragraphs: [
					'Test the running HTTP endpoint, not only the serializer. Request zero rows, one row, several rows containing quotes and Unicode, and a result that exceeds one internal chunk. Parse the complete response as JSON and assert the exact row count, headers, and tenant scope. Use a slow-reading client to force backpressure, and compare process memory while exporting a small and a much larger dataset; memory should not grow in proportion to the complete result.',
					'Exercise the failure matrix: stop the database mid-export, disconnect the client, exceed the row or byte limit, hit the deadline, and attempt another tenant’s cursor or filter. Confirm that the query is cancelled, the response is not mislabeled as complete, and the logs contain enough evidence to investigate without storing the exported data. Test through the real reverse proxy too, because buffering, idle timeouts, compression, and maximum response settings can change streaming behavior.',
				],
				bullets: ['A complete response parses as valid JSON and has the intended headers', 'Special characters and large individual fields remain correctly encoded', 'Slow clients trigger backpressure without unbounded memory growth', 'Client disconnect cancels the cursor or query', 'Database failure produces a detectable truncated export', 'Proxy buffering and idle timeouts match the documented behavior', 'Metrics show duration, rows, bytes, cancellations, failures, and memory pressure'],
			},
			{
				heading: 'Production checklist and trade-offs',
				paragraphs: [
					'Streaming is a useful optimization when it is paired with a bounded contract. It reduces peak application memory and can improve time-to-first-byte, but it does not reduce the total bytes sent, make a slow database fast, or guarantee that a client receives a complete document after a network failure. Compression may reduce bandwidth while increasing CPU and buffering; measure it at the proxy and application boundary instead of enabling it blindly.',
					'Keep the default export small, give customers an explicit larger-export workflow, and make cancellation cheap. If operators cannot answer how many exports are running, how long they have been open, how many bytes they have sent, and which tenants are consuming the capacity, the endpoint is not ready for production. The goal is controlled delivery—not turning a request handler into an unbounded file server.',
				],
				bullets: ['Headers, authorization, limits, and media type are documented', 'The producer honors writable-stream backpressure', 'Database reads are bounded, indexed, and cancellable', 'Disconnects, timeouts, and downstream failures release resources', 'Export output is validated as a complete document in integration tests', 'Proxy buffering, compression, and idle timeouts are tested end to end', 'Observability covers active exports, duration, bytes, rows, cancellations, and failures', 'Long or resumable exports use a durable worker and object-storage path'],
			},
		],
	},
	{
		slug: 'build-human-approval-ai-workflow',
		title: 'How to Build a Human Approval Step into an AI Workflow',
		seoTitle: 'Human Approval Steps for AI Workflows | PilotLab',
		dek: 'A practical design for AI-assisted automation: return structured proposals, route risky decisions to a person, and keep the workflow auditable when the model is wrong.',
		published: '2026-08-15',
		updated: '2026-08-15',
		readTime: '11 min read',
		category: 'AI engineering',
		keyword: 'how to build a human approval step into an AI workflow',
		intro: 'The safest first version of an AI workflow is rarely fully autonomous. It is a system that turns messy input into a reviewable proposal, gives a person enough evidence to approve or correct it, and records what happened. This tutorial shows how to add that control point without turning every automation into a manual spreadsheet.',
		relatedService: { label: 'AI integration and workflow automation', href: '/services/ai-integration-workflow-automation' },
		sources: [
			{ label: 'NIST — AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
			{ label: 'NIST — Generative AI Profile', url: 'https://doi.org/10.6028/NIST.AI.600-1' },
			{ label: 'OpenAI API — Structured model outputs', url: 'https://platform.openai.com/docs/guides/structured-outputs' },
			{ label: 'OWASP — GenAI LLM Top 10 2026', url: 'https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/' },
		],
		sections: [
			{
				heading: 'Choose a decision worth reviewing',
				paragraphs: [
					'A human approval step is useful when the model can prepare work faster than a person, but a wrong action has meaningful cost. Examples include routing a sales lead, approving a refund, publishing a customer-facing reply, changing a CRM record, or creating a support escalation. Start with one decision and define the acceptable outcome before you choose a model.',
					'NIST describes the AI RMF as a way to incorporate trustworthiness into the design, development, use, and evaluation of AI systems. In practice, that means deciding who owns the decision, what evidence they need, what the model is allowed to suggest, and what happens when the evidence is missing. Do not use “confidence” as a permission boundary unless you have tested what that number means for your task.',
				],
				bullets: ['Name the trigger, decision, actor, and downstream side effect', 'Define which outcomes require approval and which may be auto-routed', 'Set a maximum age for a proposal before it must be re-evaluated', 'List data the model may access and data the reviewer may see', 'Choose a safe fallback when the model refuses or produces an invalid result'],
			},
			{
				heading: 'Separate proposal from execution',
				paragraphs: [
					'The model should propose a typed action; application code should decide whether that action is valid and execute it only after authorization. Keep these stages separate: receive the input, generate a proposal, validate it, put it in a review queue, record the reviewer decision, and perform the side effect. A prompt must never be the only control that prevents a destructive operation.',
					'Use a durable record with an immutable proposal ID, source reference, tenant, schema version, model and prompt revision, created time, expiry, status, and reviewer decision. Store only the input and context your retention policy permits. The record is what lets an operator explain why an action happened and what changed after a correction.',
				],
				bullets: ['Model output is an untrusted proposal, not a command', 'Authorization is evaluated by application code for the current reviewer and tenant', 'Only one terminal decision can win, even if two reviewers open the item', 'Executing the same approved proposal twice must be harmless or rejected', 'Keep proposal, approval, execution, and failure events distinct in logs'],
			},
			{
				heading: 'Return structured output and validate it twice',
				paragraphs: [
					'For classification or extraction, define a small schema such as category, reason, missing_fields, suggested_action, and risk_flags. OpenAI documents Structured Outputs as a way to make model responses conform to a supplied schema, but a schema-conforming response can still be factually wrong or unsafe. Treat structured output as easier-to-validate data, not as proof of correctness.',
					'Validate at two boundaries. First, reject malformed or incomplete model output before it enters the queue. Second, re-check the proposal when the reviewer approves it: reload the current source record, confirm the tenant and permissions, verify that the target still exists, and check that the proposal has not expired. This prevents a reviewer from approving a stale view that no longer matches the system of record.',
				],
				bullets: ['Use enums and bounded strings instead of free-form action names', 'Require an explicit “needs_review” or “cannot_decide” state', 'Reject unknown fields and invalid identifiers', 'Show source excerpts and missing evidence beside the proposal', 'Revalidate current state and permissions immediately before execution'],
			},
			{
				heading: 'Design the review queue for a real operator',
				paragraphs: [
					'A review queue should reduce cognitive work, not make a person hunt through five systems. Show the proposed action, the source input, the relevant evidence, the risk flags, the age, and the exact effect of approval. Give the reviewer approve, reject, edit-and-approve, and request-more-information paths where they are meaningful. Make the safe choice the easy choice: approval should not silently include extra actions that were not displayed.',
					'Use explicit ownership and leases so two people do not work the same item. Record the reviewer identity, decision time, reason code, edits, and application version. Do not treat a reviewer’s click as an oracle: sample approved and rejected items for quality review, and make corrections useful training or evaluation data without automatically feeding sensitive records back into a model.',
				],
				bullets: ['Prioritize by impact, age, and dependency rather than model confidence alone', 'Show a diff for proposed record changes', 'Require a reason for rejection or material edits', 'Expire or return abandoned items instead of leaving them invisible', 'Keep reviewer permissions narrower than administrator permissions'],
			},
			{
				heading: 'Test prompt injection, stale data, and duplicate approval',
				paragraphs: [
					'OWASP’s 2026 GenAI LLM Top 10 is a current security reference for LLM applications. Its existence is a useful reminder that an AI workflow must treat retrieved text, uploaded documents, and customer messages as untrusted content. A document can contain instructions aimed at the model; those instructions are data, not authorization. Keep tools and side effects behind code-level permission checks.',
					'Build a failure matrix before enabling automation. Submit normal, ambiguous, malicious, oversized, and incomplete inputs. Change the source record after proposal creation, approve from the wrong tenant, open the same item in two browser tabs, retry the approval request, and crash the worker after execution succeeds. The expected result should be explicit for every case: queue, reject, re-review, or execute once.',
				],
				bullets: ['Injected instructions in source text cannot change the allowed action set', 'Invalid or refused model output creates no side effect', 'A stale proposal requires fresh review or fails safely', 'Concurrent approvals produce one business outcome', 'A retried approval does not duplicate an email, payment, or record change', 'Logs and reviewer screens exclude secrets and unnecessary personal data'],
			},
			{
				heading: 'Production checklist and when to remove the gate',
				paragraphs: [
					'Measure the workflow as a system. Track proposal validity, approval latency, approval and rejection rates, edit frequency, execution failures, duplicate attempts, queue age, and the quality of a sampled set. A high approval rate may mean the model is useful—or that reviewers are clicking through without reading. Pair speed metrics with outcome checks and periodic review.',
					'Only reduce human review after evidence supports a narrower risk boundary. You might auto-route low-impact categories while keeping financial, legal, destructive, or customer-visible actions gated. Removing the gate is a product and risk decision, not a model setting. If the workflow cannot explain what was proposed, who approved it, and what code executed it, it is not ready for more autonomy.',
				],
				bullets: ['Every proposal has a durable ID, schema version, expiry, and source reference', 'Model output is schema-validated and business-validated before execution', 'Approval is tenant-scoped, permission-checked, auditable, and idempotent', 'Reviewers can inspect evidence and see the exact side effect', 'Prompt-injection and stale-state tests run in CI or a staging environment', 'Queue age, quality corrections, failures, and execution outcomes are visible', 'Sensitive inputs, prompts, and outputs follow retention and access policies', 'Autonomy expands only for measured, low-impact cases with rollback'],
			},
		],
	},
	{
		slug: 'build-secure-file-upload-pipeline-nodejs',
		title: 'How to Build a Secure File Upload Pipeline in Node.js',
		seoTitle: 'Secure File Uploads in Node.js | PilotLab',
		dek: 'A practical design for accepting user files without trusting filenames, MIME types, or a single validation check to protect your application.',
		published: '2026-08-15',
		updated: '2026-08-15',
		readTime: '11 min read',
		category: 'API engineering',
		keyword: 'how to build a secure file upload pipeline in Node.js',
		intro: 'File uploads turn an ordinary API endpoint into a boundary around untrusted bytes, storage, parsers, and eventually other users. The safe design is not “check the extension and save the file.” It is a pipeline with explicit authorization, size limits, type validation, generated names, isolated storage, asynchronous scanning, and a retrieval policy that matches the file’s sensitivity. This guide gives a provider-neutral implementation plan for a Node.js product team.',
		relatedService: { label: 'API and platform engineering', href: '/services/api-platform-engineering' },
		sources: [
			{ label: 'OWASP — File Upload Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html' },
			{ label: 'Node.js Documentation — File system', url: 'https://nodejs.org/api/fs.html' },
			{ label: 'MDN — Content-Security-Policy header', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy' },
		],
		sections: [
			{
				heading: 'Prerequisites: decide what the upload is allowed to do',
				paragraphs: [
					'Before choosing a multipart parser or object store, define the business contract. Is this an avatar, a PDF for an application, an image attached to a support ticket, or a customer export? Each use case needs its own allowlist, maximum size, retention period, visibility, and processing path. “Allow any file” is not a useful product requirement and makes every downstream parser part of your attack surface.',
					'You also need authenticated identity, authorization for the target record, a durable metadata store, and an object-storage or filesystem location that is not directly executable. OWASP recommends limiting extensions to what the business needs, setting size limits, authorizing uploads, generating filenames, and storing files outside the webroot or on a separate server. Treat those as baseline controls, not optional hardening.',
				],
				bullets: ['An authenticated upload route with tenant and resource authorization', 'An allowlist of required file types and a per-type size limit', 'Durable metadata for owner, status, size, detected type, and timestamps', 'Private storage or a download handler with an authorization check', 'A scanning or review step before a file becomes available to other users'],
			},
			{
				heading: 'Validate the request before writing bytes',
				paragraphs: [
					'Enforce request and part limits at the edge, web server, framework parser, and application layer. A client-provided Content-Type is useful as an early hint, but it is not proof: OWASP explicitly notes that it can be spoofed. Do not let a multipart parser buffer an unbounded body before your application gets a chance to reject it.',
					'Validate the decoded filename only to derive user-facing metadata; never use it as a filesystem path. Reject path separators, control characters, unexpected length, and double-extension tricks. Generate an opaque storage key such as a UUID, keep the original name in metadata after normalizing it for display, and preserve the extension only if your retrieval and processing policy needs it.',
				],
				bullets: ['Reject unauthenticated or unauthorized uploads before consuming expensive processing', 'Allowlist extensions rather than trying to block every dangerous extension', 'Treat the declared MIME type as an untrusted hint', 'Enforce a maximum byte count while streaming, not after buffering', 'Generate a storage key; never concatenate user input into a path', 'Return a generic validation error without revealing server paths or parser details'],
			},
			{
				heading: 'Check the content, not just the label',
				paragraphs: [
					'After the stream is bounded, compare the claimed type with the bytes you actually received. Use a maintained file-type detector or parser appropriate to the allowlisted formats, and check a file signature where the format supports one. OWASP cautions that neither a MIME check nor a signature check is sufficient on its own; defense in depth is the point.',
					'Keep parsing and transformation away from the request thread when they are expensive or have a history of parser vulnerabilities. A safe state machine is uploaded, validating, clean, rejected, and quarantined. Do not publish a file merely because it passed the first extension check. For PDFs, office documents, archives, and media, consider antivirus scanning and content disarm or reconstruction where the risk and product value justify it.',
				],
				bullets: ['Use an allowlist-specific detector for the formats your product accepts', 'Reject mismatches between extension, declared type, and detected content', 'Keep parser and antivirus dependencies patched and separately monitored', 'Quarantine files until scanning and any required transformation completes', 'Treat decompressed size and nested archives as separate limits', 'Make rejection and quarantine visible to an operator without exposing the file publicly'],
			},
			{
				heading: 'Store safely and make writes race-resistant',
				paragraphs: [
					'Write to a private temporary object or directory first, then promote it only after validation. Set restrictive permissions and keep the storage location outside the application’s webroot. If you use a local filesystem, create the destination with a fixed base directory and generated names; resolve paths defensively and refuse anything that escapes that directory.',
					'Node’s filesystem API documents exclusive creation with the wx flag: it fails when the path already exists. That is useful as one part of a safe write, but it does not replace authorization, generated identifiers, storage isolation, or a database uniqueness rule. For object storage, use a server-generated key and scoped credentials; do not expose a bucket-wide write credential to a browser or application feature that does not need it.',
				],
				bullets: ['Use a temporary key and an explicit promotion step', 'Create files with exclusive semantics so an unexpected collision fails', 'Store metadata and status separately from the untrusted original filename', 'Keep private objects private and issue short-lived authorized downloads', 'Apply retention and deletion rules to abandoned, rejected, and quarantined objects', 'Record a checksum or size for integrity and operational investigation'],
			},
			{
				heading: 'Serve downloads as a separate security decision',
				paragraphs: [
					'An upload being clean does not mean it should be rendered inline for every caller. For private files, authorize the requesting user or tenant on every download and prefer a short-lived signed URL or a streaming handler that sets the correct content disposition. Avoid reflecting the original filename into HTML or response headers without safe encoding.',
					'For files that must be public, use a dedicated asset origin or download handler and make the browser behavior intentional. A restrictive Content-Security-Policy can help control what a page may load, but it is not a substitute for access control, content validation, safe response headers, or storage isolation. Consider forcing download for formats that could contain active content rather than embedding them in an authenticated application page.',
				],
				bullets: ['Authorize downloads independently of upload permission', 'Use Content-Disposition and a safe, normalized display filename', 'Set a content type based on validated metadata, not a request header', 'Prevent user-controlled files from sharing the application origin when possible', 'Test direct object URLs, expired links, tenant changes, and deleted records', 'Never expose storage credentials or predictable object keys to clients'],
			},
			{
				heading: 'Verify failure modes before production',
				paragraphs: [
					'Test the pipeline with valid files and adversarial inputs: an oversized body, a misleading extension, a spoofed MIME type, a truncated upload, a duplicate request, a filename containing path traversal characters, a nested archive, and a file that the scanner rejects. Assert that rejected bytes are not published, temporary objects are cleaned up, and the metadata status explains what an operator should do next.',
					'Run concurrent uploads for the same resource and concurrent downloads while a file is being promoted. Then test the infrastructure failures: storage timeout, scanner outage, database failure after the object write, and worker restart during scanning. The recovery contract should be explicit: retry safely, quarantine for review, or delete the object. Do not turn a storage outage into a successful API response that points at a file which does not exist.',
				],
				bullets: ['Oversized uploads stop during streaming and do not fill temporary storage', 'A fake MIME type or extension cannot bypass content validation', 'Two workers cannot publish the same logical file twice', 'Scanner failure leaves the file unavailable rather than silently clean', 'A database failure does not create an orphaned publicly reachable object', 'Cross-tenant download and guessed-key tests return the same safe denial', 'Metrics cover upload size, rejection reason, scan latency, quarantine count, and cleanup failures'],
			},
			{
				heading: 'Production checklist',
				paragraphs: [
					'A secure upload feature is an operational workflow, not only a controller. Keep the limits and allowed types in configuration reviewed by the product owner and security owner. Give support a way to find a file by internal ID, inspect its state, and safely retry or delete it without granting broad storage access.',
				],
				bullets: ['Business-specific extension and detected-content allowlists are documented', 'Authentication, tenant scope, and resource authorization are enforced', 'Request, part, decompressed, and storage quotas are bounded', 'Filenames are generated for storage and escaped for display', 'Objects are private or served through an authorized download path', 'Validation, scanning, quarantine, promotion, and cleanup are observable', 'Parser, scanner, and storage credentials are patched and least-privileged', 'Retention, deletion, privacy, and incident-replay procedures are written down'],
			},
		],
	},
];
