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
    name: 'ContactView',
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
        // gsap.from('.sect2AE', {
        //     delay: 0.4,
        //     autoAlpha: 0,
        //     ease: 'power1.out',
        //     duration: 1,
        //     y: 10,
        //     scrollTrigger: '.sect2AI'
        // })
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
                        CONTACT ME TODAY
                    </p>
                    <p class="text-caption mb-4 mt-n2 introHookB">
                        EMAIL ONLY...
                    </p>
                </v-col>
                <v-col cols="12">
                    <v-card elevation="0" class="bg-transparent" flat align="center">
                        <!-- Note: next version cut video close to feet & diff animation -->
                        <video width="300" height="400" muted loop autoplay preload="true"
                            poster="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/cortana=trans-01_jyV6JAZ-q.png?updatedAt=1706410941415">
                            <source
                                src="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/0001-0940_yL7JH5FGB.mp4?updatedAt=1706410954704"
                                type="video/mp4">
                        </video>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <!-- text -->
        <v-col cols="12">
            <v-card class="bg-transparent pa-4" elevation="0">
                <p>
                    Have questions or interested in my services? Drop me a line at isaac@iv-code.io, and let's discuss
                    how I
                    can help bring your digital projects to life.
                </p>
                <p id="tachFont" class="text-caption ml-1 mt-10">
                    EMAIL: isaac@iv-code.io
                </p>
                <p id="tachFont" class="text-caption ml-1">
                    GITHUB: 0IV-CODE
                </p>
            </v-card>
        </v-col>
    </v-row>
</template>

<style></style>
