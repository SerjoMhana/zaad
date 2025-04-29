<template>
  <div class="cart-view container mx-auto px-4 py-16" dir="rtl">
    <h1 class="text-3xl font-bold mb-6 text-center text-zad-green">سلة التسوق</h1>

    <div v-if="cartItems.length > 0" class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-3 px-4 border-b text-right font-semibold text-sm">#</th>
            <th class="py-3 px-4 border-b text-right font-semibold text-sm">المنتج</th>
            <th class="py-3 px-4 border-b text-right font-semibold text-sm">السعر</th>
            <th class="py-3 px-4 border-b text-center font-semibold text-sm">الكمية</th>
            <th class="py-3 px-4 border-b text-right font-semibold text-sm">الإجمالي الجزئي</th>
            <th class="py-3 px-4 border-b text-center font-semibold text-sm">إزالة</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="item.id" class="hover:bg-gray-50">
            <td class="py-3 px-4 border-b">{{ index + 1 }}</td>
            <td class="py-3 px-4 border-b flex items-center">
              <img v-if="item.image" :src="item.image" :alt="item.name" class="w-12 h-12 object-cover rounded mr-4 ml-2">
              <span>{{ item.name }}</span>
            </td>
            <td class="py-3 px-4 border-b">{{ item.price.toFixed(2) }} د.ل</td>
            <td class="py-3 px-4 border-b text-center">
               <div class="quantity-selector inline-flex items-center">
                 <button @click="decreaseItemQuantity(item)" class="px-2 py-0.5 border rounded-l bg-gray-200 hover:bg-gray-300 text-sm">-</button>
                 <span class="w-10 text-center border-t border-b">{{ item.quantity }}</span>
                 <button @click="increaseItemQuantity(item)" class="px-2 py-0.5 border rounded-r bg-gray-200 hover:bg-gray-300 text-sm">+</button>
               </div>
            </td>
            <td class="py-3 px-4 border-b">{{ (item.price * item.quantity).toFixed(2) }} د.ل</td>
            <td class="py-3 px-4 border-b text-center">
              <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700 font-semibold">
                &times;
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-gray-100 font-semibold">
            <td colspan="4" class="py-3 px-4 text-right">الإجمالي الكلي:</td>
            <td class="py-3 px-4">{{ totalCartPrice.toFixed(2) }} د.ل</td>
            <td class="py-3 px-4"></td>
          </tr>
        </tfoot>
      </table>
       <div class="mt-6 text-left">
         <button @click="clearCart" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 mr-2">
           إفراغ السلة
         </button>
         <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
           إتمام الشراء
         </button>
       </div>
    </div>

    <div v-else class="text-center py-10 text-gray-500">
      سلة التسوق فارغة.
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const cartItems = ref([])

const loadCart = () => {
  cartItems.value = JSON.parse(localStorage.getItem('cart') || '[]')
}

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
  // Dispatch event for header update whenever cart is saved
  window.dispatchEvent(new CustomEvent('cart-updated'));
}

onMounted(() => {
  loadCart()
})

const totalCartPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

const increaseItemQuantity = (item) => {
  item.quantity++
  saveCart()
}

const decreaseItemQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    // Optional: remove item if quantity becomes 0, or keep it at 1
    removeFromCart(item.id) // Remove if quantity reaches 0
  }
  saveCart()
}


const removeFromCart = (productId) => {
  cartItems.value = cartItems.value.filter(item => item.id !== productId)
  saveCart()
}

const clearCart = () => {
  if (confirm('هل أنت متأكد من أنك تريد إفراغ السلة؟')) {
    cartItems.value = []
    saveCart()
  }
}

</script>

<style scoped>
/* Add any specific styles for CartView if needed */
.quantity-selector span {
    min-width: 2.5rem; /* Ensure span has some width */
}
</style>
