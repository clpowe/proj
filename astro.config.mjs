import { defineConfig, passthroughImageService } from 'astro/config'
import icon from 'astro-icon'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	image: {
		service: passthroughImageService()
	},
	output: 'hybrid',
	adapter: netlify()
})
