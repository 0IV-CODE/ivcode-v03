<script lang="js">
import { shallowRef, ref } from 'vue';
// gsap
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
// components
// import TheWelcome from '../components/TheWelcome.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      // Pinia
      localStore: useLocalStore(),
      // Local Vars
      showcase: 'https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/macbook-trans-whitescreen-02_gTGfnN23Q.png?updatedAt=1689448401170',
      showCaseImgs: [
        { selected: true, img: 'https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/macbook-trans-whitescreen-02_gTGfnN23Q.png?updatedAt=1689448401170' },
        { selected: false, img: 'https://ik.imagekit.io/invimgs0101/IV-CODE/HOME/iphone-white-screen-trans_XbWfHfSOk.png?updatedAt=1689448545993' },
      ]
    }
  },
  components: {
    // TheWelcome
  },
  mounted() {
  },
  computed: {},
  methods: {
    imgControl(num) {
      for (let i = 0; i < this.showCaseImgs.length; i++) {
        if (num === i) {
          this.showCaseImgs[i].selected = true
          this.showcase = this.showCaseImgs[i].img
        } else {
          this.showCaseImgs[i].selected = false
        }
      }
    }
  }
}
</script>

<template>
  <v-row>
    <!-- Intro Section -->
    <v-col cols="12" class="bg-primary">
      <v-row class="flex-md-row-reverse">
        <v-col cols="12">
          <v-card elevation="0" class="bg-transparent" flat align="center">
            <!-- Note: next version cut video close to feet & diff animation -->
            <video width="300" height="400" muted loop autoplay preload="true"
              poster="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/spartan=trans-02_yp-y5MjwqL.png?updatedAt=1706379952667">
              <source
                src="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/0001-1075_ATGvwhos7.mp4?updatedAt=1706379935311"
                type="video/mp4">
            </video>
          </v-card>
        </v-col>
        <v-col cols="12" class="pl-4">
          <p id="mavFont" class="mt-n2 text-h3 mb-0">
            IV-CODE
          </p>
          <p class="text-caption mb-4 mt-n2">
            DEVELOPING UR DIGITAL PRESENCE
          </p>
          <v-btn variant="tonal" size="small" class="mr-2" append-icon="$AccountNetworkOutline">
            CONTACT ME
            <template v-slot:append>
              <v-icon color="white"></v-icon>
            </template>
          </v-btn>
          <v-btn variant="tonal" size="small" class="mr-2" append-icon="$ServerNetworkOutline">
            PROJECTS
            <template v-slot:append>
              <v-icon color="white"></v-icon>
            </template>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <!-- Transforming -->
    <v-col cols="12">
      <v-divider v-for="i in 7" :key="i" :thickness="3" class="border-opacity-100 my-3"></v-divider>
      <v-card width="300" elevation="0"
        :class="localStore.themeActive ? 'bg-transparent border-w-l rounded-0 mt-4' : 'bg-transparent border-b-l rounded-0 mt-4'">
        <p id="mavFont" class="text-h5 ml-1">
          Transforming Ideas into Code
        </p>
      </v-card>
      <!-- Phone 7 Desktop View of Project-->
      <v-row>
        <!-- controls -->
        <v-col cols="12" align="center" class="mt-16">
          <v-btn @click="imgControl(0)" variant="text" density="compact" icon="$Cellphone"
            :color="showCaseImgs[0].selected ? 'primary' : 'grey'"></v-btn>
          <v-icon icon="$SwapHorizontalHidden"></v-icon>
          <v-btn @click="imgControl(1)" variant="text" density="compact" icon="$Laptop"
            :color="showCaseImgs[1].selected ? 'primary' : 'grey'"></v-btn>
        </v-col>
        <!-- image -->
        <v-col cols="12">
          <v-img height="300" :src="showcase" alt="Prayer in Unity">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-col>
        <!-- project info -->
        <v-col cols="12" align="center" class="mb-16">
          <v-card elevation="0" class="border-b-trbl rounded-0 px-2 pt-2 pb-12">
            <v-card width="300" elevation="0"
              :class="localStore.themeActive ? 'bg-transparent border-w-l rounded-0 mt-4' : 'bg-transparent border-b-l rounded-0 mt-4'">
              <p id="mavFont" class="text-h5 ml-1">
                PROJECT - CUSA
              </p>
            </v-card>
            <p class="text-start ml-4 mt-4">
              The website promotes a range of versatile metal panels ideal for residential, agricultural, and commercial
              applications. Accredited by IAS in cold-form steel manufacturing....
            </p>
          </v-card>
          <v-card elevation="0" class="border-b-rbl rounded-0 pa-0" align="end">
            <v-btn variant="text" size="small" class="mr-2" append-icon="$Link">
              WEBSITE
              <template v-slot:append>
                <v-icon color="primary"></v-icon>
              </template>
            </v-btn>
            <v-btn variant="text" size="small" class="mr-2" append-icon="$FormatAlignJustify">
              INFO
              <template v-slot:append>
                <v-icon color="primary"></v-icon>
              </template>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style></style>
