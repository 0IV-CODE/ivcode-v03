<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppBar from './components/layouts/AppBar.vue'
import FooterBar from './components/layouts/FooterBar.vue'

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>

    <FooterBar />
  </v-app>
</template>

<style></style>
