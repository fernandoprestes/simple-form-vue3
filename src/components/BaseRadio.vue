<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
  />
  <label :for="label">{{ label }}</label>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseRadio',
    props: {
      label: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: '',
      },
      value: {
        type: [String, Number, Boolean],
        default: '',
      },
    },
    emits: ['update:modelValue'],
  });
</script>
<style lang=""></style>
