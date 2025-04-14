<template>
   <header class="flex justify-between items-center p-6 dark:bg-[#111827] bg-white bg-opacity-50 dark:bg-opacity-50  bg-dark/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
        <div class="dark:text-light text-primary text-3xl font-bold ">{ Holovchenko.js }</div>

        <div class="md:hidden z-30">
            <button 
            type="button" 
            class="block focus:outline-none"
            @click="isMenuOpen = !isMenuOpen"
            >
                <span v-if="isMenuOpen" class="text-5xl">
                    <img alt="close" src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" width="50" height="50">
                </span>
                <span v-else class="text-5xl">
                    <img alt="menu" src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" width="50" height="50">
                </span>
            </button>
        </div>
           

            <nav :class="['fixed inset-0 z-20 flex flex-col items-center justify-center md:relative md:bg-transperent md:flex md:justify-between md:flex-row',
        isMenuOpen ?  'block' : 'hidden']">
                <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <li v-for="link in navigation" :key="link.name">
                        <a 
                        :href="link.href" 
                        class="block dark:text-light text-primary transition hover:text-primary ease-linear text-2xl md:text-lg"  
                        @click="scrollToSection(link.href)"
                        > {{ link.name }}
                    </a>
                    </li>
                </ul>
                <button @click="toggleTheme" class="px-6 rounded-md">
                    <span v-if="isDark">🌙</span>
                    <span v-else>☀️</span>
            </button>
            </nav>
   </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useDarkMode } from "@/composables/useDarkMode";

  
  const navigation = ref([
    { name: 'About', href: '#about', current: true },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Technologies', href: '#technologies', current: false },
    { name: 'Contacts', href: '#contacts', current: false },
   
  ])

  const isMenuOpen = ref(false)
  const scrollToSection = (href) => {
    isMenuOpen.value = false
    const section = document.querySelector(href);
    if(section) {
        section.scrolIntoView({behavior : 'smooth'})
    }
  }


    const { isDark, toggleTheme } = useDarkMode();
  </script>