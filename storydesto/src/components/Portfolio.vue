<script setup>
import { ref } from 'vue';

const clients = ref([
  {
    name: 'Syahrulabdn',
    campus: 'Universitas Negeri Surabaya',
    activeImage: '/assets/syahdrulabdn/1.jpg',
    images: ['/assets/syahdrulabdn/1.jpg', '/assets/syahdrulabdn/2.jpg', '/assets/syahdrulabdn/3.jpg', '/assets/syahdrulabdn/4.jpg', '/assets/syahdrulabdn/5.jpg', '/assets/syahdrulabdn/6.jpg']
  },
  {
    name: 'ikaynl',
    campus: 'Universitas Airlangga',
    activeImage: '/assets/ikaynl/1.jpg',
    images: ['/assets/ikaynl/1.jpg', '/assets/ikaynl/2.jpg', '/assets/ikaynl/3.jpg', '/assets/ikaynl/4.jpg', '/assets/ikaynl/5.jpg']
  },
  {
    name: 'Ade Happy',
    campus: 'Universitas Negeri Sunan Ampel Surabaya',
    activeImage: '/assets/happy/1.jpg',
    images: ['/assets/happy/1.jpg', '/assets/happy/2.jpg', '/assets/happy/3.jpg', '/assets/happy/4.jpg', '/assets/happy/5.jpg']
  },
  {
    name: 'Group Session',
    campus: 'Magister Studi Islam',
    activeImage: '/assets/group-session/1.jpg',
    images: ['/assets/group-session/1.jpg', '/assets/group-session/2.jpg', '/assets/group-session/3.jpg', '/assets/group-session/4.jpg', '/assets/group-session/5.jpg', '/assets/group-session/6.jpg']
  }
]);
</script>

<template>
    <section id="portfolio" class="pt-20 pb-[150px]">
        <div class="w-[90%] max-w-[1200px] mx-auto text-center">
            <h2 class="text-[2.5rem] mb-1 text-[#2D2D2D] font-bold" data-aos="fade-up">Portfolio</h2>
            <p class="mb-4 text-[#666] max-w-[600px] mx-auto" data-aos="fade-up" data-aos-delay="100">Geser untuk melihat momen momen bahagia wisudawan lainnya.</p>

            <div class="flex flex-col gap-[60px] max-w-[800px] mx-auto mt-20">
                <div v-for="(client, index) in clients" :key="index" class="bg-white p-8 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300" data-aos="fade-up">
                    <div class="text-center mb-6 border-b-2 border-[#f0f0f0] pb-4">
                        <h3 class="text-[1.8rem] text-[#2D2D2D] font-bold mb-1">{{ client.name }}</h3>
                        <p class="text-[1rem] text-[#777]">{{ client.campus }}</p>
                    </div>

                    <div class="w-full flex flex-col items-center gap-4">
                        
                        <div class="w-full aspect-[4/5] rounded-[15px] overflow-hidden bg-[#f5f5f5] relative">
                            <Transition name="photo" mode="out-in">
                                <img 
                                    :key="client.activeImage"
                                    :src="client.activeImage" 
                                    class="w-full h-full object-cover object-top cursor-pointer"
                                    alt="Foto Wisuda"
                                >
                            </Transition>
                        </div>

                        <div class="flex gap-2 justify-center w-full overflow-x-auto py-2">
                            <img v-for="img in client.images" :key="img" :src="img" 
                                @click="client.activeImage = img" 
                                class="w-[70px] h-[70px] object-cover rounded-[10px] cursor-pointer border-2 border-transparent transition-all duration-300 hover:opacity-100 hover:scale-105 hover:border-[#D4AF37]" 
                                :class="client.activeImage === img ? 'opacity-100 border-[#D4AF37] scale-105' : 'opacity-60'"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>