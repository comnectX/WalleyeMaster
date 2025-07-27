<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Master the Art of 
            <span class="text-walleye-400">Walleye Fishing</span>
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Your ultimate resource for walleye fishing guides, gear reviews, and community news across the USA & Canada.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/blog" class="btn-primary text-lg px-8 py-3">
              Read Latest Guides
            </NuxtLink>
            <NuxtLink to="/gear" class="btn-secondary text-lg px-8 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Browse Gear Reviews
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Content -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
          <p class="text-lg text-gray-600">Stay updated with the latest walleye fishing tips, techniques, and gear reviews.</p>
        </div>

        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="card animate-pulse">
            <div class="h-48 bg-gray-200"></div>
            <div class="p-6">
              <div class="h-4 bg-gray-200 rounded mb-2"></div>
              <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div class="h-3 bg-gray-200 rounded mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <div v-else-if="posts?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            v-for="post in posts.slice(0, 6)" 
            :key="post._path" 
            :post="post" 
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-gray-500">No blog posts found. Start creating content!</p>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/blog" class="btn-primary">
            View All Posts
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Walleye Master?</h2>
          <p class="text-lg text-gray-600">Everything you need to become a successful walleye angler.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Expert Guides</h3>
            <p class="text-gray-600">Comprehensive fishing guides written by experienced anglers with decades of walleye fishing expertise.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-walleye-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-walleye-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Gear Reviews</h3>
            <p class="text-gray-600">Honest, detailed reviews of the latest walleye fishing gear to help you make informed purchasing decisions.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Prime Locations</h3>
            <p class="text-gray-600">Discover the best walleye fishing spots across the USA and Canada with detailed location guides.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Master the art of walleye fishing with expert guides, gear reviews, and location tips. Your ultimate resource for walleye fishing in the USA & Canada.' },
    { property: 'og:title', content: 'Walleye Master - Your Ultimate Walleye Fishing Resource' },
    { property: 'og:description', content: 'Master the art of walleye fishing with expert guides, gear reviews, and location tips. Your ultimate resource for walleye fishing in the USA & Canada.' },
    { property: 'og:type', content: 'website' },
  ]
})

// Fetch recent blog posts
const { data: posts, pending } = await useAsyncData('home-posts', () => 
  queryContent('/blog')
    .where({ draft: { $ne: true } })
    .sort({ publishedAt: -1 })
    .limit(6)
    .find()
)
</script>