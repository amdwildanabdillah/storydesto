<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../supabase'; // Pastiin file supabase.js lu udah bener path-nya

const clients = ref([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        const { data, error } = await supabase
            .from('storydesto_content')
            .select('*')
            .eq('type', 'portfolio') // Ambil yang tipenya portfolio doang
            .eq('is_pinned', true)   // Ambil yang di-pin doang
            .order('sort_order', { ascending: true }); // Urutin sesuai angka dari CMS

        if (error) throw error;

        if (data) {
            // Kita mapping datanya biar cocok sama struktur template HTML lo
            clients.value = data.map(item => {
                return {
                    name: item.title,
                    campus: item.subtitle,
                    // Set gambar pertama sebagai active, kalau kosong ya pake string kosong
                    activeImage: item.images && item.images.length > 0 ? item.images[0] : '',
                    images: item.images || []
                }
            });
        }
    } catch (error) {
        console.error('Gagal narik data portfolio:', error.message);
    } finally {
        isLoading.value = false;
    }
});
</script>

<template>
    <section id="portfolio" class="pt-20 pb-[150px]">
        <div class="w-[90%] max-w-[1200px] mx-auto text-center">
            <h2 class="text-[2.5rem] mb-1 text-[#2D2D2D] font-bold" data-aos="fade-up">Portfolio</h2>
            <p class="mb-4 text-[#666] max-w-[600px] mx-auto" data-aos="fade-up" data-aos-delay="100">Geser untuk melihat momen momen bahagia wisudawan lainnya.</p>

            <div v-if="isLoading" class="flex justify-center items-center py-20">
                <i class="ph ph-spinner-gap text-4xl animate-spin text-[#D4AF37]"></i>
            </div>

            <div v-else-if="clients.length === 0" class="py-20 text-[#666]">
                Belum ada portofolio yang ditampilkan.
            </div>

            <div v-else class="flex flex-col gap-[60px] max-w-[800px] mx-auto mt-20">
                <div v-for="(client, index) in clients" :key="index" class="bg-white p-8 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300" data-aos="fade-up">
                    <div class="text-center mb-6 border-b-2 border-[#f0f0f0] pb-4">
                        <h3 class="text-[1.8rem] text-[#2D2D2D] font-bold mb-1">{{ client.name }}</h3>
                        <p class="text-[1rem] text-[#777]">{{ client.campus }}</p>
                    </div>

                    <div class="w-full flex flex-col items-center gap-4">
                        
                        <div class="w-full aspect-[4/5] rounded-[15px] overflow-hidden bg-[#f5f5f5] relative">
                            <Transition name="photo" mode="out-in">
                                <img 
                                    v-if="client.activeImage"
                                    :key="client.activeImage"
                                    :src="client.activeImage" 
                                    class="w-full h-full object-cover object-top cursor-pointer"
                                    alt="Foto Wisuda"
                                >
                                <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                                    <i class="ph ph-image text-4xl"></i>
                                </div>
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