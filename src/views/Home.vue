
<template>
  <section class="home-page flex">
    <div class="svg-wrapper">
      <our-svg />
    </div>
    <div class="content-holder flex">
      <div class="content-wrapper">
        <h1>MR Bitcoin</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas
          modi quasi corporis quisquam fuga aut quo minus reiciendis
          perspiciatis animi reprehenderit eaque in sapiente dolorem culpa, esse
          exercitationem. Id.
        </p>
        <h1 v-if="user">Hello, {{ user.name }}</h1>
        <h1 v-else>Hello guest!</h1>

        <div v-if="user" class="user-info">
          <p>COINS :{{ user.coins }}</p>
          <p>BTC:{{ user.btc }}</p>
        </div>
        <router-link v-if="!user" to="/signup"> signup</router-link>
        <button v-else @click="logout">logout</button>
        <div class="test" v-if="user">
          <transaction-list
            v-if="user.transactions.length > 0"
            :transactions="user.transactions"
          />
        </div>
      </div>
    </div>
  </section>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>

<script>
import OurSvg from "../components/svgs/OurSvg.vue";
import TransactionList from "../components/TransactionList.vue";
export default {
  components: {
    OurSvg,
    TransactionList,
  },
  created() {
    this.$store.dispatch({ type: "getLoggedinUser" });
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logOutUser" });
    },
    components: {
      TransactionList,
    },
  },
};
</script>

<style lang="scss">
.svg-wrapper {
  svg {
    width: 800px;
  }
}
</style>