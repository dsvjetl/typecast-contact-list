<template>
  <ElInput
    class="co-text-input"
    v-model="inputText"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component
  export default class TextInput extends Vue {
    @Prop({default: ''}) public placeholder!: string;

    public inputText: string = '';
  }
</script>

<style lang="scss" scoped>
  .co-text-input {

  }
</style>
