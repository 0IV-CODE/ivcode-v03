<script>
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
export default {
    name: 'FooterBar',
    data() {
        return {
            // Pinia
            localStore: useLocalStore(),
            // Local Vars
        }
    },
    props: {
    },
    components: {
    },
    computed: {

    },
    mounted() {
    },
    methods: {
    }
}
</script>

<template>
    <div>
        <v-card class="bg-black px-4 mt-n2 rounded-0" height="300">
            <v-row>
                <v-col cols="12">
                    <v-img width="50" contain :src="localStore.logoW" :lazy-src="localStore.logoWLazy"
                        alt="Prayer in Unity" class="ml-3">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                    <p id="mavFont" class="text-subtitle-2 mt-2 ml-3">IV-CODE.IO</p>
                    <v-card height="50" class="bg-transparent" elevation="0"></v-card>
                    <div v-for="(route, i) in localStore.appBarMenu[1].children" :key="i">
                        <v-btn size="small" variant="text" link :href="route.href" target="_blank">
                            {{ route.name }}
                        </v-btn>
                    </div>
                    <div align="center">
                        <p class="text-caption mt-2">©</p>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<style></style>
