<template>
    <section class="relative w-full" data-aos="zoom-in-up" id="herosection">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-40 w-full bg-gradient-to-r from-[#5374b1] blur-2xl opacity-50"></div>
            <div class="h-40 w-full bg-gradient-to-l from-[#5374b1] blur-2xl opacity-50"></div>
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
          
            <div class="grid lg:grid-cols-2 items-center gap-10 xl:gap-14 relative pt-24 max-w-2xl md:max-w-3xl lg:max-w-none mx-auto">
                
                <div class="flex justify-center">
                    <img src="/images/avatar.jpeg" alt="Avatar"
                        class="w-40 h-40 lg:w-64 lg:h-64 rounded-xl object-cover shadow-lg border-4 border-white">
                </div>

                <div class="text-center lg:text-left">
                    <h1 class="pt-4 dark:text-light text-primary font-bold text-2xl md:text-5xl lg:text-6xl ">
                        Hi, I am Halyna Holovchenko 👋
                    </h1>
                    <p class="dark:text-light text-dark-gray-300 pt-6 mx-auto lg:mx-0 max-w-xl">
                        I'm really happy you stopped by 🙌
                    </p>
                    

                    <div class="flex justify-center pt-9 xl:w-6/12 " >
  <button class="border border-primary px-6 md:px-7 py-3 rounded-full group w-full sm:w-auto max-w-xs flex justify-center">
    <a href="/files/Holovchenko_cv.pdf" download="Holovchenko_cv" class="text-primary">
      Download resume ⬇️
    </a>
  </button>
</div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos'

AOS.init()
</script>