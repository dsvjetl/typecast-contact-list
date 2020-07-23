<template>
  <div class="co-contact-list-template">
    <HeadingMenu/>
    <MainSearch/>
    <ContactsWrapper/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import HeadingMenu from './HeadingMenu.vue';
  import MainSearch from './MainSearch.vue';
  import ContactsWrapper from './ContactsWrapper.vue';

  @Component({
    components: { ContactsWrapper, MainSearch, HeadingMenu },
  })
  export default class ContactListTemplate extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-list-template {

  }
</style>
