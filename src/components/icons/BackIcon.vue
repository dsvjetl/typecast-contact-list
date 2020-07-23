<template>
  <svg width="21px" height="16px" viewBox="0 0 21 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g class="g-fill" id="Details" transform="translate(-518.000000, -159.000000)" fill-rule="nonzero">
        <g id="Icon-/-arrow-back" transform="translate(518.000000, 159.000000)">
          <path d="M7.07106781,9.89949494 L5.65685425,11.3137085 L0,5.65685425 L5.65685425,-1.86517468e-14 L7.07106781,1.41421356 L3.505,4.979 L20.3182075,4.97913803 L20.3182075,15.6114678 L18.3182075,15.6114678 L18.3182075,6.97913803 L4.151,6.979 L7.07106781,9.89949494 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';

  @Component
  export default class BackIcon extends Vue {

  }
</script>

<style lang="scss" scoped>
  svg {
    &:hover {
      cursor: pointer;

      .g-fill {
        fill: $main;
      }
    }

    .g-fill {
      fill: $gray;
    }
  }
</style>
