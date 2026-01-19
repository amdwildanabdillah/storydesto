<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Process from './components/Process.vue';
import Portfolio from './components/Portfolio.vue';
import Testimonials from './components/Testimonials.vue';
import MegaFooter from './components/MegaFooter.vue';
import MusicPlayer from './components/MusicPlayer.vue';

// Loading Screen Logic
const isLoading = ref(true);

onMounted(() => {
    // Simulasi loading sebentar biar animasinya kelihatan
    setTimeout(() => {
        isLoading.value = false;
    }, 1500);
});
</script>

<template>
  <div class="font-['Poppins'] text-[#333] bg-[#FAFAFA] antialiased overflow-x-hidden">
    
    <div class="loader-wrapper" :class="{ 'loader-hidden': !isLoading }">
        <div class="loader-logo">Storydesto<span class="text-[#D4AF37]">.</span></div>
    </div>

    <Navbar />
    <Hero />
    <Services />
    <Process />
    <Portfolio />
    <Testimonials />
    <MegaFooter />
    <MusicPlayer />
  </div>
</template>