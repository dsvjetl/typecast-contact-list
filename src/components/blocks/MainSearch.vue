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

    @include media('>=phone', '<tablet') {
      padding: 25px 0;
    }

    .search-input {
      width: percentage(7 / 24);
      color: $main;

      @include media('>=tablet', '<desktop') {
        width: percentage(10 / 24);
      }

      @include media('>=phone', '<tablet') {
        width: percentage(22 / 24);
      }
    }
  }
</style>
