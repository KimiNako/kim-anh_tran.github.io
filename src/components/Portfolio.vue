<template>
	<section id="portfolio">
    <div class="pa-4 portfolio-container">
      <h2 class="section-title">{{ $t('portfolio.title') }}</h2>
        <v-tabs
          v-model="filter"
          color="light-blue-accent-3"
          align-tabs="center"
        >
          <v-tab v-for="tab in tabs" :key="tab" :value="tab">{{ $t(`portfolio.${tab}`) }}</v-tab>
        </v-tabs>

        <v-container fluid>
      <v-row>
        <TransitionGroup  name="list">
        <v-col
          v-for="item in filteredElements"
          :key="item.tag"
          class="pa-4"
        >
        <v-card
          width="400"
        >
          <v-img
            class="align-end text-white"
            height="200"
            :src="generateUrlImg(item.tag)"
            cover
          >
          </v-img>

          <v-card-title class="pt-4">
            {{ $t(`portfolio.project.${item.tag}.title`) }}
          </v-card-title>

          <v-card-text>
            <div>{{ $t(`portfolio.project.${item.tag}.description`) }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="light-blue-accent-3" :href="item.link" target=”_blank” >
              {{ $t(`portfolio.learn_more`) }}
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col></TransitionGroup >
      </v-row>
    </v-container>
    </div>
  </section>
</template>

<script lang="ts">
enum Theme {
  All = "all",
  Art = 'art',
  Project_management = 'project_management',
  Software_development = 'software_development',
}

export default {
    data () {
      return {
        dialog: false,
        tabs: [Theme.All, Theme.Art, Theme.Project_management, Theme.Software_development],
        projects: [
          {
            tag: 'wayc',
            theme: [Theme.Art, Theme.Project_management, Theme.Software_development],
            link: "https://store.steampowered.com/app/2416930/Where_are_you_Cinderella/",
          },
          {
            tag: 'piano',
            theme: [Theme.Art],
            link: "https://www.youtube.com/watch?v=aCM-XopXWkc"
          },
          {
            tag: 'codinsa',
            theme: [Theme.Art, Theme.Project_management, Theme.Software_development],
            link: "https://codinsa.org/"
          },
          {
            tag: 'santa_pumkin',
            theme: [Theme.Art, Theme.Project_management],
            link: "https://kiminako.itch.io/santa-pumpkin"
          },
          {
            tag: 'colors',
            theme: [Theme.Project_management, Theme.Software_development],
            link: "https://kiminako.itch.io/colors"
          },
          {
            tag: 'bam',
            theme: [Theme.Art],
            link: "https://store.steampowered.com/app/1967870/Ballads_at_Midnight/"
          },
          {
            tag: 'atelier_jv',
            theme: [Theme.Art, Theme.Software_development],
            link: "https://www.instagram.com/p/CpnZQJOtRr4/"
          },
          {
            tag: 'enfoiros',
            theme: [Theme.Art],
            link: "https://enfoiros.org/"
          },
          {
            tag: 'studio_insa',
            theme: [Theme.Art, Theme.Project_management],
            link: "https://www.youtube.com/@StudioINSA"
          },
          {
            tag: 'match',
            theme: [Theme.Project_management, Theme.Software_development],
            link: "https://pepotrouille.itch.io/its-a-match"
          },
        ],
        filter: Theme.All,
      }
    },
    computed: {
      filteredElements: function() {
        return this.projects.filter(item => (item.theme?.includes(this.filter)) || this.filter === Theme.All);
      }
    },
    methods: {
      generateUrlImg: function(tag: string) {
        return new URL(`/src/assets/portfolio/${tag}.png`, import.meta.url).href
      }
    }
}



</script>

<style lang="scss" scoped>
.portfolio-container {
  background-color: #f7f7f7;
  min-height: 500px;
}

h2 {
  
  color: black;
}

.v-row {
  justify-content: center;
}

.v-col {
  flex-grow: 0;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 0.5s ease;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
  transform: translateX(30px);
}
</style>
