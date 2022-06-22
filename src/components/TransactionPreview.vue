<template>
  <h3>{{ transaction.contactName }}</h3>
  <span> {{ dateToDisplay }}</span>
  <span> {{ transaction.transferAmount }} coins</span>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dateToDisplay() {
      const newDate = new Date(this.transaction.date);
      const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
      return dateToDisplay;
    },
  },
};
</script>

<style>
</style>