<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">W</span>
            </div>
            <span class="text-xl font-bold">Walleye Master</span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            Your ultimate resource for walleye fishing guides, gear reviews, and community news across the USA & Canada.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <span class="sr-only">YouTube</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <span class="sr-only">Pinterest</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Content</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/blog" class="text-gray-300 hover:text-white transition-colors duration-200">Latest Posts</NuxtLink></li>
            <li><NuxtLink to="/guides" class="text-gray-300 hover:text-white transition-colors duration-200">Fishing Guides</NuxtLink></li>
            <li><NuxtLink to="/gear" class="text-gray-300 hover:text-white transition-colors duration-200">Gear Reviews</NuxtLink></li>
            <li><NuxtLink to="/locations" class="text-gray-300 hover:text-white transition-colors duration-200">Best Locations</NuxtLink></li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Categories</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/blog/category/techniques" class="text-gray-300 hover:text-white transition-colors duration-200">Techniques</NuxtLink></li>
            <li><NuxtLink to="/blog/category/gear" class="text-gray-300 hover:text-white transition-colors duration-200">Gear</NuxtLink></li>
            <li><NuxtLink to="/blog/category/locations" class="text-gray-300 hover:text-white transition-colors duration-200">Locations</NuxtLink></li>
            <li><NuxtLink to="/blog/category/news" class="text-gray-300 hover:text-white transition-colors duration-200">News</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Walleye Master. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>