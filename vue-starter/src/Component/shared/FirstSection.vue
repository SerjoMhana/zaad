<template>
  <div class="relative h-[300px] bg-cover bg-center text-center text-black shadow-sm">
    <div class="absolute inset-0 bg-opacity-70 flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <p class="mt-2 text-lg">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
