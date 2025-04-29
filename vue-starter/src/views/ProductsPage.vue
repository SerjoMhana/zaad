<template>
  <div>
    <FirstSection title="منتجاتنا" description="اكتشف مجموعتنا الواسعة من المنتجات المميزة" />
    <ProductSection />
  </div>
</template>

<script>
import FirstSection from '../Component/shared/FirstSection.vue'
import ProductSection from '../Component/shared/ProductSection.vue'

export default {
  name: 'ProductsPage',
  components: {
    FirstSection,
    ProductSection
  }
}
</script>
