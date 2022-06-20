<template>
  <nav class="nav-bar">
    <h1>TRADE OFF</h1>
    <div>
      <router-link class="first" to="/"> Home</router-link>
      <router-link to="/contact">Contacts</router-link>
      <router-link to="/charts">More info</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  grid-column: 1/ -1;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 80px;
}
a:not(.first) {
  margin-inline-start: 30px;
}
</style>