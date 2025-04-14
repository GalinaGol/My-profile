<template>
    <header class="fixed top-0 left-0 right-0 z-50 dark:bg-[#111827] bg-white bg-opacity-50 dark:bg-opacity-50  bg-dark/80 backdrop-blur-sm ">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="dark:text-light text-primary text-3xl font-bold ">{ Holovchenko.js }</a>
          <div class="hidden md:flex items-center space-x-8">
            <a 
            v-for="link in navigation" 
            :key="link.name" 
            :href="link.href" 
            class="block dark:text-light text-primary transition hover:text-primary ease-linear text-2xl md:text-lg"  
            >
              {{ link.name }}
            </a>
            <button @click="toggleTheme" class="text-xl">
              <span v-if="isDark">🌙</span>
              <span v-else>☀️</span>
            </button>
          </div>
  
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-secondary transition-colors text-primary"
          >
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </button>
        </div>
  
        <transition name="fade">
          <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-4">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="block py-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              @click="handleLinkClick"
            >
              {{ link.name }}
            </a>
            <div class="pt-2">
              <button @click="toggleTheme" class="text-2xl">
                <span v-if="isDark">🌙</span>
                <span v-else>☀️</span>
              </button>
            </div>
          </div>
        </transition>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useDarkMode } from '@/composables/useDarkMode'
  
  const { isDark, toggleTheme } = useDarkMode()
  const isMenuOpen = ref(false)
  
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contacts' }
  ]
  
  const handleLinkClick = () => {
    isMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>
  