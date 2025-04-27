<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    id: 1,
    image: 'https://images.pexels.com/photos/31653129/pexels-photo-31653129/free-photo-of-delicious-asian-curry-in-tokyo-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1=Slide+1', // Placeholder Image 1
    title: 'عنوان الشريحة الأولى',
    description: 'وصف قصير للشريحة الأولى يوضح محتواها.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2=Slide+2', // Placeholder Image 2
    title: 'عنوان الشريحة الثانية',
    description: 'هذا هو الوصف الخاص بالشريحة الثانية.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600=Slide+3', // Placeholder Image 3
    title: 'عنوان الشريحة الثالثة',
    description: 'محتوى وصفي للشريحة الثالثة والأخيرة.',
  },
]);

const currentSlide = ref(0); // Index of the currently visible slide
let intervalId = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoPlay = () => {
  stopAutoPlay(); // Clear existing interval if any
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<template>
  <div class="relative w-full overflow-hidden" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <!-- Slides Container -->
    <div class="relative h-64 md:h-96 lg:h-[530px] w-full">
      <!-- Individual Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="{ 'opacity-100 z-10': index === currentSlide, 'opacity-0 z-0': index !== currentSlide }"
      >
        <img :src="slide.image" class="absolute block w-full h-full object-cover" :alt="slide.title">
        <!-- Slide Content -->
        <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
          <h1 class="text-white text-2xl md:text-4xl font-bold mb-2 md:mb-4 animate__animated animate__fadeInDown" :class="{ 'animate__delay-0.5s': index === currentSlide }">{{ slide.title }}</h1>
          <p class="text-white text-sm md:text-lg animate__animated animate__fadeInUp" :class="{ 'animate__delay-0.5s': index === currentSlide }">{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- Slider controls (Prev/Next Buttons) -->
    <button @click="prevSlide" type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button @click="nextSlide" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>

    <!-- Slider indicators (Dots) -->
    <div class="absolute z-30 flex space-x-4 -translate-x-1/2 bottom-4 left-1/2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        type="button"
        class="w-3 h-3 rounded-full ml-3"
        :class="{ 'bg-white': index === currentSlide, 'bg-white/50 hover:bg-white': index !== currentSlide }"
        :aria-current="index === currentSlide ? 'true' : 'false'"
        :aria-label="'Slide ' + (index + 1)">
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if needed, Tailwind handles most */
.animate__animated.animate__fadeInDown {
  --animate-duration: 0.8s;
}
.animate__animated.animate__fadeInUp {
  --animate-duration: 0.8s;
}
.animate__delay-0\.5s {
  --animate-delay: 0.3s; /* Adjust delay slightly */
}
</style>
