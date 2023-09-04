<template>
	<section id="portfolio">
    <div class="pa-4 portfolio-container">
      <h2 class="section-title">{{ $t('portfolio.title') }}</h2>
        <v-tabs
          v-model="filter"
          color="light-blue-accent-3"
          align-tabs="center"
        >
          <v-tab v-for="tab in tabs" :key="tab" :value="tab">{{ tab }}</v-tab>
        </v-tabs>

        <v-container fluid>
      <v-row>
        <TransitionGroup  name="list">
        <v-col
          v-for="item in filteredElements"
          :key="item.title"
          class="pa-4"
        >
        <v-card
          width="400"
        >
          <v-img
            class="align-end text-white"
            height="200"
            :src="`src/assets/portfolio/${item.image}`"
            cover
          >
          </v-img>

          <v-card-title class="pt-4">
            {{ item.title }}
          </v-card-title>

          <v-card-text>
            <div>{{ item.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="light-blue-accent-3" :href="item.link" target=”_blank” >
              En savoir plus
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
  All = "All",
  Art = 'Art',
  Project_management = 'Project management',
  Software_development = 'Software development',
}

export default {
    data () {
      return {
        dialog: false,
        tabs: [Theme.All, Theme.Art, Theme.Project_management, Theme.Software_development],
        projects: [
          {
            title: 'Where are you, Cinderella ?',
            date: '2020 - En cours',
            description: 'Création d\'un visual novel sur le monde du divertissement et de la culture vietnamienne',
            image: 'wayc.png',
            theme: [Theme.Art, Theme.Project_management, Theme.Software_development],
            link: "https://store.steampowered.com/app/2416930/Where_are_you_Cinderella/",
          },
          {
            title: 'River flows in you',
            date: '2023',
            description: 'Reprise au piano de River flows in you de Yiruma après un an de pratique',
            image: 'piano.png',
            theme: [Theme.Art],
            link: "https://www.youtube.com/watch?v=aCM-XopXWkc"
          },
          {
            title: 'Cod\'INSA',
            date: '2020',
            description: 'Présidente de Cod\'INSA, association organisant le concours de programmation du Groupe INSA',
            image: 'codinsa.png',
            theme: [Theme.Art, Theme.Project_management, Theme.Software_development],
            link: "https://codinsa.org/"
          },
          {
            title: 'Santa Pumpkin',
            date: '2022',
            description: 'Création d\'un escape game en ligne sur Noël et les citrouilles',
            image: 'santa_pumkin.png',
            theme: [Theme.Art, Theme.Project_management],
            link: "https://kiminako.itch.io/santa-pumpkin"
          },
          {
            title: 'Colors',
            date: '2022',
            description: 'Création d\'un visual novel sur le monde des couleurs',
            image: 'colors.png',
            theme: [Theme.Project_management, Theme.Software_development],
            link: "https://kiminako.itch.io/colors"
          },
          {
            title: 'Ballads at Midnight',
            date: '2023',
            description: 'Création de la bande d\'annonce du visual novel Ballads at Midnight',
            image: 'bam.png',
            theme: [Theme.Art],
            link: "https://store.steampowered.com/app/1967870/Ballads_at_Midnight/"
          },
          {
            title: 'Créer son premier jeu vidéo',
            date: '2023',
            description: 'Animation d\'un atelier pour créer son premier jeu sur Godot à l\'INSA Toulouse',
            image: 'atelier_jv.png',
            theme: [Theme.Art, Theme.Software_development],
            link: "https://www.instagram.com/p/CpnZQJOtRr4/"
          },
          {
            title: 'Enfoiros',
            date: '2015',
            description: 'Photographe bénévole pour les Enfoiros, association soutenant les Restos du Cœur',
            theme: [Theme.Art],
            image: 'enfoiros.png',
            link: "https://enfoiros.org/"
          },
          {
            title: 'Studio INSA',
            date: '2016',
            description: 'Membre d\'une commission audivisuelle pour couvrir des événements de l\'INSA Toulouse',
            image: 'studio_insa.png',
            theme: [Theme.Art, Theme.Project_management],
            link: "https://www.youtube.com/@StudioINSA"
          },
          {
            title: 'It\'s a Match!',
            date: '2021',
            description: 'Développement d\'un jeu de matching pour la GMTK Game Jam',
            theme: [Theme.Project_management, Theme.Software_development],
            image: 'match.png',
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
