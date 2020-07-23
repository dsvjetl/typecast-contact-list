<template>
  <div class="co-contact-new">
    <ContactManageTemplate/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ContactManageTemplate from '@/components/blocks/ContactManageTemplate.vue';

  @Component({
    components: { ContactManageTemplate },
  })
  export default class ContactNew extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-new {

  }
</style>
