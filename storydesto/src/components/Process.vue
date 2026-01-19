<template>
    <section id="process" class="bg-[#1a1a1a] text-white py-20">
        <div class="w-[90%] max-w-[1200px] mx-auto">
            <h2 class="text-[2.5rem] mb-12 text-white text-center font-bold">Cara Order</h2>
            <div class="flex flex-col md:flex-row justify-between gap-8 mt-12 flex-wrap">
                <div class="flex-1 text-center min-w-[200px]" v-for="(step, idx) in ['Diskusi', 'Booking', 'Pemotretan', 'File Jadi']" :key="idx">
                    <span class="text-[4rem] font-bold text-white/10 block -mb-5">0{{ idx + 1 }}</span>
                    <h3 class="text-[1.5rem] mb-2 text-[#D4AF37] font-semibold">{{ step }}</h3>
                    <p class="text-[0.9rem] text-[#ccc]">
                        {{ ['Chat admin untuk cek jadwal', 'Isi form data diri & DP', 'Sesi foto seru bareng kami', 'File diedit & dikirim GDrive'][idx] }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>