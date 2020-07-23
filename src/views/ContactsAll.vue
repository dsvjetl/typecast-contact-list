<template>
  <div class="co-contacts-all">
    <ContactListTemplate/>
    <Modal/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ContactListTemplate from '@/components/blocks/ContactListTemplate.vue';
  import Modal from '@/components/blocks/Modal.vue';

  @Component({
    components: { Modal, ContactListTemplate },
  })
  export default class AllContacts extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contacts-all {

  }
</style>
