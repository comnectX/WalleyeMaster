<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">W</span>
            </div>
            <span class="text-xl font-bold text-gray-900">Walleye Master</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              to="/blog" 
              class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-primary-600 font-semibold"
            >
              Blog
            </NuxtLink>
            <NuxtLink 
              to="/guides" 
              class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-primary-600 font-semibold"
            >
              Guides
            </NuxtLink>
            <NuxtLink 
              to="/gear" 
              class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-primary-600 font-semibold"
            >
              Gear Reviews
            </NuxtLink>
            <NuxtLink 
              to="/locations" 
              class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              active-class="text-primary-600 font-semibold"
            >
              Locations
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 mt-4">
          <NuxtLink 
            to="/blog" 
            class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            active-class="text-primary-600 font-semibold"
            @click="mobileMenuOpen = false"
          >
            Blog
          </NuxtLink>
          <NuxtLink 
            to="/guides" 
            class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            active-class="text-primary-600 font-semibold"
            @click="mobileMenuOpen = false"
          >
            Guides
          </NuxtLink>
          <NuxtLink 
            to="/gear" 
            class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            active-class="text-primary-600 font-semibold"
            @click="mobileMenuOpen = false"
          >
            Gear Reviews
          </NuxtLink>
          <NuxtLink 
            to="/locations" 
            class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            active-class="text-primary-600 font-semibold"
            @click="mobileMenuOpen = false"
          >
            Locations
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>