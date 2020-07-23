<template>
  <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
    <path class="g-fill"
      d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
    <path d="M0 0h48v48h-48z" fill="none"/>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class extends Vue {

  }
</script>

<style lang="scss" scoped>
  .g-fill {
    fill: $gray;
  }
</style>
