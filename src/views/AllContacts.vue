<template>
  <div class="co-all-contacts">
    <HeadingMenu/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import HeadingMenu from '@/components/blocks/HeadingMenu.vue';
  @Component({
    components: { HeadingMenu },
  })
  export default class AllContacts extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-home {

  }
</style>
