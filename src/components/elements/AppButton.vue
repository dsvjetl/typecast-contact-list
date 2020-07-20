<template>
  <button class="co-app-button">
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class AppButton extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-button {
    border: none;
    background-color: transparent;
    padding: 5px 10px;
    color: $gray;
    @include transition-all;

    &:hover {
      cursor: pointer;
      color: $cyan-light;
    }

    &.is-active {
      color: $main;
    }
  }
</style>
