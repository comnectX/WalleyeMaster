<template>
  <div v-if="post">
    <!-- Hero Section -->
    <section class="relative bg-gray-900">
      <div v-if="post.featuredImage" class="absolute inset-0">
        <img 
          :src="post.featuredImage" 
          :alt="post.title"
          class="w-full h-full object-cover opacity-50"
        />
      </div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center text-white">
          <!-- Categories -->
          <div v-if="post.categories?.length" class="flex flex-wrap gap-2 justify-center mb-4">
            <NuxtLink
              v-for="category in post.categories"
              :key="category"
              :to="`/blog/category/${category}`"
              class="inline-block px-3 py-1 text-sm font-medium bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 capitalize"
            >
              {{ category }}
            </NuxtLink>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            {{ post.title }}
          </h1>

          <!-- Meta -->
          <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <time :datetime="post.publishedAt">
                {{ formatDate(post.publishedAt || post.createdAt) }}
              </time>
            </div>
            
            <div v-if="post.readingTime" class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{{ post.readingTime }} min read</span>
            </div>

            <div v-if="post.author" class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span>{{ post.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Description/Excerpt -->
      <div v-if="post.description" class="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-200">
        {{ post.description }}
      </div>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <!-- Tags -->
      <div v-if="post.tags?.length" class="mt-12 pt-8 border-t border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="tag in post.tags"
            :key="tag"
            :to="`/blog/tag/${tag}`"
            class="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            #{{ tag }}
          </NuxtLink>
        </div>
      </div>

      <!-- Share Buttons -->
      <div class="mt-8 pt-8 border-t border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
        <div class="flex space-x-4">
          <a 
            :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </a>
          
          <a 
            :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>
      </div>
    </article>

    <!-- Related Posts -->
    <section v-if="relatedPosts?.length" class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost._path" 
            :post="relatedPost" 
          />
        </div>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
    <p class="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
    <NuxtLink to="/blog" class="btn-primary">
      Back to Blog
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

// Fetch the blog post
const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () => 
  queryContent('/blog', route.params.slug).findOne()
)

// Handle 404
if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

// Current URL for sharing
const currentUrl = computed(() => `${config.public.siteUrl}${route.path}`)

// Fetch related posts
const { data: relatedPosts } = await useAsyncData(`related-${route.params.slug}`, () => 
  queryContent('/blog')
    .where({ 
      _path: { $ne: post.value._path },
      draft: { $ne: true },
      categories: { $in: post.value.categories || [] }
    })
    .sort({ publishedAt: -1 })
    .limit(3)
    .find()
)

// SEO
useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description || post.value.excerpt || 'Read this walleye fishing article on Walleye Master.' },
    { property: 'og:title', content: post.value.title },
    { property: 'og:description', content: post.value.description || post.value.excerpt || 'Read this walleye fishing article on Walleye Master.' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: post.value.featuredImage || `${config.public.siteUrl}/og-default.jpg` },
    { property: 'article:published_time', content: post.value.publishedAt || post.value.createdAt },
    { property: 'article:author', content: post.value.author || 'Walleye Master' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.value.title },
    { name: 'twitter:description', content: post.value.description || post.value.excerpt || 'Read this walleye fishing article on Walleye Master.' },
    { name: 'twitter:image', content: post.value.featuredImage || `${config.public.siteUrl}/og-default.jpg` },
  ],
  link: [
    { rel: 'canonical', href: currentUrl.value }
  ]
})

// Structured data for SEO
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.value.title,
  description: post.value.description || post.value.excerpt,
  image: post.value.featuredImage,
  datePublished: post.value.publishedAt || post.value.createdAt,
  dateModified: post.value.updatedAt || post.value.publishedAt || post.value.createdAt,
  author: {
    '@type': 'Person',
    name: post.value.author || 'Walleye Master'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Walleye Master',
    logo: {
      '@type': 'ImageObject',
      url: `${config.public.siteUrl}/logo.png`
    }
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