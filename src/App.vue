<template>
  <section class="app-wrapper">
    <AppHeader />
    <RouterView />
  </section>
  <UserMsg />
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import UserMsg from "@/components/UserMsg.vue";

import "./assets/style/style.scss";
export default {
  components: {
    AppHeader,
    UserMsg,
  },
};
</script>

<style lang="scss">
</style>