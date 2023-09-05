<template>
  <section id="hobbies">
    <div class="pa-4 mb-12 hobbies-container">
      <h2 class="section-title">{{ $t('hobbies.title') }}</h2>
      <div class="drawing-container">
        <v-row>
          <v-col class="hobbies-label">{{ $t('hobbies.drawing.title') }}</v-col>
        </v-row>
        <v-row>
          <v-col :md="image.cols" sm="4" cols="6" v-for="image in images" :key="image.id">
            <v-img :src="generateUrlImg(image.id)" cover height="100%" @click="setSelectedItem(image)"></v-img>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="80%">
          <v-card>
            <v-carousel v-model="selectedItemId" hide-delimiters height="auto">
              <v-carousel-item v-for="img in images" :key="img.title" :value="img.id">
                <v-card-actions class="pb-0">
                  <div class="px-4 drawing-title">{{ $t(img.title) }}</div>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-card-text class="px-3 pb-3 pt-0 drawing-dialog">
                  <img class="drawing-selected" :src="generateUrlImg(img.id)" />
                </v-card-text>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-dialog>
      </div>
      <div class="contest-container">
        <div class="hobbies-label">{{ $t('hobbies.contest') }}</div>
        <div v-for="index in 7" :key="index">
          {{ $t(`hobbies.contest_${8 - index}`) }}
        </div>
      </div>
      <!-- <div class="workshop-container">
        <div class="hobbies-label">{{ $t('hobbies.workshop') }}</div>
        <div>Mars 2023 | INSA Toulouse | Atelier | Comment créer un jeu vidéo ? </div>
        <div>Mars 2023 | INSA Toulouse | Conférence | Les métiers du jeu vidéo </div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">

export default {
  data() {
    return {
      dialog: false,
      selectedItemId: 0,
      selectedItem: {} as any,
      images: [
        { id: 0, title: "hobbies.drawing.kitsune", cols: 2 },
        { id: 1, title: "hobbies.drawing.fox", cols: 3 },
        { id: 2, title: "hobbies.drawing.cinderella", cols: 3 },
        { id: 3, title: "hobbies.drawing.hanfu_my_lady", cols: 2 },
        { id: 4, title: "hobbies.drawing.netjuu_no_susume", cols: 2 },
        { id: 5, title: "hobbies.drawing.whale", cols: 5 },
        { id: 6, title: "hobbies.drawing.molly", cols: 5 },
        { id: 7, title: "hobbies.drawing.hanfu_new_year", cols: 2 },
      ]
    }
  },
  methods: {
    setSelectedItem: function (selectedItem: { id: number, title: string, cols: number }) {
      this.selectedItem = selectedItem;
      this.selectedItemId = this.selectedItem.id;
      this.dialog = !this.dialog;
    },
    generateUrlImg: function (id: number) {
      return new URL(`/src/assets/hobbies/${id}.png`, import.meta.url).href
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';

.hobbies-container {
  background-color: white;
  margin: auto;
  max-width: 65rem;
}

.hobbies-label {
  color: map-get($theme-color, "black");
  font-size: 18px;
  font-weight: 400;
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
}

.section-title {
  color: black;
}

.drawing-container {
  margin: auto;
  min-height: 523px;
}

.drawing-selected {
  max-height: 70vh;
  max-width: -moz-available; /* For Mozzila */
  max-width: -webkit-fill-available; /* For Chrome */
  max-width: stretch; /* Unprefixed */
}

.drawing-title {
  font-weight: 500;
}

.drawing-dialog {
  text-align: center;
}

.contest-container {
  color: map-get($theme-color, "black");
  font-size: 15px;
  line-height: 30px;
  text-align: left;
}
</style>
