<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Walleye Fishing Blog</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Expert tips, techniques, and insights to help you become a better walleye angler.
      </p>
    </div>

    <!-- Categories Filter -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-2 justify-center">
        <button
          @click="selectedCategory = null"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
            selectedCategory === null 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          All Posts
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 capitalize',
            selectedCategory === category 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="i in 9" :key="i" class="card animate-pulse">
        <div class="h-48 bg-gray-200"></div>
        <div class="p-6">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div class="h-3 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>

    <!-- Blog Posts -->
    <div v-else-if="filteredPosts?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BlogCard 
        v-for="post in filteredPosts" 
        :key="post._path" 
        :post="post" 
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
      <p class="text-gray-500">
        {{ selectedCategory ? `No posts found in the "${selectedCategory}" category.` : 'No blog posts have been published yet.' }}
      </p>
    </div>

    <!-- Pagination would go here -->
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Read the latest walleye fishing tips, techniques, gear reviews, and location guides from expert anglers.' },
    { property: 'og:title', content: 'Walleye Fishing Blog | Walleye Master' },
    { property: 'og:description', content: 'Read the latest walleye fishing tips, techniques, gear reviews, and location guides from expert anglers.' },
  ]
})

// Reactive data
const selectedCategory = ref(null)

// Fetch all blog posts
const { data: posts, pending } = await useAsyncData('blog-posts', () => 
  queryContent('/blog')
    .where({ draft: { $ne: true } })
    .sort({ publishedAt: -1 })
    .find()
)

// Extract unique categories
const categories = computed(() => {
  if (!posts.value) return []
  const allCategories = posts.value
    .flatMap(post => post.categories || [])
    .filter(Boolean)
  return [...new Set(allCategories)].sort()
})

// Filter posts by selected category
const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedCategory.value) return posts.value
  return posts.value.filter(post => 
    post.categories?.includes(selectedCategory.value)
  )
})
</script>