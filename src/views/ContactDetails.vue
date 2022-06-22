<template>
  <section class="contact-details">
    <div class="contact-grid">
      <div class="info-wrapper">
        <h1 class="card-header">Contact Card</h1>
        <h1 v-if="contact" class="contact-name">{{ contact.name }}</h1>
        <div>
          <img
            v-if="contact"
            :src="`https://robohash.org/set=set2&name=${contact.name}`"
          />
        </div>
        <div v-if="contact" class="txt-info-wrapper">
          <h2>Email: {{ contact.email }}</h2>
          <h2>Phone number : {{ contact.phone }}</h2>
        </div>
        <p>helo</p>
        <div class="button-wrapper">
          <button @click="goBack">Go back</button>
          <button @click="goToEdit(contact._id)">Go to edit</button>
        </div>
        <div class="transactions">
          <h3>Transaction history</h3>
          <form @submit.prevent="transferCoins" action="">
            <p v-if="contact">Transfer coins to {{ contact.name }}</p>
            <input type="text" v-model="transferAmount" />
            <button @submit.prevent="transferCoins">Transfer</button>
          </form>
          <transaction-list :transactions="transactionsToShow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { contactService } from "../services/contactService.js";
import TransactionList from "../components/TransactionList.vue";
export default {
  data() {
    return {
      contact: null,
      transferAmount: "",
    };
  },
  async created() {
    await this.$store.dispatch({ type: "getLoggedinUser" });
    console.log(this.$store.getters.user);
    const { _id } = this.$route.params;
    console.log("_id", _id);
    this.contact = await contactService.getContactById(_id);
  },
  methods: {
    goBack() {
      this.$router.push("/contact");
    },
    goToEdit(id) {
      this.$router.push(`/contact/edit/${id}`);
    },
    transferCoins() {
      const contact = this.contact;
      const updatedUser = JSON.parse(JSON.stringify(this.$store.getters.user));
      updatedUser.coins -= this.transferAmount;
      updatedUser.transactions.push({
        to: contact._id,
        transferAmount: this.transferAmount,
        contactName: contact.name,
        date: Date.now(),
      });
      console.log("updatedUser", updatedUser);
      this.$store.dispatch({ type: "updateUser", user: updatedUser });
      this.transferAmount = "";
    },
  },
  computed: {
    transactionsToShow() {
      const loggedInUser = this.$store.getters.user;
      console.log(loggedInUser);
      if (!loggedInUser) return [];
      const relatedTransactions = loggedInUser.transactions.filter(
        (transaction) => transaction.to === this.contact._id
      );
      return relatedTransactions;
    },
  },
  components: {
    TransactionList,
  },
};
</script>

<style>
</style>