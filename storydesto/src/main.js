import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inisialisasi AOS
AOS.init({
    duration: 800, // Durasi animasi (ms)
    easing: 'ease-out-cubic', // Gaya gerakan
    once: true, // Animasi cuma sekali (biar ga pusing naik turun)
    offset: 50, // Trigger animasi sedikit lebih awal
});

createApp(App).mount('#app')