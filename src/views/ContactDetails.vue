<template>
  <section class="contact-details">
    <div class="contact-grid">
      <div class="info-wrapper">
        <h1 class="card-header">Contact Card</h1>
        <h1 class="contact-name">{{ contact.name }}</h1>
        <div>
          <img
            v-if="contact"
            :src="`https://robohash.org/set=set2&name=${contact.name}`"
          />
        </div>
        <div class="txt-info-wrapper">
          <h2>Email: {{ contact.email }}</h2>
          <h2>Phone number : {{ contact.phone }}</h2>
        </div>
        <div class="button-wrapper">
          <button @click="goBack">Go back</button>
          <button @click="goToEdit(contact._id)">Go to edit</button>
        </div>
      </div>
    </div>
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