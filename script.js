// =========================================
// 1. HAMBURGER MENU (NAVIGASI HP)
// =========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Ubah icon hamburger jadi X
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
        } else {
            icon.classList.replace('ph-x', 'ph-list');
        }
    });
}

// =========================================
// 2. SMOOTH SCROLL (SAAT KLIK MENU)
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Tutup menu mobile jika sedang terbuka (UX yang baik)
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            if (icon) icon.classList.replace('ph-x', 'ph-list');
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// =========================================
// 3. FITUR GALERI FOTO (LOGIKA PILIH / SELECT)
// =========================================
function gantiFoto(thumbnail) {
    // 1. Cari wadah galeri terdekat dari foto yang diklik
    const container = thumbnail.closest('.gallery-container');
    
    // 2. Cari foto utama (besar) di dalam wadah tersebut
    const mainPhoto = container.querySelector('.main-photo');

    // 3. Ubah Foto Besar sesuai Thumbnail yang diklik
    // (Thumbnailnya sendiri DIAM DI TEMPAT, tidak tukar posisi)
    mainPhoto.src = thumbnail.src;

    // 4. Efek Visual: Pindahkan Border Emas ke thumbnail yang diklik
    // Hapus class 'active' dari semua thumbnail lain di grup ini
    const allThumbs = container.querySelectorAll('.thumb');
    allThumbs.forEach(thumb => thumb.classList.remove('active'));
    
    // Tambah class 'active' ke thumbnail yang baru diklik
    thumbnail.classList.add('active');
}

// =========================================
// 4. FITUR MUSIK (TOGGLE PLAY/PAUSE)
// =========================================
const music = document.getElementById('backsound');
const musicBtn = document.querySelector('.music-btn');
const musicIcon = document.getElementById('music-icon');

function toggleMusic() {
    if (music.paused) {
        // Kalau lagi mati, nyalakan
        music.play();
        musicBtn.classList.add('playing'); // Tambah efek muter
        musicIcon.classList.replace('ph-speaker-slash', 'ph-speaker-high'); // Ganti ikon
    } else {
        // Kalau lagi nyala, matikan
        music.pause();
        musicBtn.classList.remove('playing'); // Hapus efek muter
        musicIcon.classList.replace('ph-speaker-high', 'ph-speaker-slash'); // Balikin ikon
    }
}

// Opsional: Coba nyalain otomatis saat user klik APAPUN pertama kali di web
// (Trik biar autoplay jalan setelah interaksi)
document.addEventListener('click', function firstClick() {
    toggleMusic(); // Nyalakan musik
    document.removeEventListener('click', firstClick); // Hapus event ini biar ga toggle terus
}, { once: true });

// =========================================
// 5. FORM KE WHATSAPP (LOGIKA KIRIM)
// =========================================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah halaman reload

        // 1. Ambil Data dari Form
        const nama = document.getElementById('nama').value;
        const kampus = document.getElementById('kampus').value;
        const tanggal = document.getElementById('tanggal').value;
        const pesan = document.getElementById('pesan').value;

        // 2. Format Pesan WhatsApp (Ganti Baris pakai %0A)
        const nomorWA = "6281336695453"; // Nomor Storydesto (Tanpa +)
        
        let textWA = `Halo Admin Storydesto, saya ingin booking foto wisuda.%0A%0A`;
        textWA += `👤 *Nama:* ${nama}%0A`;
        textWA += `🎓 *Kampus:* ${kampus}%0A`;
        textWA += `📅 *Tanggal:* ${tanggal}%0A`;
        textWA += `📝 *Pesan:* ${pesan}%0A%0A`;
        textWA += `Mohon info ketersediaan slotnya ya kak. Terima kasih!`;

        // 3. Buka WhatsApp
        const url = `https://wa.me/${nomorWA}?text=${textWA}`;
        window.open(url, '_blank');
    });
}