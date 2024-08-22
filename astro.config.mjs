import { defineConfig, passthroughImageService } from 'astro/config'
import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true
	},
	site: 'https://clpowe-astro-course.netlify.app/projects',
	integrations: [icon(), sitemap()],
	image: {
		service: passthroughImageService()
	},
	output: 'hybrid',
	adapter: netlify()
})
