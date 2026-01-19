<script setup>
import { ref, onMounted } from 'vue';

const isPlaying = ref(false);
const audioRef = ref(null);

// 1. Logic Manual (Tombol ditekan)
const toggleMusic = () => {
    if (!audioRef.value) return;
    
    if (isPlaying.value) {
        audioRef.value.pause();
    } else {
        audioRef.value.play();
    }
    isPlaying.value = !isPlaying.value;
};

// 2. Logic Auto Play (Klik Layar Sekali Saja)
onMounted(() => {
    const startAudio = () => {
        // Cek dulu, audionya ada gak? Kalo udah nyala, gak usah nyalain lagi
        if (audioRef.value && !isPlaying.value) {
            audioRef.value.play()
                .then(() => {
                    // Kalau sukses play, update status jadi true
                    isPlaying.value = true;
                    // PENTING: Hapus listener biar gak jalan terus tiap user ngeklik
                    document.removeEventListener('click', startAudio);
                })
                .catch(err => {
                    // Kalau browser nolak (biasanya karena belum ada interaksi user), biarin aja
                    console.log("Menunggu interaksi user untuk play audio...");
                });
        }
    };

    // Pasang jebakan klik di seluruh layar
    document.addEventListener('click', startAudio);
});
</script>

<template>
    <div>
        <audio ref="audioRef" loop>
            <source src="/assets/audio/ls.mp3" type="audio/mp3">
        </audio>

        <div @click.stop="toggleMusic" :class="{'border-[#25D366] animate-[spin_3s_linear_infinite]': isPlaying}" class="fixed bottom-8 left-8 w-[50px] h-[50px] bg-white border-2 border-[#D4AF37] rounded-full flex items-center justify-center cursor-pointer z-[9999] shadow-lg hover:scale-110 transition-all duration-300">
            <i :class="isPlaying ? 'ph-speaker-high' : 'ph-speaker-slash'" class="ph text-[1.5rem] text-[#D4AF37]"></i>
        </div>
    </div>
</template>