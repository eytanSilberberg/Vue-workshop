<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import { bitCoinService } from "../services/bitcoinService";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "LineChart",
  components: { Line },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      description: "",
      chartData: {
        labels: [],
        datasets: [{ data: [] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  async created() {
    const receivedInfo = await bitCoinService.getMarketPrice();
    console.log("receivedInfo", receivedInfo);
    this.description = receivedInfo.description;
    const xValues = [];
    const yValues = [];
    receivedInfo[0].values.forEach((coord) => {
      xValues.push(coord.x);
      yValues.push(coord.y);
    });
    this.chartData.labels = [...xValues];
    this.chartData.datasets[0].data = [...yValues];
    console.log("");
    console.log("this.chartData", this.chartData);
  },
};
</script>