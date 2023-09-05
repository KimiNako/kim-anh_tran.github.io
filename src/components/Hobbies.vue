<template>
	<section id="hobbies">
    <div class="pa-4 mb-12 hobbies-container">
      <h2 class="section-title">{{ $t('hobbies.title') }}</h2>
      <div class="drawing-container">
          <v-row>
            <v-col class="hobbies-label">{{ $t('hobbies.drawing.title') }}</v-col>
          </v-row>
          <v-row>
          <template v-for="image in imageLayout" :key="image.id">
            <v-col :cols="image.cols">
              <v-img
                :src="generateUrlImg(image.id)"
                cover
                height="100%"
                @click="setSelectedItem(image)"
              ></v-img>
            </v-col>
            <v-col v-if="image.children" cols="6" class="d-flex flex-column">
              <v-row>
                <v-col v-for="children in image.children" :key="children.id" :cols="children.cols">
                  <v-img
                    :src="generateUrlImg(children.id)"
                    cover
                    height="100%"
                    @click="setSelectedItem(children)"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
        <v-dialog
          v-model="dialog" 
          max-width="50%"
        >
          <v-card>
            <v-card-actions class="pb-0">
              <div class="px-4 drawing-title">{{ $t(selectedItem.title) }}</div>
              <v-spacer></v-spacer>
              <v-btn
                  icon
                  dark
                  @click="setSelectedItem({})"
                >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text class="px-3 pb-3 pt-0">
              <v-img
                class="drawing-selected"
                :src="generateUrlImg(selectedItem.id)"
              ></v-img>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
      <div class="contest-container">
        <div class="hobbies-label">{{ $t('hobbies.contest') }}</div>
        <div v-for="index in 7" :key="index" >
          {{ $t(`hobbies.contest_${8-index}`) }}
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
    data () {
      return {
        dialog: false,
        selectedItem : {} as any,
        imageLayout: [
          {
            id: 0,
            title: "hobbies.drawing.kitsune",
            cols: 2,
            children: [
              {
                id: 1,
                title: "hobbies.drawing.fox",
                cols: 6
              },
              {
                id: 2,
                title: "hobbies.drawing.cinderella",
                cols: 6
              }
            ],
          },
          { id: 3, title: "hobbies.drawing.hanfu_my_lady", cols: 2 },
          { id: 4, title: "hobbies.drawing.netjuu_no_susume", cols: 2 },
          { id: 10, title: "hobbies.drawing.whale", cols: 5 },
          { id: 7, title: "hobbies.drawing.molly", cols: 5 },
          { id: 6, title: "hobbies.drawing.hanfu_new_year", cols: 2 },
        ]
      }
    },
    methods: {
      setSelectedItem: function(selectedItem: any) {
        this.selectedItem = selectedItem;
        this.dialog = !this.dialog;
      },
      generateUrlImg: function(id: number) {
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
}
.drawing-title {
  font-weight: 500;
}

.contest-container {
  color: map-get($theme-color, "black");
  font-size: 15px;
  line-height: 30px;
  text-align: left;
}
</style>
