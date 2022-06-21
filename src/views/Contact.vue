<template>
  <section class="contact-page">
    <contact-filter @set-filter="onFilter" />
    <h1>Contact list</h1>
    <router-link to="/contact/edit">Add a new contact</router-link>
    <contact-list :contacts="contactsToShow" @remove-contact="removeContact" />
  </section>
</template>

<script>
import { contactService } from "../services/contactService";
import ContactList from "../components/ContactList.vue";
import ContactFilter from "../components/ContactFilter.vue";
export default {
  data() {
    return {
      filterBy: { txt: "" },
    };
  },

  // async created() {
  //   const contacts = await contactService.getContacts();
  //   console.log("contacts", contacts);
  //   this.contacts = contacts;
  // },
  components: {
    ContactList,
    ContactFilter,
  },
  methods: {
    async removeContact(contactId) {
      // await carService.remove(carId)
      // this.cars = this.cars.filter(car => car._id !== carId)
      await this.$store.dispatch({ type: "removeContact", contactId });
    },
    onFilter(filterBy) {
      console.log(filterBy);
      this.filterBy = filterBy;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  computed: {
    contactsToShow() {
      const regex = new RegExp(this.filterBy.txt, "i");

      const toDisplay = this.contacts.filter((contact) => {
        return regex.test(contact.name);
      });
      return toDisplay;
    },
    contacts() {
      return this.$store.getters.contacts;
    },
  },
};
</script>

<style>
</style>
