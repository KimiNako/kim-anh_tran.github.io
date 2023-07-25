<template>
  <v-main>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ path: '/', hash: '#about' }">About me</router-link>
    <router-link :to="{ path: '/', hash: '#skills' }">Skills</router-link>
    <router-link :to="{ path: '/', hash: '#portfolio' }">Portfolio</router-link>
    <router-link :to="{ path: '/', hash: '#hobbies' }">Hobbies</router-link>
    <router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link>
  </nav>
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<style lang="scss">
@import '@/styles/global.scss';
</style>