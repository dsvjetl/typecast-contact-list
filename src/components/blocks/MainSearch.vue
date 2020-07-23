<template>
  <div class="co-main-search">
    <ElInput
      class="search-input"
      v-model="contactName">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </ElInput>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class MainSearch extends Vue {
    public contactName: string = '';
  }
</script>

<style lang="scss" scoped>
  .co-main-search {
    padding: 60px 0;
    width: 100%;
    text-align: center;

    .search-input {
      width: percentage(7 / 24);
      color: $main;
    }
  }
</style>
