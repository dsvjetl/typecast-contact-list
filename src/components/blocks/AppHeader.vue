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
    background-color: $main;
    display: flex;
    padding: 15px 0;
    border-bottom: 5px solid $cyan-light;

    .main-title {
      color: $white;
      margin: 0;
      width: 100%;
      text-align: center;
      font-family: 'Lexend Zetta', sans-serif;
      letter-spacing: 5px;
    }
  }
</style>
