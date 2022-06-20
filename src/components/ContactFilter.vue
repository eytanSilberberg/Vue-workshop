<template>
  <span>enter filter</span>
  <input @input="filter" type="text" v-model="filterBy.txt" />
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: "" },
    };
  },
  methods: {
    filter() {
      console.log(this.filter);
      this.$emit("set-filter", this.filterBy);
    },
  },
};
</script>

<style>
</style>