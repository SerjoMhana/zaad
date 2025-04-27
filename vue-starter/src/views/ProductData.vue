<template>
  <div style="display: flex; padding: 20px; gap: 20px;">
    <div style="width: 75%;">
      <h1>Product Title</h1>
      <p>Product description goes here.</p>
      <p>Price: $99.99</p>
    </div>
    <div style="width: 25%;">
      <ProductSection />
    </div>
  </div>
</template>

<script>
import ProductSection from '../../src/Component/shared/ProductSection.vue';

export default {
  components: {
    ProductSection
  },
};
</script>
