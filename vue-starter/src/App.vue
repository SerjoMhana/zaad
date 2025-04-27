<script setup>
import Header from "./Component/layout/Header.vue";
import { RouterView } from "vue-router";
import Footer from "./Component/layout/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="">
      <RouterView /> <!-- Content for each route will be displayed here -->
    </main>
    <Footer />
  </div>
</template>
