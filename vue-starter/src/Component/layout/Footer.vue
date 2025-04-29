<template>
<footer class="bg-white text-gray-700 border-t py-10" dir="rtl">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 md:justify-items-stretch gap-8 text-right">
    
    <!-- الاشتراك -->
    <div class="md:justify-self-center">
      <h3 class="text-lg font-semibold mb-4">اشترك</h3>
      <p class="text-sm mb-4 text-gray-500">
        اشترك ليصلك كل جديد. نحن نحترم خصوصيتك ولا نرسل بريدًا مزعجًا.
      </p>
      <form class="flex flex-row-reverse">
        <button type="submit"
          class="bg-zad-green text-white px-5 py-2 rounded-l-full hover:bg-green-700 transition duration-300">إرسال
        </button>
        <input type="email" placeholder="أدخل بريدك الإلكتروني"
          class="w-full px-4 py-2 rounded-r-full border border-gray-300 focus:outline-none text-right" />

      </form>
    </div>

    <!-- حول -->
    <div class="md:justify-self-center">
      <h3 class="text-lg font-semibold mb-4"> روابط سريعة</h3>
      <ul class="space-y-2">
        <li><a href="/" class="hover:underline"> الرئسية</a></li>
        <li><a href="/about" class="hover:underline">عن المتجر </a></li>
        <li><a href="/products" class="hover:underline">المنتجات</a></li>
        <li><a href="#" class="hover:underline">بلوق  </a></li>
        <li><a href="/contact" class="hover:underline">تواصل معنا</a></li>
      </ul>
    </div>

    <!-- المتجر -->
    <div class="md:justify-self-center">
      <h3 class="text-lg font-semibold mb-4">المنتجات</h3>
      <ul class="space-y-2">
        <li><a href="/products" class="hover:underline">زيت زيتون</a></li>
        <li><a href="/products" class="hover:underline">الزميتة</a></li>
        <li><a href="/products" class="hover:underline">عسل السدرة</a></li>
        <li><a href="/products" class="hover:underline">النعناع </a></li>
        <li><a href="/products" class="hover:underline">البهارات</a></li>
      </ul>
    </div>

  </div>

  <!-- الأسفل -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 border-t pt-6 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 text-right" dir="rtl">
    <p>© 2025 جميع الحقوق محفوظة.</p>
    <div class="flex flex-row-reverse space-x-reverse space-x-6 mt-4 md:mt-0">
      <a href="https://www.facebook.com/share/1Y7BVTh9jK/?mibextid=qi2Omg"><i class="mr-6 fab fa-facebook-f fa-lg"></i></a>
      <a href="https://t.me/+hCPPJuXwMIA0YzA0"><i class="fab fa-telegram fa-lg"></i></a>
      <a href="#"><i class="fab fa-whatsapp fa-lg"></i></a>
    </div>
  </div>
</footer>


</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
