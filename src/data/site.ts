/** Site-wide identity used by SEO tags and structured data. */
export const SITE = {
	name: 'PilotLab',
	tagline: 'Web, built right',
	email: 'hello@pilotlab.cloud',
	address: {
		streetAddress: '214 Foundry Street, Floor 3',
		addressLocality: 'Amsterdam',
		addressCountry: 'NL',
	},
	description:
		'PilotLab is a web development studio for teams who measure twice and ship fast. Products, platforms, and storefronts — engineered without compromise.',
} as const;

/** JSON-LD node for the studio, reusable as `provider` in Service schemas. */
export function organizationSchema(siteUrl: string) {
	return {
		'@type': 'ProfessionalService',
		'@id': `${siteUrl}/#organization`,
		name: SITE.name,
		url: siteUrl,
		email: SITE.email,
		description: SITE.description,
		address: {
			'@type': 'PostalAddress',
			...SITE.address,
		},
	};
}

export function breadcrumbSchema(siteUrl: string, crumbs: { name: string; path: string }[]) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: crumbs.map((c, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: c.name,
			item: `${siteUrl}${c.path}`,
		})),
	};
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
	return {
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a },
		})),
	};
}
