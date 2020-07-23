<template>
  <header class="co-app-header">
    <MainLogoIcon/>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import MainLogoIcon from '@/components/icons/MainLogoIcon.vue';

  @Component({
    components: { MainLogoIcon },
  })
  export default class AppHeader extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-app-header {
    display: flex;
    padding: 20px 0;
    background-color: $main;
    border-bottom: 7px solid $cyan-light;
    justify-content: center;

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
