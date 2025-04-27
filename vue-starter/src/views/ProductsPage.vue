<template>
  <div>
    <FirstSection title="منتجاتنا" description="للتواصل مع فريق الدعم الفني يرجى ملء النموذج" />
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
