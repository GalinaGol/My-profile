<template>
    <section id="about" class="py-20">
        <div class="mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold dark:text-light text-primary mb-6 text-center ">About me</h2>
                <p class="dark:text-gray-400 text-gray-600 mb-12 whitespace-pre-line text-center">
                   Frontend Developer with 3+ years of experience delivering scalable web applications.
                   Worked on commercial projects including CMS and CRM systems. Experienced in building products from scratch, maintaining and improving existing solutions, migrating from legacy versions, selecting the tech stack, and designing architecture for small-scale applications. I value responsibility above all.
                </p>
                <div>
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-light text-primary">Work expirience</h3>
                    <div 
                        class="space-y-8 mb-10" 
                        style="opacity: 1;" 
                        v-for="(works, index) in listOfWorks"
                        :key="index"
                        >
                        <div class="flex gap-4 group" style="opacity: 1; transform: none;">
                            <div
                                class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M9.156 50.582h37.688c4.851 0 7.265-2.344 7.265-7.148V20.629c0-4.781-2.414-7.149-7.265-7.149h-4.969v-1.476c0-4.57-2.273-6.586-6.61-6.586h-14.53c-4.102 0-6.633 2.016-6.633 6.586v1.476H9.156c-4.851 0-7.265 2.368-7.265 7.149v22.805c0 4.804 2.414 7.148 7.265 7.148m8.578-38.836c0-1.945 1.008-2.93 2.953-2.93h14.626c1.945 0 2.93.985 2.93 2.93v1.734h-20.51Zm-12.07 9.07c0-2.39 1.219-3.585 3.54-3.585h37.593c2.297 0 3.539 1.195 3.539 3.585v6.188H5.664Zm3.54 26.016c-2.321 0-3.54-1.172-3.54-3.586V30.52h13.078v1.454c0 1.922 1.102 3.023 3.047 3.023h12.422c1.922 0 3.047-1.102 3.047-3.023V30.52h13.078v12.726c0 2.414-1.242 3.586-3.539 3.586Z"/></svg>                            </div>
                            <div>
                                <h3 class="text-xl font-semibold dark:text-gray-300 text-primary mb-1 transition-colors">{{ works.position }}</h3>
                                <div class="text-sm text-primary mb-1">{{ works.terms }}</div>
                                <p class="dark:text-gray-400 text-gray-600">{{  works.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-6 mt-6 text-center dark:text-white text-primary">Education</h3>
                <div 
                    class="space-y-8 mb-10" 
                    style="opacity: 1;"
                     v-for="(education, index) in listOfEducation"
                     :key="index"
                     >
                        <div class="flex gap-4 group" style="opacity: 1; transform: none;">
                            <div
                                class="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M28.012 11.395c-1.805-2.25-6.235-4.243-11.157-4.243c-6.515 0-11.765 3.352-13.054 6.493v32.742c0 1.781 1.172 2.46 2.437 2.46c1.032 0 1.617-.304 2.25-.796c1.336-1.149 4.032-2.696 8.368-2.696c4.312 0 7.335 1.5 8.507 2.555c.61.492 1.36.938 2.649.938c1.265 0 1.992-.492 2.625-.938c1.242-.984 4.195-2.554 8.508-2.554c4.335 0 7.054 1.57 8.367 2.695c.633.492 1.219.797 2.25.797c1.266 0 2.437-.68 2.437-2.461V13.645c-1.289-3.141-6.539-6.493-13.054-6.493c-4.922 0-9.352 1.993-11.133 4.243M7.574 14.77c.54-1.454 3.938-4.079 9.282-4.079c5.32 0 8.789 2.649 9.257 4.079v29.648c-2.226-1.664-5.625-2.602-9.257-2.602c-3.657 0-7.055.938-9.282 2.696Zm40.852 0v29.742c-2.227-1.758-5.625-2.696-9.281-2.696c-3.633 0-7.032.938-9.258 2.602V14.77c.468-1.43 3.937-4.079 9.258-4.079c5.343 0 8.742 2.625 9.28 4.079"/></svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold dark:text-gray-300 text-primary mb-1 transition-colors"> {{  education.degree }}</h3>
                                <div class="text-sm text-primary mb-1"> {{ education.duration }}</div>
                                <p class="dark:text-gray-400 text-gray-600"> {{  education.university }}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</section>
</template>

<script setup>
import { ref } from 'vue';

const listOfEducation = ref([
    {
        university: 'Odesa State Environmental University',
        duration: '2019 - 2020 | Odesa',
        degree: 'Master Degree in Public Management and Administration'
     },
     {
        university: 'Odesa National Polytechnic University',
        duration: '2015 - 2019 | Odesa',
        degree: 'Bachelor degree in Engineering ecology'
     }
])

const listOfWorks = ref([
    {
        position: 'Front-end developer | DS xpress',
        terms: 'January 2024 - present time (remote, full-time)',
        description: 'Delivered a fully-typed Vue 3 + TypeScript architecture (Pinia, composables, route guards), integrated multilingual support (Vue-i18n), secure payments via NMI Collect.js with Apple/Google Pay, and a type-safe API. Also developed a CMS with drag-and-drop content management and a custom interactive scheduling calendar with advanced time-zone handling.'
    },
    {
        position: 'Front-end developer | Mobile Programming LLC',
        terms: 'November 2022 - January 2024',
        description: 'Worked on e-commerce features and CRM development for a security company. Optimized application performance through lazy loading, code splitting, and legacy code refactoring, while migrating from Vue 2 to Vue 3 without regression. Implemented WebSockets for real-time chat communication and worked with SSR using Blade templates to improve rendering and user experience.'
    }
])

</script>