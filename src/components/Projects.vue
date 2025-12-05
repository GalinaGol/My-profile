<template>
    <section id="projects" class="py-20">
      <div class="mx-auto md:w-3/4 sm:w-full px-6 container">
        <h2 class="text-3xl md:text-4xl font-bold dark:text-light text-primary mb-10 text-center">
          Projects
        </h2>
  
        <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-8">
           
           <div class="bg-white dark:bg-light rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
              <h4 class="text-xl font-semibold text-gray-700 dark:text-primary mb-2">Web site for parking payment</h4>
              <ol class="list-decimal pl-6 space-y-4 text-gray-500 mb-6">
                 <li>
                    Delivered a Vue 3 + TypeScript architecture (Pinia stores, composables) with strict
                    typing and modular code.
                 </li>
                 <li>
                    Built SPA navigation with Vue Router, including route guards, lazy-loaded routes, and fallback handling to improve performance and security.
                 </li>
                 <li>
                    Integrated payments via NMI
                    Collect.js (cards) plus Apple Pay / Google Pay: wallet availability
                    checks.
                 </li>
                 <li>
                    Implemented sensitive data encryption using CryptoJS, ensuring secure transmission of payment and user information.
                 </li>
              </ol>
              <div class="flex flex-wrap gap-2 mb-4">
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue.js 3</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">TypeScript</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Pinia</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">VueRouter</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vite</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Crypto.js</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">NMI Collect.js</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue-i18n</span>
                 <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">REST API</span>
              </div>
           </div>
          <div class="bg-white dark:bg-light rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-semibold text-gray-700 dark:text-primary mb-2">Web application for managing and booking artist services</h4>
            <ol class="list-decimal pl-6 space-y-4 text-gray-500 mb-6">
                <li>
                    Designed and implemented a custom interactive calendar for managing schedules, including advanced features like time zone handling, time slot creation, and dynamic event updates.
                </li>
                <li>
                    Developed a content management system (CMS) for administrators.                
                </li>
                <li>
                    Utilized Pinia for state management.
                </li>
                <li>
                    Implemented i18n (Vue-i18n) for multi-language support, ensuring seamless localization and dynamic content translation.
                </li>
            </ol>
             <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue.js 3</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Pinia</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">VueRouter</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vite</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Git</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue-i18n</span>
             </div>
          </div>
  
          <div class="bg-white dark:bg-light rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-semibold text-gray-700 dark:text-primary mb-2">CRM system for security company</h4>
            
            <ol class="list-decimal pl-6 space-y-4 text-gray-500 mb-6">
                <li>
                    Designed and implemented complex modules, such as time slot creation tools, dynamic schedule, custom calendar.
                </li>
                <li>
                    Implemented WebSockets to enable real-time communication for the chat.                
                </li>
                <li>
                    Developed custom UI components to meet specific business requirements, ensuring high usability and a modern look.
                </li>
                <li>
                    Worked extensively with server-side rendering (SSR) using Blade templates.
                </li>
            </ol>
             <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue.js 3</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vuex</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Webpack</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Docker</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Git</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">SSR (PHP Blade)</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Bootstrap</span>
                
             </div>
          </div>
  
          <div class="dark:bg-light bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-semibold text-gray-700 dark:text-primary mb-2">Online store (e-commerce)</h4>
            <p class="text-gray-500 mb-6 whitespace-pre-line">Site is currently unavailable</p>
            <ol class="list-decimal pl-6 space-y-4 text-gray-500 mb-6">
                <li>
                    Refactored legacy code to improve maintainability, performance, and readability, adhering to modern development best practices.
                </li>
                <li>
                    Worked extensively with Vuex for state management.
                </li>
                <li>
                    Implemented product browsing, filtering, cart, order management, and custom discount & volume calculator for items with specific attributes.                </li>
                <li>
                    Integrated Google Maps API for seamless address autocomplete functionality.
                </li>
            </ol>
             <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue.js 2</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vuex</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Webpack</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Docker</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Git</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">VueRouter</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vuetify</span>
             
             </div>
          </div>
          
          <div class="dark:bg-light bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h4 class="text-xl font-semibold text-gray-700 dark:text-primary mb-2">TravelMates</h4>
            <p class="text-gray-500 mb-6 whitespace-pre-line">TravelMates is my pet project — a single-page application for travelers to manage their profile, share posts, mark visited countries on a map, and plan future trips 🗺.</p>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vue.js 3</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">TypeScript</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Pinia</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">VueRouter</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vite</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Tailwind CSS</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Node.js (Express.js)</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">MongoDB</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Multer</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Vercel</span>
                <span class="px-3 py-1 text-sm bg-primary/20 text-primary-light rounded-full">Render</span>
            </div>
            <div class="flex gap-4">
                <a href="https://travel-mates-project.vercel.app" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-primary-light hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-4 h-4">
                        <path d="M15 3h6v6"></path><path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    Demo
                </a>
                </div>
          </div>
          
        </div>
      </div>
    </section>
  </template>

<script setup>
</script>
