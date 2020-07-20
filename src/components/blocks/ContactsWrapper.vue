<template>
  <div class="co-contacts-wrapper">

    <div class="contact-card-wrapper">
      <ContactCard/>
    </div>
    <div class="contact-card-wrapper">
      <ContactCard/>
    </div>
    <div class="contact-card-wrapper">
      <ContactCard/>
    </div>
    <div class="contact-card-wrapper">
      <ContactCard/>
    </div>
    <div class="contact-card-wrapper">
      <ContactCard/>
    </div>
    <div class="contact-card-wrapper">
      <ContactCard/>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ContactCard from '@/components/blocks/ContactCard.vue';
  @Component({
    components: { ContactCard },
  })
  export default class ContactsWrapper extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contacts-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3%;
    grid-row-gap: 10%;
    padding: 0 percentage(4 / 24);
  }
</style>
