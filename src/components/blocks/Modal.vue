<template>
  <div
    class="co-modal"
    v-if="showModal"
  >
    <div class="modal-window">

      <div class="modal-heading">
        <h3 class="title u-3 --bold-600">Delete</h3>
      </div>

      <div class="modal-body">

        <p class="message u-3">Are you sure you want to delete this contact?</p>

        <div class="actions-wrapper">

          <AppButton
            class="button"
            :type="'cancel'"
            @click.native="handleNegativeClick"
          >
            <span class="u-3">Cancel</span>
          </AppButton>

          <AppButton
            class="button"
            :type="'positive'"
            @click.native="handlePositiveClick"
          >
            <span class="u-3">Delete</span>
          </AppButton>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import AppButton from '../elements/AppButton.vue';

  @Component({
    components: { AppButton },
  })
  export default class Modal extends Vue {
    // TODO change to false
    public showModal: boolean = true;

    public handleNegativeClick(): void {
      this.changeModalDisplay(false);
    }

    public handlePositiveClick(): void {
      this.changeModalDisplay(false);
    }

    private changeModalDisplay(type: boolean) {
      this.showModal = type;
    }
  }
</script>

<style lang="scss" scoped>
  .co-modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgba($black, 0.4);

    .modal-window {
      margin: auto;
      background-color: $white;
      width: percentage(8 / 24);
      border-radius: 4px;
      box-shadow: 0 0 14px 0 rgba($black, 0.27);

      @include media('>=phone', '<tablet') {
        width: percentage(22 / 24);
      }
    }

    .modal-heading {
      padding: 20px 30px;
      border-bottom: 1px solid $gray;
    }

    .title {
      color: $gray;
      margin: 0;
    }

    .message {
      color: $gray;
      text-align: center;
      margin: 0 0 50px;
    }

    .modal-body {
      padding: 30px;
    }

    .button {
      @include media('>=phone', '<custom1265') {
        display: block;
        margin: auto;

        &:first-of-type{
          margin: 0 auto 20px;
        }
      }
    }

    .actions-wrapper {
      display: flex;
      justify-content: space-between;

      @include media('>=phone', '<custom1265') {
        display: block;
      }
    }
  }
</style>
