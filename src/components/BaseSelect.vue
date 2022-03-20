<template>
  <label
    v-if="label"
    :for="label"
    >{{ label }}</label
  >
  <select
    v-bind="$attrs"
    :id="label"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BaseInput',
    props: {
      label: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      },
      options: {
        type: Array,
        required: true,
      },
    },
    emits: ['update:modelValue'],
  });
</script>
