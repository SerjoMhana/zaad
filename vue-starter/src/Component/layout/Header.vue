<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="text-xl font-bold text-gray-800">متجري</a> <!-- Placeholder Logo/Brand -->
        </div>

        <!-- Desktop Menu (Hidden on smaller screens) -->
        <div class="hidden md:flex items-center space-x-reverse space-x-4">
          <a href="/" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-150 ease-in-out">الرئيسية</a>
          <a href="/about" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-150 ease-in-out">عن المتجر</a>
          <a href="/products" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-150 ease-in-out">المنتجات</a>
          <a href="#" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-150 ease-in-out">بلوق</a>
          <a href="/contact" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-150 ease-in-out">تواصل معنا</a>
        </div>

        <!-- Mobile Menu Button (Hidden on larger screens) -->
        <div class="flex md:hidden">
          <button @click="toggleMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu (Shown when isMobileMenuOpen is true) -->
    <div :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">الرئيسية</a>
        <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">عن المتجر</a>
        <a href="/products" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">المنتجات</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">بلوق</a>
        <a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">تواصل معنا</a>
      </div>
    </div>
  </header>
</template>
