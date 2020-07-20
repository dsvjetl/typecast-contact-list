<template>
  <div class="co-heading-menu">
    <div class="buttons-wrapper">

      <div class="buttons-wrapper__left">
        <AppButton>
          <span class="u-2">All contacts</span>
        </AppButton>
      </div>

      <div class="buttons-wrapper__right">
        <AppButton>
          <span class="u-2">My favorites</span>
        </AppButton>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppButton from '@/components/elements/AppButton.vue';
  @Component({
    components: { AppButton },
  })
  export default class HeadingMenu extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-heading-menu {
    padding: 30px 0;
    display: flex;
    border-bottom: 1px solid $main;
    margin: 0 percentage(2 / 24);

    .buttons-wrapper {
      display: flex;
      margin: auto;

      &__left, &__right {
        padding: 0 10px;
      }

      &__left {
        border-right: 1px solid $gray;
      }
    }
  }
</style>
