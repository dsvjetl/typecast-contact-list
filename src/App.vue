<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppHeader from '@/components/blocks/AppHeader';

  @Component({
    components: { AppHeader },
  })
  export default class App extends Vue {
  }
</script>
