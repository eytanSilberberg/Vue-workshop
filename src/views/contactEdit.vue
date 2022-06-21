<template>
  <h1>Contact Edit</h1>
  <form v-if="contact" @submit.prevent="save" class="contact-edit">
    <input v-model="contact.name" type="text" />
    <input v-model="contact.phone" type="phone" />
    <input v-model="contact.email" type="email" />
    <button>Save</button>
  </form>
</template>

<script>
import { contactService } from "../services/contactService";
export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async save() {
      // await contactService.save(this.contact)
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contact,
      });
      this.$router.push("/contact");
    },
  },
  async created() {
    const _id = this.$route.params._id;
    if (_id) {
      this.contact = await contactService.getContactById(_id);
    } else {
      this.contact = await contactService.getEmptyContact();
    }
  },
};
</script>

<style>
</style>