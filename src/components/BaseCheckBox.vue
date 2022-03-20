<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="onCheckBox"
  />
  <label v-if="label">{{ label }}</label>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'BaseCheckBox',
    props: {
      label: {
        type: String,
        default: '',
      },
      modelValue: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:modelValue'],
    methods: {
      onCheckBox($event: Event) {
        this.$emit('update:modelValue', ($event.target as HTMLInputElement).checked);
      },
    },
  });
</script>
