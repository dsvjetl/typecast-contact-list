<template>
  <div class="co-contact-new">

    <div class="inner-wrapper">

      <div class="inner-wrapper__left">
        <div class="image-wrapper">
          <UploadIcon class="upload-icon"/>
        </div>
      </div>

      <div class="inner-wrapper__right">
        <label class="edit-label">
          <AppButton>
            <BackIcon/>
          </AppButton>
        </label>
        <label class="edit-label">
          <span class="label-title u-2"><PersonIcon class="label-icon"/> full name</span>
          <TextInput
            class="label-input"
            :placeholder="'Full Name'"
          />
        </label>
        <label class="edit-label">
          <span class="label-title u-2"><MailIcon class="label-icon"/> email</span>
          <TextInput
            class="label-input"
            :placeholder="'Email'"
          />
        </label>
        <EditNumbers class="edit-label"/>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import UploadIcon from '@/components/icons/UploadIcon.vue';
  import AppButton from '@/components/elements/AppButton.vue';
  import BackIcon from '@/components/icons/BackIcon.vue';
  import PersonIcon from '@/components/icons/PersonIcon.vue';
  import TextInput from '@/components/elements/TextInput.vue';
  import MailIcon from '@/components/icons/MailIcon.vue';
  import PhoneIcon from '@/components/icons/PhoneIcon.vue';
  import EditNumbers from '@/components/blocks/EditNumbers.vue';
  @Component({
    components: { EditNumbers, PhoneIcon, MailIcon, TextInput, PersonIcon, BackIcon, AppButton, UploadIcon },
  })
  export default class ContactNew extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-new {
    padding: 60px percentage(3 / 24);

    .inner-wrapper {
      display: flex;

      &__left {
        width: percentage(7 / 18);
      }

      &__right {
        width: percentage(11 / 14);
      }
    }

    .image-wrapper {
      $image-size: 185px;
      display: flex;
      width: $image-size;
      height: $image-size;
      border: 3px solid $gray;
      border-radius: 50%;
      margin: 0 auto;
      background: $main center center no-repeat;
      background-size: cover;
    }

    .upload-icon {
      margin: auto;
    }

    .edit-label {
      display: block;
      padding: 15px 0 30px;
      border-bottom: 1px solid $main;

      &:last-child {
        border-bottom: none;
      }
    }

    .label-icon {
      padding-right: 15px;
    }

    .label-title {
      display: block;
      color: $main;
      font-weight: bold;
      padding-bottom: 20px;
    }

    .label-input {
      width: 50%;
    }
  }
</style>
