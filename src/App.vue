<template>
  <v-app>
    <v-main>  
      <nav>
        <router-link :to="{ path: '/', hash: '#home' }" :class="{active : !$route.hash || $route.hash == '#home'}">{{ $t('nav.home') }}</router-link>
        <router-link :to="{ path: '/', hash: '#about' }" :class="{active : $route.hash == '#about'}">{{ $t('nav.about') }}</router-link>
        <router-link :to="{ path: '/', hash: '#skills' }" :class="{active : $route.hash == '#skills'}">{{ $t('nav.skills') }}</router-link>
        <router-link :to="{ path: '/', hash: '#portfolio' }" :class="{active : $route.hash == '#portfolio'}">{{ $t('nav.portfolio') }}</router-link>
        <router-link :to="{ path: '/', hash: '#hobbies' }" :class="{active : $route.hash == '#hobbies'}">{{ $t('nav.hobbies') }}</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" :class="{active : $route.hash == '#contact'}">{{ $t('nav.contact') }}</router-link>
      </nav>
      <LanguageDropdown/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LanguageDropdown from '@/components/LanguageDropdown.vue';
</script>

<style lang="scss">
@import '@/styles/global.scss';
.active {
  color: map-get($theme-color, "blue");
}
</style>

<!--
  trad
  Responsive mobile
-->
