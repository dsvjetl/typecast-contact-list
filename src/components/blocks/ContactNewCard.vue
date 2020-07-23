<template>
  <div class="co-contact-new-card">
    <div class="inner-wrapper">
      <div class="icon-holder">
        <PlusIcon/>
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

    &:hover {
      border: 1px dashed $gray;
      cursor: pointer;
    }

    .inner-wrapper {
      margin: auto;
    }

    .cta-text {
      color: $cyan-light;
      margin: 10px 0 0;
    }
  }
</style>
