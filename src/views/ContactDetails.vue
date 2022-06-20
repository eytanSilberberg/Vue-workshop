<template>
  <section v-if="!contact">Loading...</section>
  <section v-else>
    <h1>{{ contact.name }}</h1>
    <img :src="`https://robohash.org/set=set2&name=${contact.name}`" />
    <h2>Email: {{ contact.email }}</h2>
    <h2>Phone number : {{ contact.phone }}</h2>
    <button @click="goBack">Go back</button>
    <button @click="goToEdit(contact._id)">Go to edit</button>
  </section>
</template>

<script>
import { contactService } from "../services/contactService.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
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
  },
};
</script>

<style>
</style>