<template>
  <div  class="product-section">
<div class="filter">
  <h2 class="mb-8 text-center text-2xl">تصنيفات</h2>
  <div class="filter-buttons">
    <button @click="selectedCategory = 'all'">جميع المنتجات</button>
    <button @click="selectedCategory = 'الموروث الليبي'">الموروث الليبي</button>
    <button @click="selectedCategory = 'البهارات'">البهارات</button>
    <button @click="selectedCategory = 'الزيوت الطبيعية'">الزيوت الطبيعية</button>
    <button @click="selectedCategory = 'الأعشاب الطبيعية'">الأعشاب الطبيعية</button>
    <button @click="selectedCategory = 'العسل'">العسل</button>
  </div>
</div>
    <div dir="ltr" class="products">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from './ProductCard.vue'

const selectedCategory = ref('all')
const products = ref([
  { id: 1, name: 'كسكس', price: '12 ', category: 'الموروث الليبي', image: 'https://picsum.photos/150/150', description: 25 },
  { id: 2, name: 'مبطن', price: ' 20', category: 'الموروث الليبي', image: 'https://picsum.photos/150/150', description: 30 },
  { id: 3, name: 'بومبر', price: '18 ', category: 'الموروث الليبي', image: 'https://picsum.photos/150/150', description: 20 },
  { id: 16, name: 'كسكسي', price: '22', category: 'الموروث الليبي', image: 'https://picsum.photos/150/150', description: 28 },
  { id: 4, name: 'فلفل احمر', price: '0  ', category: 'البهارات', image: 'https://picsum.photos/150/150', description: 10 },
  { id: 5, name: 'كركم', price: '25 ', category: 'البهارات', image: 'https://picsum.photos/150/150', description: 15 },
  { id: 6, name: 'كزبرة', price: '19 ', category: 'البهارات', image: 'https://picsum.photos/150/150', description: 12 },
  { id: 17, name: 'كمون', price: '15', category: 'البهارات', image: 'https://picsum.photos/150/150', description: 11 },
  { id: 7, name: 'زيت زيتون', price: '28  ', category: 'الزيوت الطبيعية', image: 'https://picsum.photos/150/150', description: 50 },
  { id: 8, name: 'زيت لوز', price: '30', category: 'الزيوت الطبيعية', image: 'https://picsum.photos/150/150', description: 60 },
  { id: 9, name: 'زيت سمسم', price: '32', category: 'الزيوت الطبيعية', image: 'https://picsum.photos/150/150', description: 55 },
  { id: 18, name: 'زيت خروع', price: '25', category: 'الزيوت الطبيعية', image: 'https://picsum.photos/150/150', description: 45 },
  { id: 10, name: 'بابونج', price: '26 ', category: 'الأعشاب الطبيعية', image: 'https://picsum.photos/150/150', description: 8 },
  { id: 11, name: 'نعناع', price: '28 ', category: 'الأعشاب الطبيعية', image: 'https://picsum.photos/150/150', description: 7 },
  { id: 12, name: 'زعتر', price: '27 ', category: 'الأعشاب الطبيعية', image: 'https://picsum.photos/150/150', description: 9 },
  { id: 19, name: 'ميرمية', price: '29', category: 'الأعشاب الطبيعية', image: 'https://picsum.photos/150/150', description: 10 },
  { id: 13, name: 'عسل سدر', price: '30  ', category: 'العسل', image: 'https://picsum.photos/150/150', description: 70 },
  { id: 14, name: 'عسل زهور', price: '28  ', category: 'العسل', image: 'https://picsum.photos/150/150', description: 65 },
  { id: 15, name: 'عسل نحل', price: '32', category: 'العسل', image: 'https://picsum.photos/150/150', description: 60 },
  { id: 20, name: 'عسل جبلي', price: '35', category: 'العسل', image: 'https://picsum.photos/150/150', description: 75 },
])

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products.value
  } else {
    return products.value.filter(product => product.category === selectedCategory.value)
  }
})
</script>

<style scoped>
.product-section {
  display: flex;
  flex-direction: row;
}

.filter {
  width: 25%;
  padding: 20px 0PX;
  order: 1;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  background-color: #eeeeee85;
}

.filter-buttons {
  display: flex;
  flex-direction: column;
}

.filter-buttons button {
  padding: 10px 15px;
  margin-bottom: 5px;
  background-color: white;
  border: none;
  border-radius: 5px;
  text-align: right;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-buttons button:hover {
  background-color: #ddd;
}

.products {
  width: 75%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  order: 2;
  padding-bottom: 90px;
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .products {
    grid-template-columns: repeat(1, 1fr);
  }
}

.product-card {
  width: 100%;
}
</style>
