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
        <div align="center">
            <v-card class="d-flex mb-2 mt-6" width="200" elevation="0">
                <v-avatar class="mr-2">
                    <v-img width="50" contain
                        src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_BLACK__Transparent__tG3tQAaQM.png?updatedAt=1656026848414"
                        lazy-src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/tr:q-1/Wolf_BLACK__Transparent__tG3tQAaQM.png?updatedAt=1656026848414"
                        alt="Prayer in Unity">
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                            </div>
                        </template>
                    </v-img>
                </v-avatar>
                <p id="mavFont" class="text-subtitle-2 mt-2">IV-CODE.IO</p>
            </v-card>
        </div>
        <v-card class="bg-primary px-4 pt-2 rounded-0" height="200">
            <v-row>
                <v-col cols="12">
                    <v-card height="50" class="bg-transparent" elevation="0"></v-card>
                </v-col>
                <v-col cols="12">
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
