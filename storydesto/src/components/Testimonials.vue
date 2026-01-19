<template>
    <section id="testimonials" class="py-20 bg-white text-center">
        <div class="w-[90%] max-w-[1200px] mx-auto">
            <h2 class="text-[2.5rem] mb-12 text-[#2D2D2D] font-bold">Kata Mereka</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div class="bg-[#FAFAFA] p-8 rounded-[15px] border border-[#eee] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-[#D4AF37] transition-all duration-300 text-left">
                    <div class="text-[#FFD700] text-[1.2rem] mb-4 flex"><i class="ph-fill ph-star" v-for="s in 5" :key="s"></i></div>
                    <p class="italic text-[#555] mb-6 text-[0.95rem]">"Sumpah suka banget sama hasilnya ! Awalnya kaku banget ga bisa gaya, tapi diarahin sama fotografernya jadi luwes. Makasih Storydesto!"</p>
                    <div class="flex items-center gap-4">
                        <img src="https://ui-avatars.com/api/?name=Ikaynl&background=D4AF37&color=fff" class="w-[50px] h-[50px] rounded-full object-cover">
                        <div><h4 class="text-[1rem] text-[#2D2D2D] font-bold">Ikaynl</h4><span class="text-[0.85rem] text-[#888]">UNAIR 2024</span></div>
                    </div>
                </div>
                 <div class="bg-[#FAFAFA] p-8 rounded-[15px] border border-[#eee] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-[#D4AF37] transition-all duration-300 text-left">
                    <div class="text-[#FFD700] text-[1.2rem] mb-4 flex"><i class="ph-fill ph-star" v-for="s in 5" :key="s"></i></div>
                    <p class="italic text-[#555] mb-6 text-[0.95rem]">"Tone warnanya cakep parah, warm aesthetic gitu. Mas-nya juga asik diajak ngobrol jadi sesi fotonya ga tegang. Recommended!"</p>
                    <div class="flex items-center gap-4">
                        <img src="https://ui-avatars.com/api/?name=Syahrulabdn&background=D4AF37&color=fff" class="w-[50px] h-[50px] rounded-full object-cover">
                        <div><h4 class="text-[1rem] text-[#2D2D2D] font-bold">Syahrulabdn</h4><span class="text-[0.85rem] text-[#888]">UNESA 2025</span></div>
                    </div>
                </div>
                 <div class="bg-[#FAFAFA] p-8 rounded-[15px] border border-[#eee] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:border-[#D4AF37] transition-all duration-300 text-left">
                    <div class="text-[#FFD700] text-[1.2rem] mb-4 flex"><i class="ph-fill ph-star" v-for="s in 5" :key="s"></i></div>
                    <p class="italic text-[#555] mb-6 text-[0.95rem]">"Foto grup sekelas jadi rusuh tapi seru banget! Hasilnya tajem, ga ada yang blur. File-nya juga cepet dikirimnya. Mantap!"</p>
                    <div class="flex items-center gap-4">
                        <img src="https://ui-avatars.com/api/?name=Tim+Hore&background=D4AF37&color=fff" class="w-[50px] h-[50px] rounded-full object-cover">
                        <div><h4 class="text-[1rem] text-[#2D2D2D] font-bold">Tim Hore</h4><span class="text-[0.85rem] text-[#888]">UINSA 2025</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>