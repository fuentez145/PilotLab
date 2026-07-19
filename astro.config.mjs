// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Canonical production domain — canonical URLs, sitemap, and OG tags derive from it.
	// robots.txt (public/robots.txt) and the OG image carry it too; update those together.
	site: 'https://pilotlab.cloud',
	integrations: [sitemap()],
});
