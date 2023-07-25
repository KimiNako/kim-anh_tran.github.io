<template>
  <div>
    <Home/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Hobbies/>
    <Contact/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Portfolio from '@/components/Portfolio.vue';
import Hobbies from '@/components/Hobbies.vue';
import Contact from '@/components/Contact.vue';

@Options({
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Hobbies,
    Contact
  },
})
export default class Main extends Vue {}
</script>
