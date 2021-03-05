<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('hideSnackbar')">
        Fechar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
};
</script>
