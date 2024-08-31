<script lang="js">
import { shallowRef, ref } from 'vue';
// gsap
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// pinia
// import { useMainStore } from "@/stores/main"
// components
// import TheWelcome from '../components/TheWelcome.vue'

export default {
  name: 'HomeView',
  data() {
    return {
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
    <!-- form = Section 1 -->
    <v-col cols="12" align="center">
      <v-card max-width="320" class="bg-transparent pa-4" elevation="0">
        <p id="medFont" class="text-h5 font-weight-bold pt-4 introHookA">GET CONNECTED</p>
        <p class="text-caption font-weight-bold pt-n4 pb-8">
          We'd love to hear from you. Fill
          out the form below to get started
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
