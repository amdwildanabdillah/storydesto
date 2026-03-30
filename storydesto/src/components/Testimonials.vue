<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../supabase';

const testimonials = ref([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('storydesto_content')
            .select('*')
            .eq('type', 'testimonial')
            .eq('is_pinned', true)
            .order('sort_order', { ascending: true }); // Biar urutannya sesuai yang lu atur di Admin

        if (error) throw error;
        
        if (data) {
            testimonials.value = data;
        }
    } catch (error) {
        console.error('Gagal narik data testimoni:', error.message);
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <section id="testimonials" class="py-20 bg-white text-center">
        <div class="w-[90%] max-w-[1200px] mx-auto">
            <h2 class="text-[2.5rem] mb-12 text-[#2D2D2D] font-bold">Kata Mereka</h2>
            
            <div v-if="isLoading" class="flex justify-center py-10">
                <i class="ph ph-spinner-gap text-4xl animate-spin text-[#D4AF37]"></i>
            </div>

            <div v-else-if="testimonials.length === 0" class="py-10 text-[#666]">
                Belum ada ulasan yang ditampilkan.
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                
                <div v-for="testi in testimonials" :key="testi.id" class="bg-[#FAFAFA] p-8 rounded-[15px] border border-[#eee] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-[#D4AF37] transition-all duration-300 text-left">
                    <div class="text-[#FFD700] text-[1.2rem] mb-4 flex">
                        <i class="ph-fill ph-star" v-for="s in 5" :key="s"></i>
                    </div>
                    
                    <p class="italic text-[#555] mb-6 text-[0.95rem]">"{{ testi.description }}"</p>
                    
                    <div class="flex items-center gap-4">
                        <img :src="`https://ui-avatars.com/api/?name=${encodeURIComponent(testi.title || 'User')}&background=D4AF37&color=fff`" class="w-[50px] h-[50px] rounded-full object-cover">
                        <div>
                            <h4 class="text-[1rem] text-[#2D2D2D] font-bold">{{ testi.title }}</h4>
                            <span class="text-[0.85rem] text-[#888]">{{ testi.subtitle }}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>