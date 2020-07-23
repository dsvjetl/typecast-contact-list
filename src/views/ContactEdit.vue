<template>
  <div class="co-contact-edit">
    <ContactManageTemplate
      :type="'edit'"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import ContactManageTemplate from '@/components/blocks/ContactManageTemplate.vue';

  @Component({
    components: { ContactManageTemplate },
  })
  export default class ContactEdit extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-edit {

  }
</style>
