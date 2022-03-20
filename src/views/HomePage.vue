<template lang="">
  <div class="grid h-screen place-items-center">
    <div>
      <RegistrationForm />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import RegistrationForm from './../components/RegistrationForm.vue';

  export default defineComponent({
    name: 'HomePage',
    components: { RegistrationForm },
  });
</script>
<style lang=""></style>
