<template>
  <form class="flex flex-col">
    <BaseInput
      v-model="form.name"
      label="Nome"
      type="text"
    />
    <BaseInput
      v-model="form.email"
      label="email"
      type="text"
    />
    <BaseInput
      v-model="form.birthday"
      label="Data de nascimento"
      type="date"
    />
    <BaseInput
      v-model="form.address"
      label="Endereço"
      type="text"
    />
    <BaseInput
      v-model="form.city"
      label="Cidade"
      type="text"
    />
    <BaseInput
      v-model="form.address"
      label="Endereço"
      type="text"
    />

    <!-- uf -->

    <BaseInput
      v-model="form.phone"
      label="Contato"
      type="number"
    />

    <!-- estado civil -->

    <!-- gostaria de receber mais informação -->

    <!-- seus interesses -->

    <BaseInput
      v-model="form.password"
      label="Senha"
      type="password"
    />

    <!-- enviar -->
  </form>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import BaseInput from './BaseInput.vue';

  export default defineComponent({
    name: 'RegistrationForm',
    components: { BaseInput },
    data() {
      return {
        form: {
          name: '',
          email: '',
          birthday: '',
          address: '',
          city: '',
          uf: '',
          phone: '',
          maritalStatus: '',
          wantReceiveInformation: '',
          yourInterests: '',
          password: '',
        },
      };
    },
  });
</script>
<style></style>
