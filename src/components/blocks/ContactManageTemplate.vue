<template>
  <div class="co-contact-manage-template">

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

          <span
            class="delete-wrapper"
            v-if="type === 'edit'"
          >
            <span class="delete-text u-3">Delete</span>
            <AppButton class="u-3">
              <TrashIcon/>
            </AppButton>
          </span>

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
  import { Component, Prop } from 'vue-property-decorator';
  import TextInput from '@/components/elements/TextInput.vue';
  import AppButton from '@/components/elements/AppButton.vue';
  import BackIcon from '@/components/icons/BackIcon.vue';
  import UploadIcon from '@/components/icons/UploadIcon.vue';
  import MailIcon from '@/components/icons/MailIcon.vue';
  import PersonIcon from '@/components/icons/PersonIcon.vue';
  import EditNumbers from '@/components/blocks/EditNumbers.vue';
  import TrashIcon from '@/components/icons/TrashIcon.vue';

  @Component({
    components: { TrashIcon, EditNumbers, PersonIcon, MailIcon, UploadIcon, BackIcon, AppButton, TextInput },
  })
  export default class ContactManageTemplate extends Vue {
    @Prop({ default: 'new' }) public type!: string;
  }
</script>

<style lang="scss" scoped>
  .co-contact-manage-template {
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

      &:first-child {
        display: flex;
        justify-content: space-between;
      }

      &:last-child {
        border-bottom: none;
      }
    }

    .delete-wrapper {
      display: flex;
      align-items: center;
    }

    .delete-text {
      display: block;
      color: $gray;
      padding-right: 10px;
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
