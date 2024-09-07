<script lang="js">
// import { shallowRef, ref } from 'vue';
// gsap
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// pinia
import { useLocalStore } from "@/stores/local/localCache.js"
// components
import GraphBlock from '../components/blocks/GraphBlock.vue'

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
      ],
      headers: [
        {
          title: 'SKILL',
          align: 'start',
          sortable: true,
          value: 'skill',
          key: 'skill'
        },
        { title: 'PURPOSE', align: 'start', sortable: false, value: 'purpose', key: 'purpose' },
        { title: 'COST', align: 'start', sortable: false, value: 'cost', key: 'cost' }
      ],
      skillsArr: [
        {
          skill: 'AI Specialist',
          purpose: 'Multiple',
          cost: '$'
        },
        {
          skill: 'WEB Developer',
          purpose: 'Any',
          cost: '$$$'
        },
        {
          skill: 'IT Specialist',
          purpose: 'Any',
          cost: '$$'
        },
        {
          skill: 'Cinematographer',
          purpose: 'Multiple',
          cost: '$$$'
        },
        {
          skill: 'Contract Formatter',
          purpose: 'Standardizing',
          cost: '$'
        },
        {
          skill: 'Photographer',
          purpose: 'Multiple',
          cost: '$'
        },
        {
          skill: 'UI Designer',
          purpose: 'Brand',
          cost: '$$'
        },
        {
          skill: 'SEO Specialist',
          purpose: 'Reach',
          cost: '$'
        },
        {
          skill: 'Logo Guru',
          purpose: 'Brand',
          cost: '$$'
        },
        {
          skill: 'Email Marketing',
          purpose: 'Reach',
          cost: '$$'
        },
        {
          skill: 'Social Media Manager',
          purpose: 'Multiple',
          cost: '$$'
        },
        {
          skill: 'Workflow',
          purpose: 'Multiple',
          cost: '$$$'
        },
      ],
      aiWords: [
        {
          title: 'PREDICTIVE ANALYTICS',
          body: 'Predictive analytics leverages AI to analyze historical data and forecast future outcomes, helping businesses make informed decisions. It can predict customer behavior, market trends, and operational risks, allowing companies to stay ahead of competition and mitigate potential challenges.'
        },
        {
          title: 'QUALITY ASSURANCE',
          body: 'AI-driven quality assurance automates testing processes and identifies defects faster and more accurately than manual methods. By improving the precision of error detection and reducing human error, businesses can ensure high-quality products and services, boosting customer satisfaction and brand reputation.'
        },
        {
          title: 'OPTIMIZED PROCESSES',
          body: 'AI helps businesses optimize their processes by automating repetitive tasks, improving workflow efficiency, and reducing costs. Whether it’s supply chain management, resource allocation, or customer service, AI streamlines operations, allowing employees to focus on higher-level strategic tasks.'
        },
        {
          title: 'CONTINUOUS IMPROVEMENT',
          body: 'AI enables continuous improvement by analyzing data in real-time and providing actionable insights for ongoing optimization. This helps businesses refine their strategies, improve performance, and innovate faster, ensuring long-term growth and adaptability in an ever-changing market.'
        }
      ]

    }
  },
  components: {
    GraphBlock
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
    },
    getColor(cost) {
      if (cost === '$') return 'green'
      else if (cost === '$$') return 'yellow'
      else if (cost === '$$$') return 'red'
      else return 'black'
    },
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
    <!-- spartan imgs -->
    <v-col cols="12" align="center" class="px-0 pb-0">
      <p id="tachFont" class="text-caption ml-1">
        VIEW ALL PROJECTS ??? CLICK BELOW
      </p>
      <v-btn variant="text" size="small" class="mr-2" append-icon="$ServerNetworkOutline">
        PROJECTS
        <template v-slot:append>
          <v-icon color="primary"></v-icon>
        </template>
      </v-btn>
      <v-img
        src="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/isaac.v.3105_odst_warrior_outline_posing_with_his_sniper_in_jap_dc244d4b-54d4-4ecf-bcd3-06946203a4dc_2WQlobb0d.png?updatedAt=1706242296671"
        alt="Prayer in Unity">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
    </v-col>
    <!-- access to all tech -->
    <v-col cols="12" class="bg-black pb-4">
      <v-card width="300" elevation="0" class="bg-transparent border-w-l rounded-0 mt-4 mb-4">
        <p id="mavFont" class="text-h5 ml-1">
          ACCESS TO ALL TECH
        </p>
      </v-card>
      <!-- 3d graph -->
      <v-card class="bg-black mt-16 mb-8" elevation="0">
        <GraphBlock />
      </v-card>
      <p class="text-start text-caption ml-4 mt-4 mb-4">
        I offer your company a strategic advantage in today's competitive landscape. With a robust understanding of
        digital
        technologies and a commitment to delivering results-driven solutions, I ensure your business not only meets but
        exceeds its technological and marketing goals
      </p>
      <v-data-table class="bg-black" :headers="headers" :hide-default-footer="true" :items="skillsArr"
        :items-per-page="10" :footer-props="{
          'items-per-page-options': [5, 10]
        }" dense :mobile-breakpoint="300">
        <template v-slot:item.cost="{ value }">
          <v-chip :color="getColor(value)">
            {{ value }}
          </v-chip>
        </template>
      </v-data-table>
    </v-col>
    <!-- yes ai -->
    <v-col cols="12">
      <v-card width="300" elevation="0"
        :class="localStore.themeActive ? 'bg-transparent border-w-l rounded-0 mt-4' : 'bg-transparent border-b-l rounded-0 mt-4'">
        <p id="mavFont" class="text-h5 ml-1">
          YES ARTIFICIAL INTELLIGENCE *AI
        </p>
      </v-card>
      <v-img height="200"
        src="https://ik.imagekit.io/invimgs0101/Area-51/Main_Assets/bonsai-trans_xCZqsdx7x%201_0YhWUCRCe.png?updatedAt=1725291884599"
        alt="Prayer in Unity">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
          </div>
        </template>
      </v-img>
      <p class="text-start text-caption ml-4 mt-4 mb-4">
        We implement state-of-the-art AI models to significantly enhance and optimize our final product, ensuring the
        latest
        advancements drive your success.
      </p>
      <div align="start">
        <p id="mavFont" class="text-h6 ml-1 mt-6">
          HOW?
        </p>
        <v-expansion-panels variant="accordion" flat>
          <v-expansion-panel v-for="(item, i) in aiWords" :key="i" class="border-b-trbl my-1">
            <v-expansion-panel-title id="mavFont" class="text-subtitle-2">
              {{ item.title }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-caption my-0">
              {{ item.body }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-col>
    <!-- spartan imgs -->
    <v-col cols="12" align="center" class="bg-black">
      <v-card elevation="0" class="bg-transparent" flat align="center">
        <!-- Note: next version cut video close to feet & diff animation -->
        <video width="300" height="400" muted loop autoplay preload="true"
          poster="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/untitled_ssybAOrbR.png?updatedAt=1706502307218">
          <source src="https://ik.imagekit.io/invimgs0101/IV-CODE/temp/0000-0800_aJpjTXPoR.mp4?updatedAt=1706502204445"
            type="video/mp4">
        </video>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
