<template>
  <div class="co-contact-card">

    <div class="heart-empty-wrapper">
      <HeartEmptyIcon/>
    </div>

    <div class="edit-wrapper">
      <EditIcon/>
    </div>

    <div class="trash-wrapper">
      <TrashIcon/>
    </div>

    <div class="contact-info-wrapper">
      <div
        class="image-wrapper"
        style="background-image: url('https://s3-eu-west-1.amazonaws.com/fhrmp/attachments/Avatar/0000016024.s-46572133892bf15db8f9708d8ef40868.x-600x600.jpg')"
      ></div>
      <h5 class="contact-name u-2">Addie Hernandez</h5>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import HeartEmptyIcon from '@/components/icons/HeartEmptyIcon.vue';
  import EditIcon from '@/components/icons/EditIcon.vue';
  import TrashIcon from '@/components/icons/TrashIcon.vue';

  @Component({
    components: { TrashIcon, HeartEmptyIcon, EditIcon },
  })
  export default class ContactCard extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-card {
    position: relative;
    border: 1px solid $gray;
    border-radius: 3px;
    text-align: center;
    display: flex;
    padding: 25px 0;
    @include transition-all;

    @include media('>=phone', '<tablet') {
      padding: 7px 15px;
    }

    &:hover {
      border: 1px solid $main;
      cursor: pointer;
      transform: scale(1.02);

      @include media('>=phone', '<desktop') {
        transform: scale(1);
      }

      .edit-wrapper,
      .trash-wrapper {
        opacity: 1;
      }
    }

    .contact-info-wrapper {
      margin: auto;

      @include media('>=phone', '<tablet') {
        display: flex;
        margin: unset;
        align-items: center;
      }
    }

    .image-wrapper {
      $image-size: 60px;
      height: $image-size;
      width: $image-size;
      border-radius: 50%;
      border: 2px solid $gray;
      background: center center no-repeat;
      background-size: cover;
      margin: auto;

      @include media('>=phone', '<tablet') {
        $image-size: 46px;
        height: $image-size;
        width: $image-size;
      }
    }

    .contact-name {
      margin: 10px 0 0;
      color: $gray;
      max-width: 145px;
      text-align: left;

      @include media('>=phone', '<tablet') {
        padding-left: 15px;
        margin: 0;
      }
    }

    .heart-empty-wrapper,
    .edit-wrapper,
    .trash-wrapper {
      &:hover {
        .g-fill {
          fill: $main !important;
          cursor: pointer;
        }
      }
    }

    .heart-empty-wrapper {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 15px;
      height: 15px;

      @include media('>=phone', '<tablet') {
        top: calc(50% - 8px);
        left: auto;
        right: 90px;
      }
    }

    .edit-wrapper {
      position: absolute;
      top: 15px;
      right: 50px;
      width: 15px;
      height: 15px;
      opacity: 0;
      @include transition-all;

      @include media('>=phone', '<tablet') {
        opacity: 1;
        top: calc(50% - 8px);
        right: 53px;
      }
    }

    .trash-wrapper {
      position: absolute;
      top: 13px;
      right: 15px;
      width: 15px;
      height: 15px;
      opacity: 0;
      @include transition-all;

      @include media('>=phone', '<tablet') {
        opacity: 1;
        top: calc(50% - 9px);
      }
    }
  }
</style>
