<script></script>

<template>
        <div class="bg-white">
      <div class="rounded-xl shadow-md overflow-hidden max-h-screen">
        <div class="md:flex">

          
          <div class="md:w-1/2 p-8 pt-28">
            <div class="uppercase tracking-wide text-sm text-zad-green font-semibold pb-12">تواصل معنا</div>
            <p class="mt-2 text-gray-500">املأ هذا النموذج وسنعاود الاتصال بك في أقرب وقت ممكن.</p>
            <form class="mt-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">الاسم</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="اسمك">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">البريد الإلكتروني</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="بريدك الالكتروني">
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">الرسالة</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="3" placeholder="رسالتك"></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-zad-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  إرسال
                </button>
                
              </div>
            </form>
          </div>
          <div class="md:w-1/2">
            <img class="h-full w-full object-cover" src="https://images.pexels.com/photos/5589055/pexels-photo-5589055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Contact Image">
          </div>
        </div>
      </div>
    </div>
</template>