<template>
  <section class="app-wrapper">
    <AppHeader />
    <RouterView />
  </section>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import "./assets/style/style.scss";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
</style>