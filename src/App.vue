<template>
  <div class="dark:bg-[#111827] bg-light min-h-screen">
      <NavBar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contacts/>
  </div>
 
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(()=> import('@/components/NavBar.vue'))
const HeroSection = defineAsyncComponent(()=> import('@/components/HeroSection.vue'))
const About = defineAsyncComponent(()=> import('@/components/About.vue'))
const Technologies = defineAsyncComponent(()=> import('@/components/Technologies.vue'))
const Projects = defineAsyncComponent(()=> import('@/components/Projects.vue'))
const Contacts = defineAsyncComponent(() => import('@/components/Contacts.vue'))
</script>

