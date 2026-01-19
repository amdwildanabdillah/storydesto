<template>
    <section id="home" class="py-16 min-h-[90vh] flex items-center overflow-hidden">
        <div class="w-[90%] max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            <div class="text-center md:text-left order-2 md:order-1" data-aos="fade-right">
                <h3 class="text-[#D4AF37] font-semibold mb-2 text-[1.17em]">Halo, kami Storydesto 👋</h3>
                <h1 class="text-[3.5rem] leading-[1.2] font-bold mb-6 text-[#2D2D2D]">
                    Abadikan Momen <br> 
                    <span class="bg-gradient-to-r from-[rgba(212,175,55,0.2)] to-transparent">Wisuda Terbaikmu</span>
                </h1>
                <p class="text-[#333] mb-8 leading-[1.6]">Jasa fotografi wisuda profesional. Kami membantu kamu mengenang momen kelulusan dengan gaya yang estetik dan tak terlupakan.</p>
                <div class="flex gap-4 justify-center md:justify-start mt-8">
                    <a href="https://wa.me/6281336695453" target="_blank" class="bg-[#2D2D2D] text-white px-[30px] py-[12px] rounded-full flex items-center gap-2 hover:bg-[#D4AF37] hover:-translate-y-1 transition-all duration-300 font-medium">
                        <i class="ph ph-whatsapp-logo text-xl"></i> Booking Sekarang
                    </a>
                    <a href="/assets/pricelist.pdf" target="_blank" class="border border-[#ccc] text-[#333] px-[30px] py-[12px] rounded-full flex items-center gap-2 hover:border-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white transition-all duration-300">
                        <i class="ph ph-file-pdf text-xl"></i> Pricelist
                    </a>
                </div>
            </div>
            
            <div class="order-1 md:order-2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
                <div class="relative w-[280px] h-[500px] md:w-[320px] md:h-[570px] rounded-[30px] shadow-[20px_20px_0px_#D4AF37] overflow-hidden mx-auto bg-black">
                    <video autoplay muted loop playsinline class="w-full h-full object-cover object-center block">
                        <source src="/assets/hero/hero.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>