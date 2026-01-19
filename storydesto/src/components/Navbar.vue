<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>

<template>
    <nav class="sticky top-0 z-[1000] bg-[#FAFAFA]/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-6">
        <div class="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center">
            <a href="#" class="text-[1.5rem] font-bold text-[#2D2D2D]">Storydesto<span class="text-[#D4AF37]">.</span></a>
            
            <ul class="hidden md:flex gap-8 items-center list-none">
                <li><a href="#home" class="font-medium text-[#2D2D2D] hover:text-[#D4AF37] transition-all duration-300">Home</a></li>
                <li><a href="#services" class="font-medium text-[#2D2D2D] hover:text-[#D4AF37] transition-all duration-300">Layanan</a></li>
                <li><a href="#process" class="font-medium text-[#2D2D2D] hover:text-[#D4AF37] transition-all duration-300">Proses</a></li>
                <li><a href="#portfolio" class="font-medium text-[#2D2D2D] hover:text-[#D4AF37] transition-all duration-300">Portofolio</a></li>
            </ul>

            <div class="md:hidden text-[1.8rem] cursor-pointer text-[#2D2D2D]" @click="isMenuOpen = !isMenuOpen">
                <i :class="isMenuOpen ? 'ph-x' : 'ph-list'" class="ph"></i>
            </div>
        </div>

        <ul v-if="isMenuOpen" class="md:hidden absolute top-[70px] right-0 bg-white w-full flex flex-col p-8 shadow-lg gap-4 list-none">
            <li><a href="#home" class="block text-[#2D2D2D]" @click="isMenuOpen=false">Home</a></li>
            <li><a href="#services" class="block text-[#2D2D2D]" @click="isMenuOpen=false">Layanan</a></li>
            <li><a href="#process" class="block text-[#2D2D2D]" @click="isMenuOpen=false">Proses</a></li>
            <li><a href="#portfolio" class="block text-[#2D2D2D]" @click="isMenuOpen=false">Portofolio</a></li>
        </ul>
    </nav>
</template>