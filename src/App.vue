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
.app-wrapper {
  display: grid;
  margin: 0;
  grid-template-columns: 20px 1fr 20px;
  width: 100%;
}
* {
  margin: 0;
  box-sizing: border-box;
}
</style>