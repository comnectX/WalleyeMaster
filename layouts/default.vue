<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// Global SEO defaults
const config = useRuntimeConfig()

useHead({
  titleTemplate: (title) => title ? `${title} | ${config.public.siteName}` : config.public.siteName,
  meta: [
    { name: 'description', content: config.public.siteDescription },
    { property: 'og:site_name', content: config.public.siteName },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@walleyemaster' },
  ],
  link: [
    { rel: 'canonical', href: config.public.siteUrl }
  ]
})
</script>