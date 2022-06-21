<template>
  <img :src="`https://robohash.org/set=set2&name=${contact.name}`" alt="" />
  <h1>{{ contact.name }}</h1>
  <span>{{ contact.email }}</span>
  <span> {{ contact.phone }}</span>
</template>

<script>
export default {
  data() {
    return {
      img: "",
    };
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
</style>