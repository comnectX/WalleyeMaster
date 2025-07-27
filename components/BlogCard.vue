<template>
  <article class="card-hover group">
    <!-- Featured Image -->
    <div class="aspect-w-16 aspect-h-9 bg-gray-200">
      <img 
        v-if="post.featuredImage"
        :src="post.featuredImage" 
        :alt="post.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
        <svg class="w-12 h-12 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Categories -->
      <div v-if="post.categories?.length" class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="category in post.categories.slice(0, 2)" 
          :key="category"
          class="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full capitalize"
        >
          {{ category }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
        <NuxtLink :to="post._path" class="stretched-link">
          {{ post.title }}
        </NuxtLink>
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ post.description || post.excerpt || 'Read more about this topic...' }}
      </p>

      <!-- Meta -->
      <div class="flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center space-x-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <time :datetime="post.publishedAt">
            {{ formatDate(post.publishedAt || post.createdAt) }}
          </time>
        </div>
        
        <div v-if="post.readingTime" class="flex items-center space-x-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{{ post.readingTime }} min read</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>