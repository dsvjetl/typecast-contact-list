<template>
  <div class="co-all-contacts">
    <HeadingMenu/>
    <MainSearch/>
    <ContactsWrapper/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import HeadingMenu from '@/components/blocks/HeadingMenu.vue';
  import MainSearch from '@/components/blocks/MainSearch.vue';
  import ContactsWrapper from '@/components/blocks/ContactsWrapper.vue';
  @Component({
    components: { ContactsWrapper, MainSearch, HeadingMenu },
  })
  export default class AllContacts extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-all-contacts {

  }
</style>
