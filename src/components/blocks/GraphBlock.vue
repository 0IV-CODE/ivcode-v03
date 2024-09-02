<script>
import { Line as LineChartComponent } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

export default {
    name: 'LineChart',
    components: { LineChartComponent },
    data() {
        return {
            totalDuration: 10000,
            delayBetweenPoints: null,
            data: [],
            data2: [],
            chartKey: 0, // Used to force re-rendering of the chart
            chartData: {
                labels: [], // Initialize labels to an empty array
                datasets: [
                    {
                        borderColor: 'white',
                        borderWidth: 1,
                        radius: 0,
                        data: [], // Initialize with an empty array
                    },
                    {
                        borderColor: 'grey',
                        borderWidth: 1,
                        radius: 0,
                        data: [], // Initialize with an empty array
                    },
                ],
            },
            chartOptions: {
                animation: {},
                interaction: {
                    intersect: false,
                },
                plugins: {
                    legend: false,
                },
                scales: {
                    x: {
                        type: 'linear',
                    },
                },
            },
        };
    },
    mounted() {
        this.initializeData();
        this.setupAnimation();
    },
    methods: {
        initializeData() {
            let prev = 100;
            let prev2 = 80;
            for (let i = 0; i < 1000; i++) {
                prev += 5 - Math.random() * 10;
                this.data.push({ x: i, y: prev });
                prev2 += 5 - Math.random() * 10;
                this.data2.push({ x: i, y: prev2 });
            }

            // Assign data directly to the chartData datasets
            this.chartData.datasets[0].data = this.data;
            this.chartData.datasets[1].data = this.data2;

            // console.log('Data:', this.chartData.datasets[0].data);
            // console.log('Data2:', this.chartData.datasets[1].data);

            this.delayBetweenPoints = this.totalDuration / this.data.length;
        },
        previousY(ctx) {
            return ctx.index === 0
                ? ctx.chart.scales.y.getPixelForValue(100)
                : ctx.chart
                    .getDatasetMeta(ctx.datasetIndex)
                    .data[ctx.index - 1].getProps(['y'], true).y;
        },
        setupAnimation() {
            this.chartOptions.animation = {
                x: {
                    type: 'number',
                    easing: 'linear',
                    duration: this.delayBetweenPoints,
                    from: NaN,
                    delay: (ctx) => {
                        if (ctx.type !== 'data' || ctx.xStarted) {
                            return 0;
                        }
                        ctx.xStarted = true;
                        return ctx.index * this.delayBetweenPoints;
                    },
                },
                y: {
                    type: 'number',
                    easing: 'linear',
                    duration: this.delayBetweenPoints,
                    from: this.previousY,
                    delay: (ctx) => {
                        if (ctx.type !== 'data' || ctx.yStarted) {
                            return 0;
                        }
                        ctx.yStarted = true;
                        return ctx.index * this.delayBetweenPoints;
                    },
                },
            };
        },
        resetChart() {
            // Clear existing data
            this.data = [];
            this.data2 = [];
            this.chartData.datasets[0].data = [];
            this.chartData.datasets[1].data = [];

            // Reinitialize data
            this.initializeData();

            // Reconfigure animation
            this.setupAnimation();

            // Force re-rendering by updating the key
            this.chartKey += 1;
        },
    },
};
</script>

<template>
    <div align="center">
        <LineChartComponent :key="chartKey" v-if="chartData.datasets[0].data.length > 0" :data="chartData"
            :options="chartOptions" />
        <v-btn @click="resetChart" variant="tonal" size="small" class="mt-4" append-icon="$DatabaseRefreshOutline">
            NEW DATA SET
            <template v-slot:append>
                <v-icon color="white"></v-icon>
            </template>
        </v-btn>
    </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>