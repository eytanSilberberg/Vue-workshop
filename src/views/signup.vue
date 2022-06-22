<template>
  <div class="introduction-wrapper flex">
    <div class="welcome-section">
      <h1 v-if="user.name">Hello, {{ user.name }}</h1>
      <h1 v-else>Hello guest!</h1>
      <form v-if="!user.name" @submit.prevent="loginUser">
        <label>Enter user name</label>
        <input type="text" v-model="userFromForm.name" />
        <button @click="login">Log in</button>
      </form>
      <div v-if="user.name" class="user-info">
        <h2>COINS :{{ user.coins }}</h2>
        <h2>BTC:{{ user.btc }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { bitCoinService } from "../services/bitcoinService";
import { userService } from "../services/userService";
export default {
  data() {
    return {
      user: {
        name: "",
        coins: null,
      },
      userFromForm: {
        name: "",
      },
    };
  },
  methods: {
    async login() {
      const userDetails = { ...this.userFromForm };
      console.log("userDetails", userDetails);
      const newUser = await userService.getUser(this.userFromForm);
      const test = await bitCoinService.getMarketPrice();
      this.$store.dispatch({ type: "getLoggedinUser" });
      this.$router.push("/");
    },
  },
  async created() {
    // userService.logout();
    const user = await userService.getLoggedinUser();
    if (user) this.user = user;
  },
};
</script>

<style>
</style>