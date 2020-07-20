<template>
  <header class="co-app-header">
    <h1 class="main-title u-1 --uppercase">typeqast</h1>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class  extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-header {
    display: flex;
    padding: 15px 0;
    background-color: $main;
    border-bottom: 5px solid $cyan-light;

    .main-title {
      margin: 0;
      width: 100%;
      color: $white;
      font-weight: 500;
      text-align: center;
      font-family: 'Lexend Zetta', sans-serif;
    }
  }
</style>
