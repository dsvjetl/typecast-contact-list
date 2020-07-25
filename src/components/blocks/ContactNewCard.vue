<template>
  <div class="co-contact-new-card">
    <div class="inner-wrapper">
      <div class="icon-holder">
        <PlusIcon class="plus-icon"/>
      </div>
      <h5 class="cta-text u-3">Add new</h5>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import PlusIcon from '@/components/icons/PlusIcon.vue';

  @Component({
    components: { PlusIcon },
  })
  export default class ContactNewCard extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-new-card {
    position: relative;
    border: 1px dashed $cyan;
    border-radius: 3px;
    text-align: center;
    display: flex;
    padding: 25px 0;
    height: calc(100% - 52px);
    @include transition-all;

    @include media('>=phone', '<tablet') {
      height: auto;
      padding: 20px 0;
    }

    &:hover {
      border: 1px dashed $gray;
      cursor: pointer;
    }

    .inner-wrapper {
      margin: auto;
      align-items: center;

      @include media('>=phone', '<tablet') {
        display: flex;
        margin: initial;
        padding-left: 20px;
      }
    }

    .cta-text {
      color: $cyan-light;
      margin: 15px 0 0;

      @include media('>=phone', '<tablet') {
        margin: 0;
        padding-left: 20px;
      }
    }

    .plus-icon {
      transform: scale(2);
    }

    .icon-holder {
      @include media('>=phone', '<tablet') {
        position: relative;
        top: -2px;
      }
    }
  }
</style>
