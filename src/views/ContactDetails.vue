<template>
  <div class="co-contact-detail">

    <div class="section-left">
      <div
        class="image-holder"
        style="background-image: url('https://s3-eu-west-1.amazonaws.com/fhrmp/attachments/Avatar/0000016024.s-46572133892bf15db8f9708d8ef40868.x-600x600.jpg')"
      ></div>
    </div>

    <div class="section-right">

      <div class="name-info">
        <div class="name-info__left">
          <h5 class="contact-name u-1">
            <BackIcon class="icon"/>
            <span class="contact-name-text">Addie Hernandez</span>
          </h5>
        </div>
        <div class="name-info__right">
          <div class="icon-holder">
            <HeartEmptyIcon/>
          </div>
          <div class="icon-holder">
            <EditIcon/>
          </div>
        </div>
      </div>

      <div class="info-section info-section--responsive">
        <div
          class="image-holder"
          style="background-image: url('https://s3-eu-west-1.amazonaws.com/fhrmp/attachments/Avatar/0000016024.s-46572133892bf15db8f9708d8ef40868.x-600x600.jpg')"
        ></div>
        <h5 class="contact-name u-1">
          Addie Hernandez
        </h5>
      </div>

      <div class="info-section">
        <div class="info-section__left">
          <div class="email-section">
            <p class="key-name u-2">
              <MailIcon class="icon"/>
              email
            </p>
          </div>
        </div>
        <div class="info-section__right">
          <p class="key-value u-2">email@email.com</p>
        </div>
      </div>

      <div class="info-section">
        <div class="info-section__left">
          <div class="email-section">
            <p class="key-name u-2">
              <PhoneIcon class="icon"/>
              numbers
            </p>
          </div>
        </div>
        <div class="info-section__right">
          <div class="number-info">
            <p class="number-name u-2">HOME</p>
            <p class="number-value u-2">34567898765</p>
          </div>
          <div class="number-info">
            <p class="number-name u-2">WORK</p>
            <p class="number-value u-2">34567898765</p>
          </div>
          <div class="number-info">
            <p class="number-name u-2">CELL</p>
            <p class="number-value u-2">34567898765</p>
          </div>
          <div class="number-info">
            <p class="number-name u-2">HUSBAND</p>
            <p class="number-value u-2">34567898765</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import BackIcon from '@/components/icons/BackIcon.vue';
  import HeartEmptyIcon from '@/components/icons/HeartEmptyIcon.vue';
  import EditIcon from '@/components/icons/EditIcon.vue';
  import MailIcon from '@/components/icons/MailIcon.vue';
  import PhoneIcon from '@/components/icons/PhoneIcon.vue';

  @Component({
    components: { PhoneIcon, MailIcon, EditIcon, HeartEmptyIcon, BackIcon },
  })
  export default class ContactDetails extends Vue {

  }
</script>

<style lang="scss" scoped>
  .co-contact-detail {
    padding: 30px percentage(5 / 24);
    display: flex;

    @include media('>=phone', '<desktop') {
      display: block;
      padding: 0 percentage(0 / 24);
    }

    .section-left {
      width: percentage(5 / 14);

      @include media('>=phone', '<desktop') {
        display: none;
      }
    }

    .section-right {
      width: percentage(9 / 14);

      @include media('>=phone', '<desktop') {
        width: percentage(14 / 14);
      }
    }

    .image-holder {
      $image-size: 185px;
      border: 1px solid $gray;
      border-radius: 50%;
      width: $image-size;
      height: $image-size;
      margin: 0 auto;
      background: center center no-repeat;
      background-size: cover;
    }

    .icon {
      padding-right: 15px;
    }

    .name-info {
      border-bottom: 1px solid $main;
      padding: 15px 0;
      display: flex;

      @include media('>=phone', '<desktop') {
        padding: 15px 30px 15px;
      }

      &__left {
        display: flex;
        width: 85%;
        align-items: center;
      }

      &__right {
        display: flex;
        width: 15%;
        justify-content: space-between;
        align-items: center;

        @include media('>=phone', '<desktop') {
          width: 75px;
        }
      }
    }

    .icon-holder {
      $icon-size: 18px;
      width: $icon-size;
      height: $icon-size;
    }

    .contact-name {
      margin: 0;
      color: $gray;
      padding-left: 15px;

      @include media('>=phone', '<desktop') {
        padding-left: 0;
      }
    }

    .contact-name-text {
      @include media('>=phone', '<desktop') {
        display: none;
      }
    }

    .info-section {
      display: flex;
      padding: 50px 0 20px 40px;
      align-items: baseline;
      justify-content: space-between;
      width: percentage(8 / 11);

      @include media('>=phone', '<desktop') {
        display: block;
      }

      &__left {
        min-width: 125px;
      }

      &--responsive {
        display: none;
        padding: 0;
        margin: 0 percentage(1 / 24);
        width: auto;
        border-bottom: 1px solid $main;
        justify-content: normal;
        align-items: center;

        @include media('>=phone', '<desktop') {
          display: flex;
        }

        .image-holder {
          height: 55px;
          width: 55px;
          border: 3px solid $gray;
          margin: 20px 0 20px 0;
        }

        .contact-name {
          padding-left: 20px;
        }
      }
    }

    .email-section {
      display: flex;
    }

    .key-name {
      color: $main;
      margin: 0;
      padding: 0 15px;

      @include media('>=phone', '<desktop') {
        padding: 0 0 10px;
      }
    }

    .key-value {
      color: $gray;
      margin: 0;
    }

    .number-info {
      display: flex;
      justify-content: space-between;
    }

    .number-name {
      color: $gray;
      padding: 0 15px;

      @include media('>=phone', '<desktop') {
        padding: 0;
      }
    }

    .number-value {
      color: $gray;
    }
  }
</style>
