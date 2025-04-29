<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink } from 'vue-router' // Import RouterLink

const isMobileMenuOpen = ref(false)
const cartItemCount = ref(0)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Function to update cart count from localStorage
const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  // Calculate total quantity of all items
  cartItemCount.value = cart.reduce((total, item) => total + item.quantity, 0)
}

// Listen for storage changes to update count reactively
const handleStorageChange = (event) => {
  if (event.key === 'cart') {
    updateCartCount()
  }
}

onMounted(() => {
  updateCartCount() // Initial count on load
  window.addEventListener('storage', handleStorageChange)
  // Also listen for custom event dispatched after cart updates within the same tab
  window.addEventListener('cart-updated', updateCartCount);
})

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange)
  window.removeEventListener('cart-updated', updateCartCount);

})
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="text-xl font-bold text-gray-800">
            <img src="@/assets/zad.png" alt="متجري Logo" class="h-12 w-auto"> <!-- Logo -->
          </a>
        </div>

        <!-- Desktop Menu (Hidden on smaller screens) -->
        <div class="hidden md:flex items-center space-x-reverse space-x-4">
          <a href="/" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-zad-green transition duration-150 ease-in-out">الرئيسية</a>
          <a href="/about" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-zad-green transition duration-150 ease-in-out">عن المتجر</a>
          <a href="/products" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-zad-green transition duration-150 ease-in-out">المنتجات</a>
          <a href="#" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-zad-green transition duration-150 ease-in-out">بلوق</a>
          <a href="/contact" class="py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-zad-green transition duration-150 ease-in-out">تواصل معنا</a>
           <!-- Cart Icon Link -->
           <RouterLink to="/cart" class="relative py-2 px-3 text-gray-700 rounded hover:bg-gray-100 hover:text-zad-green transition duration-150 ease-in-out">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
             <span v-if="cartItemCount > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
               {{ cartItemCount }}
             </span>
           </RouterLink>
        </div>

         <!-- Cart Icon & Mobile Menu Button (Hidden on larger screens) -->
         <div class="flex items-center md:hidden">
           <!-- Cart Icon Link (Mobile) -->
           <RouterLink to="/cart" class="relative p-2 mr-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
             <span v-if="cartItemCount > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
               {{ cartItemCount }}
             </span>
           </RouterLink>
           <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zad-green" :class="{'bg-zad-green text-white hover:bg-green-700': isMobileMenuOpen, 'text-gray-400 hover:text-zad-green hover:bg-gray-100': !isMobileMenuOpen}" aria-controls="mobile-menu" aria-expanded="false">
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
        <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-zad-green hover:bg-gray-50">الرئيسية</a>
        <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-zad-green hover:bg-gray-50">عن المتجر</a>
        <a href="/products" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-zad-green hover:bg-gray-50">المنتجات</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-zad-green hover:bg-gray-50">بلوق</a>
        <a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-zad-green hover:bg-gray-50">تواصل معنا</a>
        <!-- Cart Link (Mobile Menu) - Optional, already have icon -->
        <!-- <RouterLink to="/cart" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">السلة ({{ cartItemCount }})</RouterLink> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Add custom styles if needed, Tailwind handles most */
</style>
