<template lang="">
  <label
    v-if="label"
    :for="label"
    >{{ label }}</label
  >
  <input
    v-bind="$attrs"
    :id="label"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
  />
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
    },
    emits: ['update:modelValue'],
  });
</script>
