<script lang="ts">
// Pinia
// import { useAuthStore } from '@/stores/auth'


import { useTheme } from 'vuetify'
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
// components
// import TheWelcome from '../components/TheWelcome.vue'

export default {
    name: 'AppBar',
    setup() {
        const theme = useTheme()
        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        }
    },
    created() {
        // Update the time every minute
        setInterval(() => {
            this.updateTime();
        }, 60000);
    },
    data() {
        return {
            // Pinia
            localStore: useLocalStore(),
            // Local Vars
            navDrawer: false,
            currentTime: this.getCurrentTime(),
            panel: ['PAGES'],
        }
    },
    components: {
        // TheWelcome
    },
    mounted() { },
    computed: {
    },
    methods: {
        themeSwap() {
            this.localStore.themeControl()
        },
        getCurrentTime() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const meridiem = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12; // Convert 24hr time to 12hr time
            return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}${meridiem}`;
        },
        updateTime() {
            this.currentTime = this.getCurrentTime();
        },
        routeControl(link) {
            if (link.path) {
                this.$router.push(link.path)
            } else if (link.href) {
                window.open(link.href, '_blank')
            } else if (link.name === 'MODE') {
                this.toggleTheme()
                this.themeSwap()
            }
        }
    }
}
</script>

<template>
    <div>
        <v-app-bar app color="black" :elevation="9" density="compact">
            <v-avatar class="ml-2 mr-n3">
                <v-img width="50" contain :src="localStore.logoW" :lazy-src="localStore.logoWLazy"
                    alt="Prayer in Unity">
                    <template v-slot:placeholder>
                        <div class="d-flex align-center justify-center fill-height">
                            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                        </div>
                    </template>
                </v-img>
            </v-avatar>
            <v-app-bar-title class="d-flex">
                <p id="mavFont" class="text-subtitle-2">IV-CODE.IO</p>
            </v-app-bar-title>
            <v-btn id="mavFont" v-if="!navDrawer" color="white" icon="$FolderOutline" @click="navDrawer = !navDrawer">
            </v-btn>
            <v-btn id="mavFont" v-if="navDrawer" color="accent" icon="$FolderOpenOutline"
                @click="navDrawer = !navDrawer">
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="navDrawer" color="black" location="right" :disable-resize-watcher="true">
            <!-- fake phone info -->
            <v-card class="bg-transparent px-4 ma-1" elevation="0" align="end" variant="outlined">
                <v-icon size="x-small" icon="$Wifi"></v-icon>
                <v-icon size="x-small" icon="$SignalCellular2" class="ms-2"></v-icon>
                <v-icon size="x-small" icon="$Battery40" class="ms-2"></v-icon>
                <span class="ms-2 text-caption">{{ currentTime }}</span>
            </v-card>
            <!-- cat menu -->
            <v-expansion-panels v-model="panel" variant="accordion" flat>
                <v-expansion-panel v-for="(cat, i) in localStore.appBarMenu" :key="i" :value="cat.name"
                    class="bg-transparent">
                    <v-expansion-panel-title>
                        <template v-slot:default="{ expanded }">
                            <v-icon size="small" :color="expanded ? 'accent' : 'white'"
                                :icon="expanded ? '$FolderOpenOutline' : '$FolderOutline'" class="mr-2 mt-n1"></v-icon>
                            <p id="mavFont" class="text-subtitle-2">{{ cat.name }}</p>
                        </template>
                        <template v-slot:actions>
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-list density="compact" nav class="pa-0">
                            <!-- routes -->
                            <v-list-item v-for="(link, i) in cat.children" :key="i" link @click="routeControl(link)"
                                class="text-caption my-0">
                                <p v-if="link.name !== 'MODE'">
                                    {{ link.name }}
                                </p>
                                <div v-else class="d-flex">
                                    <v-icon
                                        :icon="localStore.themeActive ? '$WeatherNightPartlyCloudy' : '$WeatherPartlyCloudy'"
                                        class="mr-2" />
                                    <p>
                                        {{ localStore.themeActive ? 'DARK ' + link.name : 'LIGHT ' + link.name }}
                                    </p>
                                </div>
                            </v-list-item>
                        </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <v-divider color="black" class="my-1 border-opacity-50"></v-divider>
        </v-navigation-drawer>
    </div>
</template>

<style></style>