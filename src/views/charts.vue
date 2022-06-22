<template>
  <h1>Charts</h1>
  <section class="statistic-page">
    <div class="charts-container">
      <DynamicChart
        v-if="priceHistory"
        :data="getPriceData"
        :labels="getPriceLabels"
        chartId="Price"
      />
      <DynamicChart
        v-if="transactionsHistory"
        :data="getTransactionsData"
        :labels="getTransactionsLabels"
      />
    </div>
    <!-- <button @click="onBack">Back</button> -->
  </section>
</template>

<script>
import { bitCoinService } from "../services/bitcoinService";
import DynamicChart from "@/components/DynamicChart.vue";

export default {
  data() {
    return {
      priceHistory: null,
      transactionsHistory: null,
    };
  },

  async created() {
    const priceHistory = await bitCoinService.getMarketPrice();
    this.priceHistory = priceHistory[0].values;
    console.log(this.priceHistory);
    const transactionsHistory = await bitCoinService.getConfirmedTransactions();
    this.transactionsHistory = transactionsHistory[0].values;
  },

  computed: {
    getPriceLabels() {
      const labels = [];
      this.priceHistory.forEach((pricePoint) => {
        const newDate = new Date(pricePoint.x * 1000);
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
        labels.push(dateToDisplay);
      });
      return labels;
    },
    getPriceData() {
      const priceData = [];
      this.priceHistory.forEach((pricePoint) => priceData.push(pricePoint.y));
      return priceData;
    },
    getTransactionsLabels() {
      const labels = [];
      this.transactionsHistory.forEach((pricePoint) => {
        const newDate = new Date(pricePoint.x * 1000);
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
        labels.push(dateToDisplay);
      });
      return labels;
    },
    getTransactionsData() {
      const priceData = [];
      this.transactionsHistory.forEach((pricePoint) =>
        priceData.push(pricePoint.y)
      );
      return priceData;
    },
  },

  methods: {},
  components: {
    DynamicChart,
  },
};
</script>

<style lang="scss">
.statistic-page {
  .charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 500px);
  }
}
</style>