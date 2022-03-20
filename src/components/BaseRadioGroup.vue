<template>
  <label v-if="label">{{ label }}</label>
  <div
    v-for="(option, index) in options"
    :key="index"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import IOptionRadio from './../types/IOptionRadio';
  import BaseRadio from './BaseRadio.vue';

  export default defineComponent({
    name: 'BaseRadioGroup',
    components: { BaseRadio },
    props: {
      label: {
        type: String,
        required: true,
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: '',
      },
      options: {
        type: Array as () => Array<IOptionRadio>,
        required: true,
      },
    },
    emits: ['update:modelValue'],
  });
</script>
<style lang=""></style>
