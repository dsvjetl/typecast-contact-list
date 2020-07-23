<template>
  <div class="co-contacts-wrapper">
    <div class="cards-wrapper">

      <div class="contact-card-wrapper">
        <ContactNewCard/>
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
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ContactCard from '@/components/blocks/ContactCard.vue';
  import ContactNewCard from '@/components/blocks/ContactNewCard.vue';

  @Component({
    components: { ContactNewCard, ContactCard },
  })
  export default class ContactsWrapper extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contacts-wrapper {
    padding-bottom: 100px;

    .cards-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 3%;
      grid-row-gap: 10%;
      grid-auto-rows: 1fr;
      padding: 0 percentage(4 / 24);

      @include media('<=custom1265') {
        grid-template-columns: repeat(3, 1fr);
      }

      @include media('>=tablet', '<desktop') {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 5%;
      }

      @include media('>=phone', '<tablet') {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 percentage(1 / 24);
        grid-row-gap: 10px;
      }
    }

    .contact-card-wrapper {
      position: relative;
    }
  }
</style>
