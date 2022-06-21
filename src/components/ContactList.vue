<template>
  <div class="contact-list">
    <div class="list-titles-wrapper">
      <span class="img-column">img</span>
      <span>Name</span>
      <span>Email</span>
      <span>Phone number</span>
      <span>Actions</span>
    </div>
    <div
      class="contact-wrapper"
      :key="contact._id"
      v-for="contact in contacts"
      @click="onGoTo(contact._id)"
    >
      <ContactPreview :contact="contact" />
      <button class="action-button" @click.stop="removeContact(contact._id)">
        X
      </button>
    </div>
  </div>
</template>
<script>
import ContactPreview from "./contactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
  methods: {
    onGoTo(contactId) {
      console.log("contactId", contactId);
      this.$router.push(`/contact/${contactId}`);
    },
    removeContact(contactId) {
      this.$emit("remove-contact", contactId);
    },
  },
};
</script>

<style lang="scss">
</style>