<template>
  <button
    class="co-app-button"
    :class="[
      {'is-cancel': type === 'cancel'},
      {'is-save': type === 'positive'},
    ]"
  >
    <slot/>
  </button>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class AppButton extends Vue {
    @Prop({default: ''}) public type!: string;
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

    &.is-cancel,
    &.is-save {
      color: $white;
      padding: 10px 60px;
      border-radius: 28.5px;
    }

    &.is-cancel {
      background-color: $gray;
    }

    &.is-save {
      background-color: $main;
    }
  }
</style>
