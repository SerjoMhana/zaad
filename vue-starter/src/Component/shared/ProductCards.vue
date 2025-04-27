<template>
  <section class="py-12 bg-gradient-to-r from-blue-100 to-purple-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">منتجاتنا</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard dir="ltr" v-for="product in products" :key="product.id" :product="product" />
      </div>
      <div class="text-center mt-8">
        <a href="/products">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">عرض جميع المنتجات</button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'الزميتة الليبية',
    price: '20 دينار',
    image: 'https://chaouiapuretsur.ma/cdn/shop/files/81D09FB8-93D1-4A8F-AE91-83CA784F5AED.jpg?v=1708196787&width=1346'
  },
  {
    id: 2,
    name: 'زيت الزيتون',
    price: '35 دينار',
    image: 'https://health.ucdavis.edu/media-resources/contenthub/post/internet/good-food/2024/04/images-body/olive-oil-health-benefits.jpg'
  },
  {
    id: 3,
    name: 'الإكليل',
    price: '12 دينار',
    image: 'https://static.webteb.net/images/content/tbl_articles_article_14232_936cae4345d-cbdf-4e6a-a9b8-196b68a730ba.jpg'
  },
  {
    id: 4,
    name: 'عسل الربيع',
    price: '15 دينار',
    image: 'https://images.pexels.com/photos/5589055/pexels-photo-5589055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]);
</script>

<style scoped>
/* Add custom styles if needed */
</style>
