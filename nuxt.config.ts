// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Walleye Master - Your Ultimate Walleye Fishing Resource",
		},
	},
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
	content: {
		markdown: {
			anchorLinks: false,
			remarkPlugins: [],
			rehypePlugins: []
		}
	},
	runtimeConfig: {
		public: {
			cloudinaryEnvUrl: 'https://res.cloudinary.com/sailsnake-api-test',
			siteUrl: 'https://walleyemaster.com',
			siteName: 'Walleye Master',
			siteDescription: 'The ultimate resource for walleye fishing guides, gear reviews, and community news in the USA & Canada.'
		}
	},
	css: ["~/assets/css/main.css"],
	tailwindcss: {
		cssPath: '~/assets/css/main.css',
		configPath: 'tailwind.config.js'
	},
	experimental: {
		componentIslands: true,
	},
});
