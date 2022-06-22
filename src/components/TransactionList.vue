<template>
  <section class="transaction-list">
    <header class="table-header flex">
      <span>To</span>
      <span>When</span>
      <span>Amount</span>
    </header>
    <ul>
      <li class="transaction-preview flex" v-for="transaction in transactions">
        <transaction-preview :transaction="transaction" />
      </li>
    </ul>
  </section>
</template>

<script>
import TransactionPreview from "./TransactionPreview.vue";
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  components: {
    TransactionPreview,
  },
};
</script>

<style>
</style>