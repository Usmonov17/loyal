<template>
  <div class="w-full">
    <div class="contact-main-block flex flex-col pl-12">
      <p class="text-6xl text-white font-dmSerifR translate-y-52">
        Biz bilan bog'laning
      </p>
      <div class="translate-y-60 flex">
        <NuxtLink to="/" class="font-mulishR text-xl text-white hover:text-orange-300 duration-300">Home</NuxtLink>
        <p class="font-mulishR text-lg text-slate-400">&nbsp; - Contact</p>
      </div>
    </div>

    <div class="relative z-50 md:w-8/12 mt-5 px-8 py-12 sm:w-11/12 bg-white mx-auto shadow-lg">
      <form @submit.prevent="submitForm" novalidate>
        <div class="max-w-4xl mx-auto px-1">
          <div class="flex flex-col lg:flex-row gap-5 mb-6">
            <input
              v-model="form.name"
              type="text"
              placeholder="Ismingiz"
              class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black font-mulishR"
              required
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Emailingiz"
              class="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black font-mulishR"
              required
            />
          </div>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Telefon raqamingiz"
            class="w-full px-4 py-2 mb-6 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black font-mulishR"
            required
          />
          <textarea
            v-model="form.message"
            placeholder="Muammoningizni batafsil yozing"
            class="resize-none w-full h-40 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-black font-mulishR"
            required
          ></textarea>

          <button type="submit" class="relative inline-block px-4 py-2 font-medium group">
            <span v-if="loading" class="text-red-200">Yuborilmoqda...</span>
            <span v-else class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-200 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-red-200 group-hover:bg-red-200"></span>
            <span class="relative text-red-200 group-hover:text-white" v-if="!loading">Button Text</span>
          </button>


          <p v-if="errorMessage" class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
        </div>
      </form>
    </div>

    <div class="w-full h-5/6 relative -top-12">
      <div style="position:relative;overflow:hidden; z-index: 0 !important">
        <iframe 
          src="https://yandex.uz/map-widget/v1/?ll=69.293329%2C41.316313&mode=search&oid=205643535025&ol=biz&z=12.54"
          width="100%"
          height="500"
          frameborder="1" 
          allowfullscreen="true" 
          style="position:relative;"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const toast = useToast();

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const errorMessage = ref('');

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.phone || !form.value.message) {
    errorMessage.value = 'Iltimos, barcha maydonlarni to\'ldiring.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.value.email)) {
    errorMessage.value = 'Iltimos, to\'g\'ri elektron pochta manzilini kiriting.';
    return;
  }

  if (form.value.phone.length < 9) {
    errorMessage.value = 'Telefon raqami kamida 9 raqamdan iborat bo\'lishi kerak.';
    return;
  }

  try {
    const botToken = '7413837814:AAH_digtzqedt62JUZ67jPxIk79QPnh7bkY';
    const chatId = -1002279051758;
    const message = `
      Ism: ${form.value.name}
      Email: ${form.value.email}
      Telefon: ${form.value.phone}
      Xabar: ${form.value.message}
    `;
    
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message
    });
    errorMessage.value = '';
    toast.success('Ma\'lumotlaringiz muvaffaqiyatli yuborildi!');

    form.value.name = '';
    form.value.email = '';
    form.value.phone = '';
    form.value.message = '';
  }
  catch (error) {
    toast.error('Xatolik yuz berdi. Qayta urinib ko\'ring.');
  } 
  finally {
    loading.value = false;
  }
}
</script>


<style scoped>
.contact-main-block {
  height: 430px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/contactImg.jpg');
}
</style>
