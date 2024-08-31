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
    }
  },
  components: {
    // TheWelcome
  },
  mounted() {
  },
  computed: {},
  methods: {
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
    </v-col>
  </v-row>
</template>

<style></style>
