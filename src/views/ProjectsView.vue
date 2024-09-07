<script lang="js">
// import { shallowRef, ref } from 'vue';
// gsap
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
// components
// import GraphBlock from '../components/blocks/GraphBlock.vue'

export default {
    name: 'ProjectsView',
    data() {
        return {
            // Pinia
            localStore: useLocalStore(),
            // Local Vars


        }
    },
    components: {
        // GraphBlock
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger)
        // Section 1 - Intro
        gsap.from('.introHookA', {
            delay: 0.4,
            autoAlpha: 0,
            ease: 'power1.out',
            duration: 1,
            y: 10
        })
        gsap.from('.introHookB', {
            delay: 1,
            autoAlpha: 0,
            ease: 'power1.out',
            duration: 1,
            y: 10
        })
        // Section 2 - Transforming
        // note: e for effect i for initiator
        gsap.from('.sect2AE', {
            delay: 0.4,
            autoAlpha: 0,
            ease: 'power1.out',
            duration: 1,
            y: 10,
            scrollTrigger: '.sect2AI'
        })
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
                <v-col cols="12" class="pl-4 mt-6">
                    <p id="mavFont" class="mt-n2 text-h3 mb-0 introHookA">
                        WIZARDS DIGITAL RELICS
                    </p>
                    <p class="text-caption mb-4 mt-n2 introHookB">
                        AKA MY PORTFOLIO
                    </p>
                </v-col>
            </v-row>
        </v-col>
        <!-- text -->
        <v-col cols="12">
            <v-card class="bg-transparent pa-4" elevation="0">
                <p>
                    UNDER DEVELOPMENT.........
                </p>
            </v-card>
        </v-col>
    </v-row>
</template>

<style></style>
