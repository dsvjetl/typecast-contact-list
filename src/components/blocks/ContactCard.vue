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
      <h5 class="contact-name u-3">Dava Svjetli</h5>
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
    padding: 20px 0;
    @include transition-all;

    &:hover {
      border: 1px solid $main;
      cursor: pointer;
      transform: scale(1.02);

      .edit-wrapper,
      .trash-wrapper {
        opacity: 1;
      }
    }

    .contact-info-wrapper {
      margin: auto;
    }

    .image-wrapper {
      border-radius: 50%;
      border: 2px solid $gray;
      background: center center no-repeat;
      background-size: cover;
      height: 50px;
      width: 50px;
      margin: auto;
    }

    .contact-name {
      margin: 15px 0 0;
      color: $gray;
    }

    .heart-empty-wrapper,
    .edit-wrapper,
    .trash-wrapper {
      &:hover {
        svg {
          color: $main;
        }
      }
    }

    .heart-empty-wrapper {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 15px;
      height: 15px;
    }

    .edit-wrapper {
      position: absolute;
      top: 10px;
      right: 35px;
      width: 15px;
      height: 15px;
      opacity: 0;
      @include transition-all;
    }

    .trash-wrapper {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 15px;
      height: 15px;
      opacity: 0;
      @include transition-all;
    }
  }
</style>
