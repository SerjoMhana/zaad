<template>
  <a href="#" class="bg-white rounded-lg shadow-md overflow-hidden block">
    <img :src="product.images && product.images.length > 0 ? product.images[0] : product.image" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="flex justify-between ">
        <p class="text-gray-700 leading-relaxed mb-4"> {{ product.price }} دينار </p>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
      </div>

    </div>
  </a>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
img {
  height: 200px;
  object-fit: cover;
}
</style>
