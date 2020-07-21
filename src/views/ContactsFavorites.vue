<template>
  <div class="co-contacts-favorites">
    <ContactListTemplate/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ContactListTemplate from '../components/blocks/ContactListTemplate.vue';

  @Component({
    components: { ContactListTemplate },
  })
  export default class ContactsFavorites extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contacts-favorites {

  }
</style>
