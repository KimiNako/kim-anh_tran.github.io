<template>
  <v-app>
    <v-main>
      <div class="d-flex d-md-none">
        <v-app-bar height="90px"><v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon></v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          temporary
          class="py-5"
        >
          <v-list>
            <v-list-item
              class="my-4"
              v-for="route in routes" 
              :key=route
            >
            <router-link
              :to="{ path: '/', hash: `#${route}` }"
              :class="{active : !$route.hash && route === 'home' || $route.hash === `#${route}`}"
            >
              {{ $t(`nav.${route}`) }}
            </router-link>
            </v-list-item>
          </v-list> 
        </v-navigation-drawer>
      </div>

      <nav class="d-none d-md-flex">
        <router-link 
          v-for="route in routes" 
          :key=route 
          :to="{ path: '/', hash: `#${route}` }" 
          :class="{active : !$route.hash && route === 'home' || $route.hash === `#${route}`}"
        >
          {{ $t(`nav.${route}`) }}
        </router-link>
      </nav>
      <LanguageDropdown/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import LanguageDropdown from '@/components/LanguageDropdown.vue';
export default {
  components: {
    LanguageDropdown
  },
  data: () => ({
      drawer: false,
      routes: ['home', 'about', 'skills', 'portfolio', 'hobbies', 'contact' ]
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/global.scss';

.v-toolbar, .v-toolbar__content {
    height: 90px;
    z-index: 1 !important;
}
nav, .nav {
    align-items: center;
    background: white;
    display: flex;
    height: 90px;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 1;
}

nav a, .nav a {
    color: map-get($theme-color, "grey");
    font-size: 13px;
    margin: 0 23px;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: map-get($theme-color, "blue");
    }
}

.active {
  color: map-get($theme-color, "blue");
}
</style>

<!-- TODO
  Responsive mobile : loisir, portoflio 
  Arrow loisirs dessin
-->
