<template>
  <div class="co-edit-numbers">
    <span class="label-title u-2"><PhoneIcon class="label-icon"/> numbers</span>

    <div class="numbers-wrapper">
      <div class="numbers-wrapper__left">
        <TextInput
          class="text-input is-left"
          :placeholder="'Number'"
        />
      </div>
      <div class="numbers-wrapper__right">
        <TextInput
          class="text-input"
          :placeholder="'Cell'"
        />
        <button class="button-close">
          <CloseIcon class="close-icon"/>
        </button>
      </div>
    </div>

    <div class="numbers-wrapper">
      <div class="numbers-wrapper__left">
        <TextInput
          class="text-input is-left"
          :placeholder="'Number'"
        />
      </div>
      <div class="numbers-wrapper__right">
        <TextInput
          class="text-input"
          :placeholder="'Cell'"
        />
        <button class="button-close">
          <CloseIcon class="close-icon"/>
        </button>
      </div>
    </div>

    <div class="cta-wrapper">
      <div class="add-new-number-wrapper">
        <button id="add-number" class="plus-icon-button">
          <PlusIcon class="plus-icon"/>
        </button>
        <label for="add-number" class="add-number-text u-2">Add number</label>
      </div>

      <div class="submit-wrapper">
        <AppButton
          :type="'cancel'"
        >
          <span class="u-2">Cancel</span>
        </AppButton>
        <AppButton
          :type="'positive'"
        >
          <span class="u-2">Save</span>
        </AppButton>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import TextInput from '../elements/TextInput.vue';
  import PhoneIcon from '@/components/icons/PhoneIcon.vue';
  import CloseIcon from '@/components/icons/CloseIcon.vue';
  import AppButton from '@/components/elements/AppButton.vue';
  import PlusIcon from '@/components/icons/PlusIcon.vue';

  @Component({
    components: { PlusIcon, AppButton, CloseIcon, PhoneIcon, TextInput },
  })
  export default class EditNumbers extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-edit-numbers {
    .label-icon {
      padding-right: 15px;
    }

    .label-title {
      display: block;
      color: $main;
      font-weight: bold;
      padding-bottom: 20px;
    }

    .text-input {
      &.is-left {
        width: 100%;
      }
    }

    .numbers-wrapper {
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;

      &__left {
        width: 50%;
      }

      &__right {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .button-close {
      $button-size: 30px;
      background-color: $white;
      border: 1px solid $gray;
      border-radius: 50%;
      height: $button-size;
      width: $button-size;
      display: flex;
      margin-left: 10%;
      @include transition-all;

      &:hover {
        cursor: pointer;
        border: 1px solid $main;
      }
    }

    .close-icon {
      height: 27px;
    }

    .plus-icon-button {
      $button-size: 30px;
      height: $button-size;
      width: $button-size;
      border: 1px solid $main;
      border-radius: 50%;
      background-color: $white;
      display: flex;

      &:hover {
        cursor: pointer;
        border: 1px solid $gray;
      }
    }

    .add-number-text {
      color: $main;
      padding-left: 15px;
      margin: 0;
    }

    .plus-icon {
      margin: auto;
    }

    .add-new-number-wrapper {
      display: flex;
      align-items: center;
      padding-bottom: 100px;
    }

    .submit-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
