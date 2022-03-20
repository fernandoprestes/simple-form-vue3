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
    <BaseSelect
      v-model="form.uf"
      :options="ufOptions"
      label="Estado"
    />
    {{ form.uf }}
    <BaseInput
      v-model="form.phone"
      label="Contato"
      type="number"
    />
    <BaseSelect
      v-model="form.maritalStatus"
      :options="maritalStatusOptions"
      label="Estado civil"
    />

    <BaseRadioGroup
      v-model="form.wantReceiveInformation"
      label="Gostaria de receber mais informações"
      :options="receiveInformationOptions"
    />

    <fieldset>
      <legend>Quais o seus interesse</legend>
      <BaseCheckBox
        v-model="form.yourInterests.technology"
        label="tecnologia"
      />
      <BaseCheckBox
        v-model="form.yourInterests.music"
        label="musica"
      />
      <BaseCheckBox
        v-model="form.yourInterests.books"
        label="livro"
      />
      <BaseCheckBox
        v-model="form.yourInterests.movie"
        label="filmes"
      />
      <BaseCheckBox
        v-model="form.yourInterests.travel"
        label="viagens"
      />
    </fieldset>

    <BaseInput
      v-model="form.password"
      label="Senha"
      type="password"
    />
  </form>
  {{ form }}
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { FormData } from '../types/IForm';
  import BaseCheckBox from './BaseCheckBox.vue';
  import BaseInput from './BaseInput.vue';
  import BaseRadioGroup from './BaseRadioGroup.vue';
  import BaseSelect from './BaseSelect.vue';

  export default defineComponent({
    name: 'RegistrationForm',
    components: { BaseInput, BaseSelect, BaseRadioGroup, BaseCheckBox },
    data() {
      return {
        ufOptions: ['SP', 'RJ', 'MG', 'ES'],
        maritalStatusOptions: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)'],
        receiveInformationOptions: [
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ],
        form: { ...FormData },
      };
    },
  });
</script>
<style></style>
