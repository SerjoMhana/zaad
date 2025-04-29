import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductData from '../views/ProductData.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue' // Import the Cart view


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
   {
      path: '/about',
      name: 'about',
      component: AboutUsPage,
    },
   {
      path: '/contact',
      name: 'contact',
      component: ContactUsPage,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage,
    },
    {
      path: '/product-data',
      name: 'product-data',
      component: ProductData,
    },
    {
      path: '/product/:id', // Route with dynamic ID parameter
      name: 'ProductDetail',
      component: ProductDetailView,
      props: true // Pass route params as props to the component
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],

});

export default router
